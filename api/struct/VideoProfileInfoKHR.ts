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
import { StructureType, VideoCodecOperationFlagBitsKHR } from "../enum.ts";
import { VideoChromaSubsamplingFlagsKHR, VideoComponentBitDepthFlagsKHR } from "../def.ts";

export interface InitVideoProfileInfoKHR {
  pNext?: AnyPointer;
  videoCodecOperation?: VideoCodecOperationFlagBitsKHR;
  chromaSubsampling?: VideoChromaSubsamplingFlagsKHR;
  lumaBitDepth?: VideoComponentBitDepthFlagsKHR;
  chromaBitDepth?: VideoComponentBitDepthFlagsKHR;
}

export class VideoProfileInfoKHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoProfileInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoProfileInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoProfileInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoProfileInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoProfileInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.videoCodecOperation !== undefined) this.videoCodecOperation = data.videoCodecOperation;
      if (data.chromaSubsampling !== undefined) this.chromaSubsampling = data.chromaSubsampling;
      if (data.lumaBitDepth !== undefined) this.lumaBitDepth = data.lumaBitDepth;
      if (data.chromaBitDepth !== undefined) this.chromaBitDepth = data.chromaBitDepth;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoProfileInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_PROFILE_INFO_KHR;
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

  get videoCodecOperation() {
    return this.#view.getUint32(16, LE);
  }

  set videoCodecOperation(value: VideoCodecOperationFlagBitsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get chromaSubsampling() {
    return this.#view.getUint32(20, LE);
  }

  set chromaSubsampling(value: VideoChromaSubsamplingFlagsKHR) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get lumaBitDepth() {
    return this.#view.getUint32(24, LE);
  }

  set lumaBitDepth(value: VideoComponentBitDepthFlagsKHR) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get chromaBitDepth() {
    return this.#view.getUint32(28, LE);
  }

  set chromaBitDepth(value: VideoComponentBitDepthFlagsKHR) {
    this.#view.setUint32(28, Number(value), LE);
  }
}