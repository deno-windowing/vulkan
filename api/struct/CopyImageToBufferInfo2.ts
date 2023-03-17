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
import {BufferImageCopy2} from "./BufferImageCopy2.ts";
import { StructureType, ImageLayout } from "../enum.ts";
import { Image, Buffer } from "../def.ts";

export interface InitCopyImageToBufferInfo2 {
  pNext?: AnyPointer;
  srcImage?: Image;
  srcImageLayout?: ImageLayout;
  dstBuffer?: Buffer;
  regionCount?: number;
  pRegions?: AnyPointer;
}

export class CopyImageToBufferInfo2 implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCopyImageToBufferInfo2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCopyImageToBufferInfo2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CopyImageToBufferInfo2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CopyImageToBufferInfo2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CopyImageToBufferInfo2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.srcImage !== undefined) this.srcImage = data.srcImage;
      if (data.srcImageLayout !== undefined) this.srcImageLayout = data.srcImageLayout;
      if (data.dstBuffer !== undefined) this.dstBuffer = data.dstBuffer;
      if (data.regionCount !== undefined) this.regionCount = data.regionCount;
      if (data.pRegions !== undefined) this.pRegions = data.pRegions;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CopyImageToBufferInfo2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.COPY_IMAGE_TO_BUFFER_INFO_2;
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

  get srcImage(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set srcImage(value: Image) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get srcImageLayout(): number {
    return this.#view.getUint32(24, LE);
  }

  set srcImageLayout(value: ImageLayout) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get dstBuffer(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set dstBuffer(value: Buffer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get regionCount(): number {
    return this.#view.getUint32(40, LE);
  }

  set regionCount(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get pRegions(): Deno.PointerValue {
    return pointerFromView(this.#view, 48, LE);
  }

  set pRegions(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }
}