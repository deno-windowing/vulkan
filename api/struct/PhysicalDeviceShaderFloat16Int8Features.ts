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
import { Bool32 } from "../def.ts";

export interface InitPhysicalDeviceShaderFloat16Int8Features {
  pNext?: AnyPointer;
  shaderFloat16?: Bool32;
  shaderInt8?: Bool32;
}

export class PhysicalDeviceShaderFloat16Int8Features implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceShaderFloat16Int8Features);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceShaderFloat16Int8Features) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceShaderFloat16Int8Features.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceShaderFloat16Int8Features.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceShaderFloat16Int8Features.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shaderFloat16 !== undefined) this.shaderFloat16 = data.shaderFloat16;
      if (data.shaderInt8 !== undefined) this.shaderInt8 = data.shaderInt8;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceShaderFloat16Int8Features.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SHADER_FLOAT16_INT8_FEATURES;
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

  get shaderFloat16() {
    return this.#view.getUint32(16, LE);
  }

  set shaderFloat16(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get shaderInt8() {
    return this.#view.getUint32(20, LE);
  }

  set shaderInt8(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }
}