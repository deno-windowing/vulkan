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
import {StdVideoDecodeH264PictureInfoFlags} from "./StdVideoDecodeH264PictureInfoFlags.ts";

export interface InitStdVideoDecodeH264PictureInfo {
  flags?: StdVideoDecodeH264PictureInfoFlags;
  seq_parameter_set_id?: number;
  pic_parameter_set_id?: number;
  reserved1?: number;
  reserved2?: number;
  frame_num?: number;
  idr_pic_id?: number;
  PicOrderCnt?: Int32Array;
}

/** requires tag is for PicOrderCnt, which needs the enum type */
export class StdVideoDecodeH264PictureInfo implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoDecodeH264PictureInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoDecodeH264PictureInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoDecodeH264PictureInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoDecodeH264PictureInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoDecodeH264PictureInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.seq_parameter_set_id !== undefined) this.seq_parameter_set_id = data.seq_parameter_set_id;
      if (data.pic_parameter_set_id !== undefined) this.pic_parameter_set_id = data.pic_parameter_set_id;
      if (data.reserved1 !== undefined) this.reserved1 = data.reserved1;
      if (data.reserved2 !== undefined) this.reserved2 = data.reserved2;
      if (data.frame_num !== undefined) this.frame_num = data.frame_num;
      if (data.idr_pic_id !== undefined) this.idr_pic_id = data.idr_pic_id;
      if (data.PicOrderCnt !== undefined) this.PicOrderCnt = data.PicOrderCnt;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoDecodeH264PictureInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags(): StdVideoDecodeH264PictureInfoFlags {
    return new StdVideoDecodeH264PictureInfoFlags(this.#data.subarray(0, 0 + StdVideoDecodeH264PictureInfoFlags.size));
  }

  set flags(value: StdVideoDecodeH264PictureInfoFlags) {
    if (value[BUFFER].byteLength < StdVideoDecodeH264PictureInfoFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get seq_parameter_set_id(): number {
    return this.#view.getUint8(24);
  }

  set seq_parameter_set_id(value: number) {
    this.#view.setUint8(24, Number(value));
  }

  get pic_parameter_set_id(): number {
    return this.#view.getUint8(25);
  }

  set pic_parameter_set_id(value: number) {
    this.#view.setUint8(25, Number(value));
  }

  get reserved1(): number {
    return this.#view.getUint8(26);
  }

  set reserved1(value: number) {
    this.#view.setUint8(26, Number(value));
  }

  get reserved2(): number {
    return this.#view.getUint8(27);
  }

  set reserved2(value: number) {
    this.#view.setUint8(27, Number(value));
  }

  get frame_num(): number {
    return this.#view.getUint16(28, LE);
  }

  set frame_num(value: number) {
    this.#view.setUint16(28, Number(value), LE);
  }

  get idr_pic_id(): number {
    return this.#view.getUint16(30, LE);
  }

  set idr_pic_id(value: number) {
    this.#view.setUint16(30, Number(value), LE);
  }

  get PicOrderCnt(): Int32Array {
    return new Int32Array(this.#data.buffer, this.#data.byteOffset + 32, 2);
  }

  set PicOrderCnt(value: Int32Array) {
    this.#data.set(new Uint8Array(value.buffer), 32);
  }
}