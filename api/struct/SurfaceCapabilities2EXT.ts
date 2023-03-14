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
import { StructureType, SurfaceTransformFlagBitsKHR } from "../enum.ts";
import { SurfaceTransformFlagsKHR, CompositeAlphaFlagsKHR, ImageUsageFlags, SurfaceCounterFlagsEXT } from "../def.ts";

export interface InitSurfaceCapabilities2EXT {
  pNext?: AnyPointer;
  minImageCount?: number;
  maxImageCount?: number;
  currentExtent?: Extent2D;
  minImageExtent?: Extent2D;
  maxImageExtent?: Extent2D;
  maxImageArrayLayers?: number;
  supportedTransforms?: SurfaceTransformFlagsKHR;
  currentTransform?: SurfaceTransformFlagBitsKHR;
  supportedCompositeAlpha?: CompositeAlphaFlagsKHR;
  supportedUsageFlags?: ImageUsageFlags;
  supportedSurfaceCounters?: SurfaceCounterFlagsEXT;
}

export class SurfaceCapabilities2EXT implements BaseStruct {
  static size = 72;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSurfaceCapabilities2EXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSurfaceCapabilities2EXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SurfaceCapabilities2EXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SurfaceCapabilities2EXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SurfaceCapabilities2EXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.minImageCount !== undefined) this.minImageCount = data.minImageCount;
      if (data.maxImageCount !== undefined) this.maxImageCount = data.maxImageCount;
      if (data.currentExtent !== undefined) this.currentExtent = data.currentExtent;
      if (data.minImageExtent !== undefined) this.minImageExtent = data.minImageExtent;
      if (data.maxImageExtent !== undefined) this.maxImageExtent = data.maxImageExtent;
      if (data.maxImageArrayLayers !== undefined) this.maxImageArrayLayers = data.maxImageArrayLayers;
      if (data.supportedTransforms !== undefined) this.supportedTransforms = data.supportedTransforms;
      if (data.currentTransform !== undefined) this.currentTransform = data.currentTransform;
      if (data.supportedCompositeAlpha !== undefined) this.supportedCompositeAlpha = data.supportedCompositeAlpha;
      if (data.supportedUsageFlags !== undefined) this.supportedUsageFlags = data.supportedUsageFlags;
      if (data.supportedSurfaceCounters !== undefined) this.supportedSurfaceCounters = data.supportedSurfaceCounters;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SurfaceCapabilities2EXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SURFACE_CAPABILITIES_2_EXT;
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

  get minImageCount() {
    return this.#view.getUint32(16, LE);
  }

  set minImageCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxImageCount() {
    return this.#view.getUint32(20, LE);
  }

  set maxImageCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get currentExtent() {
    return new Extent2D(this.#data.subarray(24, 24 + Extent2D.size));
  }

  set currentExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 24);
  }

  get minImageExtent() {
    return new Extent2D(this.#data.subarray(32, 32 + Extent2D.size));
  }

  set minImageExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 32);
  }

  get maxImageExtent() {
    return new Extent2D(this.#data.subarray(40, 40 + Extent2D.size));
  }

  set maxImageExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 40);
  }

  get maxImageArrayLayers() {
    return this.#view.getUint32(48, LE);
  }

  set maxImageArrayLayers(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get supportedTransforms() {
    return this.#view.getUint32(52, LE);
  }

  set supportedTransforms(value: SurfaceTransformFlagsKHR) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get currentTransform() {
    return this.#view.getUint32(56, LE);
  }

  set currentTransform(value: SurfaceTransformFlagBitsKHR) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get supportedCompositeAlpha() {
    return this.#view.getUint32(60, LE);
  }

  set supportedCompositeAlpha(value: CompositeAlphaFlagsKHR) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get supportedUsageFlags() {
    return this.#view.getUint32(64, LE);
  }

  set supportedUsageFlags(value: ImageUsageFlags) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get supportedSurfaceCounters() {
    return this.#view.getUint32(68, LE);
  }

  set supportedSurfaceCounters(value: SurfaceCounterFlagsEXT) {
    this.#view.setUint32(68, Number(value), LE);
  }
}