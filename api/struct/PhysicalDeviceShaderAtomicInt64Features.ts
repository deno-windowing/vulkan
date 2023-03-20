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

export interface InitPhysicalDeviceShaderAtomicInt64Features {
  pNext?: AnyPointer;
  shaderBufferInt64Atomics?: Bool32;
  shaderSharedInt64Atomics?: Bool32;
}

export class PhysicalDeviceShaderAtomicInt64Features implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceShaderAtomicInt64Features);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceShaderAtomicInt64Features) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceShaderAtomicInt64Features.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceShaderAtomicInt64Features.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceShaderAtomicInt64Features.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shaderBufferInt64Atomics !== undefined) this.shaderBufferInt64Atomics = data.shaderBufferInt64Atomics;
      if (data.shaderSharedInt64Atomics !== undefined) this.shaderSharedInt64Atomics = data.shaderSharedInt64Atomics;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceShaderAtomicInt64Features.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SHADER_ATOMIC_INT64_FEATURES;
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

  get shaderBufferInt64Atomics(): number {
    return this.#view.getUint32(16, LE);
  }

  set shaderBufferInt64Atomics(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get shaderSharedInt64Atomics(): number {
    return this.#view.getUint32(20, LE);
  }

  set shaderSharedInt64Atomics(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }
}