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

export interface InitPhysicalDeviceExtendedDynamicState3FeaturesEXT {
  pNext?: AnyPointer;
  extendedDynamicState3TessellationDomainOrigin?: Bool32;
  extendedDynamicState3DepthClampEnable?: Bool32;
  extendedDynamicState3PolygonMode?: Bool32;
  extendedDynamicState3RasterizationSamples?: Bool32;
  extendedDynamicState3SampleMask?: Bool32;
  extendedDynamicState3AlphaToCoverageEnable?: Bool32;
  extendedDynamicState3AlphaToOneEnable?: Bool32;
  extendedDynamicState3LogicOpEnable?: Bool32;
  extendedDynamicState3ColorBlendEnable?: Bool32;
  extendedDynamicState3ColorBlendEquation?: Bool32;
  extendedDynamicState3ColorWriteMask?: Bool32;
  extendedDynamicState3RasterizationStream?: Bool32;
  extendedDynamicState3ConservativeRasterizationMode?: Bool32;
  extendedDynamicState3ExtraPrimitiveOverestimationSize?: Bool32;
  extendedDynamicState3DepthClipEnable?: Bool32;
  extendedDynamicState3SampleLocationsEnable?: Bool32;
  extendedDynamicState3ColorBlendAdvanced?: Bool32;
  extendedDynamicState3ProvokingVertexMode?: Bool32;
  extendedDynamicState3LineRasterizationMode?: Bool32;
  extendedDynamicState3LineStippleEnable?: Bool32;
  extendedDynamicState3DepthClipNegativeOneToOne?: Bool32;
  extendedDynamicState3ViewportWScalingEnable?: Bool32;
  extendedDynamicState3ViewportSwizzle?: Bool32;
  extendedDynamicState3CoverageToColorEnable?: Bool32;
  extendedDynamicState3CoverageToColorLocation?: Bool32;
  extendedDynamicState3CoverageModulationMode?: Bool32;
  extendedDynamicState3CoverageModulationTableEnable?: Bool32;
  extendedDynamicState3CoverageModulationTable?: Bool32;
  extendedDynamicState3CoverageReductionMode?: Bool32;
  extendedDynamicState3RepresentativeFragmentTestEnable?: Bool32;
  extendedDynamicState3ShadingRateImageEnable?: Bool32;
}

