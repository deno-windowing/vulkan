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
import { Bool32 } from "../def.ts";

export interface InitPhysicalDeviceFeatures {
  robustBufferAccess?: Bool32;
  fullDrawIndexUint32?: Bool32;
  imageCubeArray?: Bool32;
  independentBlend?: Bool32;
  geometryShader?: Bool32;
  tessellationShader?: Bool32;
  sampleRateShading?: Bool32;
  dualSrcBlend?: Bool32;
  logicOp?: Bool32;
  multiDrawIndirect?: Bool32;
  drawIndirectFirstInstance?: Bool32;
  depthClamp?: Bool32;
  depthBiasClamp?: Bool32;
  fillModeNonSolid?: Bool32;
  depthBounds?: Bool32;
  wideLines?: Bool32;
  largePoints?: Bool32;
  alphaToOne?: Bool32;
  multiViewport?: Bool32;
  samplerAnisotropy?: Bool32;
  textureCompressionETC2?: Bool32;
  textureCompressionASTC_LDR?: Bool32;
  textureCompressionBC?: Bool32;
  occlusionQueryPrecise?: Bool32;
  pipelineStatisticsQuery?: Bool32;
  vertexPipelineStoresAndAtomics?: Bool32;
  fragmentStoresAndAtomics?: Bool32;
  shaderTessellationAndGeometryPointSize?: Bool32;
  shaderImageGatherExtended?: Bool32;
  shaderStorageImageExtendedFormats?: Bool32;
  shaderStorageImageMultisample?: Bool32;
  shaderStorageImageReadWithoutFormat?: Bool32;
  shaderStorageImageWriteWithoutFormat?: Bool32;
  shaderUniformBufferArrayDynamicIndexing?: Bool32;
  shaderSampledImageArrayDynamicIndexing?: Bool32;
  shaderStorageBufferArrayDynamicIndexing?: Bool32;
  shaderStorageImageArrayDynamicIndexing?: Bool32;
  shaderClipDistance?: Bool32;
  shaderCullDistance?: Bool32;
  shaderFloat64?: Bool32;
  shaderInt64?: Bool32;
  shaderInt16?: Bool32;
  shaderResourceResidency?: Bool32;
  shaderResourceMinLod?: Bool32;
  sparseBinding?: Bool32;
  sparseResidencyBuffer?: Bool32;
  sparseResidencyImage2D?: Bool32;
  sparseResidencyImage3D?: Bool32;
  sparseResidency2Samples?: Bool32;
  sparseResidency4Samples?: Bool32;
  sparseResidency8Samples?: Bool32;
  sparseResidency16Samples?: Bool32;
  sparseResidencyAliased?: Bool32;
  variableMultisampleRate?: Bool32;
  inheritedQueries?: Bool32;
}

