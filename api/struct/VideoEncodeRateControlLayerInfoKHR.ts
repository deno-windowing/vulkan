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

export interface InitVideoEncodeRateControlLayerInfoKHR {
  pNext?: AnyPointer;
  averageBitrate?: number;
  maxBitrate?: number;
  frameRateNumerator?: number;
  frameRateDenominator?: number;
  virtualBufferSizeInMs?: number;
  initialVirtualBufferSizeInMs?: number;
}

export class VideoEncodeRateControlLayerInfoKHR implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeRateControlLayerInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeRateControlLayerInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeRateControlLayerInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeRateControlLayerInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeRateControlLayerInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.averageBitrate !== undefined) this.averageBitrate = data.averageBitrate;
      if (data.maxBitrate !== undefined) this.maxBitrate = data.maxBitrate;
      if (data.frameRateNumerator !== undefined) this.frameRateNumerator = data.frameRateNumerator;
      if (data.frameRateDenominator !== undefined) this.frameRateDenominator = data.frameRateDenominator;
      if (data.virtualBufferSizeInMs !== undefined) this.virtualBufferSizeInMs = data.virtualBufferSizeInMs;
      if (data.initialVirtualBufferSizeInMs !== undefined) this.initialVirtualBufferSizeInMs = data.initialVirtualBufferSizeInMs;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeRateControlLayerInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_RATE_CONTROL_LAYER_INFO_KHR;
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

  get averageBitrate(): number {
    return this.#view.getUint32(16, LE);
  }

  set averageBitrate(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxBitrate(): number {
    return this.#view.getUint32(20, LE);
  }

  set maxBitrate(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get frameRateNumerator(): number {
    return this.#view.getUint32(24, LE);
  }

  set frameRateNumerator(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get frameRateDenominator(): number {
    return this.#view.getUint32(28, LE);
  }

  set frameRateDenominator(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get virtualBufferSizeInMs(): number {
    return this.#view.getUint32(32, LE);
  }

  set virtualBufferSizeInMs(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get initialVirtualBufferSizeInMs(): number {
    return this.#view.getUint32(36, LE);
  }

  set initialVirtualBufferSizeInMs(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }
}