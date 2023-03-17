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
import { Bool32, DeviceSize } from "../def.ts";

export interface InitPhysicalDeviceDescriptorBufferPropertiesEXT {
  pNext?: AnyPointer;
  combinedImageSamplerDescriptorSingleArray?: Bool32;
  bufferlessPushDescriptors?: Bool32;
  allowSamplerImageViewPostSubmitCreation?: Bool32;
  descriptorBufferOffsetAlignment?: DeviceSize;
  maxDescriptorBufferBindings?: number;
  maxResourceDescriptorBufferBindings?: number;
  maxSamplerDescriptorBufferBindings?: number;
  maxEmbeddedImmutableSamplerBindings?: number;
  maxEmbeddedImmutableSamplers?: number;
  bufferCaptureReplayDescriptorDataSize?: number | bigint;
  imageCaptureReplayDescriptorDataSize?: number | bigint;
  imageViewCaptureReplayDescriptorDataSize?: number | bigint;
  samplerCaptureReplayDescriptorDataSize?: number | bigint;
  accelerationStructureCaptureReplayDescriptorDataSize?: number | bigint;
  samplerDescriptorSize?: number | bigint;
  combinedImageSamplerDescriptorSize?: number | bigint;
  sampledImageDescriptorSize?: number | bigint;
  storageImageDescriptorSize?: number | bigint;
  uniformTexelBufferDescriptorSize?: number | bigint;
  robustUniformTexelBufferDescriptorSize?: number | bigint;
  storageTexelBufferDescriptorSize?: number | bigint;
  robustStorageTexelBufferDescriptorSize?: number | bigint;
  uniformBufferDescriptorSize?: number | bigint;
  robustUniformBufferDescriptorSize?: number | bigint;
  storageBufferDescriptorSize?: number | bigint;
  robustStorageBufferDescriptorSize?: number | bigint;
  inputAttachmentDescriptorSize?: number | bigint;
  accelerationStructureDescriptorSize?: number | bigint;
  maxSamplerDescriptorBufferRange?: DeviceSize;
  maxResourceDescriptorBufferRange?: DeviceSize;
  samplerDescriptorBufferAddressSpaceSize?: DeviceSize;
  resourceDescriptorBufferAddressSpaceSize?: DeviceSize;
  descriptorBufferAddressSpaceSize?: DeviceSize;
}

