const api = JSON.parse(
  Deno.readTextFileSync(new URL("./vk.json", import.meta.url)),
);

let src = `/// This file is auto-generated. Do not edit.\n`;
let ident = 0;

function newline() {
  emit("");
}

function emit(line: string, newline = "\n") {
  src += ("  ".repeat(ident)) + line + newline;
}

function block(fn: CallableFunction) {
  ident += 1;
  fn();
  ident -= 1;
}

function valueToJS(value: string) {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return value.replaceAll(/F$/g, "").replaceAll(/U\)$/g, ")").replaceAll(
      /ULL\)$/g,
      "n)",
    );
  } else if (typeof value === "undefined") {
    return undefined;
  } else {
    throw new Error("Unknown value type " + Deno.inspect(value));
  }
}

const C_TYPES = {
  "uint8_t": "number",
  "uint16_t": "number",
  "uint32_t": "number",
  "uint64_t": "number | bigint",
  "int8_t": "number",
  "int16_t": "number",
  "int32_t": "number",
  "int64_t": "number | bigint",
  "float": "number",
  "double": "number",
  "char": "string",
  "size_t": "number",
  "ssize_t": "number",
};

function typeToJS(ty: string): string {
  if (ty in C_TYPES) {
    return (C_TYPES as any)[ty];
    // } else if (typedefs.some(e => e.name === ty) || enums.some(e => e.name === ty) || structs.some(e => e.name === ty)) {
    //   return ty;
    // }
  } else {
    return ty;
  }
}

const C_TYPES_FFI = {
  "uint8_t": "u8",
  "uint16_t": "u16",
  "uint32_t": "u32",
  "uint64_t": "u64",
  "int8_t": "i8",
  "int16_t": "i16",
  "int32_t": "i32",
  "int64_t": "i64",
  "float": "f32",
  "double": "f64",
  "char": "u8",
  "size_t": "usize",
  "ssize_t": "isize",
  "void": "void",
};

function typeToFFI(ty: string): any {
  if (ty in C_TYPES_FFI) {
    return (C_TYPES_FFI as any)[ty];
  } else {
    const enumty = enums.find((e) => e.name === ty);
    if (enumty) {
      return enumty.bitwidth === 32 ? "u32" : "u64";
    }
    const structty = api.registry.types.type.find((e: any) => e.$name === ty && e.$category === "struct" && e.member);
    if (structty) {
      return { struct: structty.member.map((f: any) => f["#text"]?.endsWith("*") ? "buffer" : typeToFFI(f.type["#text"])) };
    }
    const tydef = typedefs.find((e) => e.name === ty);
    if (tydef) {
      return tydef.ffi;
    }
    if (ty.startsWith("PFN_")) {
      return "function";
    }
    throw new Error("Unknown type " + ty);
  }
}

interface Typedef {
  name: string;
  type: string;
  ffi: any;
}

interface Constant {
  name: string;
  value: any;
  comment?: string;
}

interface Constants {
  name: string;
  comment?: string;
  constants: Constant[];
}

interface Enums {
  name: string;
  bitwidth: number;
  comment?: string;
  enums: Constant[];
}

interface Field {
  name: string;
  type: string;
  offset: number;
  optional: boolean;
  text?: string;
  ffi: any;
  len?: string;
  comment?: string;
}

interface Struct {
  name: string;
  fields: Field[];
  comment?: string;
  size: number;
}

interface Union {
  name: string;
  fields: Field[];
  comment?: string;
}

const typedefs: Typedef[] = [];
const constants: Constants[] = [];
const enums: Enums[] = [];
const structs: Struct[] = [];

for (const data of api.registry.enums) {
  if (data.$type === "bitmask" || data.$type === "enum") {
    if (!data.enum) data.enum = [];
    if (!Array.isArray(data.enum)) data.enum = [data.enum];
    enums.push({
      name: data.$name,
      bitwidth: data.$bitwidth ?? 32,
      comment: data.$comment,
      enums: data.enum.map((e: any) => ({
        name: e.$name,
        value: e.$value !== undefined
          ? valueToJS(e.$value)
          : e.$bitpos !== undefined
          ? `1 << ${e.$bitpos}`
          : e.$alias !== undefined
          ? e.$alias
          : undefined,
        comment: e.$comment,
      })),
    });
  } else if ("enum" in data) {
    if (!data.enum) data.enum = [];
    if (!Array.isArray(data.enum)) data.enum = [data.enum];
    constants.push({
      name: data.$name,
      comment: data.$comment,
      constants: data.enum.map((member: any) => ({
        name: member.$name,
        value: valueToJS(member.$value),
        comment: member.$comment,
      })),
    });
  } else {
    console.log("unknown", data);
  }
}

