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
import {Offset2D} from "./Offset2D.ts";
import { StructureType, StdVideoH264LevelIdc } from "../enum.ts";

export interface InitVideoDecodeH264CapabilitiesEXT {
  pNext?: AnyPointer;
  maxLevelIdc?: StdVideoH264LevelIdc;
  fieldOffsetGranularity?: Offset2D;
}

export class VideoDecodeH264CapabilitiesEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoDecodeH264CapabilitiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoDecodeH264CapabilitiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoDecodeH264CapabilitiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoDecodeH264CapabilitiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoDecodeH264CapabilitiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxLevelIdc !== undefined) this.maxLevelIdc = data.maxLevelIdc;
      if (data.fieldOffsetGranularity !== undefined) this.fieldOffsetGranularity = data.fieldOffsetGranularity;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoDecodeH264CapabilitiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_DECODE_H264_CAPABILITIES_EXT;
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

  get maxLevelIdc() {
    return this.#view.getUint32(16, LE);
  }

  set maxLevelIdc(value: StdVideoH264LevelIdc) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get fieldOffsetGranularity() {
    return new Offset2D(this.#data.subarray(20, 20 + Offset2D.size));
  }

  set fieldOffsetGranularity(value: Offset2D) {
    if (value[BUFFER].byteLength < Offset2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 20);
  }
}