const api = JSON.parse(
  Deno.readTextFileSync(new URL("../data/vk.json", import.meta.url)),
);

let src = `/// This file is auto-generated. Do not edit.\n`;
let ident = 0;

export function output() {
  return src;
}

export function getIdent() {
  return ident;
}

export function newline() {
  emit("");
}

export function emit(line: string, newline = "\n") {
  src += ("  ".repeat(ident)) + line + newline;
}

export function block(fn: CallableFunction) {
  ident += 1;
  fn();
  ident -= 1;
}

export function jsify(name: string) {
  if (name === "function") {
    return "vk_function";
  } else {
    return name;
  }
}

export function valueToJS(value: string) {
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
  "uint64_t": "Deno.PointerValue",
  "int8_t": "number",
  "int16_t": "number",
  "int32_t": "number",
  "int64_t": "Deno.PointerValue",
  "float": "number",
  "double": "number",
  "char": "number",
  "size_t": "Deno.PointerValue",
  "ssize_t": "Deno.PointerValue",
  "HINSTANCE": "Deno.PointerValue",
  "HWND": "Deno.PointerValue",
  "Window": "Deno.PointerValue",
  "xcb_window_t": "Deno.PointerValue",
  "zx_handle_t": "Deno.PointerValue",
  "GgpStreamDescriptor": "Deno.PointerValue",
  "HANDLE": "Deno.PointerValue",
  "DWORD": "number",
  "LPCWSTR": "Deno.PointerValue",
  "int": "number",
  "GgpFrameToken": "Deno.PointerValue",
  "HMONITOR": "Deno.PointerValue",
  "VisualID": "number",
  "xcb_visualid_t": "number",
  "RROutput": "number",
};

export function typeToJS(ty: string): string {
  if (ty in C_TYPES) {
    return (C_TYPES as any)[ty];
  } else {
    if (ty.startsWith("PFN_")) {
      return "Deno.PointerValue";
    }
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
  "HINSTANCE": "pointer",
  "HWND": "pointer",
  "Window": "pointer",
  "xcb_window_t": "pointer",
  "zx_handle_t": "pointer",
  "GgpStreamDescriptor": "pointer",
  "HANDLE": "pointer",
  "DWORD": "u32",
  "LPCWSTR": "pointer",
  "int": "i32",
  "GgpFrameToken": "u64",
  "HMONITOR": "pointer",
  "VisualID": "u32",
  "xcb_visualid_t": "u32",
  "RROutput": "u32",
};

export function typeToFFI(ty: string): any {
  if (ty in C_TYPES_FFI) {
    return (C_TYPES_FFI as any)[ty];
  } else {
    const enumty = enums.find((e) => e.name === ty);
    if (enumty) {
      return enumty.bitwidth === 32 ? "u32" : "u64";
    }
    const structty = api.registry.types.type.find((e: any) =>
      e.$name === ty && e.$category === "struct" && e.member
    );
    if (structty) {
      return {
        struct: structty.member.map((f: any) =>
          f["#text"]?.endsWith("*") ? "buffer" : typeToFFI(f.type["#text"])
        ),
      };
    }
    const unionty = api.registry.types.type.find((e: any) =>
      e.$name === ty && e.$category === "union" && e.member
    );
    if (unionty) {
      return {
        union: unionty.member.map((f: any) =>
          f["#text"]?.endsWith("*") ? "buffer" : typeToFFI(f.type["#text"])
        ),
      };
    }
    const tydef = typedefs.find((e) => e.name === ty);
    if (tydef) {
      return tydef.ffi;
    }
    if (ty.startsWith("PFN_")) {
      return "function";
    }
    if (ty.startsWith("MTL") || ty.startsWith("CAMetal")) {
      return "pointer";
    }
    throw new Error("Unknown type " + ty);
  }
}

export interface Typedef {
  name: string;
  type: string;
  ffi: any;
}

export interface Constant {
  name: string;
  value: any;
  comment?: string;
}

export interface Constants {
  name: string;
  comment?: string;
  constants: Constant[];
}

export interface Enums {
  name: string;
  bitwidth: number;
  comment?: string;
  enums: Constant[];
}

export interface Field {
  name: string;
  type: string;
  offset: number;
  optional: boolean;
  text?: string;
  ffi: any;
  len?: number | number[];
  enum?: string | string[];
  comment?: string;
  values?: string[];
}

export interface Struct {
  name: string;
  fields: Field[];
  comment?: string;
  size: number;
}

export interface UnionType {
  name: string;
  type: string;
  ffi: any;
  text?: string;
  comment?: string;
}

export interface Union {
  name: string;
  types: UnionType[];
  comment?: string;
  size: number;
}

export interface CommandParams {
  name: string;
  type: string;
  text?: string;
  comment?: string;
  len?: string;
  optional: boolean;
  ffi: any;
}

export interface Command {
  name: string;
  type: string;
  params: CommandParams[];
  successCodes: string[];
  errorCodes: string[];
  comment?: string;
  ffi: any;
}

export const typedefs: Typedef[] = [];
export const constants: Constants[] = [];
export const enums: Enums[] = [];
export const structs: Struct[] = [];
export const unions: Union[] = [];
export const commands: Command[] = [];

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

export function isStruct(type: any) {
  return typeof type === "object" && type !== null && ("struct" in type);
}

export function isUnion(type: any) {
  return typeof type === "object" && type !== null && ("union" in type);
}

export function isArray(type: any) {
  return typeof type === "object" && type !== null && ("array" in type);
}

export function getAlignSize(
  type: any,
  cache?: WeakMap<any, number | null>,
): number {
  if (isStruct(type)) {
    return getAlignSize(type.struct[0], cache);
  } else if (isUnion(type)) {
    return getAlignSize(type.union[0], cache);
  } else if (isArray(type)) {
    return getAlignSize(type.array, cache);
  } else {
    return getTypeSize(type, cache);
  }
}

export function getTypeSize(
  type: any,
  cache = new WeakMap<any, number | null>(),
) {
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
      const alignSize = getAlignSize(field, cache);
      alignment = Math.max(alignment, alignSize);
      size = Math.ceil(size / alignSize) * alignSize;
      size += fieldSize;
    }
    size = Math.ceil(size / alignment) * alignment;
    cache.set(type, size);
    return size;
  }

  if (isArray(type)) {
    const cached = cache.get(type);
    if (cached !== undefined) {
      if (cached === null) {
        throw new TypeError("Recursive array definition");
      }
      return cached;
    }
    cache.set(type, null);
    let size = 0;
    let alignment = 1;
    for (let i = 0; i < type.len; i++) {
      const fieldSize = getTypeSize(type.array, cache);
      alignment = Math.max(alignment, fieldSize);
      size = Math.ceil(size / fieldSize) * fieldSize;
      size += fieldSize;
    }
    size = Math.ceil(size / alignment) * alignment;
    cache.set(type, size);
    return size;
  }

  if (isUnion(type)) {
    const cached = cache.get(type);
    if (cached !== undefined) {
      if (cached === null) {
        throw new TypeError("Recursive union definition");
      }
      return cached;
    }
    cache.set(type, null);
    let size = 0;
    for (const field of type.union) {
      size = Math.max(size, getTypeSize(field, cache));
    }
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
      throw new TypeError(`Unsupported type: ${Deno.inspect(type)}`);
  }
}

