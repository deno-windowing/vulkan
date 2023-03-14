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
import {ConformanceVersion} from "./ConformanceVersion.ts";
import { StructureType, DriverId, ShaderFloatControlsIndependence } from "../enum.ts";
import { Bool32, ResolveModeFlags, SampleCountFlags } from "../def.ts";

export interface InitPhysicalDeviceVulkan12Properties {
  pNext?: AnyPointer;
  driverID?: DriverId;
  driverName?: Uint8Array;
  driverInfo?: Uint8Array;
  conformanceVersion?: ConformanceVersion;
  denormBehaviorIndependence?: ShaderFloatControlsIndependence;
  roundingModeIndependence?: ShaderFloatControlsIndependence;
  shaderSignedZeroInfNanPreserveFloat16?: Bool32;
  shaderSignedZeroInfNanPreserveFloat32?: Bool32;
  shaderSignedZeroInfNanPreserveFloat64?: Bool32;
  shaderDenormPreserveFloat16?: Bool32;
  shaderDenormPreserveFloat32?: Bool32;
  shaderDenormPreserveFloat64?: Bool32;
  shaderDenormFlushToZeroFloat16?: Bool32;
  shaderDenormFlushToZeroFloat32?: Bool32;
  shaderDenormFlushToZeroFloat64?: Bool32;
  shaderRoundingModeRTEFloat16?: Bool32;
  shaderRoundingModeRTEFloat32?: Bool32;
  shaderRoundingModeRTEFloat64?: Bool32;
  shaderRoundingModeRTZFloat16?: Bool32;
  shaderRoundingModeRTZFloat32?: Bool32;
  shaderRoundingModeRTZFloat64?: Bool32;
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
  supportedDepthResolveModes?: ResolveModeFlags;
  supportedStencilResolveModes?: ResolveModeFlags;
  independentResolveNone?: Bool32;
  independentResolve?: Bool32;
  filterMinmaxSingleComponentFormats?: Bool32;
  filterMinmaxImageComponentMapping?: Bool32;
  maxTimelineSemaphoreValueDifference?: number | bigint;
  framebufferIntegerColorSampleCounts?: SampleCountFlags;
}

