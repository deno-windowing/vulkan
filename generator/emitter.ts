// deno-lint-ignore-file no-inner-declarations no-explicit-any
import {
  commands,
  constants,
  enums,
  Field,
  FileBuilder,
  getTypeSize,
  isArray,
  isStruct,
  jsify,
  structs,
  tymap,
  typedefs,
  typeToJS,
  unions,
} from "./process_xml.ts";
import { parse } from "https://deno.land/std@0.179.0/path/mod.ts";

const nameSetEnums = new Set<string>(enums.map((it) => it.name));
const nameSetStrucs = new Set<string>(structs.map((it) => it.name));
const nameSetUnions = new Set<string>(unions.map((it) => it.name));
const nameSetDefs = new Set<string>();

/**
 * without alias
 */
const pureTypeDefs = [];
const aliasTypeDefs = [];
for (const def of typedefs) {
  if (!def.alias) {
    pureTypeDefs.push(def);
    nameSetDefs.add(def.name);
  } else {
    aliasTypeDefs.push(def);
    if (nameSetStrucs.has(def.type)) {
      nameSetStrucs.add(def.name);
    } else if (nameSetEnums.has(def.type)) {
      // FlagBits
      nameSetEnums.add(def.name);
    } else {
      // Flags
      nameSetDefs.add(def.name);
    }
  }
}

function writeFile(path: string, text: string, append = false) {
  const info = parse(path);
  Deno.mkdirSync(info.dir, { recursive: true });
  Deno.writeTextFileSync(path, text, { append: append });
}

function stripVk(name: any) {
  if (typeof name !== "string") return name;
  if (name.startsWith("Vk") || name.startsWith("vk")) return name.slice(2);
  else if (name.startsWith("VK_")) return name.slice(3);
  return name;
}

function toConstCase(name: string) {
  return name
    .split(/(?=[A-Z])/)
    .map((x) => x.toUpperCase())
    .join("_");
}

{
  const b = new FileBuilder();
  b.emit("/// Type definitions");

  for (const ty of pureTypeDefs) {
    b.newline();
    b.emit(`export type ${stripVk(ty.name)} = ${stripVk(ty.type)};`);
  }

  const alias = aliasTypeDefs.filter((def) => nameSetDefs.has(def.name));
  for (const ty of alias) {
    b.newline();
    b.emit(`export type ${stripVk(ty.name)} = ${stripVk(ty.type)};`);
  }
  writeFile("api/def.ts", b.output());
}

{
  const builder = new FileBuilder();
  builder.emit("/// Constants");

  for (const e of constants) {
    builder.newline();
    builder.emit(`/// ${e.name}`);
    if (e.comment) builder.emit(`/// ${e.comment}`);
    builder.newline();
    for (const c of e.constants) {
      if (c.name.includes("_SPEC_VERSION")) continue;
      if (c.comment) builder.emit(`/** ${c.comment} */`);
      builder.emit(`export const ${stripVk(c.name)} = ${stripVk(c.value)};`);
    }
  }
  writeFile("api/constant.ts", builder.output());
}

{
  const b = new FileBuilder();
  b.emit("// deno-lint-ignore-file no-empty-enum");

  for (const e of enums) {
    b.newline();
    if (e.comment) b.emit(`/** ${e.comment} */`);

    const enumClassName = stripVk(e.name);
    b.emit(`export enum ${enumClassName} {`);
    const ec = toConstCase(enumClassName).replace("_FLAG_BITS", "");
    b.block(() => {
      const pushed: string[] = [];
      for (const c of e.enums) {
        if (c.comment) b.emit(`/** ${c.comment} */`);
        const n = stripVk(c.name);
        function maybeSlice(x: string, vkOnly = false) {
          if (typeof x !== "string") return x;
          if (vkOnly && !x.startsWith("VK_")) return x;
          x = stripVk(x);
          let sliced = x.startsWith?.(ec + "_") ? x.slice(ec.length + 1) : x;
          if (e.name.endsWith("FlagBits") && sliced.endsWith("_BIT")) {
            sliced = sliced.slice(0, -4);
          }
          if (sliced.match?.(/^[0-9]/)) sliced = "VK_" + sliced;
          return sliced;
        }
        const finalName = maybeSlice(n);
        if (pushed.includes(finalName)) continue;
        pushed.push(finalName);

        const finalValue =
          typeof c.value === "string" && c.value.startsWith("VK")
            ? maybeSlice(
              e.enums.find((x) => x.name === c.value)?.value ?? c.value,
              true,
            )
            : c.value;
        b.emit(`${finalName} = ${finalValue},`);
      }
    });
    b.emit(`}`);
  }
  const enumAlias = aliasTypeDefs.filter((def) => nameSetEnums.has(def.name));
  for (const def of enumAlias) {
    b.newline();
    b.emit(`export type ${stripVk(def.name)} = ${stripVk(def.type)}`);
  }
  writeFile("api/enum.ts", b.output());
}

