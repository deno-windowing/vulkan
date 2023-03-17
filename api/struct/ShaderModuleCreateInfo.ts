// deno-lint-ignore-file no-unused-vars
import {
  AnyBuffer,
  AnyPointer,
  anyBuffer,
  anyPointer,
  BUFFER,
  DATAVIEW,
  LE,
  BaseStruct,
  pointerFromView,
  notPointerObject,
} from "../util.ts";
import { StructureType } from "../enum.ts";
import { ShaderModuleCreateFlags } from "../def.ts";

export interface InitShaderModuleCreateInfo {
  pNext?: AnyPointer;
  flags?: ShaderModuleCreateFlags;
  codeSize?: number | bigint;
  pCode?: AnyPointer;
}

export class ShaderModuleCreateInfo implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitShaderModuleCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitShaderModuleCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ShaderModuleCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ShaderModuleCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ShaderModuleCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.codeSize !== undefined) this.codeSize = data.codeSize;
      if (data.pCode !== undefined) this.pCode = data.pCode;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ShaderModuleCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SHADER_MODULE_CREATE_INFO;
  }

  get sType(): number {
    return this.#view.getUint32(0, LE);
  }

  set sType(value: StructureType) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pNext(): Deno.PointerValue {
    return pointerFromView(this.#view, 8, LE);
  }

  set pNext(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: ShaderModuleCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get codeSize(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set codeSize(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get pCode(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pCode(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}