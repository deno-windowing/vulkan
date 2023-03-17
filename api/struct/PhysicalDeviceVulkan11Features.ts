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

export interface InitPhysicalDeviceVulkan11Features {
  pNext?: AnyPointer;
  storageBuffer16BitAccess?: Bool32;
  uniformAndStorageBuffer16BitAccess?: Bool32;
  storagePushConstant16?: Bool32;
  storageInputOutput16?: Bool32;
  multiview?: Bool32;
  multiviewGeometryShader?: Bool32;
  multiviewTessellationShader?: Bool32;
  variablePointersStorageBuffer?: Bool32;
  variablePointers?: Bool32;
  protectedMemory?: Bool32;
  samplerYcbcrConversion?: Bool32;
  shaderDrawParameters?: Bool32;
}

export class PhysicalDeviceVulkan11Features implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceVulkan11Features);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceVulkan11Features) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceVulkan11Features.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceVulkan11Features.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceVulkan11Features.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.storageBuffer16BitAccess !== undefined) this.storageBuffer16BitAccess = data.storageBuffer16BitAccess;
      if (data.uniformAndStorageBuffer16BitAccess !== undefined) this.uniformAndStorageBuffer16BitAccess = data.uniformAndStorageBuffer16BitAccess;
      if (data.storagePushConstant16 !== undefined) this.storagePushConstant16 = data.storagePushConstant16;
      if (data.storageInputOutput16 !== undefined) this.storageInputOutput16 = data.storageInputOutput16;
      if (data.multiview !== undefined) this.multiview = data.multiview;
      if (data.multiviewGeometryShader !== undefined) this.multiviewGeometryShader = data.multiviewGeometryShader;
      if (data.multiviewTessellationShader !== undefined) this.multiviewTessellationShader = data.multiviewTessellationShader;
      if (data.variablePointersStorageBuffer !== undefined) this.variablePointersStorageBuffer = data.variablePointersStorageBuffer;
      if (data.variablePointers !== undefined) this.variablePointers = data.variablePointers;
      if (data.protectedMemory !== undefined) this.protectedMemory = data.protectedMemory;
      if (data.samplerYcbcrConversion !== undefined) this.samplerYcbcrConversion = data.samplerYcbcrConversion;
      if (data.shaderDrawParameters !== undefined) this.shaderDrawParameters = data.shaderDrawParameters;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceVulkan11Features.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_VULKAN_1_1_FEATURES;
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

  get storageBuffer16BitAccess(): number {
    return this.#view.getUint32(16, LE);
  }

  set storageBuffer16BitAccess(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get uniformAndStorageBuffer16BitAccess(): number {
    return this.#view.getUint32(20, LE);
  }

  set uniformAndStorageBuffer16BitAccess(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get storagePushConstant16(): number {
    return this.#view.getUint32(24, LE);
  }

  set storagePushConstant16(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get storageInputOutput16(): number {
    return this.#view.getUint32(28, LE);
  }

  set storageInputOutput16(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get multiview(): number {
    return this.#view.getUint32(32, LE);
  }

  set multiview(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get multiviewGeometryShader(): number {
    return this.#view.getUint32(36, LE);
  }

  set multiviewGeometryShader(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get multiviewTessellationShader(): number {
    return this.#view.getUint32(40, LE);
  }

  set multiviewTessellationShader(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get variablePointersStorageBuffer(): number {
    return this.#view.getUint32(44, LE);
  }

  set variablePointersStorageBuffer(value: Bool32) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get variablePointers(): number {
    return this.#view.getUint32(48, LE);
  }

  set variablePointers(value: Bool32) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get protectedMemory(): number {
    return this.#view.getUint32(52, LE);
  }

  set protectedMemory(value: Bool32) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get samplerYcbcrConversion(): number {
    return this.#view.getUint32(56, LE);
  }

  set samplerYcbcrConversion(value: Bool32) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get shaderDrawParameters(): number {
    return this.#view.getUint32(60, LE);
  }

  set shaderDrawParameters(value: Bool32) {
    this.#view.setUint32(60, Number(value), LE);
  }
}