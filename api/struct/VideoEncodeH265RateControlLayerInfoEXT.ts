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
import {VideoEncodeH265QpEXT} from "./VideoEncodeH265QpEXT.ts";
import {VideoEncodeH265FrameSizeEXT} from "./VideoEncodeH265FrameSizeEXT.ts";
import { StructureType } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitVideoEncodeH265RateControlLayerInfoEXT {
  pNext?: AnyPointer;
  temporalId?: number;
  useInitialRcQp?: Bool32;
  initialRcQp?: VideoEncodeH265QpEXT;
  useMinQp?: Bool32;
  minQp?: VideoEncodeH265QpEXT;
  useMaxQp?: Bool32;
  maxQp?: VideoEncodeH265QpEXT;
  useMaxFrameSize?: Bool32;
  maxFrameSize?: VideoEncodeH265FrameSizeEXT;
}

export class VideoEncodeH265RateControlLayerInfoEXT implements BaseStruct {
  static size = 88;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeH265RateControlLayerInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeH265RateControlLayerInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeH265RateControlLayerInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeH265RateControlLayerInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeH265RateControlLayerInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.temporalId !== undefined) this.temporalId = data.temporalId;
      if (data.useInitialRcQp !== undefined) this.useInitialRcQp = data.useInitialRcQp;
      if (data.initialRcQp !== undefined) this.initialRcQp = data.initialRcQp;
      if (data.useMinQp !== undefined) this.useMinQp = data.useMinQp;
      if (data.minQp !== undefined) this.minQp = data.minQp;
      if (data.useMaxQp !== undefined) this.useMaxQp = data.useMaxQp;
      if (data.maxQp !== undefined) this.maxQp = data.maxQp;
      if (data.useMaxFrameSize !== undefined) this.useMaxFrameSize = data.useMaxFrameSize;
      if (data.maxFrameSize !== undefined) this.maxFrameSize = data.maxFrameSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeH265RateControlLayerInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_H265_RATE_CONTROL_LAYER_INFO_EXT;
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

  get temporalId(): number {
    return this.#view.getUint8(16);
  }

  set temporalId(value: number) {
    this.#view.setUint8(16, Number(value));
  }

  get useInitialRcQp(): number {
    return this.#view.getUint32(20, LE);
  }

  set useInitialRcQp(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get initialRcQp(): VideoEncodeH265QpEXT {
    return new VideoEncodeH265QpEXT(this.#data.subarray(24, 24 + VideoEncodeH265QpEXT.size));
  }

  set initialRcQp(value: VideoEncodeH265QpEXT) {
    if (value[BUFFER].byteLength < VideoEncodeH265QpEXT.size) {
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

  get minQp(): VideoEncodeH265QpEXT {
    return new VideoEncodeH265QpEXT(this.#data.subarray(40, 40 + VideoEncodeH265QpEXT.size));
  }

  set minQp(value: VideoEncodeH265QpEXT) {
    if (value[BUFFER].byteLength < VideoEncodeH265QpEXT.size) {
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

  get maxQp(): VideoEncodeH265QpEXT {
    return new VideoEncodeH265QpEXT(this.#data.subarray(56, 56 + VideoEncodeH265QpEXT.size));
  }

  set maxQp(value: VideoEncodeH265QpEXT) {
    if (value[BUFFER].byteLength < VideoEncodeH265QpEXT.size) {
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

  get maxFrameSize(): VideoEncodeH265FrameSizeEXT {
    return new VideoEncodeH265FrameSizeEXT(this.#data.subarray(72, 72 + VideoEncodeH265FrameSizeEXT.size));
  }

  set maxFrameSize(value: VideoEncodeH265FrameSizeEXT) {
    if (value[BUFFER].byteLength < VideoEncodeH265FrameSizeEXT.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 72);
  }
}