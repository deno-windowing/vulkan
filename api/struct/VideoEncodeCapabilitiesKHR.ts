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
import {Extent2D} from "./Extent2D.ts";
import { StructureType } from "../enum.ts";
import { VideoEncodeCapabilityFlagsKHR, VideoEncodeRateControlModeFlagsKHR } from "../def.ts";

export interface InitVideoEncodeCapabilitiesKHR {
  pNext?: AnyPointer;
  flags?: VideoEncodeCapabilityFlagsKHR;
  rateControlModes?: VideoEncodeRateControlModeFlagsKHR;
  rateControlLayerCount?: number;
  qualityLevelCount?: number;
  inputImageDataFillAlignment?: Extent2D;
}

export class VideoEncodeCapabilitiesKHR implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeCapabilitiesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeCapabilitiesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeCapabilitiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeCapabilitiesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeCapabilitiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.rateControlModes !== undefined) this.rateControlModes = data.rateControlModes;
      if (data.rateControlLayerCount !== undefined) this.rateControlLayerCount = data.rateControlLayerCount;
      if (data.qualityLevelCount !== undefined) this.qualityLevelCount = data.qualityLevelCount;
      if (data.inputImageDataFillAlignment !== undefined) this.inputImageDataFillAlignment = data.inputImageDataFillAlignment;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeCapabilitiesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_CAPABILITIES_KHR;
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

  set flags(value: VideoEncodeCapabilityFlagsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get rateControlModes() {
    return this.#view.getUint32(20, LE);
  }

  set rateControlModes(value: VideoEncodeRateControlModeFlagsKHR) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get rateControlLayerCount() {
    return this.#view.getUint8(24);
  }

  set rateControlLayerCount(value: number) {
    this.#view.setUint8(24, Number(value));
  }

  get qualityLevelCount() {
    return this.#view.getUint8(25);
  }

  set qualityLevelCount(value: number) {
    this.#view.setUint8(25, Number(value));
  }

  get inputImageDataFillAlignment() {
    return new Extent2D(this.#data.subarray(28, 28 + Extent2D.size));
  }

  set inputImageDataFillAlignment(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 28);
  }
}