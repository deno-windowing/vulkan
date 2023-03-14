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
import {Extent2D} from "./Extent2D.ts";
import { StructureType, SampleCountFlagBits } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitPhysicalDeviceFragmentShadingRatePropertiesKHR {
  pNext?: AnyPointer;
  minFragmentShadingRateAttachmentTexelSize?: Extent2D;
  maxFragmentShadingRateAttachmentTexelSize?: Extent2D;
  maxFragmentShadingRateAttachmentTexelSizeAspectRatio?: number;
  primitiveFragmentShadingRateWithMultipleViewports?: Bool32;
  layeredShadingRateAttachments?: Bool32;
  fragmentShadingRateNonTrivialCombinerOps?: Bool32;
  maxFragmentSize?: Extent2D;
  maxFragmentSizeAspectRatio?: number;
  maxFragmentShadingRateCoverageSamples?: number;
  maxFragmentShadingRateRasterizationSamples?: SampleCountFlagBits;
  fragmentShadingRateWithShaderDepthStencilWrites?: Bool32;
  fragmentShadingRateWithSampleMask?: Bool32;
  fragmentShadingRateWithShaderSampleMask?: Bool32;
  fragmentShadingRateWithConservativeRasterization?: Bool32;
  fragmentShadingRateWithFragmentShaderInterlock?: Bool32;
  fragmentShadingRateWithCustomSampleLocations?: Bool32;
  fragmentShadingRateStrictMultiplyCombiner?: Bool32;
}