export function extendEnum(ext: {
  $extends: string;
  $alias?: string;
  $bitpos?: number;
  $value?: number;
  $extnumber?: number;
  $offset?: number;
  $name: string;
  $comment?: string;
}) {
  const base = enums.find((e) => e.name === ext.$extends);
  if (!base) {
    throw new Error(`Enum ${ext.$extends} not found`);
  }
  if (base.enums.some((e) => e.name === ext.$name)) return;
  base.enums.push({
    name: ext.$name,
    value: ext.$alias ??
      (ext.$bitpos !== undefined ? `1 << ${ext.$bitpos}` : ext.$value ??
        `1${String(ext.$extnumber! - 1).padStart(6, "0")}${
          ext.$offset!.toString().padStart(3, "0")
        }`),
    comment: ext.$comment,
  });
}

export function extendConstants(name: string, ext: any) {
  let base = constants.find((e) => e.name === name);
  if (!base) {
    base = {
      name,
      constants: [],
    };
    constants.push(base);
  }
  base.constants.push({
    name: ext.$name,
    value: valueToJS(ext.$value),
  });
}

for (const ft of api.registry.feature) {
  for (const x of ft.require) {
    if ("enum" in x) {
      if (!Array.isArray(x.enum)) x.enum = [x.enum];
      for (const e of x.enum) {
        if (e.$extends) {
          extendEnum(e);
        }
      }
    }
  }
}