function addImports(types: string[]) {
  const _structs = new Set<string>();
  const _unions = new Set<string>();
  const _enums = new Set<string>();
  const _defs = new Set<string>();

  for (const type of types) {
    if (nameSetStrucs.has(type)) {
      _structs.add(stripVk(type));
    } else if (nameSetUnions.has(type)) {
      _unions.add(stripVk(type));
    } else if (nameSetEnums.has(type)) {
      _enums.add(stripVk(type));
    } else if (nameSetDefs.has(type)) {
      _defs.add(stripVk(type));
    }
  }

  return {
    structs: [..._structs],
    unions: [..._unions],
    enums: [..._enums],
    defs: [..._defs],
  };
}

{
  const classNames = [] as string[];
  for (const s of structs) {
    const b = new FileBuilder();
    b.emit("// deno-lint-ignore-file no-unused-vars");
    // imports
    b.emit([
      `import {`,
      [
        "AnyBuffer,",
        "AnyPointer,",
        "anyBuffer,",
        "anyPointer,",
        "BUFFER,",
        "DATAVIEW,",
        "LE,",
        "BaseStruct,",
        "pointerFromView,",
        "notPointerObject,",
      ],
      `} from "../util.ts";`,
    ], true);

    const imports = addImports(s.fields.map((f) => f.type));
    if (imports.structs.length > 0) {
      imports.structs.forEach((name) => {
        if (name != "BaseInStructure" && name != "BaseOutStructure") {
          b.emit(`import {${name}} from "./${name}.ts";`);
        }
      });
    }
    if (imports.enums.length > 0) {
      b.emit(`import { ${[...imports.enums].join(", ")} } from "../enum.ts";`);
    }
    if (imports.defs.length > 0) {
      b.emit(`import { ${[...imports.defs].join(", ")} } from "../def.ts";`);
    }
    if (imports.unions.length > 0) {
      b.emit(
        `import { ${[...imports.unions].join(", ")} } from "../union.ts";`,
      );
    }

    b.newline();
    b.emit(`export interface Init${stripVk(s.name)} {`);
    b.block(() => {
      for (const f of s.fields) {
        if (f.name === "sType" && f.values?.length === 1) continue;
        const nativearr = isArray(f.ffi) && (f.ffi.array in tymap);
        b.emit(
          `${jsify(f.name)}?: ${
            nativearr
              ? tymap[f.ffi.array as keyof typeof tymap]
              : f.text?.endsWith("*")
              ? "AnyPointer"
              : stripVk(typeToJS(f.type))
          }${f.len && !nativearr ? "[]" : ""};`,
        );
      }
    });
    b.emit("}");
    b.newline();
    if (s.comment) b.emit(`/** ${s.comment} */`);

    const className = stripVk(s.name);
    classNames.push(className);
    b.emit(`export class ${className} implements BaseStruct {`);
    b.block(() => {
      b.emit(`static size = ${s.size};`);

      b.newline();

      b.emit("#data!: Uint8Array;");
      b.emit("#view!: DataView;");

      b.newline();

      b.emit(`get [BUFFER]() { return this.#data; }`);
      b.emit(`get [DATAVIEW]() { return this.#view; }`);

      b.newline();

      b.emit(`constructor();`);
      b.emit(`constructor(ptr: Deno.PointerValue);`);
      b.emit(`constructor(init: Init${className});`);
      b.emit(`constructor(data: Uint8Array);`);
      b.emit(
        `constructor(data?: Deno.PointerValue | Uint8Array | Init${className}) {`,
      );

      b.block(() => {
        b.emit([
          `if (data === undefined || data === null) {`,
          [
            `this.#data = new Uint8Array(${className}.size);`,
            "this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);",
          ],
          "} else if (data instanceof Uint8Array) {",
          [
            `if (data.byteLength < ${className}.size) {`,
            [
              `throw new Error("Data buffer too small");`,
            ],
            "}",
            "this.#data = data;",
            "this.#view = new DataView(data.buffer, data.byteOffset);",
          ],
          "} else if(notPointerObject(data)) {",
          [
            `this.#data = new Uint8Array(${className}.size);`,
            "this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);",
            () => {
              for (const f of s.fields) {
                if (f.name === "sType" && f.values?.length === 1) {
                  continue;
                } else {
                  const name = jsify(f.name);
                  b.emit(
                    `if (data.${name} !== undefined) this.${name} = data.${name};`,
                  );
                }
              }
            },
          ],
          `} else {`,
          [
            `this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ${className}.size));`,
            "this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);",
          ],
          "}",
        ], true);
        for (const f of s.fields) {
          if (f.name === "sType" && f.values?.length === 1) {
            b.emit(
              `this.sType = StructureType.${
                stripVk(f.values?.[0]).slice("STRUCTURE_TYPE_".length)
              };`,
            );
          }
        }
      });
      b.emit("}");

      for (const f of s.fields) {
        b.newline();
        if (f.comment) b.emit(`/** ${f.comment} */`);
        const isptr = f.text?.endsWith("*");
        b.emit(`get ${jsify(f.name)}() {`);
        function emitFieldGetter(f: Field) {
          if (isptr) {
            b.emit(`return pointerFromView(this.#view, ${f.offset}, LE);`);
          } else {
            switch (f.ffi) {
              case "i8":
                b.emit(`return this.#view.getInt8(${f.offset});`);
                break;
              case "u8":
                b.emit(`return this.#view.getUint8(${f.offset});`);
                break;
              case "i16":
                b.emit(`return this.#view.getInt16(${f.offset}, LE);`);
                break;
              case "u16":
                b.emit(`return this.#view.getUint16(${f.offset}, LE);`);
                break;
              case "i32":
                b.emit(`return this.#view.getInt32(${f.offset}, LE);`);
                break;
              case "u32":
                b.emit(`return this.#view.getUint32(${f.offset}, LE);`);
                break;
              case "isize":
              case "i64":
                b.emit(`return this.#view.getBigInt64(${f.offset}, LE);`);
                break;
              case "usize":
              case "u64":
                b.emit(`return this.#view.getBigUint64(${f.offset}, LE);`);
                break;
              case "buffer":
              case "pointer":
                b.emit(`return pointerFromView(this.#view, ${f.offset}, LE);`);
                break;
              case "f32":
                b.emit(`return this.#view.getFloat32(${f.offset}, LE);`);
                break;
              case "f64":
                b.emit(`return this.#view.getFloat64(${f.offset}, LE);`);
                break;
              default: {
                if (isStruct(f.ffi)) {
                  const name = f.type;
                  b.emit(
                    `return new ${
                      stripVk(name)
                    }(this.#data.subarray(${f.offset}, ${f.offset} + ${
                      stripVk(name)
                    }.size));`,
                  );
                  break;
                }
                if (isArray(f.ffi)) {
                  if (tymap[f.ffi.array as keyof typeof tymap]) {
                    b.emit(
                      `return new ${
                        tymap[f.ffi.array as keyof typeof tymap]
                      }(this.#data.buffer, this.#data.byteOffset + ${f.offset}, ${f.ffi.len});`,
                    );
                  } else {
                    b.emit(
                      `const result: ${stripVk(typeToJS(f.type))}[] = [];`,
                    );
                    b.emit(`for (let i = 0; i < ${f.ffi.len}; i++) {`);
                    b.block(() => {
                      b.emit(`result.push((() => {`);
                      b.block(() => {
                        const tysize = getTypeSize(f.ffi.array);
                        emitFieldGetter({
                          name: f.name,
                          offset: `${f.offset} + i * ${tysize}` as any,
                          type: f.type,
                          ffi: f.ffi.array,
                        } as any);
                      });
                      b.emit(`})());`);
                    });
                    b.emit(`}`);
                    b.emit(`return result;`);
                  }
                  break;
                }
                b.emit(
                  `throw new Error(\`Unknown type: ${
                    JSON.stringify(f.ffi)
                  }\`);`,
                );
                break;
              }
            }
          }
        }
        b.block(() => {
          emitFieldGetter(f);
        });
        b.emit(`}`);
        b.newline();
        const nativearr = isArray(f.ffi) && (f.ffi.array in tymap);
        b.emit(
          `set ${jsify(f.name)}(value: ${
            nativearr
              ? `${tymap[f.ffi.array as keyof typeof tymap]}`
              : (isptr ? "AnyPointer" : stripVk(typeToJS(f.type)))
          }${f.len && !nativearr ? "[]" : ""}) {`,
        );
        function emitFieldSetter(f: Field, vname = "value") {
          if (isptr) {
            b.emit(
              `this.#view.setBigUint64(${f.offset}, BigInt(anyPointer(${vname})), LE);`,
            );
          } else if (nativearr) {
            b.emit(
              `this.#data.set(new Uint8Array(${vname}.buffer), ${f.offset});`,
            );
          } else {
            switch (f.ffi) {
              case "i8":
                b.emit(
                  `this.#view.setInt8(${f.offset}, Number(${vname}));`,
                );
                break;
              case "u8":
                b.emit(
                  `this.#view.setUint8(${f.offset}, Number(${vname}));`,
                );
                break;
              case "i16":
                b.emit(
                  `this.#view.setInt16(${f.offset}, Number(${vname}), LE);`,
                );
                break;
              case "u16":
                b.emit(
                  `this.#view.setUint16(${f.offset}, Number(${vname}), LE);`,
                );
                break;
              case "i32":
                b.emit(
                  `this.#view.setInt32(${f.offset}, Number(${vname}), LE);`,
                );
                break;
              case "u32":
                b.emit(
                  `this.#view.setUint32(${f.offset}, Number(${vname}), LE);`,
                );
                break;
              case "isize":
              case "i64":
                b.emit(
                  `this.#view.setBigInt64(${f.offset}, BigInt(${vname}), LE);`,
                );
                break;
              case "usize":
              case "u64":
                b.emit(
                  `this.#view.setBigUint64(${f.offset}, BigInt(${vname}), LE);`,
                );
                break;
              case "buffer":
              case "pointer":
                b.emit(
                  `this.#view.setBigUint64(${f.offset}, BigInt(anyPointer(${vname})), LE);`,
                );
                break;
              case "f32":
                b.emit(
                  `this.#view.setFloat32(${f.offset}, Number(${vname}), LE);`,
                );
                break;
              case "f64":
                b.emit(
                  `this.#view.setFloat64(${f.offset}, Number(${vname}), LE);`,
                );
                break;
              default: {
                if (isStruct(f.ffi)) {
                  const name = f.type;
                  b.emit(
                    `if (${vname}[BUFFER].byteLength < ${
                      stripVk(name)
                    }.size) {`,
                  );
                  b.block(() => {
                    b.emit(`throw new Error("Data buffer too small");`);
                  });
                  b.emit("}");
                  b.emit(
                    `this.#data.set(${vname}[BUFFER], ${f.offset});`,
                  );
                  break;
                }
                if (isArray(f.ffi)) {
                  const tysize = getTypeSize(f.ffi.array);
                  b.emit(`for (let i = 0; i < ${vname}.length; i++) {`);
                  b.block(() => {
                    emitFieldSetter({
                      name: f.name,
                      offset: `${f.offset} + i * ${tysize}` as any,
                      type: f.type,
                      ffi: f.ffi.array,
                    } as any, `${vname}[i]`);
                  });
                  b.emit("}");
                  break;
                }
                b.emit(
                  `throw new Error(\`Unknown type: ${
                    JSON.stringify(f.ffi)
                  }\`);`,
                );
                break;
              }
            }
          }
        }
        b.block(() => {
          emitFieldSetter(f);
        });
        b.emit(`}`);
      }
    });
    b.emit(`}`);

    writeFile(`api/struct/${className}.ts`, b.output());
  }
  {
    // alias
    const structAlias = aliasTypeDefs.filter((def) =>
      nameSetStrucs.has(def.name)
    );
    for (const def of structAlias) {
      const b = new FileBuilder();
      const className = stripVk(def.name);
      classNames.push(className);
      b.emit([
        `import { ${stripVk(def.type)} } from "./${stripVk(def.type)}.ts";`,
        `export type ${className} = ${stripVk(def.type)};`,
      ]);
      writeFile(`api/struct/${className}.ts`, b.output());
    }
  }
  const b = new FileBuilder();
  classNames.forEach((name) => b.emit(`export * from "./${name}.ts";`));
  writeFile(`api/struct/mod.ts`, b.output());
}

