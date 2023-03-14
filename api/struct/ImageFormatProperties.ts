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
import { SampleCountFlags, DeviceSize } from "../def.ts";

export interface InitImageFormatProperties {
  maxExtent?: Extent3D;
  maxMipLevels?: number;
  maxArrayLayers?: number;
  sampleCounts?: SampleCountFlags;
  maxResourceSize?: DeviceSize;
}

export class ImageFormatProperties implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageFormatProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageFormatProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageFormatProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageFormatProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageFormatProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.maxExtent !== undefined) this.maxExtent = data.maxExtent;
      if (data.maxMipLevels !== undefined) this.maxMipLevels = data.maxMipLevels;
      if (data.maxArrayLayers !== undefined) this.maxArrayLayers = data.maxArrayLayers;
      if (data.sampleCounts !== undefined) this.sampleCounts = data.sampleCounts;
      if (data.maxResourceSize !== undefined) this.maxResourceSize = data.maxResourceSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageFormatProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get maxExtent() {
    return new Extent3D(this.#data.subarray(0, 0 + Extent3D.size));
  }

  set maxExtent(value: Extent3D) {
    if (value[BUFFER].byteLength < Extent3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get maxMipLevels() {
    return this.#view.getUint32(12, LE);
  }

  set maxMipLevels(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get maxArrayLayers() {
    return this.#view.getUint32(16, LE);
  }

  set maxArrayLayers(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get sampleCounts() {
    return this.#view.getUint32(20, LE);
  }

  set sampleCounts(value: SampleCountFlags) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get maxResourceSize() {
    return this.#view.getBigUint64(24, LE);
  }

  set maxResourceSize(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }
}