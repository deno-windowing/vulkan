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

export interface InitPhysicalDeviceShaderAtomicFloat2FeaturesEXT {
  pNext?: AnyPointer;
  shaderBufferFloat16Atomics?: Bool32;
  shaderBufferFloat16AtomicAdd?: Bool32;
  shaderBufferFloat16AtomicMinMax?: Bool32;
  shaderBufferFloat32AtomicMinMax?: Bool32;
  shaderBufferFloat64AtomicMinMax?: Bool32;
  shaderSharedFloat16Atomics?: Bool32;
  shaderSharedFloat16AtomicAdd?: Bool32;
  shaderSharedFloat16AtomicMinMax?: Bool32;
  shaderSharedFloat32AtomicMinMax?: Bool32;
  shaderSharedFloat64AtomicMinMax?: Bool32;
  shaderImageFloat32AtomicMinMax?: Bool32;
  sparseImageFloat32AtomicMinMax?: Bool32;
}

export class PhysicalDeviceShaderAtomicFloat2FeaturesEXT implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceShaderAtomicFloat2FeaturesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceShaderAtomicFloat2FeaturesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceShaderAtomicFloat2FeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceShaderAtomicFloat2FeaturesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceShaderAtomicFloat2FeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shaderBufferFloat16Atomics !== undefined) this.shaderBufferFloat16Atomics = data.shaderBufferFloat16Atomics;
      if (data.shaderBufferFloat16AtomicAdd !== undefined) this.shaderBufferFloat16AtomicAdd = data.shaderBufferFloat16AtomicAdd;
      if (data.shaderBufferFloat16AtomicMinMax !== undefined) this.shaderBufferFloat16AtomicMinMax = data.shaderBufferFloat16AtomicMinMax;
      if (data.shaderBufferFloat32AtomicMinMax !== undefined) this.shaderBufferFloat32AtomicMinMax = data.shaderBufferFloat32AtomicMinMax;
      if (data.shaderBufferFloat64AtomicMinMax !== undefined) this.shaderBufferFloat64AtomicMinMax = data.shaderBufferFloat64AtomicMinMax;
      if (data.shaderSharedFloat16Atomics !== undefined) this.shaderSharedFloat16Atomics = data.shaderSharedFloat16Atomics;
      if (data.shaderSharedFloat16AtomicAdd !== undefined) this.shaderSharedFloat16AtomicAdd = data.shaderSharedFloat16AtomicAdd;
      if (data.shaderSharedFloat16AtomicMinMax !== undefined) this.shaderSharedFloat16AtomicMinMax = data.shaderSharedFloat16AtomicMinMax;
      if (data.shaderSharedFloat32AtomicMinMax !== undefined) this.shaderSharedFloat32AtomicMinMax = data.shaderSharedFloat32AtomicMinMax;
      if (data.shaderSharedFloat64AtomicMinMax !== undefined) this.shaderSharedFloat64AtomicMinMax = data.shaderSharedFloat64AtomicMinMax;
      if (data.shaderImageFloat32AtomicMinMax !== undefined) this.shaderImageFloat32AtomicMinMax = data.shaderImageFloat32AtomicMinMax;
      if (data.sparseImageFloat32AtomicMinMax !== undefined) this.sparseImageFloat32AtomicMinMax = data.sparseImageFloat32AtomicMinMax;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceShaderAtomicFloat2FeaturesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SHADER_ATOMIC_FLOAT_2_FEATURES_EXT;
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

  get shaderBufferFloat16Atomics() {
    return this.#view.getUint32(16, LE);
  }

  set shaderBufferFloat16Atomics(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get shaderBufferFloat16AtomicAdd() {
    return this.#view.getUint32(20, LE);
  }

  set shaderBufferFloat16AtomicAdd(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get shaderBufferFloat16AtomicMinMax() {
    return this.#view.getUint32(24, LE);
  }

  set shaderBufferFloat16AtomicMinMax(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get shaderBufferFloat32AtomicMinMax() {
    return this.#view.getUint32(28, LE);
  }

  set shaderBufferFloat32AtomicMinMax(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get shaderBufferFloat64AtomicMinMax() {
    return this.#view.getUint32(32, LE);
  }

  set shaderBufferFloat64AtomicMinMax(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get shaderSharedFloat16Atomics() {
    return this.#view.getUint32(36, LE);
  }

  set shaderSharedFloat16Atomics(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get shaderSharedFloat16AtomicAdd() {
    return this.#view.getUint32(40, LE);
  }

  set shaderSharedFloat16AtomicAdd(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get shaderSharedFloat16AtomicMinMax() {
    return this.#view.getUint32(44, LE);
  }

  set shaderSharedFloat16AtomicMinMax(value: Bool32) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get shaderSharedFloat32AtomicMinMax() {
    return this.#view.getUint32(48, LE);
  }

  set shaderSharedFloat32AtomicMinMax(value: Bool32) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get shaderSharedFloat64AtomicMinMax() {
    return this.#view.getUint32(52, LE);
  }

  set shaderSharedFloat64AtomicMinMax(value: Bool32) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get shaderImageFloat32AtomicMinMax() {
    return this.#view.getUint32(56, LE);
  }

  set shaderImageFloat32AtomicMinMax(value: Bool32) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get sparseImageFloat32AtomicMinMax() {
    return this.#view.getUint32(60, LE);
  }

  set sparseImageFloat32AtomicMinMax(value: Bool32) {
    this.#view.setUint32(60, Number(value), LE);
  }
}