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

export interface InitPhysicalDeviceDescriptorIndexingProperties {
  pNext?: AnyPointer;
  maxUpdateAfterBindDescriptorsInAllPools?: number;
  shaderUniformBufferArrayNonUniformIndexingNative?: Bool32;
  shaderSampledImageArrayNonUniformIndexingNative?: Bool32;
  shaderStorageBufferArrayNonUniformIndexingNative?: Bool32;
  shaderStorageImageArrayNonUniformIndexingNative?: Bool32;
  shaderInputAttachmentArrayNonUniformIndexingNative?: Bool32;
  robustBufferAccessUpdateAfterBind?: Bool32;
  quadDivergentImplicitLod?: Bool32;
  maxPerStageDescriptorUpdateAfterBindSamplers?: number;
  maxPerStageDescriptorUpdateAfterBindUniformBuffers?: number;
  maxPerStageDescriptorUpdateAfterBindStorageBuffers?: number;
  maxPerStageDescriptorUpdateAfterBindSampledImages?: number;
  maxPerStageDescriptorUpdateAfterBindStorageImages?: number;
  maxPerStageDescriptorUpdateAfterBindInputAttachments?: number;
  maxPerStageUpdateAfterBindResources?: number;
  maxDescriptorSetUpdateAfterBindSamplers?: number;
  maxDescriptorSetUpdateAfterBindUniformBuffers?: number;
  maxDescriptorSetUpdateAfterBindUniformBuffersDynamic?: number;
  maxDescriptorSetUpdateAfterBindStorageBuffers?: number;
  maxDescriptorSetUpdateAfterBindStorageBuffersDynamic?: number;
  maxDescriptorSetUpdateAfterBindSampledImages?: number;
  maxDescriptorSetUpdateAfterBindStorageImages?: number;
  maxDescriptorSetUpdateAfterBindInputAttachments?: number;
}

