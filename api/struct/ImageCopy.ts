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
import {ImageSubresourceLayers} from "./ImageSubresourceLayers.ts";
import {Offset3D} from "./Offset3D.ts";
import {Extent3D} from "./Extent3D.ts";

export interface InitImageCopy {
  srcSubresource?: ImageSubresourceLayers;
  srcOffset?: Offset3D;
  dstSubresource?: ImageSubresourceLayers;
  dstOffset?: Offset3D;
  extent?: Extent3D;
}

export class ImageCopy implements BaseStruct {
  static size = 68;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageCopy);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageCopy) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageCopy.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageCopy.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageCopy.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.srcSubresource !== undefined) this.srcSubresource = data.srcSubresource;
      if (data.srcOffset !== undefined) this.srcOffset = data.srcOffset;
      if (data.dstSubresource !== undefined) this.dstSubresource = data.dstSubresource;
      if (data.dstOffset !== undefined) this.dstOffset = data.dstOffset;
      if (data.extent !== undefined) this.extent = data.extent;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageCopy.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get srcSubresource() {
    return new ImageSubresourceLayers(this.#data.subarray(0, 0 + ImageSubresourceLayers.size));
  }

  set srcSubresource(value: ImageSubresourceLayers) {
    if (value[BUFFER].byteLength < ImageSubresourceLayers.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get srcOffset() {
    return new Offset3D(this.#data.subarray(16, 16 + Offset3D.size));
  }

  set srcOffset(value: Offset3D) {
    if (value[BUFFER].byteLength < Offset3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get dstSubresource() {
    return new ImageSubresourceLayers(this.#data.subarray(28, 28 + ImageSubresourceLayers.size));
  }

  set dstSubresource(value: ImageSubresourceLayers) {
    if (value[BUFFER].byteLength < ImageSubresourceLayers.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 28);
  }

  get dstOffset() {
    return new Offset3D(this.#data.subarray(44, 44 + Offset3D.size));
  }

  set dstOffset(value: Offset3D) {
    if (value[BUFFER].byteLength < Offset3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 44);
  }

  get extent() {
    return new Extent3D(this.#data.subarray(56, 56 + Extent3D.size));
  }

  set extent(value: Extent3D) {
    if (value[BUFFER].byteLength < Extent3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 56);
  }
}