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
import {StdVideoDecodeH265PictureInfoFlags} from "./StdVideoDecodeH265PictureInfoFlags.ts";

export interface InitStdVideoDecodeH265PictureInfo {
  flags?: StdVideoDecodeH265PictureInfoFlags;
  sps_video_parameter_set_id?: number;
  pps_seq_parameter_set_id?: number;
  pps_pic_parameter_set_id?: number;
  NumDeltaPocsOfRefRpsIdx?: number;
  PicOrderCntVal?: number;
  NumBitsForSTRefPicSetInSlice?: number;
  reserved?: number;
  RefPicSetStCurrBefore?: Uint8Array;
  RefPicSetStCurrAfter?: Uint8Array;
  RefPicSetLtCurr?: Uint8Array;
}

export class StdVideoDecodeH265PictureInfo implements BaseStruct {
  static size = 52;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoDecodeH265PictureInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoDecodeH265PictureInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoDecodeH265PictureInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoDecodeH265PictureInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoDecodeH265PictureInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.sps_video_parameter_set_id !== undefined) this.sps_video_parameter_set_id = data.sps_video_parameter_set_id;
      if (data.pps_seq_parameter_set_id !== undefined) this.pps_seq_parameter_set_id = data.pps_seq_parameter_set_id;
      if (data.pps_pic_parameter_set_id !== undefined) this.pps_pic_parameter_set_id = data.pps_pic_parameter_set_id;
      if (data.NumDeltaPocsOfRefRpsIdx !== undefined) this.NumDeltaPocsOfRefRpsIdx = data.NumDeltaPocsOfRefRpsIdx;
      if (data.PicOrderCntVal !== undefined) this.PicOrderCntVal = data.PicOrderCntVal;
      if (data.NumBitsForSTRefPicSetInSlice !== undefined) this.NumBitsForSTRefPicSetInSlice = data.NumBitsForSTRefPicSetInSlice;
      if (data.reserved !== undefined) this.reserved = data.reserved;
      if (data.RefPicSetStCurrBefore !== undefined) this.RefPicSetStCurrBefore = data.RefPicSetStCurrBefore;
      if (data.RefPicSetStCurrAfter !== undefined) this.RefPicSetStCurrAfter = data.RefPicSetStCurrAfter;
      if (data.RefPicSetLtCurr !== undefined) this.RefPicSetLtCurr = data.RefPicSetLtCurr;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoDecodeH265PictureInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags(): StdVideoDecodeH265PictureInfoFlags {
    return new StdVideoDecodeH265PictureInfoFlags(this.#data.subarray(0, 0 + StdVideoDecodeH265PictureInfoFlags.size));
  }

  set flags(value: StdVideoDecodeH265PictureInfoFlags) {
    if (value[BUFFER].byteLength < StdVideoDecodeH265PictureInfoFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get sps_video_parameter_set_id(): number {
    return this.#view.getUint8(16);
  }

  set sps_video_parameter_set_id(value: number) {
    this.#view.setUint8(16, Number(value));
  }

  get pps_seq_parameter_set_id(): number {
    return this.#view.getUint8(17);
  }

  set pps_seq_parameter_set_id(value: number) {
    this.#view.setUint8(17, Number(value));
  }

  get pps_pic_parameter_set_id(): number {
    return this.#view.getUint8(18);
  }

  set pps_pic_parameter_set_id(value: number) {
    this.#view.setUint8(18, Number(value));
  }

  get NumDeltaPocsOfRefRpsIdx(): number {
    return this.#view.getUint8(19);
  }

  set NumDeltaPocsOfRefRpsIdx(value: number) {
    this.#view.setUint8(19, Number(value));
  }

  get PicOrderCntVal(): number {
    return this.#view.getInt32(20, LE);
  }

  set PicOrderCntVal(value: number) {
    this.#view.setInt32(20, Number(value), LE);
  }

  get NumBitsForSTRefPicSetInSlice(): number {
    return this.#view.getUint16(24, LE);
  }

  set NumBitsForSTRefPicSetInSlice(value: number) {
    this.#view.setUint16(24, Number(value), LE);
  }

  get reserved(): number {
    return this.#view.getUint16(26, LE);
  }

  set reserved(value: number) {
    this.#view.setUint16(26, Number(value), LE);
  }

  get RefPicSetStCurrBefore(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 28, 8);
  }

  set RefPicSetStCurrBefore(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 28);
  }

  get RefPicSetStCurrAfter(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 36, 8);
  }

  set RefPicSetStCurrAfter(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 36);
  }

  get RefPicSetLtCurr(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 44, 8);
  }

  set RefPicSetLtCurr(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 44);
  }
}