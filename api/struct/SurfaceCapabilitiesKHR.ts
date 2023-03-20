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
import { SurfaceTransformFlagBitsKHR } from "../enum.ts";
import { SurfaceTransformFlagsKHR, CompositeAlphaFlagsKHR, ImageUsageFlags } from "../def.ts";

export interface InitSurfaceCapabilitiesKHR {
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
}

export class SurfaceCapabilitiesKHR implements BaseStruct {
  static size = 52;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSurfaceCapabilitiesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSurfaceCapabilitiesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SurfaceCapabilitiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SurfaceCapabilitiesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SurfaceCapabilitiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
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
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SurfaceCapabilitiesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get minImageCount(): number {
    return this.#view.getUint32(0, LE);
  }

  set minImageCount(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get maxImageCount(): number {
    return this.#view.getUint32(4, LE);
  }

  set maxImageCount(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get currentExtent(): Extent2D {
    return new Extent2D(this.#data.subarray(8, 8 + Extent2D.size));
  }

  set currentExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 8);
  }

  get minImageExtent(): Extent2D {
    return new Extent2D(this.#data.subarray(16, 16 + Extent2D.size));
  }

  set minImageExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get maxImageExtent(): Extent2D {
    return new Extent2D(this.#data.subarray(24, 24 + Extent2D.size));
  }

  set maxImageExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 24);
  }

  get maxImageArrayLayers(): number {
    return this.#view.getUint32(32, LE);
  }

  set maxImageArrayLayers(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get supportedTransforms(): number {
    return this.#view.getUint32(36, LE);
  }

  set supportedTransforms(value: SurfaceTransformFlagsKHR) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get currentTransform(): number {
    return this.#view.getUint32(40, LE);
  }

  set currentTransform(value: SurfaceTransformFlagBitsKHR) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get supportedCompositeAlpha(): number {
    return this.#view.getUint32(44, LE);
  }

  set supportedCompositeAlpha(value: CompositeAlphaFlagsKHR) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get supportedUsageFlags(): number {
    return this.#view.getUint32(48, LE);
  }

  set supportedUsageFlags(value: ImageUsageFlags) {
    this.#view.setUint32(48, Number(value), LE);
  }
}