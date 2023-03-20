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
import {VideoEncodeH264QpEXT} from "./VideoEncodeH264QpEXT.ts";
import {VideoEncodeH264FrameSizeEXT} from "./VideoEncodeH264FrameSizeEXT.ts";
import { StructureType } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitVideoEncodeH264RateControlLayerInfoEXT {
  pNext?: AnyPointer;
  temporalLayerId?: number;
  useInitialRcQp?: Bool32;
  initialRcQp?: VideoEncodeH264QpEXT;
  useMinQp?: Bool32;
  minQp?: VideoEncodeH264QpEXT;
  useMaxQp?: Bool32;
  maxQp?: VideoEncodeH264QpEXT;
  useMaxFrameSize?: Bool32;
  maxFrameSize?: VideoEncodeH264FrameSizeEXT;
}

export class VideoEncodeH264RateControlLayerInfoEXT implements BaseStruct {
  static size = 88;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeH264RateControlLayerInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeH264RateControlLayerInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeH264RateControlLayerInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeH264RateControlLayerInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeH264RateControlLayerInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.temporalLayerId !== undefined) this.temporalLayerId = data.temporalLayerId;
      if (data.useInitialRcQp !== undefined) this.useInitialRcQp = data.useInitialRcQp;
      if (data.initialRcQp !== undefined) this.initialRcQp = data.initialRcQp;
      if (data.useMinQp !== undefined) this.useMinQp = data.useMinQp;
      if (data.minQp !== undefined) this.minQp = data.minQp;
      if (data.useMaxQp !== undefined) this.useMaxQp = data.useMaxQp;
      if (data.maxQp !== undefined) this.maxQp = data.maxQp;
      if (data.useMaxFrameSize !== undefined) this.useMaxFrameSize = data.useMaxFrameSize;
      if (data.maxFrameSize !== undefined) this.maxFrameSize = data.maxFrameSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeH264RateControlLayerInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_H264_RATE_CONTROL_LAYER_INFO_EXT;
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

  get temporalLayerId(): number {
    return this.#view.getUint8(16);
  }

  set temporalLayerId(value: number) {
    this.#view.setUint8(16, Number(value));
  }

  get useInitialRcQp(): number {
    return this.#view.getUint32(20, LE);
  }

  set useInitialRcQp(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get initialRcQp(): VideoEncodeH264QpEXT {
    return new VideoEncodeH264QpEXT(this.#data.subarray(24, 24 + VideoEncodeH264QpEXT.size));
  }

  set initialRcQp(value: VideoEncodeH264QpEXT) {
    if (value[BUFFER].byteLength < VideoEncodeH264QpEXT.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 24);
  }

  get useMinQp(): number {
    return this.#view.getUint32(36, LE);
  }

  set useMinQp(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get minQp(): VideoEncodeH264QpEXT {
    return new VideoEncodeH264QpEXT(this.#data.subarray(40, 40 + VideoEncodeH264QpEXT.size));
  }

  set minQp(value: VideoEncodeH264QpEXT) {
    if (value[BUFFER].byteLength < VideoEncodeH264QpEXT.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 40);
  }

  get useMaxQp(): number {
    return this.#view.getUint32(52, LE);
  }

  set useMaxQp(value: Bool32) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get maxQp(): VideoEncodeH264QpEXT {
    return new VideoEncodeH264QpEXT(this.#data.subarray(56, 56 + VideoEncodeH264QpEXT.size));
  }

  set maxQp(value: VideoEncodeH264QpEXT) {
    if (value[BUFFER].byteLength < VideoEncodeH264QpEXT.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 56);
  }

  get useMaxFrameSize(): number {
    return this.#view.getUint32(68, LE);
  }

  set useMaxFrameSize(value: Bool32) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get maxFrameSize(): VideoEncodeH264FrameSizeEXT {
    return new VideoEncodeH264FrameSizeEXT(this.#data.subarray(72, 72 + VideoEncodeH264FrameSizeEXT.size));
  }

  set maxFrameSize(value: VideoEncodeH264FrameSizeEXT) {
    if (value[BUFFER].byteLength < VideoEncodeH264FrameSizeEXT.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 72);
  }
}