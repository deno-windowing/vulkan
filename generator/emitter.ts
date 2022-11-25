import { transform } from "https://deno.land/x/swc@0.2.1/mod.ts";
import {
  block,
  commands,
  constants,
  emit,
  enums,
  Field,
  getIdent,
  getTypeSize,
  isArray,
  isStruct,
  jsify,
  newline,
  output,
  structs,
  typedefs,
  typeToJS,
  unions,
} from "./process_xml.ts";

function stripVk(name: any) {
  if (typeof name !== "string") return name;
  if (name.startsWith("Vk") || name.startsWith("vk")) return name.slice(2);
  else if (name.startsWith("VK_")) return name.slice(3);
  return name;
}

console.log("Emitting...");

newline();

emit(
  `import { AnyBuffer, AnyPointer, anyBuffer, anyPointer, BUFFER, DATAVIEW, LE, BaseStruct } from "./util.ts";`,
);

newline();
emit("/// Type definitions");

for (const ty of typedefs) {
  newline();
  emit(`export type ${stripVk(ty.name)} = ${stripVk(ty.type)};`);
}

newline();
emit("/// Constants");

for (const e of constants) {
  newline();
  emit(`/// ${e.name}`);
  if (e.comment) emit(`/// ${e.comment}`);
  newline();
  for (const c of e.constants) {
    if (c.name.includes("_SPEC_VERSION")) continue;
    if (c.comment) emit(`/** ${c.comment} */`);
    emit(`export const ${stripVk(c.name)} = ${stripVk(c.value)};`);
  }
}

newline();
emit("/// Enums");

for (const e of enums) {
  newline();
  if (e.comment) emit(`/** ${e.comment} */`);
  emit(`export enum ${stripVk(e.name)} {`);
  block(() => {
    for (const c of e.enums) {
      if (c.comment) emit(`/** ${c.comment} */`);
      emit(
        `${stripVk(c.name)} = ${
          typeof c.value === "string" && c.value.startsWith("VK")
            ? stripVk(e.enums.find((x) => x.name === c.value)?.value ?? c.value)
            : c.value
        },`,
      );
    }
  });
  emit(`}`);
}

newline();
emit("/// Structs");

