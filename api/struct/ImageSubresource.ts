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

export interface InitImageSubresource {
  aspectMask?: ImageAspectFlags;
  mipLevel?: number;
  arrayLayer?: number;
}

export class ImageSubresource implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageSubresource);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageSubresource) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageSubresource.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageSubresource.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageSubresource.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.aspectMask !== undefined) this.aspectMask = data.aspectMask;
      if (data.mipLevel !== undefined) this.mipLevel = data.mipLevel;
      if (data.arrayLayer !== undefined) this.arrayLayer = data.arrayLayer;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageSubresource.size));
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

  get arrayLayer() {
    return this.#view.getUint32(8, LE);
  }

  set arrayLayer(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }
}