{
  const b = new FileBuilder();
  b.newline();
  b.emit("/// Unions");

  for (const s of unions) {
    b.newline();
    if (s.comment) b.emit(`/** ${s.comment} */`);
    b.emit(`export class ${stripVk(s.name)} {`);
    b.block(() => {
      b.emit(`static size = ${s.size};`);

      b.newline();

      b.emit("#data: Uint8Array;");
      b.emit("#view: DataView;");

      b.newline();

      b.emit("constructor(data: Uint8Array) {");
      b.block(() => {
        b.emit(`if (data.byteLength < ${stripVk(s.name)}.size) {`);
        b.block(() => {
          b.emit(`throw new Error("Data buffer too small");`);
        });
        b.emit("}");
        b.emit("this.#data = data;");
        b.emit("this.#view = new DataView(data.buffer);");
      });
      b.emit("}");
    });
    b.emit(`}`);
  }
  writeFile(`api/union.ts`, b.output());
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

{
  const b = new FileBuilder();
  b.emit("// deno-lint-ignore-file no-unused-vars");
  b.emit(`import { AnyBuffer, anyBuffer } from "./util.ts";`);
  // import
  const _types = new Set<string>();
  for (const cmd of commands) {
    for (const param of cmd.params) {
      _types.add(param.type);
    }
  }
  const imports = addImports([..._types]);
  if (imports.enums.length > 0) {
    b.emit([
      `import {`,
      [
        "Result,",
        ...imports.enums.map((name) => name + ","),
      ],
      `} from "./enum.ts";`,
    ], true);
  }
  if (imports.defs.length > 0) {
    b.emit([
      `import {`,
      [
        ...imports.defs.map((name) => name + ","),
      ],
      `} from "./def.ts";`,
    ], true);
  }

  b.emit(
    `const lib = Deno.dlopen(Deno.build.os === "windows" ? "vulkan-1" : Deno.build.os === "darwin" ? "libvulkan.dylib.1" : "libvulkan.so.1", {`,
  );
  b.block(() => {
    for (const cmd of commands) {
      if (toSkipCMD(cmd.name)) continue;
      b.emit(
        `"${cmd.name}": ${
          JSON.stringify(cmd.ffi, null, 2).split("\n").map((
            e,
            i,
          ) => (i === 0 ? e : `${"  ".repeat(b.getIdent())}${e}`)).join(
            "\n",
          )
        },`,
      );
    }
  });
  b.emit(`} as const).symbols;`);

  b.newline();

  b.emit(`export class VulkanError extends Error {`);
  b.block(() => {
    b.emit(`constructor(public code: Result) {`);
    b.block(() => {
      b.emit(`super(\`Vulkan error: \${code} (\${Result[code]})\`);`);
    });
    b.emit(`}`);
  });
  b.emit(`}`);

  b.newline();
  b.emit("/// Commands");

  for (const cmd of commands) {
    if (toSkipCMD(cmd.name)) continue;
    b.newline();
    if (cmd.comment) b.emit(`/** ${cmd.comment} */`);
    b.emit(`export function ${stripVk(cmd.name)}(`);
    b.block(() => {
      for (const p of cmd.params) {
        b.emit(
          `${jsify(p.name)}: ${
            p.text?.endsWith("*") ? `AnyBuffer` : stripVk(typeToJS(p.type))
          },`,
        );
      }
    });
    b.emit(`): ${stripVk(typeToJS(cmd.type))} {`);
    b.block(() => {
      b.emit(
        `${cmd.type !== "void" ? "const ret = " : ""}lib.${cmd.name}(`,
      );
      b.block(() => {
        for (const p of cmd.params) {
          const jsn = jsify(p.name);
          b.emit(
            `${p.text?.endsWith("*") ? `anyBuffer(${jsn})` : jsn},`,
          );
        }
      });
      b.emit(`);`);
      if (cmd.type !== "void") {
        if (cmd.type === "VkResult") {
          b.emit(
            `if (${
              cmd.successCodes.map((e) => `ret === Result.${stripVk(e)}`).join(
                " || ",
              )
            }) {`,
          );
          b.block(() => {
            b.emit("return ret;");
          });
          b.emit(`} else {`);
          b.block(() => {
            b.emit(
              `throw new VulkanError(ret as Result);`,
            );
          });
          b.emit("}");
        } else {
          b.emit(`return ret;`);
        }
      }
    });
    b.emit(`}`);
  }

  writeFile(`api/cmd.ts`, b.output());
}
// builder.newline();

// builder.emit(`export * from "./util.ts";`);

// const src = builder.output();

// Deno.writeTextFileSync(new URL("../api/vk.ts", import.meta.url), src);

// console.log("Generated api/vk.ts");

// const { code } = transform(src, {
//   "jsc": {
//     "target": "es2022",
//     "minify": {
//       "compress": {
//         "unused": true,
//       },
//     },
//     "parser": {
//       "syntax": "typescript",
//     },
//   },
// });

// Deno.writeTextFileSync(new URL("../api/vk.min.js", import.meta.url), code);

// console.log("Generated api/vk.min.js");
