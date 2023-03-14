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
import {StdVideoEncodeH264ReferenceInfoFlags} from "./StdVideoEncodeH264ReferenceInfoFlags.ts";

export interface InitStdVideoEncodeH264ReferenceInfo {
  flags?: StdVideoEncodeH264ReferenceInfoFlags;
  FrameNum?: number;
  PicOrderCnt?: number;
  long_term_pic_num?: number;
  long_term_frame_idx?: number;
}

export class StdVideoEncodeH264ReferenceInfo implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH264ReferenceInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH264ReferenceInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH264ReferenceInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH264ReferenceInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH264ReferenceInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.FrameNum !== undefined) this.FrameNum = data.FrameNum;
      if (data.PicOrderCnt !== undefined) this.PicOrderCnt = data.PicOrderCnt;
      if (data.long_term_pic_num !== undefined) this.long_term_pic_num = data.long_term_pic_num;
      if (data.long_term_frame_idx !== undefined) this.long_term_frame_idx = data.long_term_frame_idx;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH264ReferenceInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags() {
    return new StdVideoEncodeH264ReferenceInfoFlags(this.#data.subarray(0, 0 + StdVideoEncodeH264ReferenceInfoFlags.size));
  }

  set flags(value: StdVideoEncodeH264ReferenceInfoFlags) {
    if (value[BUFFER].byteLength < StdVideoEncodeH264ReferenceInfoFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get FrameNum() {
    return this.#view.getUint32(4, LE);
  }

  set FrameNum(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get PicOrderCnt() {
    return this.#view.getInt32(8, LE);
  }

  set PicOrderCnt(value: number) {
    this.#view.setInt32(8, Number(value), LE);
  }

  get long_term_pic_num() {
    return this.#view.getUint16(12, LE);
  }

  set long_term_pic_num(value: number) {
    this.#view.setUint16(12, Number(value), LE);
  }

  get long_term_frame_idx() {
    return this.#view.getUint16(14, LE);
  }

  set long_term_frame_idx(value: number) {
    this.#view.setUint16(14, Number(value), LE);
  }
}