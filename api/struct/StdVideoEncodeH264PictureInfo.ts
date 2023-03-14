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
import {StdVideoEncodeH264PictureInfoFlags} from "./StdVideoEncodeH264PictureInfoFlags.ts";
import { StdVideoH264PictureType } from "../enum.ts";

export interface InitStdVideoEncodeH264PictureInfo {
  flags?: StdVideoEncodeH264PictureInfoFlags;
  seq_parameter_set_id?: number;
  pic_parameter_set_id?: number;
  pictureType?: StdVideoH264PictureType;
  frame_num?: number;
  PicOrderCnt?: number;
}

export class StdVideoEncodeH264PictureInfo implements BaseStruct {
  static size = 28;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH264PictureInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH264PictureInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH264PictureInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH264PictureInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH264PictureInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.seq_parameter_set_id !== undefined) this.seq_parameter_set_id = data.seq_parameter_set_id;
      if (data.pic_parameter_set_id !== undefined) this.pic_parameter_set_id = data.pic_parameter_set_id;
      if (data.pictureType !== undefined) this.pictureType = data.pictureType;
      if (data.frame_num !== undefined) this.frame_num = data.frame_num;
      if (data.PicOrderCnt !== undefined) this.PicOrderCnt = data.PicOrderCnt;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH264PictureInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags() {
    return new StdVideoEncodeH264PictureInfoFlags(this.#data.subarray(0, 0 + StdVideoEncodeH264PictureInfoFlags.size));
  }

  set flags(value: StdVideoEncodeH264PictureInfoFlags) {
    if (value[BUFFER].byteLength < StdVideoEncodeH264PictureInfoFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get seq_parameter_set_id() {
    return this.#view.getUint8(12);
  }

  set seq_parameter_set_id(value: number) {
    this.#view.setUint8(12, Number(value));
  }

  get pic_parameter_set_id() {
    return this.#view.getUint8(13);
  }

  set pic_parameter_set_id(value: number) {
    this.#view.setUint8(13, Number(value));
  }

  get pictureType() {
    return this.#view.getUint32(16, LE);
  }

  set pictureType(value: StdVideoH264PictureType) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get frame_num() {
    return this.#view.getUint32(20, LE);
  }

  set frame_num(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get PicOrderCnt() {
    return this.#view.getInt32(24, LE);
  }

  set PicOrderCnt(value: number) {
    this.#view.setInt32(24, Number(value), LE);
  }
}