export class PhysicalDeviceVulkan12Properties implements BaseStruct {
  static size = 736;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceVulkan12Properties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceVulkan12Properties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceVulkan12Properties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceVulkan12Properties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceVulkan12Properties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.driverID !== undefined) this.driverID = data.driverID;
      if (data.driverName !== undefined) this.driverName = data.driverName;
      if (data.driverInfo !== undefined) this.driverInfo = data.driverInfo;
      if (data.conformanceVersion !== undefined) this.conformanceVersion = data.conformanceVersion;
      if (data.denormBehaviorIndependence !== undefined) this.denormBehaviorIndependence = data.denormBehaviorIndependence;
      if (data.roundingModeIndependence !== undefined) this.roundingModeIndependence = data.roundingModeIndependence;
      if (data.shaderSignedZeroInfNanPreserveFloat16 !== undefined) this.shaderSignedZeroInfNanPreserveFloat16 = data.shaderSignedZeroInfNanPreserveFloat16;
      if (data.shaderSignedZeroInfNanPreserveFloat32 !== undefined) this.shaderSignedZeroInfNanPreserveFloat32 = data.shaderSignedZeroInfNanPreserveFloat32;
      if (data.shaderSignedZeroInfNanPreserveFloat64 !== undefined) this.shaderSignedZeroInfNanPreserveFloat64 = data.shaderSignedZeroInfNanPreserveFloat64;
      if (data.shaderDenormPreserveFloat16 !== undefined) this.shaderDenormPreserveFloat16 = data.shaderDenormPreserveFloat16;
      if (data.shaderDenormPreserveFloat32 !== undefined) this.shaderDenormPreserveFloat32 = data.shaderDenormPreserveFloat32;
      if (data.shaderDenormPreserveFloat64 !== undefined) this.shaderDenormPreserveFloat64 = data.shaderDenormPreserveFloat64;
      if (data.shaderDenormFlushToZeroFloat16 !== undefined) this.shaderDenormFlushToZeroFloat16 = data.shaderDenormFlushToZeroFloat16;
      if (data.shaderDenormFlushToZeroFloat32 !== undefined) this.shaderDenormFlushToZeroFloat32 = data.shaderDenormFlushToZeroFloat32;
      if (data.shaderDenormFlushToZeroFloat64 !== undefined) this.shaderDenormFlushToZeroFloat64 = data.shaderDenormFlushToZeroFloat64;
      if (data.shaderRoundingModeRTEFloat16 !== undefined) this.shaderRoundingModeRTEFloat16 = data.shaderRoundingModeRTEFloat16;
      if (data.shaderRoundingModeRTEFloat32 !== undefined) this.shaderRoundingModeRTEFloat32 = data.shaderRoundingModeRTEFloat32;
      if (data.shaderRoundingModeRTEFloat64 !== undefined) this.shaderRoundingModeRTEFloat64 = data.shaderRoundingModeRTEFloat64;
      if (data.shaderRoundingModeRTZFloat16 !== undefined) this.shaderRoundingModeRTZFloat16 = data.shaderRoundingModeRTZFloat16;
      if (data.shaderRoundingModeRTZFloat32 !== undefined) this.shaderRoundingModeRTZFloat32 = data.shaderRoundingModeRTZFloat32;
      if (data.shaderRoundingModeRTZFloat64 !== undefined) this.shaderRoundingModeRTZFloat64 = data.shaderRoundingModeRTZFloat64;
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
      if (data.supportedDepthResolveModes !== undefined) this.supportedDepthResolveModes = data.supportedDepthResolveModes;
      if (data.supportedStencilResolveModes !== undefined) this.supportedStencilResolveModes = data.supportedStencilResolveModes;
      if (data.independentResolveNone !== undefined) this.independentResolveNone = data.independentResolveNone;
      if (data.independentResolve !== undefined) this.independentResolve = data.independentResolve;
      if (data.filterMinmaxSingleComponentFormats !== undefined) this.filterMinmaxSingleComponentFormats = data.filterMinmaxSingleComponentFormats;
      if (data.filterMinmaxImageComponentMapping !== undefined) this.filterMinmaxImageComponentMapping = data.filterMinmaxImageComponentMapping;
      if (data.maxTimelineSemaphoreValueDifference !== undefined) this.maxTimelineSemaphoreValueDifference = data.maxTimelineSemaphoreValueDifference;
      if (data.framebufferIntegerColorSampleCounts !== undefined) this.framebufferIntegerColorSampleCounts = data.framebufferIntegerColorSampleCounts;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceVulkan12Properties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_VULKAN_1_2_PROPERTIES;
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

  get driverID() {
    return this.#view.getUint32(16, LE);
  }

  set driverID(value: DriverId) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get driverName() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 20, 256);
  }

  set driverName(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 20);
  }

  get driverInfo() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 276, 256);
  }

  set driverInfo(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 276);
  }

  get conformanceVersion() {
    return new ConformanceVersion(this.#data.subarray(532, 532 + ConformanceVersion.size));
  }

  set conformanceVersion(value: ConformanceVersion) {
    if (value[BUFFER].byteLength < ConformanceVersion.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 532);
  }

  get denormBehaviorIndependence() {
    return this.#view.getUint32(536, LE);
  }

  set denormBehaviorIndependence(value: ShaderFloatControlsIndependence) {
    this.#view.setUint32(536, Number(value), LE);
  }

  get roundingModeIndependence() {
    return this.#view.getUint32(540, LE);
  }

  set roundingModeIndependence(value: ShaderFloatControlsIndependence) {
    this.#view.setUint32(540, Number(value), LE);
  }

  get shaderSignedZeroInfNanPreserveFloat16() {
    return this.#view.getUint32(544, LE);
  }

  set shaderSignedZeroInfNanPreserveFloat16(value: Bool32) {
    this.#view.setUint32(544, Number(value), LE);
  }

  get shaderSignedZeroInfNanPreserveFloat32() {
    return this.#view.getUint32(548, LE);
  }

  set shaderSignedZeroInfNanPreserveFloat32(value: Bool32) {
    this.#view.setUint32(548, Number(value), LE);
  }

  get shaderSignedZeroInfNanPreserveFloat64() {
    return this.#view.getUint32(552, LE);
  }

  set shaderSignedZeroInfNanPreserveFloat64(value: Bool32) {
    this.#view.setUint32(552, Number(value), LE);
  }

  get shaderDenormPreserveFloat16() {
    return this.#view.getUint32(556, LE);
  }

  set shaderDenormPreserveFloat16(value: Bool32) {
    this.#view.setUint32(556, Number(value), LE);
  }

  get shaderDenormPreserveFloat32() {
    return this.#view.getUint32(560, LE);
  }

  set shaderDenormPreserveFloat32(value: Bool32) {
    this.#view.setUint32(560, Number(value), LE);
  }

  get shaderDenormPreserveFloat64() {
    return this.#view.getUint32(564, LE);
  }

  set shaderDenormPreserveFloat64(value: Bool32) {
    this.#view.setUint32(564, Number(value), LE);
  }

  get shaderDenormFlushToZeroFloat16() {
    return this.#view.getUint32(568, LE);
  }

  set shaderDenormFlushToZeroFloat16(value: Bool32) {
    this.#view.setUint32(568, Number(value), LE);
  }

  get shaderDenormFlushToZeroFloat32() {
    return this.#view.getUint32(572, LE);
  }

  set shaderDenormFlushToZeroFloat32(value: Bool32) {
    this.#view.setUint32(572, Number(value), LE);
  }

  get shaderDenormFlushToZeroFloat64() {
    return this.#view.getUint32(576, LE);
  }

  set shaderDenormFlushToZeroFloat64(value: Bool32) {
    this.#view.setUint32(576, Number(value), LE);
  }

  get shaderRoundingModeRTEFloat16() {
    return this.#view.getUint32(580, LE);
  }

  set shaderRoundingModeRTEFloat16(value: Bool32) {
    this.#view.setUint32(580, Number(value), LE);
  }

  get shaderRoundingModeRTEFloat32() {
    return this.#view.getUint32(584, LE);
  }

  set shaderRoundingModeRTEFloat32(value: Bool32) {
    this.#view.setUint32(584, Number(value), LE);
  }

  get shaderRoundingModeRTEFloat64() {
    return this.#view.getUint32(588, LE);
  }

  set shaderRoundingModeRTEFloat64(value: Bool32) {
    this.#view.setUint32(588, Number(value), LE);
  }

  get shaderRoundingModeRTZFloat16() {
    return this.#view.getUint32(592, LE);
  }

  set shaderRoundingModeRTZFloat16(value: Bool32) {
    this.#view.setUint32(592, Number(value), LE);
  }

  get shaderRoundingModeRTZFloat32() {
    return this.#view.getUint32(596, LE);
  }

  set shaderRoundingModeRTZFloat32(value: Bool32) {
    this.#view.setUint32(596, Number(value), LE);
  }

  get shaderRoundingModeRTZFloat64() {
    return this.#view.getUint32(600, LE);
  }

  set shaderRoundingModeRTZFloat64(value: Bool32) {
    this.#view.setUint32(600, Number(value), LE);
  }

  get maxUpdateAfterBindDescriptorsInAllPools() {
    return this.#view.getUint32(604, LE);
  }

  set maxUpdateAfterBindDescriptorsInAllPools(value: number) {
    this.#view.setUint32(604, Number(value), LE);
  }

  get shaderUniformBufferArrayNonUniformIndexingNative() {
    return this.#view.getUint32(608, LE);
  }

  set shaderUniformBufferArrayNonUniformIndexingNative(value: Bool32) {
    this.#view.setUint32(608, Number(value), LE);
  }

  get shaderSampledImageArrayNonUniformIndexingNative() {
    return this.#view.getUint32(612, LE);
  }

  set shaderSampledImageArrayNonUniformIndexingNative(value: Bool32) {
    this.#view.setUint32(612, Number(value), LE);
  }

  get shaderStorageBufferArrayNonUniformIndexingNative() {
    return this.#view.getUint32(616, LE);
  }

  set shaderStorageBufferArrayNonUniformIndexingNative(value: Bool32) {
    this.#view.setUint32(616, Number(value), LE);
  }

  get shaderStorageImageArrayNonUniformIndexingNative() {
    return this.#view.getUint32(620, LE);
  }

  set shaderStorageImageArrayNonUniformIndexingNative(value: Bool32) {
    this.#view.setUint32(620, Number(value), LE);
  }

  get shaderInputAttachmentArrayNonUniformIndexingNative() {
    return this.#view.getUint32(624, LE);
  }

  set shaderInputAttachmentArrayNonUniformIndexingNative(value: Bool32) {
    this.#view.setUint32(624, Number(value), LE);
  }

  get robustBufferAccessUpdateAfterBind() {
    return this.#view.getUint32(628, LE);
  }

  set robustBufferAccessUpdateAfterBind(value: Bool32) {
    this.#view.setUint32(628, Number(value), LE);
  }

  get quadDivergentImplicitLod() {
    return this.#view.getUint32(632, LE);
  }

  set quadDivergentImplicitLod(value: Bool32) {
    this.#view.setUint32(632, Number(value), LE);
  }

  get maxPerStageDescriptorUpdateAfterBindSamplers() {
    return this.#view.getUint32(636, LE);
  }

  set maxPerStageDescriptorUpdateAfterBindSamplers(value: number) {
    this.#view.setUint32(636, Number(value), LE);
  }

  get maxPerStageDescriptorUpdateAfterBindUniformBuffers() {
    return this.#view.getUint32(640, LE);
  }

  set maxPerStageDescriptorUpdateAfterBindUniformBuffers(value: number) {
    this.#view.setUint32(640, Number(value), LE);
  }

  get maxPerStageDescriptorUpdateAfterBindStorageBuffers() {
    return this.#view.getUint32(644, LE);
  }

  set maxPerStageDescriptorUpdateAfterBindStorageBuffers(value: number) {
    this.#view.setUint32(644, Number(value), LE);
  }

  get maxPerStageDescriptorUpdateAfterBindSampledImages() {
    return this.#view.getUint32(648, LE);
  }

  set maxPerStageDescriptorUpdateAfterBindSampledImages(value: number) {
    this.#view.setUint32(648, Number(value), LE);
  }

  get maxPerStageDescriptorUpdateAfterBindStorageImages() {
    return this.#view.getUint32(652, LE);
  }

  set maxPerStageDescriptorUpdateAfterBindStorageImages(value: number) {
    this.#view.setUint32(652, Number(value), LE);
  }

  get maxPerStageDescriptorUpdateAfterBindInputAttachments() {
    return this.#view.getUint32(656, LE);
  }

  set maxPerStageDescriptorUpdateAfterBindInputAttachments(value: number) {
    this.#view.setUint32(656, Number(value), LE);
  }

  get maxPerStageUpdateAfterBindResources() {
    return this.#view.getUint32(660, LE);
  }

  set maxPerStageUpdateAfterBindResources(value: number) {
    this.#view.setUint32(660, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindSamplers() {
    return this.#view.getUint32(664, LE);
  }

  set maxDescriptorSetUpdateAfterBindSamplers(value: number) {
    this.#view.setUint32(664, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindUniformBuffers() {
    return this.#view.getUint32(668, LE);
  }

  set maxDescriptorSetUpdateAfterBindUniformBuffers(value: number) {
    this.#view.setUint32(668, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindUniformBuffersDynamic() {
    return this.#view.getUint32(672, LE);
  }

  set maxDescriptorSetUpdateAfterBindUniformBuffersDynamic(value: number) {
    this.#view.setUint32(672, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindStorageBuffers() {
    return this.#view.getUint32(676, LE);
  }

  set maxDescriptorSetUpdateAfterBindStorageBuffers(value: number) {
    this.#view.setUint32(676, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindStorageBuffersDynamic() {
    return this.#view.getUint32(680, LE);
  }

  set maxDescriptorSetUpdateAfterBindStorageBuffersDynamic(value: number) {
    this.#view.setUint32(680, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindSampledImages() {
    return this.#view.getUint32(684, LE);
  }

  set maxDescriptorSetUpdateAfterBindSampledImages(value: number) {
    this.#view.setUint32(684, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindStorageImages() {
    return this.#view.getUint32(688, LE);
  }

  set maxDescriptorSetUpdateAfterBindStorageImages(value: number) {
    this.#view.setUint32(688, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindInputAttachments() {
    return this.#view.getUint32(692, LE);
  }

  set maxDescriptorSetUpdateAfterBindInputAttachments(value: number) {
    this.#view.setUint32(692, Number(value), LE);
  }

  get supportedDepthResolveModes() {
    return this.#view.getUint32(696, LE);
  }

  set supportedDepthResolveModes(value: ResolveModeFlags) {
    this.#view.setUint32(696, Number(value), LE);
  }

  get supportedStencilResolveModes() {
    return this.#view.getUint32(700, LE);
  }

  set supportedStencilResolveModes(value: ResolveModeFlags) {
    this.#view.setUint32(700, Number(value), LE);
  }

  get independentResolveNone() {
    return this.#view.getUint32(704, LE);
  }

  set independentResolveNone(value: Bool32) {
    this.#view.setUint32(704, Number(value), LE);
  }

  get independentResolve() {
    return this.#view.getUint32(708, LE);
  }

  set independentResolve(value: Bool32) {
    this.#view.setUint32(708, Number(value), LE);
  }

  get filterMinmaxSingleComponentFormats() {
    return this.#view.getUint32(712, LE);
  }

  set filterMinmaxSingleComponentFormats(value: Bool32) {
    this.#view.setUint32(712, Number(value), LE);
  }

  get filterMinmaxImageComponentMapping() {
    return this.#view.getUint32(716, LE);
  }

  set filterMinmaxImageComponentMapping(value: Bool32) {
    this.#view.setUint32(716, Number(value), LE);
  }

  get maxTimelineSemaphoreValueDifference() {
    return this.#view.getBigUint64(720, LE);
  }

  set maxTimelineSemaphoreValueDifference(value: number | bigint) {
    this.#view.setBigUint64(720, BigInt(value), LE);
  }

  get framebufferIntegerColorSampleCounts() {
    return this.#view.getUint32(728, LE);
  }

  set framebufferIntegerColorSampleCounts(value: SampleCountFlags) {
    this.#view.setUint32(728, Number(value), LE);
  }
}