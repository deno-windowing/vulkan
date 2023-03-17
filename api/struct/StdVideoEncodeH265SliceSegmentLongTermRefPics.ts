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

export interface InitStdVideoEncodeH265SliceSegmentLongTermRefPics {
  num_long_term_sps?: number;
  num_long_term_pics?: number;
  lt_idx_sps?: Uint8Array;
  poc_lsb_lt?: Uint8Array;
  used_by_curr_pic_lt_flag?: number;
  delta_poc_msb_present_flag?: Uint8Array;
  delta_poc_msb_cycle_lt?: Uint8Array;
}

export class StdVideoEncodeH265SliceSegmentLongTermRefPics implements BaseStruct {
  static size = 148;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH265SliceSegmentLongTermRefPics);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH265SliceSegmentLongTermRefPics) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH265SliceSegmentLongTermRefPics.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH265SliceSegmentLongTermRefPics.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH265SliceSegmentLongTermRefPics.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.num_long_term_sps !== undefined) this.num_long_term_sps = data.num_long_term_sps;
      if (data.num_long_term_pics !== undefined) this.num_long_term_pics = data.num_long_term_pics;
      if (data.lt_idx_sps !== undefined) this.lt_idx_sps = data.lt_idx_sps;
      if (data.poc_lsb_lt !== undefined) this.poc_lsb_lt = data.poc_lsb_lt;
      if (data.used_by_curr_pic_lt_flag !== undefined) this.used_by_curr_pic_lt_flag = data.used_by_curr_pic_lt_flag;
      if (data.delta_poc_msb_present_flag !== undefined) this.delta_poc_msb_present_flag = data.delta_poc_msb_present_flag;
      if (data.delta_poc_msb_cycle_lt !== undefined) this.delta_poc_msb_cycle_lt = data.delta_poc_msb_cycle_lt;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH265SliceSegmentLongTermRefPics.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get num_long_term_sps(): number {
    return this.#view.getUint8(0);
  }

  set num_long_term_sps(value: number) {
    this.#view.setUint8(0, Number(value));
  }

  get num_long_term_pics(): number {
    return this.#view.getUint8(1);
  }

  set num_long_term_pics(value: number) {
    this.#view.setUint8(1, Number(value));
  }

  get lt_idx_sps(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 2, 32);
  }

  set lt_idx_sps(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 2);
  }

  get poc_lsb_lt(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 34, 16);
  }

  set poc_lsb_lt(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 34);
  }

  get used_by_curr_pic_lt_flag(): number {
    return this.#view.getUint16(50, LE);
  }

  set used_by_curr_pic_lt_flag(value: number) {
    this.#view.setUint16(50, Number(value), LE);
  }

  get delta_poc_msb_present_flag(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 52, 48);
  }

  set delta_poc_msb_present_flag(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 52);
  }

  get delta_poc_msb_cycle_lt(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 100, 48);
  }

  set delta_poc_msb_cycle_lt(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 100);
  }
}