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
import {StdVideoH265ShortTermRefPicSetFlags} from "./StdVideoH265ShortTermRefPicSetFlags.ts";

export interface InitStdVideoH265ShortTermRefPicSet {
  flags?: StdVideoH265ShortTermRefPicSetFlags;
  delta_idx_minus1?: number;
  use_delta_flag?: number;
  abs_delta_rps_minus1?: number;
  used_by_curr_pic_flag?: number;
  used_by_curr_pic_s0_flag?: number;
  used_by_curr_pic_s1_flag?: number;
  reserved1?: number;
  reserved2?: number;
  reserved3?: number;
  num_negative_pics?: number;
  num_positive_pics?: number;
  delta_poc_s0_minus1?: Uint16Array;
  delta_poc_s1_minus1?: Uint16Array;
}

export class StdVideoH265ShortTermRefPicSet implements BaseStruct {
  static size = 92;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265ShortTermRefPicSet);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265ShortTermRefPicSet) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265ShortTermRefPicSet.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265ShortTermRefPicSet.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265ShortTermRefPicSet.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.delta_idx_minus1 !== undefined) this.delta_idx_minus1 = data.delta_idx_minus1;
      if (data.use_delta_flag !== undefined) this.use_delta_flag = data.use_delta_flag;
      if (data.abs_delta_rps_minus1 !== undefined) this.abs_delta_rps_minus1 = data.abs_delta_rps_minus1;
      if (data.used_by_curr_pic_flag !== undefined) this.used_by_curr_pic_flag = data.used_by_curr_pic_flag;
      if (data.used_by_curr_pic_s0_flag !== undefined) this.used_by_curr_pic_s0_flag = data.used_by_curr_pic_s0_flag;
      if (data.used_by_curr_pic_s1_flag !== undefined) this.used_by_curr_pic_s1_flag = data.used_by_curr_pic_s1_flag;
      if (data.reserved1 !== undefined) this.reserved1 = data.reserved1;
      if (data.reserved2 !== undefined) this.reserved2 = data.reserved2;
      if (data.reserved3 !== undefined) this.reserved3 = data.reserved3;
      if (data.num_negative_pics !== undefined) this.num_negative_pics = data.num_negative_pics;
      if (data.num_positive_pics !== undefined) this.num_positive_pics = data.num_positive_pics;
      if (data.delta_poc_s0_minus1 !== undefined) this.delta_poc_s0_minus1 = data.delta_poc_s0_minus1;
      if (data.delta_poc_s1_minus1 !== undefined) this.delta_poc_s1_minus1 = data.delta_poc_s1_minus1;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265ShortTermRefPicSet.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags(): StdVideoH265ShortTermRefPicSetFlags {
    return new StdVideoH265ShortTermRefPicSetFlags(this.#data.subarray(0, 0 + StdVideoH265ShortTermRefPicSetFlags.size));
  }

  set flags(value: StdVideoH265ShortTermRefPicSetFlags) {
    if (value[BUFFER].byteLength < StdVideoH265ShortTermRefPicSetFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get delta_idx_minus1(): number {
    return this.#view.getUint32(8, LE);
  }

  set delta_idx_minus1(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get use_delta_flag(): number {
    return this.#view.getUint16(12, LE);
  }

  set use_delta_flag(value: number) {
    this.#view.setUint16(12, Number(value), LE);
  }

  get abs_delta_rps_minus1(): number {
    return this.#view.getUint16(14, LE);
  }

  set abs_delta_rps_minus1(value: number) {
    this.#view.setUint16(14, Number(value), LE);
  }

  get used_by_curr_pic_flag(): number {
    return this.#view.getUint16(16, LE);
  }

  set used_by_curr_pic_flag(value: number) {
    this.#view.setUint16(16, Number(value), LE);
  }

  get used_by_curr_pic_s0_flag(): number {
    return this.#view.getUint16(18, LE);
  }

  set used_by_curr_pic_s0_flag(value: number) {
    this.#view.setUint16(18, Number(value), LE);
  }

  get used_by_curr_pic_s1_flag(): number {
    return this.#view.getUint16(20, LE);
  }

  set used_by_curr_pic_s1_flag(value: number) {
    this.#view.setUint16(20, Number(value), LE);
  }

  get reserved1(): number {
    return this.#view.getUint16(22, LE);
  }

  set reserved1(value: number) {
    this.#view.setUint16(22, Number(value), LE);
  }

  get reserved2(): number {
    return this.#view.getUint8(24);
  }

  set reserved2(value: number) {
    this.#view.setUint8(24, Number(value));
  }

  get reserved3(): number {
    return this.#view.getUint8(25);
  }

  set reserved3(value: number) {
    this.#view.setUint8(25, Number(value));
  }

  get num_negative_pics(): number {
    return this.#view.getUint8(26);
  }

  set num_negative_pics(value: number) {
    this.#view.setUint8(26, Number(value));
  }

  get num_positive_pics(): number {
    return this.#view.getUint8(27);
  }

  set num_positive_pics(value: number) {
    this.#view.setUint8(27, Number(value));
  }

  get delta_poc_s0_minus1(): Uint16Array {
    return new Uint16Array(this.#data.buffer, this.#data.byteOffset + 28, 16);
  }

  set delta_poc_s0_minus1(value: Uint16Array) {
    this.#data.set(new Uint8Array(value.buffer), 28);
  }

  get delta_poc_s1_minus1(): Uint16Array {
    return new Uint16Array(this.#data.buffer, this.#data.byteOffset + 60, 16);
  }

  set delta_poc_s1_minus1(value: Uint16Array) {
    this.#data.set(new Uint8Array(value.buffer), 60);
  }
}