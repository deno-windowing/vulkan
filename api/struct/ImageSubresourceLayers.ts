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
import { ImageAspectFlags } from "../def.ts";

export interface InitImageSubresourceLayers {
  aspectMask?: ImageAspectFlags;
  mipLevel?: number;
  baseArrayLayer?: number;
  layerCount?: number;
}

export class ImageSubresourceLayers implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageSubresourceLayers);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageSubresourceLayers) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageSubresourceLayers.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageSubresourceLayers.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageSubresourceLayers.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.aspectMask !== undefined) this.aspectMask = data.aspectMask;
      if (data.mipLevel !== undefined) this.mipLevel = data.mipLevel;
      if (data.baseArrayLayer !== undefined) this.baseArrayLayer = data.baseArrayLayer;
      if (data.layerCount !== undefined) this.layerCount = data.layerCount;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageSubresourceLayers.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get aspectMask() {
    return this.#view.getUint32(0, LE);
  }

  set aspectMask(value: ImageAspectFlags) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get mipLevel() {
    return this.#view.getUint32(4, LE);
  }

  set mipLevel(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get baseArrayLayer() {
    return this.#view.getUint32(8, LE);
  }

  set baseArrayLayer(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get layerCount() {
    return this.#view.getUint32(12, LE);
  }

  set layerCount(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }
}