function isStruct(type: any) {
  return typeof type === "object" && type !== null && ("struct" in type);
}

function getTypeSize(type: any, cache = new WeakMap<any, number | null>()) {
  if (isStruct(type)) {
    const cached = cache.get(type);
    if (cached !== undefined) {
      if (cached === null) {
        throw new TypeError("Recursive struct definition");
      }
      return cached;
    }
    cache.set(type, null);
    let size = 0;
    let alignment = 1;
    for (const field of type.struct) {
      const fieldSize = getTypeSize(field, cache);
      alignment = Math.max(alignment, fieldSize);
      size = Math.ceil(size / fieldSize) * fieldSize;
      size += fieldSize;
    }
    size = Math.ceil(size / alignment) * alignment;
    cache.set(type, size);
    return size;
  }

  switch (type) {
    case "bool":
    case "u8":
    case "i8":
      return 1;
    case "u16":
    case "i16":
      return 2;
    case "u32":
    case "i32":
    case "f32":
      return 4;
    case "u64":
    case "i64":
    case "f64":
    case "pointer":
    case "buffer":
    case "function":
    case "usize":
    case "isize":
      return 8;
    default:
      throw new TypeError(`Unsupported type: ${type}`);
  }
}

for (const ty of api.registry.types.type) {
  if (
    (ty.$category === "basetype" || ty.$category === "bitmask") &&
    ty["#text"] === "typedef;"
  ) {
    typedefs.push({
      name: ty.name["#text"],
      type: typeToJS(ty.type["#text"]),
      ffi: typeToFFI(ty.type["#text"]),
    });
  } else if (ty.$category === "handle") {
    typedefs.push({
      name: ty.$name ?? ty.name["#text"],
      type: ty.$alias ?? "Deno.PointerValue",
      ffi: "pointer",
    });
  } else if (ty.$category === "struct" && ty.member) {
    const struct = {
      name: ty.$name,
      fields: [],
      comment: ty.$comment,
      size: 0,
    };
    structs.push(struct);
    if (!Array.isArray(ty.member)) ty.member = [ty.member];
    let size = 0;
    let alignment = 1;
    struct.fields = ty.member.map((member: any) => {
      let field: Field = {
        name: member.name["#text"],
        type: member.type["#text"],
        offset: size,
        optional: member.$optional,
        text: member["#text"],
        len: member.$len,
        comment: member.$comment,
        ffi: "void",
      };

      if (field.text?.endsWith("*")) {
        field.ffi = "pointer";
      } else {
        field.ffi = typeToFFI(field.type);
      }

      const fieldSize = getTypeSize(field.ffi);
      alignment = Math.max(alignment, fieldSize);
      size = Math.ceil(size / fieldSize) * fieldSize;
      size += fieldSize;
      return field;
    });
    size = Math.ceil(size / alignment) * alignment;
    struct.size = size;
  } else if (ty.$name && ty.$alias) {
    typedefs.push({
      name: ty.$name,
      type: ty.$alias,
      ffi: typeToFFI(ty.$alias),
    });
  }
}

newline();

emit("/// Type definitions");
for (const ty of typedefs) {
  newline();
  emit(`export type ${ty.name} = ${ty.type};`);
}

for (const e of constants) {
  newline();
  emit(`/// ${e.name}`);
  if (e.comment) emit(`/// ${e.comment}`);
  newline();
  for (const c of e.constants) {
    if (c.comment) emit(`/** ${c.comment} */`);
    emit(`export const ${c.name} = ${c.value};`);
  }
}

for (const e of enums) {
  newline();
  if (e.comment) emit(`/** ${e.comment} */`);
  emit(`export enum ${e.name} {`);
  block(() => {
    for (const c of e.enums) {
      if (c.comment) emit(`/** ${c.comment} */`);
      emit(`${c.name} = ${c.value},`);
    }
  });
  emit(`}`);
}

for (const s of structs) {
  newline();
  if (s.comment) emit(`/** ${s.comment} */`);
  emit(`export class ${s.name} {`);
  block(() => {
    emit("");
  });
  emit(`}`);
}

Deno.writeTextFileSync(new URL("./vk.ts", import.meta.url), src);
