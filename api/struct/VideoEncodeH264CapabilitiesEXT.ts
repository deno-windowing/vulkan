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
import { VideoEncodeH264CapabilityFlagsEXT, VideoEncodeH264InputModeFlagsEXT, VideoEncodeH264OutputModeFlagsEXT, Bool32 } from "../def.ts";

export interface InitVideoEncodeH264CapabilitiesEXT {
  pNext?: AnyPointer;
  flags?: VideoEncodeH264CapabilityFlagsEXT;
  inputModeFlags?: VideoEncodeH264InputModeFlagsEXT;
  outputModeFlags?: VideoEncodeH264OutputModeFlagsEXT;
  maxPPictureL0ReferenceCount?: number;
  maxBPictureL0ReferenceCount?: number;
  maxL1ReferenceCount?: number;
  motionVectorsOverPicBoundariesFlag?: Bool32;
  maxBytesPerPicDenom?: number;
  maxBitsPerMbDenom?: number;
  log2MaxMvLengthHorizontal?: number;
  log2MaxMvLengthVertical?: number;
}

export class VideoEncodeH264CapabilitiesEXT implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeH264CapabilitiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeH264CapabilitiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeH264CapabilitiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeH264CapabilitiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeH264CapabilitiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.inputModeFlags !== undefined) this.inputModeFlags = data.inputModeFlags;
      if (data.outputModeFlags !== undefined) this.outputModeFlags = data.outputModeFlags;
      if (data.maxPPictureL0ReferenceCount !== undefined) this.maxPPictureL0ReferenceCount = data.maxPPictureL0ReferenceCount;
      if (data.maxBPictureL0ReferenceCount !== undefined) this.maxBPictureL0ReferenceCount = data.maxBPictureL0ReferenceCount;
      if (data.maxL1ReferenceCount !== undefined) this.maxL1ReferenceCount = data.maxL1ReferenceCount;
      if (data.motionVectorsOverPicBoundariesFlag !== undefined) this.motionVectorsOverPicBoundariesFlag = data.motionVectorsOverPicBoundariesFlag;
      if (data.maxBytesPerPicDenom !== undefined) this.maxBytesPerPicDenom = data.maxBytesPerPicDenom;
      if (data.maxBitsPerMbDenom !== undefined) this.maxBitsPerMbDenom = data.maxBitsPerMbDenom;
      if (data.log2MaxMvLengthHorizontal !== undefined) this.log2MaxMvLengthHorizontal = data.log2MaxMvLengthHorizontal;
      if (data.log2MaxMvLengthVertical !== undefined) this.log2MaxMvLengthVertical = data.log2MaxMvLengthVertical;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeH264CapabilitiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_H264_CAPABILITIES_EXT;
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

  set flags(value: VideoEncodeH264CapabilityFlagsEXT) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get inputModeFlags() {
    return this.#view.getUint32(20, LE);
  }

  set inputModeFlags(value: VideoEncodeH264InputModeFlagsEXT) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get outputModeFlags() {
    return this.#view.getUint32(24, LE);
  }

  set outputModeFlags(value: VideoEncodeH264OutputModeFlagsEXT) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get maxPPictureL0ReferenceCount() {
    return this.#view.getUint8(28);
  }

  set maxPPictureL0ReferenceCount(value: number) {
    this.#view.setUint8(28, Number(value));
  }

  get maxBPictureL0ReferenceCount() {
    return this.#view.getUint8(29);
  }

  set maxBPictureL0ReferenceCount(value: number) {
    this.#view.setUint8(29, Number(value));
  }

  get maxL1ReferenceCount() {
    return this.#view.getUint8(30);
  }

  set maxL1ReferenceCount(value: number) {
    this.#view.setUint8(30, Number(value));
  }

  get motionVectorsOverPicBoundariesFlag() {
    return this.#view.getUint32(32, LE);
  }

  set motionVectorsOverPicBoundariesFlag(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get maxBytesPerPicDenom() {
    return this.#view.getUint32(36, LE);
  }

  set maxBytesPerPicDenom(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get maxBitsPerMbDenom() {
    return this.#view.getUint32(40, LE);
  }

  set maxBitsPerMbDenom(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get log2MaxMvLengthHorizontal() {
    return this.#view.getUint32(44, LE);
  }

  set log2MaxMvLengthHorizontal(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get log2MaxMvLengthVertical() {
    return this.#view.getUint32(48, LE);
  }

  set log2MaxMvLengthVertical(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }
}