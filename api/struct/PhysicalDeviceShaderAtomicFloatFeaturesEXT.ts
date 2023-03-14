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

export interface InitPhysicalDeviceShaderAtomicFloatFeaturesEXT {
  pNext?: AnyPointer;
  shaderBufferFloat32Atomics?: Bool32;
  shaderBufferFloat32AtomicAdd?: Bool32;
  shaderBufferFloat64Atomics?: Bool32;
  shaderBufferFloat64AtomicAdd?: Bool32;
  shaderSharedFloat32Atomics?: Bool32;
  shaderSharedFloat32AtomicAdd?: Bool32;
  shaderSharedFloat64Atomics?: Bool32;
  shaderSharedFloat64AtomicAdd?: Bool32;
  shaderImageFloat32Atomics?: Bool32;
  shaderImageFloat32AtomicAdd?: Bool32;
  sparseImageFloat32Atomics?: Bool32;
  sparseImageFloat32AtomicAdd?: Bool32;
}

export class PhysicalDeviceShaderAtomicFloatFeaturesEXT implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceShaderAtomicFloatFeaturesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceShaderAtomicFloatFeaturesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceShaderAtomicFloatFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceShaderAtomicFloatFeaturesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceShaderAtomicFloatFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shaderBufferFloat32Atomics !== undefined) this.shaderBufferFloat32Atomics = data.shaderBufferFloat32Atomics;
      if (data.shaderBufferFloat32AtomicAdd !== undefined) this.shaderBufferFloat32AtomicAdd = data.shaderBufferFloat32AtomicAdd;
      if (data.shaderBufferFloat64Atomics !== undefined) this.shaderBufferFloat64Atomics = data.shaderBufferFloat64Atomics;
      if (data.shaderBufferFloat64AtomicAdd !== undefined) this.shaderBufferFloat64AtomicAdd = data.shaderBufferFloat64AtomicAdd;
      if (data.shaderSharedFloat32Atomics !== undefined) this.shaderSharedFloat32Atomics = data.shaderSharedFloat32Atomics;
      if (data.shaderSharedFloat32AtomicAdd !== undefined) this.shaderSharedFloat32AtomicAdd = data.shaderSharedFloat32AtomicAdd;
      if (data.shaderSharedFloat64Atomics !== undefined) this.shaderSharedFloat64Atomics = data.shaderSharedFloat64Atomics;
      if (data.shaderSharedFloat64AtomicAdd !== undefined) this.shaderSharedFloat64AtomicAdd = data.shaderSharedFloat64AtomicAdd;
      if (data.shaderImageFloat32Atomics !== undefined) this.shaderImageFloat32Atomics = data.shaderImageFloat32Atomics;
      if (data.shaderImageFloat32AtomicAdd !== undefined) this.shaderImageFloat32AtomicAdd = data.shaderImageFloat32AtomicAdd;
      if (data.sparseImageFloat32Atomics !== undefined) this.sparseImageFloat32Atomics = data.sparseImageFloat32Atomics;
      if (data.sparseImageFloat32AtomicAdd !== undefined) this.sparseImageFloat32AtomicAdd = data.sparseImageFloat32AtomicAdd;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceShaderAtomicFloatFeaturesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SHADER_ATOMIC_FLOAT_FEATURES_EXT;
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

  get shaderBufferFloat32Atomics() {
    return this.#view.getUint32(16, LE);
  }

  set shaderBufferFloat32Atomics(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get shaderBufferFloat32AtomicAdd() {
    return this.#view.getUint32(20, LE);
  }

  set shaderBufferFloat32AtomicAdd(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get shaderBufferFloat64Atomics() {
    return this.#view.getUint32(24, LE);
  }

  set shaderBufferFloat64Atomics(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get shaderBufferFloat64AtomicAdd() {
    return this.#view.getUint32(28, LE);
  }

  set shaderBufferFloat64AtomicAdd(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get shaderSharedFloat32Atomics() {
    return this.#view.getUint32(32, LE);
  }

  set shaderSharedFloat32Atomics(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get shaderSharedFloat32AtomicAdd() {
    return this.#view.getUint32(36, LE);
  }

  set shaderSharedFloat32AtomicAdd(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get shaderSharedFloat64Atomics() {
    return this.#view.getUint32(40, LE);
  }

  set shaderSharedFloat64Atomics(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get shaderSharedFloat64AtomicAdd() {
    return this.#view.getUint32(44, LE);
  }

  set shaderSharedFloat64AtomicAdd(value: Bool32) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get shaderImageFloat32Atomics() {
    return this.#view.getUint32(48, LE);
  }

  set shaderImageFloat32Atomics(value: Bool32) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get shaderImageFloat32AtomicAdd() {
    return this.#view.getUint32(52, LE);
  }

  set shaderImageFloat32AtomicAdd(value: Bool32) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get sparseImageFloat32Atomics() {
    return this.#view.getUint32(56, LE);
  }

  set sparseImageFloat32Atomics(value: Bool32) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get sparseImageFloat32AtomicAdd() {
    return this.#view.getUint32(60, LE);
  }

  set sparseImageFloat32AtomicAdd(value: Bool32) {
    this.#view.setUint32(60, Number(value), LE);
  }
}