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

export interface InitPhysicalDeviceDescriptorIndexingFeatures {
  pNext?: AnyPointer;
  shaderInputAttachmentArrayDynamicIndexing?: Bool32;
  shaderUniformTexelBufferArrayDynamicIndexing?: Bool32;
  shaderStorageTexelBufferArrayDynamicIndexing?: Bool32;
  shaderUniformBufferArrayNonUniformIndexing?: Bool32;
  shaderSampledImageArrayNonUniformIndexing?: Bool32;
  shaderStorageBufferArrayNonUniformIndexing?: Bool32;
  shaderStorageImageArrayNonUniformIndexing?: Bool32;
  shaderInputAttachmentArrayNonUniformIndexing?: Bool32;
  shaderUniformTexelBufferArrayNonUniformIndexing?: Bool32;
  shaderStorageTexelBufferArrayNonUniformIndexing?: Bool32;
  descriptorBindingUniformBufferUpdateAfterBind?: Bool32;
  descriptorBindingSampledImageUpdateAfterBind?: Bool32;
  descriptorBindingStorageImageUpdateAfterBind?: Bool32;
  descriptorBindingStorageBufferUpdateAfterBind?: Bool32;
  descriptorBindingUniformTexelBufferUpdateAfterBind?: Bool32;
  descriptorBindingStorageTexelBufferUpdateAfterBind?: Bool32;
  descriptorBindingUpdateUnusedWhilePending?: Bool32;
  descriptorBindingPartiallyBound?: Bool32;
  descriptorBindingVariableDescriptorCount?: Bool32;
  runtimeDescriptorArray?: Bool32;
}