for (const ext of api.registry.extensions.extension) {
  if (!Array.isArray(ext.require)) ext.require = [ext.require];
  for (const x of ext.require) {
    if ("enum" in x) {
      if (!Array.isArray(x.enum)) x.enum = [x.enum];
      for (const e of x.enum) {
        if (e.$extends) {
          extendEnum(Object.assign({
            $extnumber: ext.$number,
          }, e));
        } else if (e.$name && e.$value) {
          extendConstants(ext.$name, e);
        }
      }
    }
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
  } else if (ty.$category === "basetype") {
    const name = ty.name["#text"];
    const tx = ty["#text"];
    if (tx.startsWith("#ifdef __OBJC__")) {
      if (tx.includes("\ntypedef ") && tx.endsWith("*;\n#endif")) {
        typedefs.push({
          name,
          type: "Deno.PointerValue",
          ffi: "pointer",
        });
      }
    }
    if (tx.startsWith("typedef struct ") && tx.endsWith("*;")) {
      typedefs.push({
        name,
        type: "Deno.PointerValue",
        ffi: "pointer",
      });
    }
  } else if (ty.$category === "handle") {
    typedefs.push({
      name: ty.$name ?? ty.name["#text"],
      type: ty.$alias ?? "Deno.PointerValue",
      ffi: "pointer",
    });
  } else if (ty.$category === "struct" && ty.member) {
    const struct: Struct = {
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
        len: undefined,
        comment: member.$comment,
        ffi: "void",
        values: member.$values?.split(","),
        enum: member.enum
          ? (Array.isArray(member.enum)
            ? member.enum.map((e: any) => e["#text"])
            : member.enum?.["#text"])
          : undefined,
      };

      if (field.text?.endsWith("*")) {
        field.ffi = "pointer";
      } else {
        field.ffi = typeToFFI(field.type);
      }

      if (field.text?.startsWith("[")) {
        if (field.enum) {
          if (Array.isArray(field.enum)) {
            field.len = field.enum.map((en) => {
              return constants.map((c) =>
                c.constants.find((c) => c.name === en)
              ).find((e) => e !== undefined)?.value!;
            });
          } else {field.len = constants.map((c) =>
              c.constants.find((c) => c.name === field.enum)
            ).find((e) => e !== undefined)?.value;}
        } else {
          const match = field.text.match(/^\[(\d+)\]*/);
          if (match) {
            field.len = match.slice(1).map((e) => parseInt(e));
          }
        }
        if (!field.len) {
          throw new Error(`Invalid length: ${Deno.inspect(field)}`);
        }
        field.ffi = {
          array: field.ffi,
          len: Array.isArray(field.len)
            ? field.len.reduce((p, a) => p * a, 1)
            : field.len,
        };
      }

      const fieldSize = getTypeSize(field.ffi);
      const alignSize = getAlignSize(field.ffi);
      alignment = Math.max(alignment, alignSize);
      size = Math.ceil(size / alignSize) * alignSize;

      field.offset = size;

      size += fieldSize;
      return field;
    });
    size = Math.ceil(size / alignment) * alignment;
    struct.size = size;
  } else if (ty.$category === "union" && ty.member) {
    const union: Union = {
      name: ty.$name,
      types: [],
      comment: ty.$comment,
      size: 0,
    };
    unions.push(union);
    if (!Array.isArray(ty.member)) ty.member = [ty.member];
    union.types = ty.member.map((member: any) => ({
      name: member.name["#text"],
      type: member.type["#text"],
      ffi: typeToFFI(member.type["#text"]),
      comment: member.$comment,
      text: member["#text"],
    }));
    union.size = getTypeSize({
      union: union.types.map((e) => e.text?.endsWith("*") ? "pointer" : e.ffi),
    });
  } else if (ty.$name && ty.$alias) {
    typedefs.push({
      name: ty.$name,
      type: ty.$alias,
      ffi: typeToFFI(ty.$alias),
    });
  }
}

for (const cmd of api.registry.commands.command) {
  if (cmd.$alias) continue; // TODO
  const name = cmd.proto.name["#text"];
  const type = cmd.proto.type["#text"];
  const params: CommandParams[] = [];
  if (cmd.param) {
    if (!Array.isArray(cmd.param)) cmd.param = [cmd.param];
    for (const param of cmd.param) {
      const name = param.name["#text"];
      const type = param.type["#text"];
      const optional = param.$optional;
      const len = param.$len;
      const comment = param.$comment;
      const text = param["#text"];
      params.push({
        name,
        type,
        optional,
        len,
        comment,
        text,
        ffi: text?.endsWith("*") ? "buffer" : typeToFFI(type),
      });
    }
  }
  commands.push({
    name,
    type,
    params,
    comment: cmd.$comment,
    successCodes: cmd.$successcodes?.split(",") ?? [],
    errorCodes: cmd.$errorcodes?.split(",") ?? [],
    ffi: {
      parameters: params.map((e) => e.ffi),
      result: cmd["#text"]?.endsWith("*") ? "pointer" : typeToFFI(type),
    },
  });
}
