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
import { StructureType, PointClippingBehavior } from "../enum.ts";
import { Bool32, ShaderStageFlags, SubgroupFeatureFlags, DeviceSize } from "../def.ts";

export interface InitPhysicalDeviceVulkan11Properties {
  pNext?: AnyPointer;
  deviceUUID?: Uint8Array;
  driverUUID?: Uint8Array;
  deviceLUID?: Uint8Array;
  deviceNodeMask?: number;
  deviceLUIDValid?: Bool32;
  subgroupSize?: number;
  subgroupSupportedStages?: ShaderStageFlags;
  subgroupSupportedOperations?: SubgroupFeatureFlags;
  subgroupQuadOperationsInAllStages?: Bool32;
  pointClippingBehavior?: PointClippingBehavior;
  maxMultiviewViewCount?: number;
  maxMultiviewInstanceIndex?: number;
  protectedNoFault?: Bool32;
  maxPerSetDescriptors?: number;
  maxMemoryAllocationSize?: DeviceSize;
}

export class PhysicalDeviceVulkan11Properties implements BaseStruct {
  static size = 112;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceVulkan11Properties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceVulkan11Properties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceVulkan11Properties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceVulkan11Properties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceVulkan11Properties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.deviceUUID !== undefined) this.deviceUUID = data.deviceUUID;
      if (data.driverUUID !== undefined) this.driverUUID = data.driverUUID;
      if (data.deviceLUID !== undefined) this.deviceLUID = data.deviceLUID;
      if (data.deviceNodeMask !== undefined) this.deviceNodeMask = data.deviceNodeMask;
      if (data.deviceLUIDValid !== undefined) this.deviceLUIDValid = data.deviceLUIDValid;
      if (data.subgroupSize !== undefined) this.subgroupSize = data.subgroupSize;
      if (data.subgroupSupportedStages !== undefined) this.subgroupSupportedStages = data.subgroupSupportedStages;
      if (data.subgroupSupportedOperations !== undefined) this.subgroupSupportedOperations = data.subgroupSupportedOperations;
      if (data.subgroupQuadOperationsInAllStages !== undefined) this.subgroupQuadOperationsInAllStages = data.subgroupQuadOperationsInAllStages;
      if (data.pointClippingBehavior !== undefined) this.pointClippingBehavior = data.pointClippingBehavior;
      if (data.maxMultiviewViewCount !== undefined) this.maxMultiviewViewCount = data.maxMultiviewViewCount;
      if (data.maxMultiviewInstanceIndex !== undefined) this.maxMultiviewInstanceIndex = data.maxMultiviewInstanceIndex;
      if (data.protectedNoFault !== undefined) this.protectedNoFault = data.protectedNoFault;
      if (data.maxPerSetDescriptors !== undefined) this.maxPerSetDescriptors = data.maxPerSetDescriptors;
      if (data.maxMemoryAllocationSize !== undefined) this.maxMemoryAllocationSize = data.maxMemoryAllocationSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceVulkan11Properties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_VULKAN_1_1_PROPERTIES;
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

  get deviceUUID() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 16, 16);
  }

  set deviceUUID(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 16);
  }

  get driverUUID() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 32, 16);
  }

  set driverUUID(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 32);
  }

  get deviceLUID() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 48, 8);
  }

  set deviceLUID(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 48);
  }

  get deviceNodeMask() {
    return this.#view.getUint32(56, LE);
  }

  set deviceNodeMask(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get deviceLUIDValid() {
    return this.#view.getUint32(60, LE);
  }

  set deviceLUIDValid(value: Bool32) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get subgroupSize() {
    return this.#view.getUint32(64, LE);
  }

  set subgroupSize(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get subgroupSupportedStages() {
    return this.#view.getUint32(68, LE);
  }

  set subgroupSupportedStages(value: ShaderStageFlags) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get subgroupSupportedOperations() {
    return this.#view.getUint32(72, LE);
  }

  set subgroupSupportedOperations(value: SubgroupFeatureFlags) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get subgroupQuadOperationsInAllStages() {
    return this.#view.getUint32(76, LE);
  }

  set subgroupQuadOperationsInAllStages(value: Bool32) {
    this.#view.setUint32(76, Number(value), LE);
  }

  get pointClippingBehavior() {
    return this.#view.getUint32(80, LE);
  }

  set pointClippingBehavior(value: PointClippingBehavior) {
    this.#view.setUint32(80, Number(value), LE);
  }

  get maxMultiviewViewCount() {
    return this.#view.getUint32(84, LE);
  }

  set maxMultiviewViewCount(value: number) {
    this.#view.setUint32(84, Number(value), LE);
  }

  get maxMultiviewInstanceIndex() {
    return this.#view.getUint32(88, LE);
  }

  set maxMultiviewInstanceIndex(value: number) {
    this.#view.setUint32(88, Number(value), LE);
  }

  get protectedNoFault() {
    return this.#view.getUint32(92, LE);
  }

  set protectedNoFault(value: Bool32) {
    this.#view.setUint32(92, Number(value), LE);
  }

  get maxPerSetDescriptors() {
    return this.#view.getUint32(96, LE);
  }

  set maxPerSetDescriptors(value: number) {
    this.#view.setUint32(96, Number(value), LE);
  }

  get maxMemoryAllocationSize() {
    return this.#view.getBigUint64(104, LE);
  }

  set maxMemoryAllocationSize(value: DeviceSize) {
    this.#view.setBigUint64(104, BigInt(value), LE);
  }
}