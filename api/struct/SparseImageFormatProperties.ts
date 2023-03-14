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
import {Extent3D} from "./Extent3D.ts";
import { ImageAspectFlags, SparseImageFormatFlags } from "../def.ts";

export interface InitSparseImageFormatProperties {
  aspectMask?: ImageAspectFlags;
  imageGranularity?: Extent3D;
  flags?: SparseImageFormatFlags;
}

export class SparseImageFormatProperties implements BaseStruct {
  static size = 20;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSparseImageFormatProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSparseImageFormatProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SparseImageFormatProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SparseImageFormatProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SparseImageFormatProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.aspectMask !== undefined) this.aspectMask = data.aspectMask;
      if (data.imageGranularity !== undefined) this.imageGranularity = data.imageGranularity;
      if (data.flags !== undefined) this.flags = data.flags;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SparseImageFormatProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get aspectMask() {
    return this.#view.getUint32(0, LE);
  }

  set aspectMask(value: ImageAspectFlags) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get imageGranularity() {
    return new Extent3D(this.#data.subarray(4, 4 + Extent3D.size));
  }

  set imageGranularity(value: Extent3D) {
    if (value[BUFFER].byteLength < Extent3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 4);
  }

  get flags() {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: SparseImageFormatFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }
}