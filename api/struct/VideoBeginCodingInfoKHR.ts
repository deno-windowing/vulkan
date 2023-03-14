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
import {VideoReferenceSlotInfoKHR} from "./VideoReferenceSlotInfoKHR.ts";
import { StructureType } from "../enum.ts";
import { VideoBeginCodingFlagsKHR, VideoSessionKHR, VideoSessionParametersKHR } from "../def.ts";

export interface InitVideoBeginCodingInfoKHR {
  pNext?: AnyPointer;
  flags?: VideoBeginCodingFlagsKHR;
  videoSession?: VideoSessionKHR;
  videoSessionParameters?: VideoSessionParametersKHR;
  referenceSlotCount?: number;
  pReferenceSlots?: AnyPointer;
}

export class VideoBeginCodingInfoKHR implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoBeginCodingInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoBeginCodingInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoBeginCodingInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoBeginCodingInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoBeginCodingInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.videoSession !== undefined) this.videoSession = data.videoSession;
      if (data.videoSessionParameters !== undefined) this.videoSessionParameters = data.videoSessionParameters;
      if (data.referenceSlotCount !== undefined) this.referenceSlotCount = data.referenceSlotCount;
      if (data.pReferenceSlots !== undefined) this.pReferenceSlots = data.pReferenceSlots;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoBeginCodingInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_BEGIN_CODING_INFO_KHR;
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

  set flags(value: VideoBeginCodingFlagsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get videoSession() {
    return pointerFromView(this.#view, 24, LE);
  }

  set videoSession(value: VideoSessionKHR) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get videoSessionParameters() {
    return pointerFromView(this.#view, 32, LE);
  }

  set videoSessionParameters(value: VideoSessionParametersKHR) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get referenceSlotCount() {
    return this.#view.getUint32(40, LE);
  }

  set referenceSlotCount(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get pReferenceSlots() {
    return pointerFromView(this.#view, 48, LE);
  }

  set pReferenceSlots(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }
}