export class PhysicalDeviceFeatures implements BaseStruct {
  static size = 220;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceFeatures);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceFeatures) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceFeatures.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.robustBufferAccess !== undefined) this.robustBufferAccess = data.robustBufferAccess;
      if (data.fullDrawIndexUint32 !== undefined) this.fullDrawIndexUint32 = data.fullDrawIndexUint32;
      if (data.imageCubeArray !== undefined) this.imageCubeArray = data.imageCubeArray;
      if (data.independentBlend !== undefined) this.independentBlend = data.independentBlend;
      if (data.geometryShader !== undefined) this.geometryShader = data.geometryShader;
      if (data.tessellationShader !== undefined) this.tessellationShader = data.tessellationShader;
      if (data.sampleRateShading !== undefined) this.sampleRateShading = data.sampleRateShading;
      if (data.dualSrcBlend !== undefined) this.dualSrcBlend = data.dualSrcBlend;
      if (data.logicOp !== undefined) this.logicOp = data.logicOp;
      if (data.multiDrawIndirect !== undefined) this.multiDrawIndirect = data.multiDrawIndirect;
      if (data.drawIndirectFirstInstance !== undefined) this.drawIndirectFirstInstance = data.drawIndirectFirstInstance;
      if (data.depthClamp !== undefined) this.depthClamp = data.depthClamp;
      if (data.depthBiasClamp !== undefined) this.depthBiasClamp = data.depthBiasClamp;
      if (data.fillModeNonSolid !== undefined) this.fillModeNonSolid = data.fillModeNonSolid;
      if (data.depthBounds !== undefined) this.depthBounds = data.depthBounds;
      if (data.wideLines !== undefined) this.wideLines = data.wideLines;
      if (data.largePoints !== undefined) this.largePoints = data.largePoints;
      if (data.alphaToOne !== undefined) this.alphaToOne = data.alphaToOne;
      if (data.multiViewport !== undefined) this.multiViewport = data.multiViewport;
      if (data.samplerAnisotropy !== undefined) this.samplerAnisotropy = data.samplerAnisotropy;
      if (data.textureCompressionETC2 !== undefined) this.textureCompressionETC2 = data.textureCompressionETC2;
      if (data.textureCompressionASTC_LDR !== undefined) this.textureCompressionASTC_LDR = data.textureCompressionASTC_LDR;
      if (data.textureCompressionBC !== undefined) this.textureCompressionBC = data.textureCompressionBC;
      if (data.occlusionQueryPrecise !== undefined) this.occlusionQueryPrecise = data.occlusionQueryPrecise;
      if (data.pipelineStatisticsQuery !== undefined) this.pipelineStatisticsQuery = data.pipelineStatisticsQuery;
      if (data.vertexPipelineStoresAndAtomics !== undefined) this.vertexPipelineStoresAndAtomics = data.vertexPipelineStoresAndAtomics;
      if (data.fragmentStoresAndAtomics !== undefined) this.fragmentStoresAndAtomics = data.fragmentStoresAndAtomics;
      if (data.shaderTessellationAndGeometryPointSize !== undefined) this.shaderTessellationAndGeometryPointSize = data.shaderTessellationAndGeometryPointSize;
      if (data.shaderImageGatherExtended !== undefined) this.shaderImageGatherExtended = data.shaderImageGatherExtended;
      if (data.shaderStorageImageExtendedFormats !== undefined) this.shaderStorageImageExtendedFormats = data.shaderStorageImageExtendedFormats;
      if (data.shaderStorageImageMultisample !== undefined) this.shaderStorageImageMultisample = data.shaderStorageImageMultisample;
      if (data.shaderStorageImageReadWithoutFormat !== undefined) this.shaderStorageImageReadWithoutFormat = data.shaderStorageImageReadWithoutFormat;
      if (data.shaderStorageImageWriteWithoutFormat !== undefined) this.shaderStorageImageWriteWithoutFormat = data.shaderStorageImageWriteWithoutFormat;
      if (data.shaderUniformBufferArrayDynamicIndexing !== undefined) this.shaderUniformBufferArrayDynamicIndexing = data.shaderUniformBufferArrayDynamicIndexing;
      if (data.shaderSampledImageArrayDynamicIndexing !== undefined) this.shaderSampledImageArrayDynamicIndexing = data.shaderSampledImageArrayDynamicIndexing;
      if (data.shaderStorageBufferArrayDynamicIndexing !== undefined) this.shaderStorageBufferArrayDynamicIndexing = data.shaderStorageBufferArrayDynamicIndexing;
      if (data.shaderStorageImageArrayDynamicIndexing !== undefined) this.shaderStorageImageArrayDynamicIndexing = data.shaderStorageImageArrayDynamicIndexing;
      if (data.shaderClipDistance !== undefined) this.shaderClipDistance = data.shaderClipDistance;
      if (data.shaderCullDistance !== undefined) this.shaderCullDistance = data.shaderCullDistance;
      if (data.shaderFloat64 !== undefined) this.shaderFloat64 = data.shaderFloat64;
      if (data.shaderInt64 !== undefined) this.shaderInt64 = data.shaderInt64;
      if (data.shaderInt16 !== undefined) this.shaderInt16 = data.shaderInt16;
      if (data.shaderResourceResidency !== undefined) this.shaderResourceResidency = data.shaderResourceResidency;
      if (data.shaderResourceMinLod !== undefined) this.shaderResourceMinLod = data.shaderResourceMinLod;
      if (data.sparseBinding !== undefined) this.sparseBinding = data.sparseBinding;
      if (data.sparseResidencyBuffer !== undefined) this.sparseResidencyBuffer = data.sparseResidencyBuffer;
      if (data.sparseResidencyImage2D !== undefined) this.sparseResidencyImage2D = data.sparseResidencyImage2D;
      if (data.sparseResidencyImage3D !== undefined) this.sparseResidencyImage3D = data.sparseResidencyImage3D;
      if (data.sparseResidency2Samples !== undefined) this.sparseResidency2Samples = data.sparseResidency2Samples;
      if (data.sparseResidency4Samples !== undefined) this.sparseResidency4Samples = data.sparseResidency4Samples;
      if (data.sparseResidency8Samples !== undefined) this.sparseResidency8Samples = data.sparseResidency8Samples;
      if (data.sparseResidency16Samples !== undefined) this.sparseResidency16Samples = data.sparseResidency16Samples;
      if (data.sparseResidencyAliased !== undefined) this.sparseResidencyAliased = data.sparseResidencyAliased;
      if (data.variableMultisampleRate !== undefined) this.variableMultisampleRate = data.variableMultisampleRate;
      if (data.inheritedQueries !== undefined) this.inheritedQueries = data.inheritedQueries;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceFeatures.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get robustBufferAccess(): number {
    return this.#view.getUint32(0, LE);
  }

  set robustBufferAccess(value: Bool32) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get fullDrawIndexUint32(): number {
    return this.#view.getUint32(4, LE);
  }

  set fullDrawIndexUint32(value: Bool32) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get imageCubeArray(): number {
    return this.#view.getUint32(8, LE);
  }

  set imageCubeArray(value: Bool32) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get independentBlend(): number {
    return this.#view.getUint32(12, LE);
  }

  set independentBlend(value: Bool32) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get geometryShader(): number {
    return this.#view.getUint32(16, LE);
  }

  set geometryShader(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get tessellationShader(): number {
    return this.#view.getUint32(20, LE);
  }

  set tessellationShader(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get sampleRateShading(): number {
    return this.#view.getUint32(24, LE);
  }

  set sampleRateShading(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get dualSrcBlend(): number {
    return this.#view.getUint32(28, LE);
  }

  set dualSrcBlend(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get logicOp(): number {
    return this.#view.getUint32(32, LE);
  }

  set logicOp(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get multiDrawIndirect(): number {
    return this.#view.getUint32(36, LE);
  }

  set multiDrawIndirect(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get drawIndirectFirstInstance(): number {
    return this.#view.getUint32(40, LE);
  }

  set drawIndirectFirstInstance(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get depthClamp(): number {
    return this.#view.getUint32(44, LE);
  }

  set depthClamp(value: Bool32) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get depthBiasClamp(): number {
    return this.#view.getUint32(48, LE);
  }

  set depthBiasClamp(value: Bool32) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get fillModeNonSolid(): number {
    return this.#view.getUint32(52, LE);
  }

  set fillModeNonSolid(value: Bool32) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get depthBounds(): number {
    return this.#view.getUint32(56, LE);
  }

  set depthBounds(value: Bool32) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get wideLines(): number {
    return this.#view.getUint32(60, LE);
  }

  set wideLines(value: Bool32) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get largePoints(): number {
    return this.#view.getUint32(64, LE);
  }

  set largePoints(value: Bool32) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get alphaToOne(): number {
    return this.#view.getUint32(68, LE);
  }

  set alphaToOne(value: Bool32) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get multiViewport(): number {
    return this.#view.getUint32(72, LE);
  }

  set multiViewport(value: Bool32) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get samplerAnisotropy(): number {
    return this.#view.getUint32(76, LE);
  }

  set samplerAnisotropy(value: Bool32) {
    this.#view.setUint32(76, Number(value), LE);
  }

  get textureCompressionETC2(): number {
    return this.#view.getUint32(80, LE);
  }

  set textureCompressionETC2(value: Bool32) {
    this.#view.setUint32(80, Number(value), LE);
  }

  get textureCompressionASTC_LDR(): number {
    return this.#view.getUint32(84, LE);
  }

  set textureCompressionASTC_LDR(value: Bool32) {
    this.#view.setUint32(84, Number(value), LE);
  }

  get textureCompressionBC(): number {
    return this.#view.getUint32(88, LE);
  }

  set textureCompressionBC(value: Bool32) {
    this.#view.setUint32(88, Number(value), LE);
  }

  get occlusionQueryPrecise(): number {
    return this.#view.getUint32(92, LE);
  }

  set occlusionQueryPrecise(value: Bool32) {
    this.#view.setUint32(92, Number(value), LE);
  }

  get pipelineStatisticsQuery(): number {
    return this.#view.getUint32(96, LE);
  }

  set pipelineStatisticsQuery(value: Bool32) {
    this.#view.setUint32(96, Number(value), LE);
  }

  get vertexPipelineStoresAndAtomics(): number {
    return this.#view.getUint32(100, LE);
  }

  set vertexPipelineStoresAndAtomics(value: Bool32) {
    this.#view.setUint32(100, Number(value), LE);
  }

  get fragmentStoresAndAtomics(): number {
    return this.#view.getUint32(104, LE);
  }

  set fragmentStoresAndAtomics(value: Bool32) {
    this.#view.setUint32(104, Number(value), LE);
  }

  get shaderTessellationAndGeometryPointSize(): number {
    return this.#view.getUint32(108, LE);
  }

  set shaderTessellationAndGeometryPointSize(value: Bool32) {
    this.#view.setUint32(108, Number(value), LE);
  }

  get shaderImageGatherExtended(): number {
    return this.#view.getUint32(112, LE);
  }

  set shaderImageGatherExtended(value: Bool32) {
    this.#view.setUint32(112, Number(value), LE);
  }

  get shaderStorageImageExtendedFormats(): number {
    return this.#view.getUint32(116, LE);
  }

  set shaderStorageImageExtendedFormats(value: Bool32) {
    this.#view.setUint32(116, Number(value), LE);
  }

  get shaderStorageImageMultisample(): number {
    return this.#view.getUint32(120, LE);
  }

  set shaderStorageImageMultisample(value: Bool32) {
    this.#view.setUint32(120, Number(value), LE);
  }

  get shaderStorageImageReadWithoutFormat(): number {
    return this.#view.getUint32(124, LE);
  }

  set shaderStorageImageReadWithoutFormat(value: Bool32) {
    this.#view.setUint32(124, Number(value), LE);
  }

  get shaderStorageImageWriteWithoutFormat(): number {
    return this.#view.getUint32(128, LE);
  }

  set shaderStorageImageWriteWithoutFormat(value: Bool32) {
    this.#view.setUint32(128, Number(value), LE);
  }

  get shaderUniformBufferArrayDynamicIndexing(): number {
    return this.#view.getUint32(132, LE);
  }

  set shaderUniformBufferArrayDynamicIndexing(value: Bool32) {
    this.#view.setUint32(132, Number(value), LE);
  }

  get shaderSampledImageArrayDynamicIndexing(): number {
    return this.#view.getUint32(136, LE);
  }

  set shaderSampledImageArrayDynamicIndexing(value: Bool32) {
    this.#view.setUint32(136, Number(value), LE);
  }

  get shaderStorageBufferArrayDynamicIndexing(): number {
    return this.#view.getUint32(140, LE);
  }

  set shaderStorageBufferArrayDynamicIndexing(value: Bool32) {
    this.#view.setUint32(140, Number(value), LE);
  }

  get shaderStorageImageArrayDynamicIndexing(): number {
    return this.#view.getUint32(144, LE);
  }

  set shaderStorageImageArrayDynamicIndexing(value: Bool32) {
    this.#view.setUint32(144, Number(value), LE);
  }

  get shaderClipDistance(): number {
    return this.#view.getUint32(148, LE);
  }

  set shaderClipDistance(value: Bool32) {
    this.#view.setUint32(148, Number(value), LE);
  }

  get shaderCullDistance(): number {
    return this.#view.getUint32(152, LE);
  }

  set shaderCullDistance(value: Bool32) {
    this.#view.setUint32(152, Number(value), LE);
  }

  get shaderFloat64(): number {
    return this.#view.getUint32(156, LE);
  }

  set shaderFloat64(value: Bool32) {
    this.#view.setUint32(156, Number(value), LE);
  }

  get shaderInt64(): number {
    return this.#view.getUint32(160, LE);
  }

  set shaderInt64(value: Bool32) {
    this.#view.setUint32(160, Number(value), LE);
  }

  get shaderInt16(): number {
    return this.#view.getUint32(164, LE);
  }

  set shaderInt16(value: Bool32) {
    this.#view.setUint32(164, Number(value), LE);
  }

  get shaderResourceResidency(): number {
    return this.#view.getUint32(168, LE);
  }

  set shaderResourceResidency(value: Bool32) {
    this.#view.setUint32(168, Number(value), LE);
  }

  get shaderResourceMinLod(): number {
    return this.#view.getUint32(172, LE);
  }

  set shaderResourceMinLod(value: Bool32) {
    this.#view.setUint32(172, Number(value), LE);
  }

  get sparseBinding(): number {
    return this.#view.getUint32(176, LE);
  }

  set sparseBinding(value: Bool32) {
    this.#view.setUint32(176, Number(value), LE);
  }

  get sparseResidencyBuffer(): number {
    return this.#view.getUint32(180, LE);
  }

  set sparseResidencyBuffer(value: Bool32) {
    this.#view.setUint32(180, Number(value), LE);
  }

  get sparseResidencyImage2D(): number {
    return this.#view.getUint32(184, LE);
  }

  set sparseResidencyImage2D(value: Bool32) {
    this.#view.setUint32(184, Number(value), LE);
  }

  get sparseResidencyImage3D(): number {
    return this.#view.getUint32(188, LE);
  }

  set sparseResidencyImage3D(value: Bool32) {
    this.#view.setUint32(188, Number(value), LE);
  }

  get sparseResidency2Samples(): number {
    return this.#view.getUint32(192, LE);
  }

  set sparseResidency2Samples(value: Bool32) {
    this.#view.setUint32(192, Number(value), LE);
  }

  get sparseResidency4Samples(): number {
    return this.#view.getUint32(196, LE);
  }

  set sparseResidency4Samples(value: Bool32) {
    this.#view.setUint32(196, Number(value), LE);
  }

  get sparseResidency8Samples(): number {
    return this.#view.getUint32(200, LE);
  }

  set sparseResidency8Samples(value: Bool32) {
    this.#view.setUint32(200, Number(value), LE);
  }

  get sparseResidency16Samples(): number {
    return this.#view.getUint32(204, LE);
  }

  set sparseResidency16Samples(value: Bool32) {
    this.#view.setUint32(204, Number(value), LE);
  }

  get sparseResidencyAliased(): number {
    return this.#view.getUint32(208, LE);
  }

  set sparseResidencyAliased(value: Bool32) {
    this.#view.setUint32(208, Number(value), LE);
  }

  get variableMultisampleRate(): number {
    return this.#view.getUint32(212, LE);
  }

  set variableMultisampleRate(value: Bool32) {
    this.#view.setUint32(212, Number(value), LE);
  }

  get inheritedQueries(): number {
    return this.#view.getUint32(216, LE);
  }

  set inheritedQueries(value: Bool32) {
    this.#view.setUint32(216, Number(value), LE);
  }
}