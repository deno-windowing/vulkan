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

export interface InitPhysicalDeviceShaderCoreBuiltinsPropertiesARM {
  pNext?: AnyPointer;
  shaderCoreMask?: number | bigint;
  shaderCoreCount?: number;
  shaderWarpsPerCore?: number;
}

export class PhysicalDeviceShaderCoreBuiltinsPropertiesARM implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceShaderCoreBuiltinsPropertiesARM);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceShaderCoreBuiltinsPropertiesARM) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceShaderCoreBuiltinsPropertiesARM.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceShaderCoreBuiltinsPropertiesARM.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceShaderCoreBuiltinsPropertiesARM.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shaderCoreMask !== undefined) this.shaderCoreMask = data.shaderCoreMask;
      if (data.shaderCoreCount !== undefined) this.shaderCoreCount = data.shaderCoreCount;
      if (data.shaderWarpsPerCore !== undefined) this.shaderWarpsPerCore = data.shaderWarpsPerCore;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceShaderCoreBuiltinsPropertiesARM.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SHADER_CORE_BUILTINS_PROPERTIES_ARM;
  }

  get sType() {
    return this.#view.getUint32(0, LE);
  }

  set sType(value: StructureType) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pNext() {
    return pointerFromView(this.#view, 8, LE);
  }

  set pNext(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }

  get shaderCoreMask() {
    return this.#view.getBigUint64(16, LE);
  }

  set shaderCoreMask(value: number | bigint) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get shaderCoreCount() {
    return this.#view.getUint32(24, LE);
  }

  set shaderCoreCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get shaderWarpsPerCore() {
    return this.#view.getUint32(28, LE);
  }

  set shaderWarpsPerCore(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }
}