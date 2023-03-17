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
import { DeviceSize, SampleCountFlags, Bool32 } from "../def.ts";

export interface InitPhysicalDeviceLimits {
  maxImageDimension1D?: number;
  maxImageDimension2D?: number;
  maxImageDimension3D?: number;
  maxImageDimensionCube?: number;
  maxImageArrayLayers?: number;
  maxTexelBufferElements?: number;
  maxUniformBufferRange?: number;
  maxStorageBufferRange?: number;
  maxPushConstantsSize?: number;
  maxMemoryAllocationCount?: number;
  maxSamplerAllocationCount?: number;
  bufferImageGranularity?: DeviceSize;
  sparseAddressSpaceSize?: DeviceSize;
  maxBoundDescriptorSets?: number;
  maxPerStageDescriptorSamplers?: number;
  maxPerStageDescriptorUniformBuffers?: number;
  maxPerStageDescriptorStorageBuffers?: number;
  maxPerStageDescriptorSampledImages?: number;
  maxPerStageDescriptorStorageImages?: number;
  maxPerStageDescriptorInputAttachments?: number;
  maxPerStageResources?: number;
  maxDescriptorSetSamplers?: number;
  maxDescriptorSetUniformBuffers?: number;
  maxDescriptorSetUniformBuffersDynamic?: number;
  maxDescriptorSetStorageBuffers?: number;
  maxDescriptorSetStorageBuffersDynamic?: number;
  maxDescriptorSetSampledImages?: number;
  maxDescriptorSetStorageImages?: number;
  maxDescriptorSetInputAttachments?: number;
  maxVertexInputAttributes?: number;
  maxVertexInputBindings?: number;
  maxVertexInputAttributeOffset?: number;
  maxVertexInputBindingStride?: number;
  maxVertexOutputComponents?: number;
  maxTessellationGenerationLevel?: number;
  maxTessellationPatchSize?: number;
  maxTessellationControlPerVertexInputComponents?: number;
  maxTessellationControlPerVertexOutputComponents?: number;
  maxTessellationControlPerPatchOutputComponents?: number;
  maxTessellationControlTotalOutputComponents?: number;
  maxTessellationEvaluationInputComponents?: number;
  maxTessellationEvaluationOutputComponents?: number;
  maxGeometryShaderInvocations?: number;
  maxGeometryInputComponents?: number;
  maxGeometryOutputComponents?: number;
  maxGeometryOutputVertices?: number;
  maxGeometryTotalOutputComponents?: number;
  maxFragmentInputComponents?: number;
  maxFragmentOutputAttachments?: number;
  maxFragmentDualSrcAttachments?: number;
  maxFragmentCombinedOutputResources?: number;
  maxComputeSharedMemorySize?: number;
  maxComputeWorkGroupCount?: Uint32Array;
  maxComputeWorkGroupInvocations?: number;
  maxComputeWorkGroupSize?: Uint32Array;
  subPixelPrecisionBits?: number;
  subTexelPrecisionBits?: number;
  mipmapPrecisionBits?: number;
  maxDrawIndexedIndexValue?: number;
  maxDrawIndirectCount?: number;
  maxSamplerLodBias?: number;
  maxSamplerAnisotropy?: number;
  maxViewports?: number;
  maxViewportDimensions?: Uint32Array;
  viewportBoundsRange?: Float32Array;
  viewportSubPixelBits?: number;
  minMemoryMapAlignment?: number | bigint;
  minTexelBufferOffsetAlignment?: DeviceSize;
  minUniformBufferOffsetAlignment?: DeviceSize;
  minStorageBufferOffsetAlignment?: DeviceSize;
  minTexelOffset?: number;
  maxTexelOffset?: number;
  minTexelGatherOffset?: number;
  maxTexelGatherOffset?: number;
  minInterpolationOffset?: number;
  maxInterpolationOffset?: number;
  subPixelInterpolationOffsetBits?: number;
  maxFramebufferWidth?: number;
  maxFramebufferHeight?: number;
  maxFramebufferLayers?: number;
  framebufferColorSampleCounts?: SampleCountFlags;
  framebufferDepthSampleCounts?: SampleCountFlags;
  framebufferStencilSampleCounts?: SampleCountFlags;
  framebufferNoAttachmentsSampleCounts?: SampleCountFlags;
  maxColorAttachments?: number;
  sampledImageColorSampleCounts?: SampleCountFlags;
  sampledImageIntegerSampleCounts?: SampleCountFlags;
  sampledImageDepthSampleCounts?: SampleCountFlags;
  sampledImageStencilSampleCounts?: SampleCountFlags;
  storageImageSampleCounts?: SampleCountFlags;
  maxSampleMaskWords?: number;
  timestampComputeAndGraphics?: Bool32;
  timestampPeriod?: number;
  maxClipDistances?: number;
  maxCullDistances?: number;
  maxCombinedClipAndCullDistances?: number;
  discreteQueuePriorities?: number;
  pointSizeRange?: Float32Array;
  lineWidthRange?: Float32Array;
  pointSizeGranularity?: number;
  lineWidthGranularity?: number;
  strictLines?: Bool32;
  standardSampleLocations?: Bool32;
  optimalBufferCopyOffsetAlignment?: DeviceSize;
  optimalBufferCopyRowPitchAlignment?: DeviceSize;
  nonCoherentAtomSize?: DeviceSize;
}

