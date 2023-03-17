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
import { StructureType } from "../enum.ts";

export interface InitImageResolve2 {
  pNext?: AnyPointer;
  srcSubresource?: ImageSubresourceLayers;
  srcOffset?: Offset3D;
  dstSubresource?: ImageSubresourceLayers;
  dstOffset?: Offset3D;
  extent?: Extent3D;
}

export class ImageResolve2 implements BaseStruct {
  static size = 88;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageResolve2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageResolve2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageResolve2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageResolve2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageResolve2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.srcSubresource !== undefined) this.srcSubresource = data.srcSubresource;
      if (data.srcOffset !== undefined) this.srcOffset = data.srcOffset;
      if (data.dstSubresource !== undefined) this.dstSubresource = data.dstSubresource;
      if (data.dstOffset !== undefined) this.dstOffset = data.dstOffset;
      if (data.extent !== undefined) this.extent = data.extent;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageResolve2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IMAGE_RESOLVE_2;
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

  get srcSubresource(): ImageSubresourceLayers {
    return new ImageSubresourceLayers(this.#data.subarray(16, 16 + ImageSubresourceLayers.size));
  }

  set srcSubresource(value: ImageSubresourceLayers) {
    if (value[BUFFER].byteLength < ImageSubresourceLayers.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get srcOffset(): Offset3D {
    return new Offset3D(this.#data.subarray(32, 32 + Offset3D.size));
  }

  set srcOffset(value: Offset3D) {
    if (value[BUFFER].byteLength < Offset3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 32);
  }

  get dstSubresource(): ImageSubresourceLayers {
    return new ImageSubresourceLayers(this.#data.subarray(44, 44 + ImageSubresourceLayers.size));
  }

  set dstSubresource(value: ImageSubresourceLayers) {
    if (value[BUFFER].byteLength < ImageSubresourceLayers.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 44);
  }

  get dstOffset(): Offset3D {
    return new Offset3D(this.#data.subarray(60, 60 + Offset3D.size));
  }

  set dstOffset(value: Offset3D) {
    if (value[BUFFER].byteLength < Offset3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 60);
  }

  get extent(): Extent3D {
    return new Extent3D(this.#data.subarray(72, 72 + Extent3D.size));
  }

  set extent(value: Extent3D) {
    if (value[BUFFER].byteLength < Extent3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 72);
  }
}