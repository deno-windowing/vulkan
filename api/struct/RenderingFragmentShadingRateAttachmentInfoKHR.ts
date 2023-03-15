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
import { StructureType, ImageLayout } from "../enum.ts";
import { ImageView } from "../def.ts";

export interface InitRenderingFragmentShadingRateAttachmentInfoKHR {
  pNext?: AnyPointer;
  imageView?: ImageView;
  imageLayout?: ImageLayout;
  shadingRateAttachmentTexelSize?: Extent2D;
}

export class RenderingFragmentShadingRateAttachmentInfoKHR implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitRenderingFragmentShadingRateAttachmentInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitRenderingFragmentShadingRateAttachmentInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(RenderingFragmentShadingRateAttachmentInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < RenderingFragmentShadingRateAttachmentInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(RenderingFragmentShadingRateAttachmentInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.imageView !== undefined) this.imageView = data.imageView;
      if (data.imageLayout !== undefined) this.imageLayout = data.imageLayout;
      if (data.shadingRateAttachmentTexelSize !== undefined) this.shadingRateAttachmentTexelSize = data.shadingRateAttachmentTexelSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, RenderingFragmentShadingRateAttachmentInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.RENDERING_FRAGMENT_SHADING_RATE_ATTACHMENT_INFO_KHR;
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

  get imageView() {
    return pointerFromView(this.#view, 16, LE);
  }

  set imageView(value: ImageView) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get imageLayout() {
    return this.#view.getUint32(24, LE);
  }

  set imageLayout(value: ImageLayout) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get shadingRateAttachmentTexelSize() {
    return new Extent2D(this.#data.subarray(28, 28 + Extent2D.size));
  }

  set shadingRateAttachmentTexelSize(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 28);
  }
}