export class PhysicalDeviceFragmentShadingRatePropertiesKHR implements BaseStruct {
  static size = 96;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceFragmentShadingRatePropertiesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceFragmentShadingRatePropertiesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceFragmentShadingRatePropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceFragmentShadingRatePropertiesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceFragmentShadingRatePropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.minFragmentShadingRateAttachmentTexelSize !== undefined) this.minFragmentShadingRateAttachmentTexelSize = data.minFragmentShadingRateAttachmentTexelSize;
      if (data.maxFragmentShadingRateAttachmentTexelSize !== undefined) this.maxFragmentShadingRateAttachmentTexelSize = data.maxFragmentShadingRateAttachmentTexelSize;
      if (data.maxFragmentShadingRateAttachmentTexelSizeAspectRatio !== undefined) this.maxFragmentShadingRateAttachmentTexelSizeAspectRatio = data.maxFragmentShadingRateAttachmentTexelSizeAspectRatio;
      if (data.primitiveFragmentShadingRateWithMultipleViewports !== undefined) this.primitiveFragmentShadingRateWithMultipleViewports = data.primitiveFragmentShadingRateWithMultipleViewports;
      if (data.layeredShadingRateAttachments !== undefined) this.layeredShadingRateAttachments = data.layeredShadingRateAttachments;
      if (data.fragmentShadingRateNonTrivialCombinerOps !== undefined) this.fragmentShadingRateNonTrivialCombinerOps = data.fragmentShadingRateNonTrivialCombinerOps;
      if (data.maxFragmentSize !== undefined) this.maxFragmentSize = data.maxFragmentSize;
      if (data.maxFragmentSizeAspectRatio !== undefined) this.maxFragmentSizeAspectRatio = data.maxFragmentSizeAspectRatio;
      if (data.maxFragmentShadingRateCoverageSamples !== undefined) this.maxFragmentShadingRateCoverageSamples = data.maxFragmentShadingRateCoverageSamples;
      if (data.maxFragmentShadingRateRasterizationSamples !== undefined) this.maxFragmentShadingRateRasterizationSamples = data.maxFragmentShadingRateRasterizationSamples;
      if (data.fragmentShadingRateWithShaderDepthStencilWrites !== undefined) this.fragmentShadingRateWithShaderDepthStencilWrites = data.fragmentShadingRateWithShaderDepthStencilWrites;
      if (data.fragmentShadingRateWithSampleMask !== undefined) this.fragmentShadingRateWithSampleMask = data.fragmentShadingRateWithSampleMask;
      if (data.fragmentShadingRateWithShaderSampleMask !== undefined) this.fragmentShadingRateWithShaderSampleMask = data.fragmentShadingRateWithShaderSampleMask;
      if (data.fragmentShadingRateWithConservativeRasterization !== undefined) this.fragmentShadingRateWithConservativeRasterization = data.fragmentShadingRateWithConservativeRasterization;
      if (data.fragmentShadingRateWithFragmentShaderInterlock !== undefined) this.fragmentShadingRateWithFragmentShaderInterlock = data.fragmentShadingRateWithFragmentShaderInterlock;
      if (data.fragmentShadingRateWithCustomSampleLocations !== undefined) this.fragmentShadingRateWithCustomSampleLocations = data.fragmentShadingRateWithCustomSampleLocations;
      if (data.fragmentShadingRateStrictMultiplyCombiner !== undefined) this.fragmentShadingRateStrictMultiplyCombiner = data.fragmentShadingRateStrictMultiplyCombiner;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceFragmentShadingRatePropertiesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_FRAGMENT_SHADING_RATE_PROPERTIES_KHR;
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

  get minFragmentShadingRateAttachmentTexelSize() {
    return new Extent2D(this.#data.subarray(16, 16 + Extent2D.size));
  }

  set minFragmentShadingRateAttachmentTexelSize(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get maxFragmentShadingRateAttachmentTexelSize() {
    return new Extent2D(this.#data.subarray(24, 24 + Extent2D.size));
  }

  set maxFragmentShadingRateAttachmentTexelSize(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 24);
  }

  get maxFragmentShadingRateAttachmentTexelSizeAspectRatio() {
    return this.#view.getUint32(32, LE);
  }

  set maxFragmentShadingRateAttachmentTexelSizeAspectRatio(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get primitiveFragmentShadingRateWithMultipleViewports() {
    return this.#view.getUint32(36, LE);
  }

  set primitiveFragmentShadingRateWithMultipleViewports(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get layeredShadingRateAttachments() {
    return this.#view.getUint32(40, LE);
  }

  set layeredShadingRateAttachments(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get fragmentShadingRateNonTrivialCombinerOps() {
    return this.#view.getUint32(44, LE);
  }

  set fragmentShadingRateNonTrivialCombinerOps(value: Bool32) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get maxFragmentSize() {
    return new Extent2D(this.#data.subarray(48, 48 + Extent2D.size));
  }

  set maxFragmentSize(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 48);
  }

  get maxFragmentSizeAspectRatio() {
    return this.#view.getUint32(56, LE);
  }

  set maxFragmentSizeAspectRatio(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get maxFragmentShadingRateCoverageSamples() {
    return this.#view.getUint32(60, LE);
  }

  set maxFragmentShadingRateCoverageSamples(value: number) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get maxFragmentShadingRateRasterizationSamples() {
    return this.#view.getUint32(64, LE);
  }

  set maxFragmentShadingRateRasterizationSamples(value: SampleCountFlagBits) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get fragmentShadingRateWithShaderDepthStencilWrites() {
    return this.#view.getUint32(68, LE);
  }

  set fragmentShadingRateWithShaderDepthStencilWrites(value: Bool32) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get fragmentShadingRateWithSampleMask() {
    return this.#view.getUint32(72, LE);
  }

  set fragmentShadingRateWithSampleMask(value: Bool32) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get fragmentShadingRateWithShaderSampleMask() {
    return this.#view.getUint32(76, LE);
  }

  set fragmentShadingRateWithShaderSampleMask(value: Bool32) {
    this.#view.setUint32(76, Number(value), LE);
  }

  get fragmentShadingRateWithConservativeRasterization() {
    return this.#view.getUint32(80, LE);
  }

  set fragmentShadingRateWithConservativeRasterization(value: Bool32) {
    this.#view.setUint32(80, Number(value), LE);
  }

  get fragmentShadingRateWithFragmentShaderInterlock() {
    return this.#view.getUint32(84, LE);
  }

  set fragmentShadingRateWithFragmentShaderInterlock(value: Bool32) {
    this.#view.setUint32(84, Number(value), LE);
  }

  get fragmentShadingRateWithCustomSampleLocations() {
    return this.#view.getUint32(88, LE);
  }

  set fragmentShadingRateWithCustomSampleLocations(value: Bool32) {
    this.#view.setUint32(88, Number(value), LE);
  }

  get fragmentShadingRateStrictMultiplyCombiner() {
    return this.#view.getUint32(92, LE);
  }

  set fragmentShadingRateStrictMultiplyCombiner(value: Bool32) {
    this.#view.setUint32(92, Number(value), LE);
  }
}