for (const s of structs) {
  newline();
  emit(`export interface Init${stripVk(s.name)} {`);
  block(() => {
    for (const f of s.fields) {
      if (f.name === "sType" && f.values?.length === 1) continue;
      emit(
        `${jsify(f.name)}?: ${
          f.text?.endsWith("*") ? "AnyPointer" : stripVk(typeToJS(f.type))
        }${f.len ? "[]" : ""};`,
      );
    }
  });
  emit("}");
  newline();
  if (s.comment) emit(`/** ${s.comment} */`);
  emit(`export class ${stripVk(s.name)} implements BaseStruct {`);
  block(() => {
    emit(`static size = ${s.size};`);

    newline();

    emit("#data!: Uint8Array;");
    emit("#view!: DataView;");

    newline();

    emit(`get [BUFFER]() { return this.#data; }`);
    emit(`get [DATAVIEW]() { return this.#view; }`);

    newline();

    emit(`constructor();`);
    emit(`constructor(ptr: Deno.PointerValue);`);
    emit(`constructor(init: Init${stripVk(s.name)});`);
    emit(`constructor(data: Uint8Array);`);
    emit(
      `constructor(data?: Deno.PointerValue | Uint8Array | Init${
        stripVk(s.name)
      }) {`,
    );
    block(() => {
      emit(`if (data === undefined) {`);
      block(() => {
        emit(`this.#data = new Uint8Array(${stripVk(s.name)}.size);`);
        emit(
          "this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);",
        );
      });
      emit(
        `} else if (typeof data === "number" || typeof data === "bigint") {`,
      );
      block(() => {
        emit(
          `this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ${
            stripVk(s.name)
          }.size));`,
        );
        emit(
          "this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);",
        );
      });
      emit("} else if (data instanceof Uint8Array) {");
      block(() => {
        emit(`if (data.byteLength < ${stripVk(s.name)}.size) {`);
        block(() => {
          emit(`throw new Error("Data buffer too small");`);
        });
        emit("}");
        emit("this.#data = data;");
        emit("this.#view = new DataView(data.buffer, data.byteOffset);");
      });
      emit("} else {");
      block(() => {
        emit(`this.#data = new Uint8Array(${stripVk(s.name)}.size);`);
        emit(
          "this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);",
        );
        for (const f of s.fields) {
          if (f.name === "sType" && f.values?.length === 1) {
            continue;
          } else {
            const name = jsify(f.name);
            emit(
              `if (data.${name} !== undefined) this.${name} = data.${name};`,
            );
          }
        }
      });
      emit("}");
      for (const f of s.fields) {
        if (f.name === "sType" && f.values?.length === 1) {
          emit(`this.sType = StructureType.${stripVk(f.values?.[0])};`);
        }
      }
    });
    emit("}");

    for (const f of s.fields) {
      newline();
      if (f.comment) emit(`/** ${f.comment} */`);
      const isptr = f.text?.endsWith("*");
      emit(`get ${jsify(f.name)}() {`);
      function emitFieldGetter(f: Field) {
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
                  `return new ${
                    stripVk(name)
                  }(this.#data.subarray(${f.offset}, ${f.offset} + ${
                    stripVk(name)
                  }.size));`,
                );
                break;
              }
              if (isArray(f.ffi)) {
                emit(`const result: ${stripVk(typeToJS(f.type))}[] = [];`);
                emit(`for (let i = 0; i < ${f.ffi.len}; i++) {`);
                block(() => {
                  emit(`result.push((() => {`);
                  block(() => {
                    const tysize = getTypeSize(f.ffi.array);
                    emitFieldGetter({
                      name: f.name,
                      offset: `${f.offset} + i * ${tysize}` as any,
                      type: f.type,
                      ffi: f.ffi.array,
                    } as any);
                  });
                  emit(`})());`);
                });
                emit(`}`);
                emit(`return result;`);
                break;
              }
              emit(
                `throw new Error(\`Unknown type: ${JSON.stringify(f.ffi)}\`);`,
              );
              break;
            }
          }
        }
      }
      block(() => {
        emitFieldGetter(f);
      });
      emit(`}`);
      newline();
      emit(
        `set ${jsify(f.name)}(value: ${
          isptr ? "AnyPointer" : stripVk(typeToJS(f.type))
        }${f.len ? "[]" : ""}) {`,
      );
      function emitFieldSetter(f: Field, vname = "value") {
        if (isptr) {
          emit(
            `this.#view.setBigUint64(${f.offset}, BigInt(anyPointer(${vname})), LE);`,
          );
        } else {
          switch (f.ffi) {
            case "i8":
              emit(`this.#view.setInt8(${f.offset}, Number(${vname}));`);
              break;
            case "u8":
              emit(`this.#view.setUint8(${f.offset}, Number(${vname}));`);
              break;
            case "i16":
              emit(`this.#view.setInt16(${f.offset}, Number(${vname}), LE);`);
              break;
            case "u16":
              emit(`this.#view.setUint16(${f.offset}, Number(${vname}), LE);`);
              break;
            case "i32":
              emit(`this.#view.setInt32(${f.offset}, Number(${vname}), LE);`);
              break;
            case "u32":
              emit(`this.#view.setUint32(${f.offset}, Number(${vname}), LE);`);
              break;
            case "isize":
            case "i64":
              emit(
                `this.#view.setBigInt64(${f.offset}, BigInt(${vname}), LE);`,
              );
              break;
            case "usize":
            case "u64":
              emit(
                `this.#view.setBigUint64(${f.offset}, BigInt(${vname}), LE);`,
              );
              break;
            case "buffer":
            case "pointer":
              emit(
                `this.#view.setBigUint64(${f.offset}, BigInt(anyPointer(${vname})), LE);`,
              );
              break;
            case "f32":
              emit(`this.#view.setFloat32(${f.offset}, Number(${vname}), LE);`);
              break;
            case "f64":
              emit(`this.#view.setFloat64(${f.offset}, Number(${vname}), LE);`);
              break;
            default: {
              if (isStruct(f.ffi)) {
                const name = f.type;
                emit(
                  `if (${vname}[BUFFER].byteLength < ${stripVk(name)}.size) {`,
                );
                block(() => {
                  emit(`throw new Error("Data buffer too small");`);
                });
                emit("}");
                emit(`this.#data.set(${vname}[BUFFER], ${f.offset});`);
                break;
              }
              if (isArray(f.ffi)) {
                const tysize = getTypeSize(f.ffi.array);
                emit(`for (let i = 0; i < ${vname}.length; i++) {`);
                block(() => {
                  emitFieldSetter({
                    name: f.name,
                    offset: `${f.offset} + i * ${tysize}` as any,
                    type: f.type,
                    ffi: f.ffi.array,
                  } as any, `${vname}[i]`);
                });
                emit("}");
                break;
              }
              emit(
                `throw new Error(\`Unknown type: ${JSON.stringify(f.ffi)}\`);`,
              );
              break;
            }
          }
        }
      }
      block(() => {
        emitFieldSetter(f);
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
  emit(`export class ${stripVk(s.name)} {`);
  block(() => {
    emit(`static size = ${s.size};`);

    newline();

    emit("#data: Uint8Array;");
    emit("#view: DataView;");

    newline();

    emit("constructor(data: Uint8Array) {");
    block(() => {
      emit(`if (data.byteLength < ${stripVk(s.name)}.size) {`);
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
  if (name === "vkGetPhysicalDeviceSurfaceSupportKHR") return false;
  if (name === "vkGetPhysicalDeviceSurfaceCapabilitiesKHR") return false;
  if (name === "vkGetPhysicalDeviceSurfaceFormatsKHR") return false;
  if (name === "vkGetPhysicalDeviceSurfacePresentModesKHR") return false;
  if (name === "vkDestroySwapchainKHR") return false;
  if (name === "vkGetSwapchainImagesKHR") return false;
  if (name === "vkAcquireNextImageKHR") return false;
  if (name === "vkQueuePresentKHR") return false;
  if (name === "vkDestroySurfaceKHR") return false;

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
        ) => (i === 0 ? e : `${"  ".repeat(getIdent())}${e}`)).join("\n")
      },`,
    );
  }
});
emit(`} as const).symbols;`);

newline();

emit(`export class VulkanError extends Error {`);
block(() => {
  emit(`constructor(public code: Result) {`);
  block(() => {
    emit(`super(\`Vulkan error: \${code} (\${Result[code]})\`);`);
  });
  emit(`}`);
});
emit(`}`);

