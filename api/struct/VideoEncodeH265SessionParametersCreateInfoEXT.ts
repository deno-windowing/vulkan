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
import {VideoEncodeH265SessionParametersAddInfoEXT} from "./VideoEncodeH265SessionParametersAddInfoEXT.ts";
import { StructureType } from "../enum.ts";

export interface InitVideoEncodeH265SessionParametersCreateInfoEXT {
  pNext?: AnyPointer;
  maxStdVPSCount?: number;
  maxStdSPSCount?: number;
  maxStdPPSCount?: number;
  pParametersAddInfo?: AnyPointer;
}

export class VideoEncodeH265SessionParametersCreateInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeH265SessionParametersCreateInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeH265SessionParametersCreateInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeH265SessionParametersCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeH265SessionParametersCreateInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeH265SessionParametersCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxStdVPSCount !== undefined) this.maxStdVPSCount = data.maxStdVPSCount;
      if (data.maxStdSPSCount !== undefined) this.maxStdSPSCount = data.maxStdSPSCount;
      if (data.maxStdPPSCount !== undefined) this.maxStdPPSCount = data.maxStdPPSCount;
      if (data.pParametersAddInfo !== undefined) this.pParametersAddInfo = data.pParametersAddInfo;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeH265SessionParametersCreateInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_H265_SESSION_PARAMETERS_CREATE_INFO_EXT;
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

  get maxStdVPSCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set maxStdVPSCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxStdSPSCount(): number {
    return this.#view.getUint32(20, LE);
  }

  set maxStdSPSCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get maxStdPPSCount(): number {
    return this.#view.getUint32(24, LE);
  }

  set maxStdPPSCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pParametersAddInfo(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pParametersAddInfo(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}