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
import {StdVideoEncodeH265PictureInfoFlags} from "./StdVideoEncodeH265PictureInfoFlags.ts";
import { StdVideoH265PictureType } from "../enum.ts";

export interface InitStdVideoEncodeH265PictureInfo {
  flags?: StdVideoEncodeH265PictureInfoFlags;
  PictureType?: StdVideoH265PictureType;
  sps_video_parameter_set_id?: number;
  pps_seq_parameter_set_id?: number;
  pps_pic_parameter_set_id?: number;
  PicOrderCntVal?: number;
  TemporalId?: number;
}

export class StdVideoEncodeH265PictureInfo implements BaseStruct {
  static size = 36;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH265PictureInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH265PictureInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH265PictureInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH265PictureInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH265PictureInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.PictureType !== undefined) this.PictureType = data.PictureType;
      if (data.sps_video_parameter_set_id !== undefined) this.sps_video_parameter_set_id = data.sps_video_parameter_set_id;
      if (data.pps_seq_parameter_set_id !== undefined) this.pps_seq_parameter_set_id = data.pps_seq_parameter_set_id;
      if (data.pps_pic_parameter_set_id !== undefined) this.pps_pic_parameter_set_id = data.pps_pic_parameter_set_id;
      if (data.PicOrderCntVal !== undefined) this.PicOrderCntVal = data.PicOrderCntVal;
      if (data.TemporalId !== undefined) this.TemporalId = data.TemporalId;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH265PictureInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags() {
    return new StdVideoEncodeH265PictureInfoFlags(this.#data.subarray(0, 0 + StdVideoEncodeH265PictureInfoFlags.size));
  }

  set flags(value: StdVideoEncodeH265PictureInfoFlags) {
    if (value[BUFFER].byteLength < StdVideoEncodeH265PictureInfoFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get PictureType() {
    return this.#view.getUint32(20, LE);
  }

  set PictureType(value: StdVideoH265PictureType) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get sps_video_parameter_set_id() {
    return this.#view.getUint8(24);
  }

  set sps_video_parameter_set_id(value: number) {
    this.#view.setUint8(24, Number(value));
  }

  get pps_seq_parameter_set_id() {
    return this.#view.getUint8(25);
  }

  set pps_seq_parameter_set_id(value: number) {
    this.#view.setUint8(25, Number(value));
  }

  get pps_pic_parameter_set_id() {
    return this.#view.getUint8(26);
  }

  set pps_pic_parameter_set_id(value: number) {
    this.#view.setUint8(26, Number(value));
  }

  get PicOrderCntVal() {
    return this.#view.getInt32(28, LE);
  }

  set PicOrderCntVal(value: number) {
    this.#view.setInt32(28, Number(value), LE);
  }

  get TemporalId() {
    return this.#view.getUint8(32);
  }

  set TemporalId(value: number) {
    this.#view.setUint8(32, Number(value));
  }
}