export class PhysicalDeviceDescriptorIndexingFeatures implements BaseStruct {
  static size = 96;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceDescriptorIndexingFeatures);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceDescriptorIndexingFeatures) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceDescriptorIndexingFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceDescriptorIndexingFeatures.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceDescriptorIndexingFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shaderInputAttachmentArrayDynamicIndexing !== undefined) this.shaderInputAttachmentArrayDynamicIndexing = data.shaderInputAttachmentArrayDynamicIndexing;
      if (data.shaderUniformTexelBufferArrayDynamicIndexing !== undefined) this.shaderUniformTexelBufferArrayDynamicIndexing = data.shaderUniformTexelBufferArrayDynamicIndexing;
      if (data.shaderStorageTexelBufferArrayDynamicIndexing !== undefined) this.shaderStorageTexelBufferArrayDynamicIndexing = data.shaderStorageTexelBufferArrayDynamicIndexing;
      if (data.shaderUniformBufferArrayNonUniformIndexing !== undefined) this.shaderUniformBufferArrayNonUniformIndexing = data.shaderUniformBufferArrayNonUniformIndexing;
      if (data.shaderSampledImageArrayNonUniformIndexing !== undefined) this.shaderSampledImageArrayNonUniformIndexing = data.shaderSampledImageArrayNonUniformIndexing;
      if (data.shaderStorageBufferArrayNonUniformIndexing !== undefined) this.shaderStorageBufferArrayNonUniformIndexing = data.shaderStorageBufferArrayNonUniformIndexing;
      if (data.shaderStorageImageArrayNonUniformIndexing !== undefined) this.shaderStorageImageArrayNonUniformIndexing = data.shaderStorageImageArrayNonUniformIndexing;
      if (data.shaderInputAttachmentArrayNonUniformIndexing !== undefined) this.shaderInputAttachmentArrayNonUniformIndexing = data.shaderInputAttachmentArrayNonUniformIndexing;
      if (data.shaderUniformTexelBufferArrayNonUniformIndexing !== undefined) this.shaderUniformTexelBufferArrayNonUniformIndexing = data.shaderUniformTexelBufferArrayNonUniformIndexing;
      if (data.shaderStorageTexelBufferArrayNonUniformIndexing !== undefined) this.shaderStorageTexelBufferArrayNonUniformIndexing = data.shaderStorageTexelBufferArrayNonUniformIndexing;
      if (data.descriptorBindingUniformBufferUpdateAfterBind !== undefined) this.descriptorBindingUniformBufferUpdateAfterBind = data.descriptorBindingUniformBufferUpdateAfterBind;
      if (data.descriptorBindingSampledImageUpdateAfterBind !== undefined) this.descriptorBindingSampledImageUpdateAfterBind = data.descriptorBindingSampledImageUpdateAfterBind;
      if (data.descriptorBindingStorageImageUpdateAfterBind !== undefined) this.descriptorBindingStorageImageUpdateAfterBind = data.descriptorBindingStorageImageUpdateAfterBind;
      if (data.descriptorBindingStorageBufferUpdateAfterBind !== undefined) this.descriptorBindingStorageBufferUpdateAfterBind = data.descriptorBindingStorageBufferUpdateAfterBind;
      if (data.descriptorBindingUniformTexelBufferUpdateAfterBind !== undefined) this.descriptorBindingUniformTexelBufferUpdateAfterBind = data.descriptorBindingUniformTexelBufferUpdateAfterBind;
      if (data.descriptorBindingStorageTexelBufferUpdateAfterBind !== undefined) this.descriptorBindingStorageTexelBufferUpdateAfterBind = data.descriptorBindingStorageTexelBufferUpdateAfterBind;
      if (data.descriptorBindingUpdateUnusedWhilePending !== undefined) this.descriptorBindingUpdateUnusedWhilePending = data.descriptorBindingUpdateUnusedWhilePending;
      if (data.descriptorBindingPartiallyBound !== undefined) this.descriptorBindingPartiallyBound = data.descriptorBindingPartiallyBound;
      if (data.descriptorBindingVariableDescriptorCount !== undefined) this.descriptorBindingVariableDescriptorCount = data.descriptorBindingVariableDescriptorCount;
      if (data.runtimeDescriptorArray !== undefined) this.runtimeDescriptorArray = data.runtimeDescriptorArray;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceDescriptorIndexingFeatures.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_DESCRIPTOR_INDEXING_FEATURES;
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

  get shaderInputAttachmentArrayDynamicIndexing(): number {
    return this.#view.getUint32(16, LE);
  }

  set shaderInputAttachmentArrayDynamicIndexing(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get shaderUniformTexelBufferArrayDynamicIndexing(): number {
    return this.#view.getUint32(20, LE);
  }

  set shaderUniformTexelBufferArrayDynamicIndexing(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get shaderStorageTexelBufferArrayDynamicIndexing(): number {
    return this.#view.getUint32(24, LE);
  }

  set shaderStorageTexelBufferArrayDynamicIndexing(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get shaderUniformBufferArrayNonUniformIndexing(): number {
    return this.#view.getUint32(28, LE);
  }

  set shaderUniformBufferArrayNonUniformIndexing(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get shaderSampledImageArrayNonUniformIndexing(): number {
    return this.#view.getUint32(32, LE);
  }

  set shaderSampledImageArrayNonUniformIndexing(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get shaderStorageBufferArrayNonUniformIndexing(): number {
    return this.#view.getUint32(36, LE);
  }

  set shaderStorageBufferArrayNonUniformIndexing(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get shaderStorageImageArrayNonUniformIndexing(): number {
    return this.#view.getUint32(40, LE);
  }

  set shaderStorageImageArrayNonUniformIndexing(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get shaderInputAttachmentArrayNonUniformIndexing(): number {
    return this.#view.getUint32(44, LE);
  }

  set shaderInputAttachmentArrayNonUniformIndexing(value: Bool32) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get shaderUniformTexelBufferArrayNonUniformIndexing(): number {
    return this.#view.getUint32(48, LE);
  }

  set shaderUniformTexelBufferArrayNonUniformIndexing(value: Bool32) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get shaderStorageTexelBufferArrayNonUniformIndexing(): number {
    return this.#view.getUint32(52, LE);
  }

  set shaderStorageTexelBufferArrayNonUniformIndexing(value: Bool32) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get descriptorBindingUniformBufferUpdateAfterBind(): number {
    return this.#view.getUint32(56, LE);
  }

  set descriptorBindingUniformBufferUpdateAfterBind(value: Bool32) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get descriptorBindingSampledImageUpdateAfterBind(): number {
    return this.#view.getUint32(60, LE);
  }

  set descriptorBindingSampledImageUpdateAfterBind(value: Bool32) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get descriptorBindingStorageImageUpdateAfterBind(): number {
    return this.#view.getUint32(64, LE);
  }

  set descriptorBindingStorageImageUpdateAfterBind(value: Bool32) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get descriptorBindingStorageBufferUpdateAfterBind(): number {
    return this.#view.getUint32(68, LE);
  }

  set descriptorBindingStorageBufferUpdateAfterBind(value: Bool32) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get descriptorBindingUniformTexelBufferUpdateAfterBind(): number {
    return this.#view.getUint32(72, LE);
  }

  set descriptorBindingUniformTexelBufferUpdateAfterBind(value: Bool32) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get descriptorBindingStorageTexelBufferUpdateAfterBind(): number {
    return this.#view.getUint32(76, LE);
  }

  set descriptorBindingStorageTexelBufferUpdateAfterBind(value: Bool32) {
    this.#view.setUint32(76, Number(value), LE);
  }

  get descriptorBindingUpdateUnusedWhilePending(): number {
    return this.#view.getUint32(80, LE);
  }

  set descriptorBindingUpdateUnusedWhilePending(value: Bool32) {
    this.#view.setUint32(80, Number(value), LE);
  }

  get descriptorBindingPartiallyBound(): number {
    return this.#view.getUint32(84, LE);
  }

  set descriptorBindingPartiallyBound(value: Bool32) {
    this.#view.setUint32(84, Number(value), LE);
  }

  get descriptorBindingVariableDescriptorCount(): number {
    return this.#view.getUint32(88, LE);
  }

  set descriptorBindingVariableDescriptorCount(value: Bool32) {
    this.#view.setUint32(88, Number(value), LE);
  }

  get runtimeDescriptorArray(): number {
    return this.#view.getUint32(92, LE);
  }

  set runtimeDescriptorArray(value: Bool32) {
    this.#view.setUint32(92, Number(value), LE);
  }
}