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
import { StructureType, StdVideoH265LevelIdc } from "../enum.ts";

export interface InitVideoDecodeH265CapabilitiesEXT {
  pNext?: AnyPointer;
  maxLevelIdc?: StdVideoH265LevelIdc;
}

export class VideoDecodeH265CapabilitiesEXT implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoDecodeH265CapabilitiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoDecodeH265CapabilitiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoDecodeH265CapabilitiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoDecodeH265CapabilitiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoDecodeH265CapabilitiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxLevelIdc !== undefined) this.maxLevelIdc = data.maxLevelIdc;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoDecodeH265CapabilitiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_DECODE_H265_CAPABILITIES_EXT;
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

  get maxLevelIdc(): number {
    return this.#view.getUint32(16, LE);
  }

  set maxLevelIdc(value: StdVideoH265LevelIdc) {
    this.#view.setUint32(16, Number(value), LE);
  }
}