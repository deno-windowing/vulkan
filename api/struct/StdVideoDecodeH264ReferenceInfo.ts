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
import {StdVideoDecodeH264ReferenceInfoFlags} from "./StdVideoDecodeH264ReferenceInfoFlags.ts";

export interface InitStdVideoDecodeH264ReferenceInfo {
  flags?: StdVideoDecodeH264ReferenceInfoFlags;
  FrameNum?: number;
  reserved?: number;
  PicOrderCnt?: Int32Array;
}

export class StdVideoDecodeH264ReferenceInfo implements BaseStruct {
  static size = 28;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoDecodeH264ReferenceInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoDecodeH264ReferenceInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoDecodeH264ReferenceInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoDecodeH264ReferenceInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoDecodeH264ReferenceInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.FrameNum !== undefined) this.FrameNum = data.FrameNum;
      if (data.reserved !== undefined) this.reserved = data.reserved;
      if (data.PicOrderCnt !== undefined) this.PicOrderCnt = data.PicOrderCnt;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoDecodeH264ReferenceInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags(): StdVideoDecodeH264ReferenceInfoFlags {
    return new StdVideoDecodeH264ReferenceInfoFlags(this.#data.subarray(0, 0 + StdVideoDecodeH264ReferenceInfoFlags.size));
  }

  set flags(value: StdVideoDecodeH264ReferenceInfoFlags) {
    if (value[BUFFER].byteLength < StdVideoDecodeH264ReferenceInfoFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get FrameNum(): number {
    return this.#view.getUint16(16, LE);
  }

  set FrameNum(value: number) {
    this.#view.setUint16(16, Number(value), LE);
  }

  get reserved(): number {
    return this.#view.getUint16(18, LE);
  }

  set reserved(value: number) {
    this.#view.setUint16(18, Number(value), LE);
  }

  get PicOrderCnt(): Int32Array {
    return new Int32Array(this.#data.buffer, this.#data.byteOffset + 20, 2);
  }

  set PicOrderCnt(value: Int32Array) {
    this.#data.set(new Uint8Array(value.buffer), 20);
  }
}