export class PhysicalDeviceExtendedDynamicState3FeaturesEXT implements BaseStruct {
  static size = 144;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceExtendedDynamicState3FeaturesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceExtendedDynamicState3FeaturesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceExtendedDynamicState3FeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceExtendedDynamicState3FeaturesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceExtendedDynamicState3FeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.extendedDynamicState3TessellationDomainOrigin !== undefined) this.extendedDynamicState3TessellationDomainOrigin = data.extendedDynamicState3TessellationDomainOrigin;
      if (data.extendedDynamicState3DepthClampEnable !== undefined) this.extendedDynamicState3DepthClampEnable = data.extendedDynamicState3DepthClampEnable;
      if (data.extendedDynamicState3PolygonMode !== undefined) this.extendedDynamicState3PolygonMode = data.extendedDynamicState3PolygonMode;
      if (data.extendedDynamicState3RasterizationSamples !== undefined) this.extendedDynamicState3RasterizationSamples = data.extendedDynamicState3RasterizationSamples;
      if (data.extendedDynamicState3SampleMask !== undefined) this.extendedDynamicState3SampleMask = data.extendedDynamicState3SampleMask;
      if (data.extendedDynamicState3AlphaToCoverageEnable !== undefined) this.extendedDynamicState3AlphaToCoverageEnable = data.extendedDynamicState3AlphaToCoverageEnable;
      if (data.extendedDynamicState3AlphaToOneEnable !== undefined) this.extendedDynamicState3AlphaToOneEnable = data.extendedDynamicState3AlphaToOneEnable;
      if (data.extendedDynamicState3LogicOpEnable !== undefined) this.extendedDynamicState3LogicOpEnable = data.extendedDynamicState3LogicOpEnable;
      if (data.extendedDynamicState3ColorBlendEnable !== undefined) this.extendedDynamicState3ColorBlendEnable = data.extendedDynamicState3ColorBlendEnable;
      if (data.extendedDynamicState3ColorBlendEquation !== undefined) this.extendedDynamicState3ColorBlendEquation = data.extendedDynamicState3ColorBlendEquation;
      if (data.extendedDynamicState3ColorWriteMask !== undefined) this.extendedDynamicState3ColorWriteMask = data.extendedDynamicState3ColorWriteMask;
      if (data.extendedDynamicState3RasterizationStream !== undefined) this.extendedDynamicState3RasterizationStream = data.extendedDynamicState3RasterizationStream;
      if (data.extendedDynamicState3ConservativeRasterizationMode !== undefined) this.extendedDynamicState3ConservativeRasterizationMode = data.extendedDynamicState3ConservativeRasterizationMode;
      if (data.extendedDynamicState3ExtraPrimitiveOverestimationSize !== undefined) this.extendedDynamicState3ExtraPrimitiveOverestimationSize = data.extendedDynamicState3ExtraPrimitiveOverestimationSize;
      if (data.extendedDynamicState3DepthClipEnable !== undefined) this.extendedDynamicState3DepthClipEnable = data.extendedDynamicState3DepthClipEnable;
      if (data.extendedDynamicState3SampleLocationsEnable !== undefined) this.extendedDynamicState3SampleLocationsEnable = data.extendedDynamicState3SampleLocationsEnable;
      if (data.extendedDynamicState3ColorBlendAdvanced !== undefined) this.extendedDynamicState3ColorBlendAdvanced = data.extendedDynamicState3ColorBlendAdvanced;
      if (data.extendedDynamicState3ProvokingVertexMode !== undefined) this.extendedDynamicState3ProvokingVertexMode = data.extendedDynamicState3ProvokingVertexMode;
      if (data.extendedDynamicState3LineRasterizationMode !== undefined) this.extendedDynamicState3LineRasterizationMode = data.extendedDynamicState3LineRasterizationMode;
      if (data.extendedDynamicState3LineStippleEnable !== undefined) this.extendedDynamicState3LineStippleEnable = data.extendedDynamicState3LineStippleEnable;
      if (data.extendedDynamicState3DepthClipNegativeOneToOne !== undefined) this.extendedDynamicState3DepthClipNegativeOneToOne = data.extendedDynamicState3DepthClipNegativeOneToOne;
      if (data.extendedDynamicState3ViewportWScalingEnable !== undefined) this.extendedDynamicState3ViewportWScalingEnable = data.extendedDynamicState3ViewportWScalingEnable;
      if (data.extendedDynamicState3ViewportSwizzle !== undefined) this.extendedDynamicState3ViewportSwizzle = data.extendedDynamicState3ViewportSwizzle;
      if (data.extendedDynamicState3CoverageToColorEnable !== undefined) this.extendedDynamicState3CoverageToColorEnable = data.extendedDynamicState3CoverageToColorEnable;
      if (data.extendedDynamicState3CoverageToColorLocation !== undefined) this.extendedDynamicState3CoverageToColorLocation = data.extendedDynamicState3CoverageToColorLocation;
      if (data.extendedDynamicState3CoverageModulationMode !== undefined) this.extendedDynamicState3CoverageModulationMode = data.extendedDynamicState3CoverageModulationMode;
      if (data.extendedDynamicState3CoverageModulationTableEnable !== undefined) this.extendedDynamicState3CoverageModulationTableEnable = data.extendedDynamicState3CoverageModulationTableEnable;
      if (data.extendedDynamicState3CoverageModulationTable !== undefined) this.extendedDynamicState3CoverageModulationTable = data.extendedDynamicState3CoverageModulationTable;
      if (data.extendedDynamicState3CoverageReductionMode !== undefined) this.extendedDynamicState3CoverageReductionMode = data.extendedDynamicState3CoverageReductionMode;
      if (data.extendedDynamicState3RepresentativeFragmentTestEnable !== undefined) this.extendedDynamicState3RepresentativeFragmentTestEnable = data.extendedDynamicState3RepresentativeFragmentTestEnable;
      if (data.extendedDynamicState3ShadingRateImageEnable !== undefined) this.extendedDynamicState3ShadingRateImageEnable = data.extendedDynamicState3ShadingRateImageEnable;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceExtendedDynamicState3FeaturesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_EXTENDED_DYNAMIC_STATE_3_FEATURES_EXT;
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

  get extendedDynamicState3TessellationDomainOrigin(): number {
    return this.#view.getUint32(16, LE);
  }

  set extendedDynamicState3TessellationDomainOrigin(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get extendedDynamicState3DepthClampEnable(): number {
    return this.#view.getUint32(20, LE);
  }

  set extendedDynamicState3DepthClampEnable(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get extendedDynamicState3PolygonMode(): number {
    return this.#view.getUint32(24, LE);
  }

  set extendedDynamicState3PolygonMode(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get extendedDynamicState3RasterizationSamples(): number {
    return this.#view.getUint32(28, LE);
  }

  set extendedDynamicState3RasterizationSamples(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get extendedDynamicState3SampleMask(): number {
    return this.#view.getUint32(32, LE);
  }

  set extendedDynamicState3SampleMask(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get extendedDynamicState3AlphaToCoverageEnable(): number {
    return this.#view.getUint32(36, LE);
  }

  set extendedDynamicState3AlphaToCoverageEnable(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get extendedDynamicState3AlphaToOneEnable(): number {
    return this.#view.getUint32(40, LE);
  }

  set extendedDynamicState3AlphaToOneEnable(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get extendedDynamicState3LogicOpEnable(): number {
    return this.#view.getUint32(44, LE);
  }

  set extendedDynamicState3LogicOpEnable(value: Bool32) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get extendedDynamicState3ColorBlendEnable(): number {
    return this.#view.getUint32(48, LE);
  }

  set extendedDynamicState3ColorBlendEnable(value: Bool32) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get extendedDynamicState3ColorBlendEquation(): number {
    return this.#view.getUint32(52, LE);
  }

  set extendedDynamicState3ColorBlendEquation(value: Bool32) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get extendedDynamicState3ColorWriteMask(): number {
    return this.#view.getUint32(56, LE);
  }

  set extendedDynamicState3ColorWriteMask(value: Bool32) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get extendedDynamicState3RasterizationStream(): number {
    return this.#view.getUint32(60, LE);
  }

  set extendedDynamicState3RasterizationStream(value: Bool32) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get extendedDynamicState3ConservativeRasterizationMode(): number {
    return this.#view.getUint32(64, LE);
  }

  set extendedDynamicState3ConservativeRasterizationMode(value: Bool32) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get extendedDynamicState3ExtraPrimitiveOverestimationSize(): number {
    return this.#view.getUint32(68, LE);
  }

  set extendedDynamicState3ExtraPrimitiveOverestimationSize(value: Bool32) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get extendedDynamicState3DepthClipEnable(): number {
    return this.#view.getUint32(72, LE);
  }

  set extendedDynamicState3DepthClipEnable(value: Bool32) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get extendedDynamicState3SampleLocationsEnable(): number {
    return this.#view.getUint32(76, LE);
  }

  set extendedDynamicState3SampleLocationsEnable(value: Bool32) {
    this.#view.setUint32(76, Number(value), LE);
  }

  get extendedDynamicState3ColorBlendAdvanced(): number {
    return this.#view.getUint32(80, LE);
  }

  set extendedDynamicState3ColorBlendAdvanced(value: Bool32) {
    this.#view.setUint32(80, Number(value), LE);
  }

  get extendedDynamicState3ProvokingVertexMode(): number {
    return this.#view.getUint32(84, LE);
  }

  set extendedDynamicState3ProvokingVertexMode(value: Bool32) {
    this.#view.setUint32(84, Number(value), LE);
  }

  get extendedDynamicState3LineRasterizationMode(): number {
    return this.#view.getUint32(88, LE);
  }

  set extendedDynamicState3LineRasterizationMode(value: Bool32) {
    this.#view.setUint32(88, Number(value), LE);
  }

  get extendedDynamicState3LineStippleEnable(): number {
    return this.#view.getUint32(92, LE);
  }

  set extendedDynamicState3LineStippleEnable(value: Bool32) {
    this.#view.setUint32(92, Number(value), LE);
  }

  get extendedDynamicState3DepthClipNegativeOneToOne(): number {
    return this.#view.getUint32(96, LE);
  }

  set extendedDynamicState3DepthClipNegativeOneToOne(value: Bool32) {
    this.#view.setUint32(96, Number(value), LE);
  }

  get extendedDynamicState3ViewportWScalingEnable(): number {
    return this.#view.getUint32(100, LE);
  }

  set extendedDynamicState3ViewportWScalingEnable(value: Bool32) {
    this.#view.setUint32(100, Number(value), LE);
  }

  get extendedDynamicState3ViewportSwizzle(): number {
    return this.#view.getUint32(104, LE);
  }

  set extendedDynamicState3ViewportSwizzle(value: Bool32) {
    this.#view.setUint32(104, Number(value), LE);
  }

  get extendedDynamicState3CoverageToColorEnable(): number {
    return this.#view.getUint32(108, LE);
  }

  set extendedDynamicState3CoverageToColorEnable(value: Bool32) {
    this.#view.setUint32(108, Number(value), LE);
  }

  get extendedDynamicState3CoverageToColorLocation(): number {
    return this.#view.getUint32(112, LE);
  }

  set extendedDynamicState3CoverageToColorLocation(value: Bool32) {
    this.#view.setUint32(112, Number(value), LE);
  }

  get extendedDynamicState3CoverageModulationMode(): number {
    return this.#view.getUint32(116, LE);
  }

  set extendedDynamicState3CoverageModulationMode(value: Bool32) {
    this.#view.setUint32(116, Number(value), LE);
  }

  get extendedDynamicState3CoverageModulationTableEnable(): number {
    return this.#view.getUint32(120, LE);
  }

  set extendedDynamicState3CoverageModulationTableEnable(value: Bool32) {
    this.#view.setUint32(120, Number(value), LE);
  }

  get extendedDynamicState3CoverageModulationTable(): number {
    return this.#view.getUint32(124, LE);
  }

  set extendedDynamicState3CoverageModulationTable(value: Bool32) {
    this.#view.setUint32(124, Number(value), LE);
  }

  get extendedDynamicState3CoverageReductionMode(): number {
    return this.#view.getUint32(128, LE);
  }

  set extendedDynamicState3CoverageReductionMode(value: Bool32) {
    this.#view.setUint32(128, Number(value), LE);
  }

  get extendedDynamicState3RepresentativeFragmentTestEnable(): number {
    return this.#view.getUint32(132, LE);
  }

  set extendedDynamicState3RepresentativeFragmentTestEnable(value: Bool32) {
    this.#view.setUint32(132, Number(value), LE);
  }

  get extendedDynamicState3ShadingRateImageEnable(): number {
    return this.#view.getUint32(136, LE);
  }

  set extendedDynamicState3ShadingRateImageEnable(value: Bool32) {
    this.#view.setUint32(136, Number(value), LE);
  }
}