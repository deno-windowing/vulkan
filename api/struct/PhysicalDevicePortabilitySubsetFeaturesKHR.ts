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

export interface InitPhysicalDevicePortabilitySubsetFeaturesKHR {
  pNext?: AnyPointer;
  constantAlphaColorBlendFactors?: Bool32;
  events?: Bool32;
  imageViewFormatReinterpretation?: Bool32;
  imageViewFormatSwizzle?: Bool32;
  imageView2DOn3DImage?: Bool32;
  multisampleArrayImage?: Bool32;
  mutableComparisonSamplers?: Bool32;
  pointPolygons?: Bool32;
  samplerMipLodBias?: Bool32;
  separateStencilMaskRef?: Bool32;
  shaderSampleRateInterpolationFunctions?: Bool32;
  tessellationIsolines?: Bool32;
  tessellationPointMode?: Bool32;
  triangleFans?: Bool32;
  vertexAttributeAccessBeyondStride?: Bool32;
}

export class PhysicalDevicePortabilitySubsetFeaturesKHR implements BaseStruct {
  static size = 80;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDevicePortabilitySubsetFeaturesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDevicePortabilitySubsetFeaturesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDevicePortabilitySubsetFeaturesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDevicePortabilitySubsetFeaturesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDevicePortabilitySubsetFeaturesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.constantAlphaColorBlendFactors !== undefined) this.constantAlphaColorBlendFactors = data.constantAlphaColorBlendFactors;
      if (data.events !== undefined) this.events = data.events;
      if (data.imageViewFormatReinterpretation !== undefined) this.imageViewFormatReinterpretation = data.imageViewFormatReinterpretation;
      if (data.imageViewFormatSwizzle !== undefined) this.imageViewFormatSwizzle = data.imageViewFormatSwizzle;
      if (data.imageView2DOn3DImage !== undefined) this.imageView2DOn3DImage = data.imageView2DOn3DImage;
      if (data.multisampleArrayImage !== undefined) this.multisampleArrayImage = data.multisampleArrayImage;
      if (data.mutableComparisonSamplers !== undefined) this.mutableComparisonSamplers = data.mutableComparisonSamplers;
      if (data.pointPolygons !== undefined) this.pointPolygons = data.pointPolygons;
      if (data.samplerMipLodBias !== undefined) this.samplerMipLodBias = data.samplerMipLodBias;
      if (data.separateStencilMaskRef !== undefined) this.separateStencilMaskRef = data.separateStencilMaskRef;
      if (data.shaderSampleRateInterpolationFunctions !== undefined) this.shaderSampleRateInterpolationFunctions = data.shaderSampleRateInterpolationFunctions;
      if (data.tessellationIsolines !== undefined) this.tessellationIsolines = data.tessellationIsolines;
      if (data.tessellationPointMode !== undefined) this.tessellationPointMode = data.tessellationPointMode;
      if (data.triangleFans !== undefined) this.triangleFans = data.triangleFans;
      if (data.vertexAttributeAccessBeyondStride !== undefined) this.vertexAttributeAccessBeyondStride = data.vertexAttributeAccessBeyondStride;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDevicePortabilitySubsetFeaturesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_PORTABILITY_SUBSET_FEATURES_KHR;
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

  get constantAlphaColorBlendFactors(): number {
    return this.#view.getUint32(16, LE);
  }

  set constantAlphaColorBlendFactors(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get events(): number {
    return this.#view.getUint32(20, LE);
  }

  set events(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get imageViewFormatReinterpretation(): number {
    return this.#view.getUint32(24, LE);
  }

  set imageViewFormatReinterpretation(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get imageViewFormatSwizzle(): number {
    return this.#view.getUint32(28, LE);
  }

  set imageViewFormatSwizzle(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get imageView2DOn3DImage(): number {
    return this.#view.getUint32(32, LE);
  }

  set imageView2DOn3DImage(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get multisampleArrayImage(): number {
    return this.#view.getUint32(36, LE);
  }

  set multisampleArrayImage(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get mutableComparisonSamplers(): number {
    return this.#view.getUint32(40, LE);
  }

  set mutableComparisonSamplers(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get pointPolygons(): number {
    return this.#view.getUint32(44, LE);
  }

  set pointPolygons(value: Bool32) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get samplerMipLodBias(): number {
    return this.#view.getUint32(48, LE);
  }

  set samplerMipLodBias(value: Bool32) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get separateStencilMaskRef(): number {
    return this.#view.getUint32(52, LE);
  }

  set separateStencilMaskRef(value: Bool32) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get shaderSampleRateInterpolationFunctions(): number {
    return this.#view.getUint32(56, LE);
  }

  set shaderSampleRateInterpolationFunctions(value: Bool32) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get tessellationIsolines(): number {
    return this.#view.getUint32(60, LE);
  }

  set tessellationIsolines(value: Bool32) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get tessellationPointMode(): number {
    return this.#view.getUint32(64, LE);
  }

  set tessellationPointMode(value: Bool32) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get triangleFans(): number {
    return this.#view.getUint32(68, LE);
  }

  set triangleFans(value: Bool32) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get vertexAttributeAccessBeyondStride(): number {
    return this.#view.getUint32(72, LE);
  }

  set vertexAttributeAccessBeyondStride(value: Bool32) {
    this.#view.setUint32(72, Number(value), LE);
  }
}