newline();
emit("/// Commands");

for (const cmd of commands) {
  if (toSkipCMD(cmd.name)) continue;
  newline();
  if (cmd.comment) emit(`/** ${cmd.comment} */`);
  emit(`export function ${stripVk(cmd.name)}(`);
  block(() => {
    for (const p of cmd.params) {
      emit(
        `${jsify(p.name)}: ${
          p.text?.endsWith("*") ? `AnyBuffer` : stripVk(typeToJS(p.type))
        },`,
      );
    }
  });
  emit(`): ${stripVk(typeToJS(cmd.type))} {`);
  block(() => {
    emit(`${cmd.type !== "void" ? "const ret = " : ""}lib.${cmd.name}(`);
    block(() => {
      for (const p of cmd.params) {
        const jsn = jsify(p.name);
        emit(
          `${p.text?.endsWith("*") ? `anyBuffer(${jsn})` : jsn},`,
        );
      }
    });
    emit(`);`);
    if (cmd.type !== "void") {
      if (cmd.type === "VkResult") {
        emit(
          `if (${
            cmd.successCodes.map((e) => `ret === Result.${stripVk(e)}`).join(
              " || ",
            )
          }) {`,
        );
        block(() => {
          emit("return ret;");
        });
        emit(`} else {`);
        block(() => {
          emit(
            `throw new VulkanError(ret as Result);`,
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

newline();

emit(`export * from "./util.ts";`);

const src = output();

Deno.writeTextFileSync(new URL("../api/vk.ts", import.meta.url), src);

console.log("Generated api/vk.ts");

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

Deno.writeTextFileSync(new URL("../api/vk.min.js", import.meta.url), code);

console.log("Generated api/vk.min.js");
