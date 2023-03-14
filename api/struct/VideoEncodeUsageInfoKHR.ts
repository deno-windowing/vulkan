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
import { StructureType, VideoEncodeTuningModeKHR } from "../enum.ts";
import { VideoEncodeUsageFlagsKHR, VideoEncodeContentFlagsKHR } from "../def.ts";

export interface InitVideoEncodeUsageInfoKHR {
  pNext?: AnyPointer;
  videoUsageHints?: VideoEncodeUsageFlagsKHR;
  videoContentHints?: VideoEncodeContentFlagsKHR;
  tuningMode?: VideoEncodeTuningModeKHR;
}

export class VideoEncodeUsageInfoKHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeUsageInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeUsageInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeUsageInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeUsageInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeUsageInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.videoUsageHints !== undefined) this.videoUsageHints = data.videoUsageHints;
      if (data.videoContentHints !== undefined) this.videoContentHints = data.videoContentHints;
      if (data.tuningMode !== undefined) this.tuningMode = data.tuningMode;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeUsageInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_USAGE_INFO_KHR;
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

  get videoUsageHints() {
    return this.#view.getUint32(16, LE);
  }

  set videoUsageHints(value: VideoEncodeUsageFlagsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get videoContentHints() {
    return this.#view.getUint32(20, LE);
  }

  set videoContentHints(value: VideoEncodeContentFlagsKHR) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get tuningMode() {
    return this.#view.getUint32(24, LE);
  }

  set tuningMode(value: VideoEncodeTuningModeKHR) {
    this.#view.setUint32(24, Number(value), LE);
  }
}