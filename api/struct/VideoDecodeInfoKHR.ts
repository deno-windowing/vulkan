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
import { VideoDecodeFlagsKHR, Buffer, DeviceSize } from "../def.ts";

export interface InitVideoDecodeInfoKHR {
  pNext?: AnyPointer;
  flags?: VideoDecodeFlagsKHR;
  srcBuffer?: Buffer;
  srcBufferOffset?: DeviceSize;
  srcBufferRange?: DeviceSize;
  dstPictureResource?: VideoPictureResourceInfoKHR;
  pSetupReferenceSlot?: AnyPointer;
  referenceSlotCount?: number;
  pReferenceSlots?: AnyPointer;
}

export class VideoDecodeInfoKHR implements BaseStruct {
  static size = 120;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoDecodeInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoDecodeInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoDecodeInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoDecodeInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoDecodeInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.srcBuffer !== undefined) this.srcBuffer = data.srcBuffer;
      if (data.srcBufferOffset !== undefined) this.srcBufferOffset = data.srcBufferOffset;
      if (data.srcBufferRange !== undefined) this.srcBufferRange = data.srcBufferRange;
      if (data.dstPictureResource !== undefined) this.dstPictureResource = data.dstPictureResource;
      if (data.pSetupReferenceSlot !== undefined) this.pSetupReferenceSlot = data.pSetupReferenceSlot;
      if (data.referenceSlotCount !== undefined) this.referenceSlotCount = data.referenceSlotCount;
      if (data.pReferenceSlots !== undefined) this.pReferenceSlots = data.pReferenceSlots;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoDecodeInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_DECODE_INFO_KHR;
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

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: VideoDecodeFlagsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get srcBuffer(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set srcBuffer(value: Buffer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get srcBufferOffset(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set srcBufferOffset(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get srcBufferRange(): bigint {
    return this.#view.getBigUint64(40, LE);
  }

  set srcBufferRange(value: DeviceSize) {
    this.#view.setBigUint64(40, BigInt(value), LE);
  }

  get dstPictureResource(): VideoPictureResourceInfoKHR {
    return new VideoPictureResourceInfoKHR(this.#data.subarray(48, 48 + VideoPictureResourceInfoKHR.size));
  }

  set dstPictureResource(value: VideoPictureResourceInfoKHR) {
    if (value[BUFFER].byteLength < VideoPictureResourceInfoKHR.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 48);
  }

  get pSetupReferenceSlot(): Deno.PointerValue {
    return pointerFromView(this.#view, 96, LE);
  }

  set pSetupReferenceSlot(value: AnyPointer) {
    this.#view.setBigUint64(96, BigInt(anyPointer(value)), LE);
  }

  get referenceSlotCount(): number {
    return this.#view.getUint32(104, LE);
  }

  set referenceSlotCount(value: number) {
    this.#view.setUint32(104, Number(value), LE);
  }

  get pReferenceSlots(): Deno.PointerValue {
    return pointerFromView(this.#view, 112, LE);
  }

  set pReferenceSlots(value: AnyPointer) {
    this.#view.setBigUint64(112, BigInt(anyPointer(value)), LE);
  }
}