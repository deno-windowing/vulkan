import { transform } from "https://deno.land/x/swc@0.2.1/mod.ts";

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

function jsify(name: string) {
  if (name === "function") {
    return "vk_function";
  } else {
    return name;
  }
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

function typeToJS(ty: string): string {
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

function typeToFFI(ty: string): any {
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
  values?: string[];
}

interface Struct {
  name: string;
  fields: Field[];
  comment?: string;
  size: number;
}

interface UnionType {
  name: string;
  type: string;
  ffi: any;
  text?: string;
  comment?: string;
}

interface Union {
  name: string;
  types: UnionType[];
  comment?: string;
  size: number;
}

interface CommandParams {
  name: string;
  type: string;
  text?: string;
  comment?: string;
  len?: string;
  optional: boolean;
  ffi: any;
}

interface Command {
  name: string;
  type: string;
  params: CommandParams[];
  successCodes: string[];
  errorCodes: string[];
  comment?: string;
  ffi: any;
}

const typedefs: Typedef[] = [];
const constants: Constants[] = [];
const enums: Enums[] = [];
const structs: Struct[] = [];
const unions: Union[] = [];
const commands: Command[] = [];

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

function isUnion(type: any) {
  return typeof type === "object" && type !== null && ("union" in type);
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
        len: member.$len,
        comment: member.$comment,
        ffi: "void",
        values: member.$values?.split(","),
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

function extendEnum(ext: {
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
        }
      }
    }
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

newline();
emit("/// Type definitions");

for (const ty of typedefs) {
  newline();
  emit(`export type ${ty.name} = ${ty.type};`);
}

newline();
emit("/// Constants");

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

newline();
emit("/// Enums");

for (const e of enums) {
  newline();
  if (e.comment) emit(`/** ${e.comment} */`);
  emit(`export enum ${e.name} {`);
  block(() => {
    for (const c of e.enums) {
      if (c.comment) emit(`/** ${c.comment} */`);
      emit(
        `${c.name} = ${
          typeof c.value === "string" && c.value.startsWith("VK")
            ? (e.enums.find((x) => x.name === c.value)?.value ?? c.value)
            : c.value
        },`,
      );
    }
  });
  emit(`}`);
}

newline();
emit("/// Structs");

newline();
emit(`export const BUFFER = Symbol("vkStructBuffer");`);
emit(`export const DATAVIEW = Symbol("vkStructDataView");`);
newline();

emit("export interface IVkStructure {");
block(() => {
  emit(`readonly [BUFFER]: Uint8Array;`);
  emit(`readonly [DATAVIEW]: DataView;`);
});
emit("}");

newline();

emit(
  "export const LE = new Uint8Array(new Uint32Array([0x12345678]).buffer)[0] === 0x78;",
);

newline();

for (const s of structs) {
  newline();
  if (s.comment) emit(`/** ${s.comment} */`);
  emit(`export class ${s.name} implements IVkStructure {`);
  block(() => {
    emit(`static size = ${s.size};`);

    newline();

    emit("#data: Uint8Array;");
    emit("#view: DataView;");

    newline();

    emit(`get [BUFFER]() { return this.#data; }`);
    emit(`get [DATAVIEW]() { return this.#view; }`);

    newline();

    emit("constructor(data: Uint8Array) {");
    block(() => {
      emit(`if (data.byteLength < ${s.name}.size) {`);
      block(() => {
        emit(`throw new Error("Data buffer too small");`);
      });
      emit("}");
      emit("this.#data = data;");
      emit("this.#view = new DataView(data.buffer);");
    });
    emit("}");

    newline();

    emit("static alloc() {");
    block(() => {
      emit(`return new ${s.name}(new Uint8Array(${s.name}.size));`);
    });
    emit("}");

    newline();

    emit(`static create(data: {`);
    block(() => {
      for (const f of s.fields) {
        if (f.name === "sType" && f.values?.length === 1) continue;
        emit(
          `${jsify(f.name)}${f.optional ? "?" : ""}: ${
            f.text?.endsWith("*") ? "Deno.PointerValue" : typeToJS(f.type)
          };`,
        );
      }
    });
    emit(`}) {`);
    block(() => {
      emit(`const s = ${s.name}.alloc();`);
      for (const f of s.fields) {
        if (f.name === "sType" && f.values?.length === 1) {
          emit(`s.sType = VkStructureType.${f.values?.[0]};`);
        } else {
          const name = jsify(f.name);
          emit(`if (data.${name} !== undefined) s.${name} = data.${name};`);
        }
      }
      emit(`return s;`);
    });
    emit(`}`);

    for (const f of s.fields) {
      newline();
      if (f.comment) emit(`/** ${f.comment} */`);
      const isptr = f.text?.endsWith("*");
      emit(`get ${jsify(f.name)}() {`);
      block(() => {
        if (isptr) {
          emit(`return this.#view.getBigUint64(${f.offset}, LE);`);
        } else {
          switch (f.ffi) {
            case "i8":
              emit(`return this.#view.getInt8(${f.offset});`);
              break;
            case "u8":
              emit(`return this.#view.getUint8(${f.offset});`);
              break;
            case "i16":
              emit(`return this.#view.getInt16(${f.offset}, LE);`);
              break;
            case "u16":
              emit(`return this.#view.getUint16(${f.offset}, LE);`);
              break;
            case "i32":
              emit(`return this.#view.getInt32(${f.offset}, LE);`);
              break;
            case "u32":
              emit(`return this.#view.getUint32(${f.offset}, LE);`);
              break;
            case "isize":
            case "i64":
              emit(`return this.#view.getBigInt64(${f.offset}, LE);`);
              break;
            case "usize":
            case "buffer":
            case "pointer":
            case "u64":
              emit(`return this.#view.getBigUint64(${f.offset}, LE);`);
              break;
            case "f32":
              emit(`return this.#view.getFloat32(${f.offset}, LE);`);
              break;
            case "f64":
              emit(`return this.#view.getFloat64(${f.offset}, LE);`);
              break;
            default: {
              if (isStruct(f.ffi)) {
                const name = f.type;
                emit(
                  `return new ${name}(this.#data.subarray(${f.offset}, ${f.offset} + ${name}.size));`,
                );
                break;
              }
              emit(
                `throw new Error(\`Unknown type: ${JSON.stringify(f.ffi)}\`);`,
              );
              break;
            }
          }
        }
      });
      emit(`}`);
      newline();
      emit(
        `set ${jsify(f.name)}(value: ${
          isptr ? "Deno.PointerValue" : typeToJS(f.type)
        }) {`,
      );
      block(() => {
        if (isptr) {
          emit(`this.#view.setBigUint64(${f.offset}, BigInt(value), LE);`);
        } else {
          switch (f.ffi) {
            case "i8":
              emit(`this.#view.setInt8(${f.offset}, Number(value));`);
              break;
            case "u8":
              emit(`this.#view.setUint8(${f.offset}, Number(value));`);
              break;
            case "i16":
              emit(`this.#view.setInt16(${f.offset}, Number(value), LE);`);
              break;
            case "u16":
              emit(`this.#view.setUint16(${f.offset}, Number(value), LE);`);
              break;
            case "i32":
              emit(`this.#view.setInt32(${f.offset}, Number(value), LE);`);
              break;
            case "u32":
              emit(`this.#view.setUint32(${f.offset}, Number(value), LE);`);
              break;
            case "isize":
            case "i64":
              emit(`this.#view.setBigInt64(${f.offset}, BigInt(value), LE);`);
              break;
            case "usize":
            case "buffer":
            case "pointer":
            case "u64":
              emit(`this.#view.setBigUint64(${f.offset}, BigInt(value), LE);`);
              break;
            case "f32":
              emit(`this.#view.setFloat32(${f.offset}, Number(value), LE);`);
              break;
            case "f64":
              emit(`this.#view.setFloat64(${f.offset}, Number(value), LE);`);
              break;
            default: {
              if (isStruct(f.ffi)) {
                const name = f.type;
                emit(`if (value[BUFFER].byteLength < ${name}.size) {`);
                block(() => {
                  emit(`throw new Error("Data buffer too small");`);
                });
                emit("}");
                emit(`this.#data.set(value[BUFFER], ${f.offset});`);
                break;
              }
              emit(
                `throw new Error(\`Unknown type: ${JSON.stringify(f.ffi)}\`);`,
              );
              break;
            }
          }
        }
      });
      emit(`}`);
    }
  });
  emit(`}`);
}

newline();
emit("/// Unions");

for (const s of unions) {
  newline();
  if (s.comment) emit(`/** ${s.comment} */`);
  emit(`export class ${s.name} {`);
  block(() => {
    emit(`static size = ${s.size};`);

    newline();

    emit("#data: Uint8Array;");
    emit("#view: DataView;");

    newline();

    emit("constructor(data: Uint8Array) {");
    block(() => {
      emit(`if (data.byteLength < ${s.name}.size) {`);
      block(() => {
        emit(`throw new Error("Data buffer too small");`);
      });
      emit("}");
      emit("this.#data = data;");
      emit("this.#view = new DataView(data.buffer);");
    });
    emit("}");
  });
  emit(`}`);
}

function toSkipCMD(name: string) {
  if (name === "vkCreateSwapchainKHR") return false;

  if (name.endsWith("NV")) return true;
  if (name.endsWith("NX")) return true;
  if (name.endsWith("NVX")) return true;
  if (name.endsWith("NN")) return true;
  if (name.endsWith("KHR")) return true;
  if (name.endsWith("EXT")) return true;
  if (name.endsWith("QCOM")) return true;
  if (name.endsWith("FUCHSIA")) return true;
  if (name.endsWith("INTEL")) return true;
  if (name.endsWith("ANDROID")) return true;
  if (name.endsWith("VALVE")) return true;
  if (name.endsWith("HUAWEI")) return true;
  if (name.endsWith("GGP")) return true;
  if (name.endsWith("AMD")) return true;
  if (name.endsWith("GOOGLE")) return true;
  if (name.endsWith("MVK")) return true;
  return false;
}

newline();
emit("/// FFI Library");

emit(`const lib = Deno.dlopen("vulkan-1", {`);
block(() => {
  for (const cmd of commands) {
    if (toSkipCMD(cmd.name)) continue;
    emit(
      `"${cmd.name}": ${
        JSON.stringify(cmd.ffi, null, 2).split("\n").map((
          e,
          i,
        ) => (i === 0 ? e : `${"  ".repeat(ident)}${e}`)).join("\n")
      },`,
    );
  }
});
emit(`} as const).symbols;`);

newline();
emit("/// Commands");

for (const cmd of commands) {
  if (toSkipCMD(cmd.name)) continue;
  newline();
  if (cmd.comment) emit(`/** ${cmd.comment} */`);
  emit(`export function ${cmd.name}(`);
  block(() => {
    for (const p of cmd.params) {
      emit(
        `${jsify(p.name)}: ${
          p.text?.endsWith("*")
            ? `IVkStructure | Uint8Array${p.optional ? " | null" : ""}`
            : typeToJS(p.type)
        },`,
      );
    }
  });
  emit(`) ${cmd.type === "VkResult" ? "" : `: ${typeToJS(cmd.type)} `}{`);
  block(() => {
    emit(`${cmd.type !== "void" ? "const ret = " : ""}lib.${cmd.name}(`);
    block(() => {
      for (const p of cmd.params) {
        const jsn = jsify(p.name);
        emit(
          `${
            p.text?.endsWith("*")
              ? `${jsn} === null ? null : ${jsn} instanceof Uint8Array ? ${jsn} : ${jsn}[BUFFER]`
              : jsn
          },`,
        );
      }
    });
    emit(`);`);
    if (cmd.type !== "void") {
      if (cmd.type === "VkResult") {
        emit(
          `if (${
            cmd.successCodes.map((e) => `ret === VkResult.${e}`).join(" || ")
          }) {`,
        );
        block(() => {
          emit("return;");
        });
        emit(`} else {`);
        block(() => {
          emit(
            `throw new Error("Vulkan Error: " + ret + " (" + VkResult[ret] + ")");`,
          );
        });
        emit("}");
      } else {
        emit(`return ret;`);
      }
    }
  });
  emit(`}`);
}

Deno.writeTextFileSync(new URL("./vk.ts", import.meta.url), src);
const { code } = transform(src, {
  "jsc": {
    "target": "es2022",
    "minify": {
      "compress": {
        "unused": true,
      },
    },
    "parser": {
      "syntax": "typescript",
    },
  },
});

Deno.writeTextFileSync(new URL("./vk.min.js", import.meta.url), code);
