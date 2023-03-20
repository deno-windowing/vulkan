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
import {VideoEncodeRateControlLayerInfoKHR} from "./VideoEncodeRateControlLayerInfoKHR.ts";
import { StructureType, VideoEncodeRateControlModeFlagBitsKHR } from "../enum.ts";
import { VideoEncodeRateControlFlagsKHR } from "../def.ts";

export interface InitVideoEncodeRateControlInfoKHR {
  pNext?: AnyPointer;
  flags?: VideoEncodeRateControlFlagsKHR;
  rateControlMode?: VideoEncodeRateControlModeFlagBitsKHR;
  layerCount?: number;
  pLayerConfigs?: AnyPointer;
}

export class VideoEncodeRateControlInfoKHR implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeRateControlInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeRateControlInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeRateControlInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeRateControlInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeRateControlInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.rateControlMode !== undefined) this.rateControlMode = data.rateControlMode;
      if (data.layerCount !== undefined) this.layerCount = data.layerCount;
      if (data.pLayerConfigs !== undefined) this.pLayerConfigs = data.pLayerConfigs;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeRateControlInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_RATE_CONTROL_INFO_KHR;
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

  set flags(value: VideoEncodeRateControlFlagsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get rateControlMode(): number {
    return this.#view.getUint32(20, LE);
  }

  set rateControlMode(value: VideoEncodeRateControlModeFlagBitsKHR) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get layerCount(): number {
    return this.#view.getUint8(24);
  }

  set layerCount(value: number) {
    this.#view.setUint8(24, Number(value));
  }

  get pLayerConfigs(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pLayerConfigs(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}