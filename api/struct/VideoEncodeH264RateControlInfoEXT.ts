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
import { StructureType, VideoEncodeH264RateControlStructureEXT } from "../enum.ts";

export interface InitVideoEncodeH264RateControlInfoEXT {
  pNext?: AnyPointer;
  gopFrameCount?: number;
  idrPeriod?: number;
  consecutiveBFrameCount?: number;
  rateControlStructure?: VideoEncodeH264RateControlStructureEXT;
  temporalLayerCount?: number;
}

export class VideoEncodeH264RateControlInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeH264RateControlInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeH264RateControlInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeH264RateControlInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeH264RateControlInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeH264RateControlInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.gopFrameCount !== undefined) this.gopFrameCount = data.gopFrameCount;
      if (data.idrPeriod !== undefined) this.idrPeriod = data.idrPeriod;
      if (data.consecutiveBFrameCount !== undefined) this.consecutiveBFrameCount = data.consecutiveBFrameCount;
      if (data.rateControlStructure !== undefined) this.rateControlStructure = data.rateControlStructure;
      if (data.temporalLayerCount !== undefined) this.temporalLayerCount = data.temporalLayerCount;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeH264RateControlInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_H264_RATE_CONTROL_INFO_EXT;
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

  get gopFrameCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set gopFrameCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get idrPeriod(): number {
    return this.#view.getUint32(20, LE);
  }

  set idrPeriod(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get consecutiveBFrameCount(): number {
    return this.#view.getUint32(24, LE);
  }

  set consecutiveBFrameCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get rateControlStructure(): number {
    return this.#view.getUint32(28, LE);
  }

  set rateControlStructure(value: VideoEncodeH264RateControlStructureEXT) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get temporalLayerCount(): number {
    return this.#view.getUint8(32);
  }

  set temporalLayerCount(value: number) {
    this.#view.setUint8(32, Number(value));
  }
}