export class PhysicalDeviceLimits implements BaseStruct {
  static size = 504;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceLimits);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceLimits) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceLimits.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceLimits.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceLimits.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.maxImageDimension1D !== undefined) this.maxImageDimension1D = data.maxImageDimension1D;
      if (data.maxImageDimension2D !== undefined) this.maxImageDimension2D = data.maxImageDimension2D;
      if (data.maxImageDimension3D !== undefined) this.maxImageDimension3D = data.maxImageDimension3D;
      if (data.maxImageDimensionCube !== undefined) this.maxImageDimensionCube = data.maxImageDimensionCube;
      if (data.maxImageArrayLayers !== undefined) this.maxImageArrayLayers = data.maxImageArrayLayers;
      if (data.maxTexelBufferElements !== undefined) this.maxTexelBufferElements = data.maxTexelBufferElements;
      if (data.maxUniformBufferRange !== undefined) this.maxUniformBufferRange = data.maxUniformBufferRange;
      if (data.maxStorageBufferRange !== undefined) this.maxStorageBufferRange = data.maxStorageBufferRange;
      if (data.maxPushConstantsSize !== undefined) this.maxPushConstantsSize = data.maxPushConstantsSize;
      if (data.maxMemoryAllocationCount !== undefined) this.maxMemoryAllocationCount = data.maxMemoryAllocationCount;
      if (data.maxSamplerAllocationCount !== undefined) this.maxSamplerAllocationCount = data.maxSamplerAllocationCount;
      if (data.bufferImageGranularity !== undefined) this.bufferImageGranularity = data.bufferImageGranularity;
      if (data.sparseAddressSpaceSize !== undefined) this.sparseAddressSpaceSize = data.sparseAddressSpaceSize;
      if (data.maxBoundDescriptorSets !== undefined) this.maxBoundDescriptorSets = data.maxBoundDescriptorSets;
      if (data.maxPerStageDescriptorSamplers !== undefined) this.maxPerStageDescriptorSamplers = data.maxPerStageDescriptorSamplers;
      if (data.maxPerStageDescriptorUniformBuffers !== undefined) this.maxPerStageDescriptorUniformBuffers = data.maxPerStageDescriptorUniformBuffers;
      if (data.maxPerStageDescriptorStorageBuffers !== undefined) this.maxPerStageDescriptorStorageBuffers = data.maxPerStageDescriptorStorageBuffers;
      if (data.maxPerStageDescriptorSampledImages !== undefined) this.maxPerStageDescriptorSampledImages = data.maxPerStageDescriptorSampledImages;
      if (data.maxPerStageDescriptorStorageImages !== undefined) this.maxPerStageDescriptorStorageImages = data.maxPerStageDescriptorStorageImages;
      if (data.maxPerStageDescriptorInputAttachments !== undefined) this.maxPerStageDescriptorInputAttachments = data.maxPerStageDescriptorInputAttachments;
      if (data.maxPerStageResources !== undefined) this.maxPerStageResources = data.maxPerStageResources;
      if (data.maxDescriptorSetSamplers !== undefined) this.maxDescriptorSetSamplers = data.maxDescriptorSetSamplers;
      if (data.maxDescriptorSetUniformBuffers !== undefined) this.maxDescriptorSetUniformBuffers = data.maxDescriptorSetUniformBuffers;
      if (data.maxDescriptorSetUniformBuffersDynamic !== undefined) this.maxDescriptorSetUniformBuffersDynamic = data.maxDescriptorSetUniformBuffersDynamic;
      if (data.maxDescriptorSetStorageBuffers !== undefined) this.maxDescriptorSetStorageBuffers = data.maxDescriptorSetStorageBuffers;
      if (data.maxDescriptorSetStorageBuffersDynamic !== undefined) this.maxDescriptorSetStorageBuffersDynamic = data.maxDescriptorSetStorageBuffersDynamic;
      if (data.maxDescriptorSetSampledImages !== undefined) this.maxDescriptorSetSampledImages = data.maxDescriptorSetSampledImages;
      if (data.maxDescriptorSetStorageImages !== undefined) this.maxDescriptorSetStorageImages = data.maxDescriptorSetStorageImages;
      if (data.maxDescriptorSetInputAttachments !== undefined) this.maxDescriptorSetInputAttachments = data.maxDescriptorSetInputAttachments;
      if (data.maxVertexInputAttributes !== undefined) this.maxVertexInputAttributes = data.maxVertexInputAttributes;
      if (data.maxVertexInputBindings !== undefined) this.maxVertexInputBindings = data.maxVertexInputBindings;
      if (data.maxVertexInputAttributeOffset !== undefined) this.maxVertexInputAttributeOffset = data.maxVertexInputAttributeOffset;
      if (data.maxVertexInputBindingStride !== undefined) this.maxVertexInputBindingStride = data.maxVertexInputBindingStride;
      if (data.maxVertexOutputComponents !== undefined) this.maxVertexOutputComponents = data.maxVertexOutputComponents;
      if (data.maxTessellationGenerationLevel !== undefined) this.maxTessellationGenerationLevel = data.maxTessellationGenerationLevel;
      if (data.maxTessellationPatchSize !== undefined) this.maxTessellationPatchSize = data.maxTessellationPatchSize;
      if (data.maxTessellationControlPerVertexInputComponents !== undefined) this.maxTessellationControlPerVertexInputComponents = data.maxTessellationControlPerVertexInputComponents;
      if (data.maxTessellationControlPerVertexOutputComponents !== undefined) this.maxTessellationControlPerVertexOutputComponents = data.maxTessellationControlPerVertexOutputComponents;
      if (data.maxTessellationControlPerPatchOutputComponents !== undefined) this.maxTessellationControlPerPatchOutputComponents = data.maxTessellationControlPerPatchOutputComponents;
      if (data.maxTessellationControlTotalOutputComponents !== undefined) this.maxTessellationControlTotalOutputComponents = data.maxTessellationControlTotalOutputComponents;
      if (data.maxTessellationEvaluationInputComponents !== undefined) this.maxTessellationEvaluationInputComponents = data.maxTessellationEvaluationInputComponents;
      if (data.maxTessellationEvaluationOutputComponents !== undefined) this.maxTessellationEvaluationOutputComponents = data.maxTessellationEvaluationOutputComponents;
      if (data.maxGeometryShaderInvocations !== undefined) this.maxGeometryShaderInvocations = data.maxGeometryShaderInvocations;
      if (data.maxGeometryInputComponents !== undefined) this.maxGeometryInputComponents = data.maxGeometryInputComponents;
      if (data.maxGeometryOutputComponents !== undefined) this.maxGeometryOutputComponents = data.maxGeometryOutputComponents;
      if (data.maxGeometryOutputVertices !== undefined) this.maxGeometryOutputVertices = data.maxGeometryOutputVertices;
      if (data.maxGeometryTotalOutputComponents !== undefined) this.maxGeometryTotalOutputComponents = data.maxGeometryTotalOutputComponents;
      if (data.maxFragmentInputComponents !== undefined) this.maxFragmentInputComponents = data.maxFragmentInputComponents;
      if (data.maxFragmentOutputAttachments !== undefined) this.maxFragmentOutputAttachments = data.maxFragmentOutputAttachments;
      if (data.maxFragmentDualSrcAttachments !== undefined) this.maxFragmentDualSrcAttachments = data.maxFragmentDualSrcAttachments;
      if (data.maxFragmentCombinedOutputResources !== undefined) this.maxFragmentCombinedOutputResources = data.maxFragmentCombinedOutputResources;
      if (data.maxComputeSharedMemorySize !== undefined) this.maxComputeSharedMemorySize = data.maxComputeSharedMemorySize;
      if (data.maxComputeWorkGroupCount !== undefined) this.maxComputeWorkGroupCount = data.maxComputeWorkGroupCount;
      if (data.maxComputeWorkGroupInvocations !== undefined) this.maxComputeWorkGroupInvocations = data.maxComputeWorkGroupInvocations;
      if (data.maxComputeWorkGroupSize !== undefined) this.maxComputeWorkGroupSize = data.maxComputeWorkGroupSize;
      if (data.subPixelPrecisionBits !== undefined) this.subPixelPrecisionBits = data.subPixelPrecisionBits;
      if (data.subTexelPrecisionBits !== undefined) this.subTexelPrecisionBits = data.subTexelPrecisionBits;
      if (data.mipmapPrecisionBits !== undefined) this.mipmapPrecisionBits = data.mipmapPrecisionBits;
      if (data.maxDrawIndexedIndexValue !== undefined) this.maxDrawIndexedIndexValue = data.maxDrawIndexedIndexValue;
      if (data.maxDrawIndirectCount !== undefined) this.maxDrawIndirectCount = data.maxDrawIndirectCount;
      if (data.maxSamplerLodBias !== undefined) this.maxSamplerLodBias = data.maxSamplerLodBias;
      if (data.maxSamplerAnisotropy !== undefined) this.maxSamplerAnisotropy = data.maxSamplerAnisotropy;
      if (data.maxViewports !== undefined) this.maxViewports = data.maxViewports;
      if (data.maxViewportDimensions !== undefined) this.maxViewportDimensions = data.maxViewportDimensions;
      if (data.viewportBoundsRange !== undefined) this.viewportBoundsRange = data.viewportBoundsRange;
      if (data.viewportSubPixelBits !== undefined) this.viewportSubPixelBits = data.viewportSubPixelBits;
      if (data.minMemoryMapAlignment !== undefined) this.minMemoryMapAlignment = data.minMemoryMapAlignment;
      if (data.minTexelBufferOffsetAlignment !== undefined) this.minTexelBufferOffsetAlignment = data.minTexelBufferOffsetAlignment;
      if (data.minUniformBufferOffsetAlignment !== undefined) this.minUniformBufferOffsetAlignment = data.minUniformBufferOffsetAlignment;
      if (data.minStorageBufferOffsetAlignment !== undefined) this.minStorageBufferOffsetAlignment = data.minStorageBufferOffsetAlignment;
      if (data.minTexelOffset !== undefined) this.minTexelOffset = data.minTexelOffset;
      if (data.maxTexelOffset !== undefined) this.maxTexelOffset = data.maxTexelOffset;
      if (data.minTexelGatherOffset !== undefined) this.minTexelGatherOffset = data.minTexelGatherOffset;
      if (data.maxTexelGatherOffset !== undefined) this.maxTexelGatherOffset = data.maxTexelGatherOffset;
      if (data.minInterpolationOffset !== undefined) this.minInterpolationOffset = data.minInterpolationOffset;
      if (data.maxInterpolationOffset !== undefined) this.maxInterpolationOffset = data.maxInterpolationOffset;
      if (data.subPixelInterpolationOffsetBits !== undefined) this.subPixelInterpolationOffsetBits = data.subPixelInterpolationOffsetBits;
      if (data.maxFramebufferWidth !== undefined) this.maxFramebufferWidth = data.maxFramebufferWidth;
      if (data.maxFramebufferHeight !== undefined) this.maxFramebufferHeight = data.maxFramebufferHeight;
      if (data.maxFramebufferLayers !== undefined) this.maxFramebufferLayers = data.maxFramebufferLayers;
      if (data.framebufferColorSampleCounts !== undefined) this.framebufferColorSampleCounts = data.framebufferColorSampleCounts;
      if (data.framebufferDepthSampleCounts !== undefined) this.framebufferDepthSampleCounts = data.framebufferDepthSampleCounts;
      if (data.framebufferStencilSampleCounts !== undefined) this.framebufferStencilSampleCounts = data.framebufferStencilSampleCounts;
      if (data.framebufferNoAttachmentsSampleCounts !== undefined) this.framebufferNoAttachmentsSampleCounts = data.framebufferNoAttachmentsSampleCounts;
      if (data.maxColorAttachments !== undefined) this.maxColorAttachments = data.maxColorAttachments;
      if (data.sampledImageColorSampleCounts !== undefined) this.sampledImageColorSampleCounts = data.sampledImageColorSampleCounts;
      if (data.sampledImageIntegerSampleCounts !== undefined) this.sampledImageIntegerSampleCounts = data.sampledImageIntegerSampleCounts;
      if (data.sampledImageDepthSampleCounts !== undefined) this.sampledImageDepthSampleCounts = data.sampledImageDepthSampleCounts;
      if (data.sampledImageStencilSampleCounts !== undefined) this.sampledImageStencilSampleCounts = data.sampledImageStencilSampleCounts;
      if (data.storageImageSampleCounts !== undefined) this.storageImageSampleCounts = data.storageImageSampleCounts;
      if (data.maxSampleMaskWords !== undefined) this.maxSampleMaskWords = data.maxSampleMaskWords;
      if (data.timestampComputeAndGraphics !== undefined) this.timestampComputeAndGraphics = data.timestampComputeAndGraphics;
      if (data.timestampPeriod !== undefined) this.timestampPeriod = data.timestampPeriod;
      if (data.maxClipDistances !== undefined) this.maxClipDistances = data.maxClipDistances;
      if (data.maxCullDistances !== undefined) this.maxCullDistances = data.maxCullDistances;
      if (data.maxCombinedClipAndCullDistances !== undefined) this.maxCombinedClipAndCullDistances = data.maxCombinedClipAndCullDistances;
      if (data.discreteQueuePriorities !== undefined) this.discreteQueuePriorities = data.discreteQueuePriorities;
      if (data.pointSizeRange !== undefined) this.pointSizeRange = data.pointSizeRange;
      if (data.lineWidthRange !== undefined) this.lineWidthRange = data.lineWidthRange;
      if (data.pointSizeGranularity !== undefined) this.pointSizeGranularity = data.pointSizeGranularity;
      if (data.lineWidthGranularity !== undefined) this.lineWidthGranularity = data.lineWidthGranularity;
      if (data.strictLines !== undefined) this.strictLines = data.strictLines;
      if (data.standardSampleLocations !== undefined) this.standardSampleLocations = data.standardSampleLocations;
      if (data.optimalBufferCopyOffsetAlignment !== undefined) this.optimalBufferCopyOffsetAlignment = data.optimalBufferCopyOffsetAlignment;
      if (data.optimalBufferCopyRowPitchAlignment !== undefined) this.optimalBufferCopyRowPitchAlignment = data.optimalBufferCopyRowPitchAlignment;
      if (data.nonCoherentAtomSize !== undefined) this.nonCoherentAtomSize = data.nonCoherentAtomSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceLimits.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get maxImageDimension1D(): number {
    return this.#view.getUint32(0, LE);
  }

  set maxImageDimension1D(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get maxImageDimension2D(): number {
    return this.#view.getUint32(4, LE);
  }

  set maxImageDimension2D(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get maxImageDimension3D(): number {
    return this.#view.getUint32(8, LE);
  }

  set maxImageDimension3D(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get maxImageDimensionCube(): number {
    return this.#view.getUint32(12, LE);
  }

  set maxImageDimensionCube(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get maxImageArrayLayers(): number {
    return this.#view.getUint32(16, LE);
  }

  set maxImageArrayLayers(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxTexelBufferElements(): number {
    return this.#view.getUint32(20, LE);
  }

  set maxTexelBufferElements(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get maxUniformBufferRange(): number {
    return this.#view.getUint32(24, LE);
  }

  set maxUniformBufferRange(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get maxStorageBufferRange(): number {
    return this.#view.getUint32(28, LE);
  }

  set maxStorageBufferRange(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get maxPushConstantsSize(): number {
    return this.#view.getUint32(32, LE);
  }

  set maxPushConstantsSize(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get maxMemoryAllocationCount(): number {
    return this.#view.getUint32(36, LE);
  }

  set maxMemoryAllocationCount(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get maxSamplerAllocationCount(): number {
    return this.#view.getUint32(40, LE);
  }

  set maxSamplerAllocationCount(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get bufferImageGranularity(): bigint {
    return this.#view.getBigUint64(48, LE);
  }

  set bufferImageGranularity(value: DeviceSize) {
    this.#view.setBigUint64(48, BigInt(value), LE);
  }

  get sparseAddressSpaceSize(): bigint {
    return this.#view.getBigUint64(56, LE);
  }

  set sparseAddressSpaceSize(value: DeviceSize) {
    this.#view.setBigUint64(56, BigInt(value), LE);
  }

  get maxBoundDescriptorSets(): number {
    return this.#view.getUint32(64, LE);
  }

  set maxBoundDescriptorSets(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get maxPerStageDescriptorSamplers(): number {
    return this.#view.getUint32(68, LE);
  }

  set maxPerStageDescriptorSamplers(value: number) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get maxPerStageDescriptorUniformBuffers(): number {
    return this.#view.getUint32(72, LE);
  }

  set maxPerStageDescriptorUniformBuffers(value: number) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get maxPerStageDescriptorStorageBuffers(): number {
    return this.#view.getUint32(76, LE);
  }

  set maxPerStageDescriptorStorageBuffers(value: number) {
    this.#view.setUint32(76, Number(value), LE);
  }

  get maxPerStageDescriptorSampledImages(): number {
    return this.#view.getUint32(80, LE);
  }

  set maxPerStageDescriptorSampledImages(value: number) {
    this.#view.setUint32(80, Number(value), LE);
  }

  get maxPerStageDescriptorStorageImages(): number {
    return this.#view.getUint32(84, LE);
  }

  set maxPerStageDescriptorStorageImages(value: number) {
    this.#view.setUint32(84, Number(value), LE);
  }

  get maxPerStageDescriptorInputAttachments(): number {
    return this.#view.getUint32(88, LE);
  }

  set maxPerStageDescriptorInputAttachments(value: number) {
    this.#view.setUint32(88, Number(value), LE);
  }

  get maxPerStageResources(): number {
    return this.#view.getUint32(92, LE);
  }

  set maxPerStageResources(value: number) {
    this.#view.setUint32(92, Number(value), LE);
  }

  get maxDescriptorSetSamplers(): number {
    return this.#view.getUint32(96, LE);
  }

  set maxDescriptorSetSamplers(value: number) {
    this.#view.setUint32(96, Number(value), LE);
  }

  get maxDescriptorSetUniformBuffers(): number {
    return this.#view.getUint32(100, LE);
  }

  set maxDescriptorSetUniformBuffers(value: number) {
    this.#view.setUint32(100, Number(value), LE);
  }

  get maxDescriptorSetUniformBuffersDynamic(): number {
    return this.#view.getUint32(104, LE);
  }

  set maxDescriptorSetUniformBuffersDynamic(value: number) {
    this.#view.setUint32(104, Number(value), LE);
  }

  get maxDescriptorSetStorageBuffers(): number {
    return this.#view.getUint32(108, LE);
  }

  set maxDescriptorSetStorageBuffers(value: number) {
    this.#view.setUint32(108, Number(value), LE);
  }

  get maxDescriptorSetStorageBuffersDynamic(): number {
    return this.#view.getUint32(112, LE);
  }

  set maxDescriptorSetStorageBuffersDynamic(value: number) {
    this.#view.setUint32(112, Number(value), LE);
  }

  get maxDescriptorSetSampledImages(): number {
    return this.#view.getUint32(116, LE);
  }

  set maxDescriptorSetSampledImages(value: number) {
    this.#view.setUint32(116, Number(value), LE);
  }

  get maxDescriptorSetStorageImages(): number {
    return this.#view.getUint32(120, LE);
  }

  set maxDescriptorSetStorageImages(value: number) {
    this.#view.setUint32(120, Number(value), LE);
  }

  get maxDescriptorSetInputAttachments(): number {
    return this.#view.getUint32(124, LE);
  }

  set maxDescriptorSetInputAttachments(value: number) {
    this.#view.setUint32(124, Number(value), LE);
  }

  get maxVertexInputAttributes(): number {
    return this.#view.getUint32(128, LE);
  }

  set maxVertexInputAttributes(value: number) {
    this.#view.setUint32(128, Number(value), LE);
  }

  get maxVertexInputBindings(): number {
    return this.#view.getUint32(132, LE);
  }

  set maxVertexInputBindings(value: number) {
    this.#view.setUint32(132, Number(value), LE);
  }

  get maxVertexInputAttributeOffset(): number {
    return this.#view.getUint32(136, LE);
  }

  set maxVertexInputAttributeOffset(value: number) {
    this.#view.setUint32(136, Number(value), LE);
  }

  get maxVertexInputBindingStride(): number {
    return this.#view.getUint32(140, LE);
  }

  set maxVertexInputBindingStride(value: number) {
    this.#view.setUint32(140, Number(value), LE);
  }

  get maxVertexOutputComponents(): number {
    return this.#view.getUint32(144, LE);
  }

  set maxVertexOutputComponents(value: number) {
    this.#view.setUint32(144, Number(value), LE);
  }

  get maxTessellationGenerationLevel(): number {
    return this.#view.getUint32(148, LE);
  }

  set maxTessellationGenerationLevel(value: number) {
    this.#view.setUint32(148, Number(value), LE);
  }

  get maxTessellationPatchSize(): number {
    return this.#view.getUint32(152, LE);
  }

  set maxTessellationPatchSize(value: number) {
    this.#view.setUint32(152, Number(value), LE);
  }

  get maxTessellationControlPerVertexInputComponents(): number {
    return this.#view.getUint32(156, LE);
  }

  set maxTessellationControlPerVertexInputComponents(value: number) {
    this.#view.setUint32(156, Number(value), LE);
  }

  get maxTessellationControlPerVertexOutputComponents(): number {
    return this.#view.getUint32(160, LE);
  }

  set maxTessellationControlPerVertexOutputComponents(value: number) {
    this.#view.setUint32(160, Number(value), LE);
  }

  get maxTessellationControlPerPatchOutputComponents(): number {
    return this.#view.getUint32(164, LE);
  }

  set maxTessellationControlPerPatchOutputComponents(value: number) {
    this.#view.setUint32(164, Number(value), LE);
  }

  get maxTessellationControlTotalOutputComponents(): number {
    return this.#view.getUint32(168, LE);
  }

  set maxTessellationControlTotalOutputComponents(value: number) {
    this.#view.setUint32(168, Number(value), LE);
  }

  get maxTessellationEvaluationInputComponents(): number {
    return this.#view.getUint32(172, LE);
  }

  set maxTessellationEvaluationInputComponents(value: number) {
    this.#view.setUint32(172, Number(value), LE);
  }

  get maxTessellationEvaluationOutputComponents(): number {
    return this.#view.getUint32(176, LE);
  }

  set maxTessellationEvaluationOutputComponents(value: number) {
    this.#view.setUint32(176, Number(value), LE);
  }

  get maxGeometryShaderInvocations(): number {
    return this.#view.getUint32(180, LE);
  }

  set maxGeometryShaderInvocations(value: number) {
    this.#view.setUint32(180, Number(value), LE);
  }

  get maxGeometryInputComponents(): number {
    return this.#view.getUint32(184, LE);
  }

  set maxGeometryInputComponents(value: number) {
    this.#view.setUint32(184, Number(value), LE);
  }

  get maxGeometryOutputComponents(): number {
    return this.#view.getUint32(188, LE);
  }

  set maxGeometryOutputComponents(value: number) {
    this.#view.setUint32(188, Number(value), LE);
  }

  get maxGeometryOutputVertices(): number {
    return this.#view.getUint32(192, LE);
  }

  set maxGeometryOutputVertices(value: number) {
    this.#view.setUint32(192, Number(value), LE);
  }

  get maxGeometryTotalOutputComponents(): number {
    return this.#view.getUint32(196, LE);
  }

  set maxGeometryTotalOutputComponents(value: number) {
    this.#view.setUint32(196, Number(value), LE);
  }

  get maxFragmentInputComponents(): number {
    return this.#view.getUint32(200, LE);
  }

  set maxFragmentInputComponents(value: number) {
    this.#view.setUint32(200, Number(value), LE);
  }

  get maxFragmentOutputAttachments(): number {
    return this.#view.getUint32(204, LE);
  }

  set maxFragmentOutputAttachments(value: number) {
    this.#view.setUint32(204, Number(value), LE);
  }

  get maxFragmentDualSrcAttachments(): number {
    return this.#view.getUint32(208, LE);
  }

  set maxFragmentDualSrcAttachments(value: number) {
    this.#view.setUint32(208, Number(value), LE);
  }

  get maxFragmentCombinedOutputResources(): number {
    return this.#view.getUint32(212, LE);
  }

  set maxFragmentCombinedOutputResources(value: number) {
    this.#view.setUint32(212, Number(value), LE);
  }

  get maxComputeSharedMemorySize(): number {
    return this.#view.getUint32(216, LE);
  }

  set maxComputeSharedMemorySize(value: number) {
    this.#view.setUint32(216, Number(value), LE);
  }

  get maxComputeWorkGroupCount(): Uint32Array {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 220, 3);
  }

  set maxComputeWorkGroupCount(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 220);
  }

  get maxComputeWorkGroupInvocations(): number {
    return this.#view.getUint32(232, LE);
  }

  set maxComputeWorkGroupInvocations(value: number) {
    this.#view.setUint32(232, Number(value), LE);
  }

  get maxComputeWorkGroupSize(): Uint32Array {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 236, 3);
  }

  set maxComputeWorkGroupSize(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 236);
  }

  get subPixelPrecisionBits(): number {
    return this.#view.getUint32(248, LE);
  }

  set subPixelPrecisionBits(value: number) {
    this.#view.setUint32(248, Number(value), LE);
  }

  get subTexelPrecisionBits(): number {
    return this.#view.getUint32(252, LE);
  }

  set subTexelPrecisionBits(value: number) {
    this.#view.setUint32(252, Number(value), LE);
  }

  get mipmapPrecisionBits(): number {
    return this.#view.getUint32(256, LE);
  }

  set mipmapPrecisionBits(value: number) {
    this.#view.setUint32(256, Number(value), LE);
  }

  get maxDrawIndexedIndexValue(): number {
    return this.#view.getUint32(260, LE);
  }

  set maxDrawIndexedIndexValue(value: number) {
    this.#view.setUint32(260, Number(value), LE);
  }

  get maxDrawIndirectCount(): number {
    return this.#view.getUint32(264, LE);
  }

  set maxDrawIndirectCount(value: number) {
    this.#view.setUint32(264, Number(value), LE);
  }

  get maxSamplerLodBias(): number {
    return this.#view.getFloat32(268, LE);
  }

  set maxSamplerLodBias(value: number) {
    this.#view.setFloat32(268, Number(value), LE);
  }

  get maxSamplerAnisotropy(): number {
    return this.#view.getFloat32(272, LE);
  }

  set maxSamplerAnisotropy(value: number) {
    this.#view.setFloat32(272, Number(value), LE);
  }

  get maxViewports(): number {
    return this.#view.getUint32(276, LE);
  }

  set maxViewports(value: number) {
    this.#view.setUint32(276, Number(value), LE);
  }

  get maxViewportDimensions(): Uint32Array {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 280, 2);
  }

  set maxViewportDimensions(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 280);
  }

  get viewportBoundsRange(): Float32Array {
    return new Float32Array(this.#data.buffer, this.#data.byteOffset + 288, 2);
  }

  set viewportBoundsRange(value: Float32Array) {
    this.#data.set(new Uint8Array(value.buffer), 288);
  }

  get viewportSubPixelBits(): number {
    return this.#view.getUint32(296, LE);
  }

  set viewportSubPixelBits(value: number) {
    this.#view.setUint32(296, Number(value), LE);
  }

  get minMemoryMapAlignment(): bigint {
    return this.#view.getBigUint64(304, LE);
  }

  set minMemoryMapAlignment(value: number | bigint) {
    this.#view.setBigUint64(304, BigInt(value), LE);
  }

  get minTexelBufferOffsetAlignment(): bigint {
    return this.#view.getBigUint64(312, LE);
  }

  set minTexelBufferOffsetAlignment(value: DeviceSize) {
    this.#view.setBigUint64(312, BigInt(value), LE);
  }

  get minUniformBufferOffsetAlignment(): bigint {
    return this.#view.getBigUint64(320, LE);
  }

  set minUniformBufferOffsetAlignment(value: DeviceSize) {
    this.#view.setBigUint64(320, BigInt(value), LE);
  }

  get minStorageBufferOffsetAlignment(): bigint {
    return this.#view.getBigUint64(328, LE);
  }

  set minStorageBufferOffsetAlignment(value: DeviceSize) {
    this.#view.setBigUint64(328, BigInt(value), LE);
  }

  get minTexelOffset(): number {
    return this.#view.getInt32(336, LE);
  }

  set minTexelOffset(value: number) {
    this.#view.setInt32(336, Number(value), LE);
  }

  get maxTexelOffset(): number {
    return this.#view.getUint32(340, LE);
  }

  set maxTexelOffset(value: number) {
    this.#view.setUint32(340, Number(value), LE);
  }

  get minTexelGatherOffset(): number {
    return this.#view.getInt32(344, LE);
  }

  set minTexelGatherOffset(value: number) {
    this.#view.setInt32(344, Number(value), LE);
  }

  get maxTexelGatherOffset(): number {
    return this.#view.getUint32(348, LE);
  }

  set maxTexelGatherOffset(value: number) {
    this.#view.setUint32(348, Number(value), LE);
  }

  get minInterpolationOffset(): number {
    return this.#view.getFloat32(352, LE);
  }

  set minInterpolationOffset(value: number) {
    this.#view.setFloat32(352, Number(value), LE);
  }

  get maxInterpolationOffset(): number {
    return this.#view.getFloat32(356, LE);
  }

  set maxInterpolationOffset(value: number) {
    this.#view.setFloat32(356, Number(value), LE);
  }

  get subPixelInterpolationOffsetBits(): number {
    return this.#view.getUint32(360, LE);
  }

  set subPixelInterpolationOffsetBits(value: number) {
    this.#view.setUint32(360, Number(value), LE);
  }

  get maxFramebufferWidth(): number {
    return this.#view.getUint32(364, LE);
  }

  set maxFramebufferWidth(value: number) {
    this.#view.setUint32(364, Number(value), LE);
  }

  get maxFramebufferHeight(): number {
    return this.#view.getUint32(368, LE);
  }

  set maxFramebufferHeight(value: number) {
    this.#view.setUint32(368, Number(value), LE);
  }

  get maxFramebufferLayers(): number {
    return this.#view.getUint32(372, LE);
  }

  set maxFramebufferLayers(value: number) {
    this.#view.setUint32(372, Number(value), LE);
  }

  get framebufferColorSampleCounts(): number {
    return this.#view.getUint32(376, LE);
  }

  set framebufferColorSampleCounts(value: SampleCountFlags) {
    this.#view.setUint32(376, Number(value), LE);
  }

  get framebufferDepthSampleCounts(): number {
    return this.#view.getUint32(380, LE);
  }

  set framebufferDepthSampleCounts(value: SampleCountFlags) {
    this.#view.setUint32(380, Number(value), LE);
  }

  get framebufferStencilSampleCounts(): number {
    return this.#view.getUint32(384, LE);
  }

  set framebufferStencilSampleCounts(value: SampleCountFlags) {
    this.#view.setUint32(384, Number(value), LE);
  }

  get framebufferNoAttachmentsSampleCounts(): number {
    return this.#view.getUint32(388, LE);
  }

  set framebufferNoAttachmentsSampleCounts(value: SampleCountFlags) {
    this.#view.setUint32(388, Number(value), LE);
  }

  get maxColorAttachments(): number {
    return this.#view.getUint32(392, LE);
  }

  set maxColorAttachments(value: number) {
    this.#view.setUint32(392, Number(value), LE);
  }

  get sampledImageColorSampleCounts(): number {
    return this.#view.getUint32(396, LE);
  }

  set sampledImageColorSampleCounts(value: SampleCountFlags) {
    this.#view.setUint32(396, Number(value), LE);
  }

  get sampledImageIntegerSampleCounts(): number {
    return this.#view.getUint32(400, LE);
  }

  set sampledImageIntegerSampleCounts(value: SampleCountFlags) {
    this.#view.setUint32(400, Number(value), LE);
  }

  get sampledImageDepthSampleCounts(): number {
    return this.#view.getUint32(404, LE);
  }

  set sampledImageDepthSampleCounts(value: SampleCountFlags) {
    this.#view.setUint32(404, Number(value), LE);
  }

  get sampledImageStencilSampleCounts(): number {
    return this.#view.getUint32(408, LE);
  }

  set sampledImageStencilSampleCounts(value: SampleCountFlags) {
    this.#view.setUint32(408, Number(value), LE);
  }

  get storageImageSampleCounts(): number {
    return this.#view.getUint32(412, LE);
  }

  set storageImageSampleCounts(value: SampleCountFlags) {
    this.#view.setUint32(412, Number(value), LE);
  }

  get maxSampleMaskWords(): number {
    return this.#view.getUint32(416, LE);
  }

  set maxSampleMaskWords(value: number) {
    this.#view.setUint32(416, Number(value), LE);
  }

  get timestampComputeAndGraphics(): number {
    return this.#view.getUint32(420, LE);
  }

  set timestampComputeAndGraphics(value: Bool32) {
    this.#view.setUint32(420, Number(value), LE);
  }

  get timestampPeriod(): number {
    return this.#view.getFloat32(424, LE);
  }

  set timestampPeriod(value: number) {
    this.#view.setFloat32(424, Number(value), LE);
  }

  get maxClipDistances(): number {
    return this.#view.getUint32(428, LE);
  }

  set maxClipDistances(value: number) {
    this.#view.setUint32(428, Number(value), LE);
  }

  get maxCullDistances(): number {
    return this.#view.getUint32(432, LE);
  }

  set maxCullDistances(value: number) {
    this.#view.setUint32(432, Number(value), LE);
  }

  get maxCombinedClipAndCullDistances(): number {
    return this.#view.getUint32(436, LE);
  }

  set maxCombinedClipAndCullDistances(value: number) {
    this.#view.setUint32(436, Number(value), LE);
  }

  get discreteQueuePriorities(): number {
    return this.#view.getUint32(440, LE);
  }

  set discreteQueuePriorities(value: number) {
    this.#view.setUint32(440, Number(value), LE);
  }

  get pointSizeRange(): Float32Array {
    return new Float32Array(this.#data.buffer, this.#data.byteOffset + 444, 2);
  }

  set pointSizeRange(value: Float32Array) {
    this.#data.set(new Uint8Array(value.buffer), 444);
  }

  get lineWidthRange(): Float32Array {
    return new Float32Array(this.#data.buffer, this.#data.byteOffset + 452, 2);
  }

  set lineWidthRange(value: Float32Array) {
    this.#data.set(new Uint8Array(value.buffer), 452);
  }

  get pointSizeGranularity(): number {
    return this.#view.getFloat32(460, LE);
  }

  set pointSizeGranularity(value: number) {
    this.#view.setFloat32(460, Number(value), LE);
  }

  get lineWidthGranularity(): number {
    return this.#view.getFloat32(464, LE);
  }

  set lineWidthGranularity(value: number) {
    this.#view.setFloat32(464, Number(value), LE);
  }

  get strictLines(): number {
    return this.#view.getUint32(468, LE);
  }

  set strictLines(value: Bool32) {
    this.#view.setUint32(468, Number(value), LE);
  }

  get standardSampleLocations(): number {
    return this.#view.getUint32(472, LE);
  }

  set standardSampleLocations(value: Bool32) {
    this.#view.setUint32(472, Number(value), LE);
  }

  get optimalBufferCopyOffsetAlignment(): bigint {
    return this.#view.getBigUint64(480, LE);
  }

  set optimalBufferCopyOffsetAlignment(value: DeviceSize) {
    this.#view.setBigUint64(480, BigInt(value), LE);
  }

  get optimalBufferCopyRowPitchAlignment(): bigint {
    return this.#view.getBigUint64(488, LE);
  }

  set optimalBufferCopyRowPitchAlignment(value: DeviceSize) {
    this.#view.setBigUint64(488, BigInt(value), LE);
  }

  get nonCoherentAtomSize(): bigint {
    return this.#view.getBigUint64(496, LE);
  }

  set nonCoherentAtomSize(value: DeviceSize) {
    this.#view.setBigUint64(496, BigInt(value), LE);
  }
}