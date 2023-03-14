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
import {ImageBlit2} from "./ImageBlit2.ts";
import { StructureType, ImageLayout, Filter } from "../enum.ts";
import { Image } from "../def.ts";

export interface InitBlitImageInfo2 {
  pNext?: AnyPointer;
  srcImage?: Image;
  srcImageLayout?: ImageLayout;
  dstImage?: Image;
  dstImageLayout?: ImageLayout;
  regionCount?: number;
  pRegions?: AnyPointer;
  filter?: Filter;
}

export class BlitImageInfo2 implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBlitImageInfo2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBlitImageInfo2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BlitImageInfo2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BlitImageInfo2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BlitImageInfo2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.srcImage !== undefined) this.srcImage = data.srcImage;
      if (data.srcImageLayout !== undefined) this.srcImageLayout = data.srcImageLayout;
      if (data.dstImage !== undefined) this.dstImage = data.dstImage;
      if (data.dstImageLayout !== undefined) this.dstImageLayout = data.dstImageLayout;
      if (data.regionCount !== undefined) this.regionCount = data.regionCount;
      if (data.pRegions !== undefined) this.pRegions = data.pRegions;
      if (data.filter !== undefined) this.filter = data.filter;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BlitImageInfo2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.BLIT_IMAGE_INFO_2;
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

  get srcImage() {
    return pointerFromView(this.#view, 16, LE);
  }

  set srcImage(value: Image) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get srcImageLayout() {
    return this.#view.getUint32(24, LE);
  }

  set srcImageLayout(value: ImageLayout) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get dstImage() {
    return pointerFromView(this.#view, 32, LE);
  }

  set dstImage(value: Image) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get dstImageLayout() {
    return this.#view.getUint32(40, LE);
  }

  set dstImageLayout(value: ImageLayout) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get regionCount() {
    return this.#view.getUint32(44, LE);
  }

  set regionCount(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get pRegions() {
    return pointerFromView(this.#view, 48, LE);
  }

  set pRegions(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }

  get filter() {
    return this.#view.getUint32(56, LE);
  }

  set filter(value: Filter) {
    this.#view.setUint32(56, Number(value), LE);
  }
}