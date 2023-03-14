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
import { StructureType } from "../enum.ts";
import { ImageCompressionFlagsEXT, ImageCompressionFixedRateFlagsEXT } from "../def.ts";

export interface InitImageCompressionControlEXT {
  pNext?: AnyPointer;
  flags?: ImageCompressionFlagsEXT;
  compressionControlPlaneCount?: number;
  pFixedRateFlags?: AnyPointer;
}

export class ImageCompressionControlEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageCompressionControlEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageCompressionControlEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageCompressionControlEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageCompressionControlEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageCompressionControlEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.compressionControlPlaneCount !== undefined) this.compressionControlPlaneCount = data.compressionControlPlaneCount;
      if (data.pFixedRateFlags !== undefined) this.pFixedRateFlags = data.pFixedRateFlags;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageCompressionControlEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IMAGE_COMPRESSION_CONTROL_EXT;
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

  get flags() {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: ImageCompressionFlagsEXT) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get compressionControlPlaneCount() {
    return this.#view.getUint32(20, LE);
  }

  set compressionControlPlaneCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pFixedRateFlags() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pFixedRateFlags(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}