export class PhysicalDeviceDescriptorIndexingProperties implements BaseStruct {
  static size = 112;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceDescriptorIndexingProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceDescriptorIndexingProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceDescriptorIndexingProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceDescriptorIndexingProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceDescriptorIndexingProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxUpdateAfterBindDescriptorsInAllPools !== undefined) this.maxUpdateAfterBindDescriptorsInAllPools = data.maxUpdateAfterBindDescriptorsInAllPools;
      if (data.shaderUniformBufferArrayNonUniformIndexingNative !== undefined) this.shaderUniformBufferArrayNonUniformIndexingNative = data.shaderUniformBufferArrayNonUniformIndexingNative;
      if (data.shaderSampledImageArrayNonUniformIndexingNative !== undefined) this.shaderSampledImageArrayNonUniformIndexingNative = data.shaderSampledImageArrayNonUniformIndexingNative;
      if (data.shaderStorageBufferArrayNonUniformIndexingNative !== undefined) this.shaderStorageBufferArrayNonUniformIndexingNative = data.shaderStorageBufferArrayNonUniformIndexingNative;
      if (data.shaderStorageImageArrayNonUniformIndexingNative !== undefined) this.shaderStorageImageArrayNonUniformIndexingNative = data.shaderStorageImageArrayNonUniformIndexingNative;
      if (data.shaderInputAttachmentArrayNonUniformIndexingNative !== undefined) this.shaderInputAttachmentArrayNonUniformIndexingNative = data.shaderInputAttachmentArrayNonUniformIndexingNative;
      if (data.robustBufferAccessUpdateAfterBind !== undefined) this.robustBufferAccessUpdateAfterBind = data.robustBufferAccessUpdateAfterBind;
      if (data.quadDivergentImplicitLod !== undefined) this.quadDivergentImplicitLod = data.quadDivergentImplicitLod;
      if (data.maxPerStageDescriptorUpdateAfterBindSamplers !== undefined) this.maxPerStageDescriptorUpdateAfterBindSamplers = data.maxPerStageDescriptorUpdateAfterBindSamplers;
      if (data.maxPerStageDescriptorUpdateAfterBindUniformBuffers !== undefined) this.maxPerStageDescriptorUpdateAfterBindUniformBuffers = data.maxPerStageDescriptorUpdateAfterBindUniformBuffers;
      if (data.maxPerStageDescriptorUpdateAfterBindStorageBuffers !== undefined) this.maxPerStageDescriptorUpdateAfterBindStorageBuffers = data.maxPerStageDescriptorUpdateAfterBindStorageBuffers;
      if (data.maxPerStageDescriptorUpdateAfterBindSampledImages !== undefined) this.maxPerStageDescriptorUpdateAfterBindSampledImages = data.maxPerStageDescriptorUpdateAfterBindSampledImages;
      if (data.maxPerStageDescriptorUpdateAfterBindStorageImages !== undefined) this.maxPerStageDescriptorUpdateAfterBindStorageImages = data.maxPerStageDescriptorUpdateAfterBindStorageImages;
      if (data.maxPerStageDescriptorUpdateAfterBindInputAttachments !== undefined) this.maxPerStageDescriptorUpdateAfterBindInputAttachments = data.maxPerStageDescriptorUpdateAfterBindInputAttachments;
      if (data.maxPerStageUpdateAfterBindResources !== undefined) this.maxPerStageUpdateAfterBindResources = data.maxPerStageUpdateAfterBindResources;
      if (data.maxDescriptorSetUpdateAfterBindSamplers !== undefined) this.maxDescriptorSetUpdateAfterBindSamplers = data.maxDescriptorSetUpdateAfterBindSamplers;
      if (data.maxDescriptorSetUpdateAfterBindUniformBuffers !== undefined) this.maxDescriptorSetUpdateAfterBindUniformBuffers = data.maxDescriptorSetUpdateAfterBindUniformBuffers;
      if (data.maxDescriptorSetUpdateAfterBindUniformBuffersDynamic !== undefined) this.maxDescriptorSetUpdateAfterBindUniformBuffersDynamic = data.maxDescriptorSetUpdateAfterBindUniformBuffersDynamic;
      if (data.maxDescriptorSetUpdateAfterBindStorageBuffers !== undefined) this.maxDescriptorSetUpdateAfterBindStorageBuffers = data.maxDescriptorSetUpdateAfterBindStorageBuffers;
      if (data.maxDescriptorSetUpdateAfterBindStorageBuffersDynamic !== undefined) this.maxDescriptorSetUpdateAfterBindStorageBuffersDynamic = data.maxDescriptorSetUpdateAfterBindStorageBuffersDynamic;
      if (data.maxDescriptorSetUpdateAfterBindSampledImages !== undefined) this.maxDescriptorSetUpdateAfterBindSampledImages = data.maxDescriptorSetUpdateAfterBindSampledImages;
      if (data.maxDescriptorSetUpdateAfterBindStorageImages !== undefined) this.maxDescriptorSetUpdateAfterBindStorageImages = data.maxDescriptorSetUpdateAfterBindStorageImages;
      if (data.maxDescriptorSetUpdateAfterBindInputAttachments !== undefined) this.maxDescriptorSetUpdateAfterBindInputAttachments = data.maxDescriptorSetUpdateAfterBindInputAttachments;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceDescriptorIndexingProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_DESCRIPTOR_INDEXING_PROPERTIES;
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

  get maxUpdateAfterBindDescriptorsInAllPools(): number {
    return this.#view.getUint32(16, LE);
  }

  set maxUpdateAfterBindDescriptorsInAllPools(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get shaderUniformBufferArrayNonUniformIndexingNative(): number {
    return this.#view.getUint32(20, LE);
  }

  set shaderUniformBufferArrayNonUniformIndexingNative(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get shaderSampledImageArrayNonUniformIndexingNative(): number {
    return this.#view.getUint32(24, LE);
  }

  set shaderSampledImageArrayNonUniformIndexingNative(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get shaderStorageBufferArrayNonUniformIndexingNative(): number {
    return this.#view.getUint32(28, LE);
  }

  set shaderStorageBufferArrayNonUniformIndexingNative(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get shaderStorageImageArrayNonUniformIndexingNative(): number {
    return this.#view.getUint32(32, LE);
  }

  set shaderStorageImageArrayNonUniformIndexingNative(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get shaderInputAttachmentArrayNonUniformIndexingNative(): number {
    return this.#view.getUint32(36, LE);
  }

  set shaderInputAttachmentArrayNonUniformIndexingNative(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get robustBufferAccessUpdateAfterBind(): number {
    return this.#view.getUint32(40, LE);
  }

  set robustBufferAccessUpdateAfterBind(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get quadDivergentImplicitLod(): number {
    return this.#view.getUint32(44, LE);
  }

  set quadDivergentImplicitLod(value: Bool32) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get maxPerStageDescriptorUpdateAfterBindSamplers(): number {
    return this.#view.getUint32(48, LE);
  }

  set maxPerStageDescriptorUpdateAfterBindSamplers(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get maxPerStageDescriptorUpdateAfterBindUniformBuffers(): number {
    return this.#view.getUint32(52, LE);
  }

  set maxPerStageDescriptorUpdateAfterBindUniformBuffers(value: number) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get maxPerStageDescriptorUpdateAfterBindStorageBuffers(): number {
    return this.#view.getUint32(56, LE);
  }

  set maxPerStageDescriptorUpdateAfterBindStorageBuffers(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get maxPerStageDescriptorUpdateAfterBindSampledImages(): number {
    return this.#view.getUint32(60, LE);
  }

  set maxPerStageDescriptorUpdateAfterBindSampledImages(value: number) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get maxPerStageDescriptorUpdateAfterBindStorageImages(): number {
    return this.#view.getUint32(64, LE);
  }

  set maxPerStageDescriptorUpdateAfterBindStorageImages(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get maxPerStageDescriptorUpdateAfterBindInputAttachments(): number {
    return this.#view.getUint32(68, LE);
  }

  set maxPerStageDescriptorUpdateAfterBindInputAttachments(value: number) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get maxPerStageUpdateAfterBindResources(): number {
    return this.#view.getUint32(72, LE);
  }

  set maxPerStageUpdateAfterBindResources(value: number) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindSamplers(): number {
    return this.#view.getUint32(76, LE);
  }

  set maxDescriptorSetUpdateAfterBindSamplers(value: number) {
    this.#view.setUint32(76, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindUniformBuffers(): number {
    return this.#view.getUint32(80, LE);
  }

  set maxDescriptorSetUpdateAfterBindUniformBuffers(value: number) {
    this.#view.setUint32(80, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindUniformBuffersDynamic(): number {
    return this.#view.getUint32(84, LE);
  }

  set maxDescriptorSetUpdateAfterBindUniformBuffersDynamic(value: number) {
    this.#view.setUint32(84, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindStorageBuffers(): number {
    return this.#view.getUint32(88, LE);
  }

  set maxDescriptorSetUpdateAfterBindStorageBuffers(value: number) {
    this.#view.setUint32(88, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindStorageBuffersDynamic(): number {
    return this.#view.getUint32(92, LE);
  }

  set maxDescriptorSetUpdateAfterBindStorageBuffersDynamic(value: number) {
    this.#view.setUint32(92, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindSampledImages(): number {
    return this.#view.getUint32(96, LE);
  }

  set maxDescriptorSetUpdateAfterBindSampledImages(value: number) {
    this.#view.setUint32(96, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindStorageImages(): number {
    return this.#view.getUint32(100, LE);
  }

  set maxDescriptorSetUpdateAfterBindStorageImages(value: number) {
    this.#view.setUint32(100, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindInputAttachments(): number {
    return this.#view.getUint32(104, LE);
  }

  set maxDescriptorSetUpdateAfterBindInputAttachments(value: number) {
    this.#view.setUint32(104, Number(value), LE);
  }
}