export class PhysicalDeviceDescriptorBufferPropertiesEXT implements BaseStruct {
  static size = 256;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceDescriptorBufferPropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceDescriptorBufferPropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceDescriptorBufferPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceDescriptorBufferPropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceDescriptorBufferPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.combinedImageSamplerDescriptorSingleArray !== undefined) this.combinedImageSamplerDescriptorSingleArray = data.combinedImageSamplerDescriptorSingleArray;
      if (data.bufferlessPushDescriptors !== undefined) this.bufferlessPushDescriptors = data.bufferlessPushDescriptors;
      if (data.allowSamplerImageViewPostSubmitCreation !== undefined) this.allowSamplerImageViewPostSubmitCreation = data.allowSamplerImageViewPostSubmitCreation;
      if (data.descriptorBufferOffsetAlignment !== undefined) this.descriptorBufferOffsetAlignment = data.descriptorBufferOffsetAlignment;
      if (data.maxDescriptorBufferBindings !== undefined) this.maxDescriptorBufferBindings = data.maxDescriptorBufferBindings;
      if (data.maxResourceDescriptorBufferBindings !== undefined) this.maxResourceDescriptorBufferBindings = data.maxResourceDescriptorBufferBindings;
      if (data.maxSamplerDescriptorBufferBindings !== undefined) this.maxSamplerDescriptorBufferBindings = data.maxSamplerDescriptorBufferBindings;
      if (data.maxEmbeddedImmutableSamplerBindings !== undefined) this.maxEmbeddedImmutableSamplerBindings = data.maxEmbeddedImmutableSamplerBindings;
      if (data.maxEmbeddedImmutableSamplers !== undefined) this.maxEmbeddedImmutableSamplers = data.maxEmbeddedImmutableSamplers;
      if (data.bufferCaptureReplayDescriptorDataSize !== undefined) this.bufferCaptureReplayDescriptorDataSize = data.bufferCaptureReplayDescriptorDataSize;
      if (data.imageCaptureReplayDescriptorDataSize !== undefined) this.imageCaptureReplayDescriptorDataSize = data.imageCaptureReplayDescriptorDataSize;
      if (data.imageViewCaptureReplayDescriptorDataSize !== undefined) this.imageViewCaptureReplayDescriptorDataSize = data.imageViewCaptureReplayDescriptorDataSize;
      if (data.samplerCaptureReplayDescriptorDataSize !== undefined) this.samplerCaptureReplayDescriptorDataSize = data.samplerCaptureReplayDescriptorDataSize;
      if (data.accelerationStructureCaptureReplayDescriptorDataSize !== undefined) this.accelerationStructureCaptureReplayDescriptorDataSize = data.accelerationStructureCaptureReplayDescriptorDataSize;
      if (data.samplerDescriptorSize !== undefined) this.samplerDescriptorSize = data.samplerDescriptorSize;
      if (data.combinedImageSamplerDescriptorSize !== undefined) this.combinedImageSamplerDescriptorSize = data.combinedImageSamplerDescriptorSize;
      if (data.sampledImageDescriptorSize !== undefined) this.sampledImageDescriptorSize = data.sampledImageDescriptorSize;
      if (data.storageImageDescriptorSize !== undefined) this.storageImageDescriptorSize = data.storageImageDescriptorSize;
      if (data.uniformTexelBufferDescriptorSize !== undefined) this.uniformTexelBufferDescriptorSize = data.uniformTexelBufferDescriptorSize;
      if (data.robustUniformTexelBufferDescriptorSize !== undefined) this.robustUniformTexelBufferDescriptorSize = data.robustUniformTexelBufferDescriptorSize;
      if (data.storageTexelBufferDescriptorSize !== undefined) this.storageTexelBufferDescriptorSize = data.storageTexelBufferDescriptorSize;
      if (data.robustStorageTexelBufferDescriptorSize !== undefined) this.robustStorageTexelBufferDescriptorSize = data.robustStorageTexelBufferDescriptorSize;
      if (data.uniformBufferDescriptorSize !== undefined) this.uniformBufferDescriptorSize = data.uniformBufferDescriptorSize;
      if (data.robustUniformBufferDescriptorSize !== undefined) this.robustUniformBufferDescriptorSize = data.robustUniformBufferDescriptorSize;
      if (data.storageBufferDescriptorSize !== undefined) this.storageBufferDescriptorSize = data.storageBufferDescriptorSize;
      if (data.robustStorageBufferDescriptorSize !== undefined) this.robustStorageBufferDescriptorSize = data.robustStorageBufferDescriptorSize;
      if (data.inputAttachmentDescriptorSize !== undefined) this.inputAttachmentDescriptorSize = data.inputAttachmentDescriptorSize;
      if (data.accelerationStructureDescriptorSize !== undefined) this.accelerationStructureDescriptorSize = data.accelerationStructureDescriptorSize;
      if (data.maxSamplerDescriptorBufferRange !== undefined) this.maxSamplerDescriptorBufferRange = data.maxSamplerDescriptorBufferRange;
      if (data.maxResourceDescriptorBufferRange !== undefined) this.maxResourceDescriptorBufferRange = data.maxResourceDescriptorBufferRange;
      if (data.samplerDescriptorBufferAddressSpaceSize !== undefined) this.samplerDescriptorBufferAddressSpaceSize = data.samplerDescriptorBufferAddressSpaceSize;
      if (data.resourceDescriptorBufferAddressSpaceSize !== undefined) this.resourceDescriptorBufferAddressSpaceSize = data.resourceDescriptorBufferAddressSpaceSize;
      if (data.descriptorBufferAddressSpaceSize !== undefined) this.descriptorBufferAddressSpaceSize = data.descriptorBufferAddressSpaceSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceDescriptorBufferPropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_DESCRIPTOR_BUFFER_PROPERTIES_EXT;
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

  get combinedImageSamplerDescriptorSingleArray(): number {
    return this.#view.getUint32(16, LE);
  }

  set combinedImageSamplerDescriptorSingleArray(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get bufferlessPushDescriptors(): number {
    return this.#view.getUint32(20, LE);
  }

  set bufferlessPushDescriptors(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get allowSamplerImageViewPostSubmitCreation(): number {
    return this.#view.getUint32(24, LE);
  }

  set allowSamplerImageViewPostSubmitCreation(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get descriptorBufferOffsetAlignment(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set descriptorBufferOffsetAlignment(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get maxDescriptorBufferBindings(): number {
    return this.#view.getUint32(40, LE);
  }

  set maxDescriptorBufferBindings(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get maxResourceDescriptorBufferBindings(): number {
    return this.#view.getUint32(44, LE);
  }

  set maxResourceDescriptorBufferBindings(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get maxSamplerDescriptorBufferBindings(): number {
    return this.#view.getUint32(48, LE);
  }

  set maxSamplerDescriptorBufferBindings(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get maxEmbeddedImmutableSamplerBindings(): number {
    return this.#view.getUint32(52, LE);
  }

  set maxEmbeddedImmutableSamplerBindings(value: number) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get maxEmbeddedImmutableSamplers(): number {
    return this.#view.getUint32(56, LE);
  }

  set maxEmbeddedImmutableSamplers(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get bufferCaptureReplayDescriptorDataSize(): bigint {
    return this.#view.getBigUint64(64, LE);
  }

  set bufferCaptureReplayDescriptorDataSize(value: number | bigint) {
    this.#view.setBigUint64(64, BigInt(value), LE);
  }

  get imageCaptureReplayDescriptorDataSize(): bigint {
    return this.#view.getBigUint64(72, LE);
  }

  set imageCaptureReplayDescriptorDataSize(value: number | bigint) {
    this.#view.setBigUint64(72, BigInt(value), LE);
  }

  get imageViewCaptureReplayDescriptorDataSize(): bigint {
    return this.#view.getBigUint64(80, LE);
  }

  set imageViewCaptureReplayDescriptorDataSize(value: number | bigint) {
    this.#view.setBigUint64(80, BigInt(value), LE);
  }

  get samplerCaptureReplayDescriptorDataSize(): bigint {
    return this.#view.getBigUint64(88, LE);
  }

  set samplerCaptureReplayDescriptorDataSize(value: number | bigint) {
    this.#view.setBigUint64(88, BigInt(value), LE);
  }

  get accelerationStructureCaptureReplayDescriptorDataSize(): bigint {
    return this.#view.getBigUint64(96, LE);
  }

  set accelerationStructureCaptureReplayDescriptorDataSize(value: number | bigint) {
    this.#view.setBigUint64(96, BigInt(value), LE);
  }

  get samplerDescriptorSize(): bigint {
    return this.#view.getBigUint64(104, LE);
  }

  set samplerDescriptorSize(value: number | bigint) {
    this.#view.setBigUint64(104, BigInt(value), LE);
  }

  get combinedImageSamplerDescriptorSize(): bigint {
    return this.#view.getBigUint64(112, LE);
  }

  set combinedImageSamplerDescriptorSize(value: number | bigint) {
    this.#view.setBigUint64(112, BigInt(value), LE);
  }

  get sampledImageDescriptorSize(): bigint {
    return this.#view.getBigUint64(120, LE);
  }

  set sampledImageDescriptorSize(value: number | bigint) {
    this.#view.setBigUint64(120, BigInt(value), LE);
  }

  get storageImageDescriptorSize(): bigint {
    return this.#view.getBigUint64(128, LE);
  }

  set storageImageDescriptorSize(value: number | bigint) {
    this.#view.setBigUint64(128, BigInt(value), LE);
  }

  get uniformTexelBufferDescriptorSize(): bigint {
    return this.#view.getBigUint64(136, LE);
  }

  set uniformTexelBufferDescriptorSize(value: number | bigint) {
    this.#view.setBigUint64(136, BigInt(value), LE);
  }

  get robustUniformTexelBufferDescriptorSize(): bigint {
    return this.#view.getBigUint64(144, LE);
  }

  set robustUniformTexelBufferDescriptorSize(value: number | bigint) {
    this.#view.setBigUint64(144, BigInt(value), LE);
  }

  get storageTexelBufferDescriptorSize(): bigint {
    return this.#view.getBigUint64(152, LE);
  }

  set storageTexelBufferDescriptorSize(value: number | bigint) {
    this.#view.setBigUint64(152, BigInt(value), LE);
  }

  get robustStorageTexelBufferDescriptorSize(): bigint {
    return this.#view.getBigUint64(160, LE);
  }

  set robustStorageTexelBufferDescriptorSize(value: number | bigint) {
    this.#view.setBigUint64(160, BigInt(value), LE);
  }

  get uniformBufferDescriptorSize(): bigint {
    return this.#view.getBigUint64(168, LE);
  }

  set uniformBufferDescriptorSize(value: number | bigint) {
    this.#view.setBigUint64(168, BigInt(value), LE);
  }

  get robustUniformBufferDescriptorSize(): bigint {
    return this.#view.getBigUint64(176, LE);
  }

  set robustUniformBufferDescriptorSize(value: number | bigint) {
    this.#view.setBigUint64(176, BigInt(value), LE);
  }

  get storageBufferDescriptorSize(): bigint {
    return this.#view.getBigUint64(184, LE);
  }

  set storageBufferDescriptorSize(value: number | bigint) {
    this.#view.setBigUint64(184, BigInt(value), LE);
  }

  get robustStorageBufferDescriptorSize(): bigint {
    return this.#view.getBigUint64(192, LE);
  }

  set robustStorageBufferDescriptorSize(value: number | bigint) {
    this.#view.setBigUint64(192, BigInt(value), LE);
  }

  get inputAttachmentDescriptorSize(): bigint {
    return this.#view.getBigUint64(200, LE);
  }

  set inputAttachmentDescriptorSize(value: number | bigint) {
    this.#view.setBigUint64(200, BigInt(value), LE);
  }

  get accelerationStructureDescriptorSize(): bigint {
    return this.#view.getBigUint64(208, LE);
  }

  set accelerationStructureDescriptorSize(value: number | bigint) {
    this.#view.setBigUint64(208, BigInt(value), LE);
  }

  get maxSamplerDescriptorBufferRange(): bigint {
    return this.#view.getBigUint64(216, LE);
  }

  set maxSamplerDescriptorBufferRange(value: DeviceSize) {
    this.#view.setBigUint64(216, BigInt(value), LE);
  }

  get maxResourceDescriptorBufferRange(): bigint {
    return this.#view.getBigUint64(224, LE);
  }

  set maxResourceDescriptorBufferRange(value: DeviceSize) {
    this.#view.setBigUint64(224, BigInt(value), LE);
  }

  get samplerDescriptorBufferAddressSpaceSize(): bigint {
    return this.#view.getBigUint64(232, LE);
  }

  set samplerDescriptorBufferAddressSpaceSize(value: DeviceSize) {
    this.#view.setBigUint64(232, BigInt(value), LE);
  }

  get resourceDescriptorBufferAddressSpaceSize(): bigint {
    return this.#view.getBigUint64(240, LE);
  }

  set resourceDescriptorBufferAddressSpaceSize(value: DeviceSize) {
    this.#view.setBigUint64(240, BigInt(value), LE);
  }

  get descriptorBufferAddressSpaceSize(): bigint {
    return this.#view.getBigUint64(248, LE);
  }

  set descriptorBufferAddressSpaceSize(value: DeviceSize) {
    this.#view.setBigUint64(248, BigInt(value), LE);
  }
}