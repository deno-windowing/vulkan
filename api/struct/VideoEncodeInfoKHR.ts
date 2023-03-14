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
import {VideoPictureResourceInfoKHR} from "./VideoPictureResourceInfoKHR.ts";
import {VideoReferenceSlotInfoKHR} from "./VideoReferenceSlotInfoKHR.ts";
import { StructureType } from "../enum.ts";
import { VideoEncodeFlagsKHR, Buffer, DeviceSize } from "../def.ts";

export interface InitVideoEncodeInfoKHR {
  pNext?: AnyPointer;
  flags?: VideoEncodeFlagsKHR;
  qualityLevel?: number;
  dstBitstreamBuffer?: Buffer;
  dstBitstreamBufferOffset?: DeviceSize;
  dstBitstreamBufferMaxRange?: DeviceSize;
  srcPictureResource?: VideoPictureResourceInfoKHR;
  pSetupReferenceSlot?: AnyPointer;
  referenceSlotCount?: number;
  pReferenceSlots?: AnyPointer;
  precedingExternallyEncodedBytes?: number;
}

export class VideoEncodeInfoKHR implements BaseStruct {
  static size = 128;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.qualityLevel !== undefined) this.qualityLevel = data.qualityLevel;
      if (data.dstBitstreamBuffer !== undefined) this.dstBitstreamBuffer = data.dstBitstreamBuffer;
      if (data.dstBitstreamBufferOffset !== undefined) this.dstBitstreamBufferOffset = data.dstBitstreamBufferOffset;
      if (data.dstBitstreamBufferMaxRange !== undefined) this.dstBitstreamBufferMaxRange = data.dstBitstreamBufferMaxRange;
      if (data.srcPictureResource !== undefined) this.srcPictureResource = data.srcPictureResource;
      if (data.pSetupReferenceSlot !== undefined) this.pSetupReferenceSlot = data.pSetupReferenceSlot;
      if (data.referenceSlotCount !== undefined) this.referenceSlotCount = data.referenceSlotCount;
      if (data.pReferenceSlots !== undefined) this.pReferenceSlots = data.pReferenceSlots;
      if (data.precedingExternallyEncodedBytes !== undefined) this.precedingExternallyEncodedBytes = data.precedingExternallyEncodedBytes;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_INFO_KHR;
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

  set flags(value: VideoEncodeFlagsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get qualityLevel() {
    return this.#view.getUint32(20, LE);
  }

  set qualityLevel(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get dstBitstreamBuffer() {
    return pointerFromView(this.#view, 24, LE);
  }

  set dstBitstreamBuffer(value: Buffer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get dstBitstreamBufferOffset() {
    return this.#view.getBigUint64(32, LE);
  }

  set dstBitstreamBufferOffset(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get dstBitstreamBufferMaxRange() {
    return this.#view.getBigUint64(40, LE);
  }

  set dstBitstreamBufferMaxRange(value: DeviceSize) {
    this.#view.setBigUint64(40, BigInt(value), LE);
  }

  get srcPictureResource() {
    return new VideoPictureResourceInfoKHR(this.#data.subarray(48, 48 + VideoPictureResourceInfoKHR.size));
  }

  set srcPictureResource(value: VideoPictureResourceInfoKHR) {
    if (value[BUFFER].byteLength < VideoPictureResourceInfoKHR.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 48);
  }

  get pSetupReferenceSlot() {
    return pointerFromView(this.#view, 96, LE);
  }

  set pSetupReferenceSlot(value: AnyPointer) {
    this.#view.setBigUint64(96, BigInt(anyPointer(value)), LE);
  }

  get referenceSlotCount() {
    return this.#view.getUint32(104, LE);
  }

  set referenceSlotCount(value: number) {
    this.#view.setUint32(104, Number(value), LE);
  }

  get pReferenceSlots() {
    return pointerFromView(this.#view, 112, LE);
  }

  set pReferenceSlots(value: AnyPointer) {
    this.#view.setBigUint64(112, BigInt(anyPointer(value)), LE);
  }

  get precedingExternallyEncodedBytes() {
    return this.#view.getUint32(120, LE);
  }

  set precedingExternallyEncodedBytes(value: number) {
    this.#view.setUint32(120, Number(value), LE);
  }
}