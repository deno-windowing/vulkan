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
import {StdVideoEncodeH264SliceHeaderFlags} from "./StdVideoEncodeH264SliceHeaderFlags.ts";
import {StdVideoEncodeH264WeightTable} from "./StdVideoEncodeH264WeightTable.ts";
import { StdVideoH264SliceType, StdVideoH264CabacInitIdc, StdVideoH264DisableDeblockingFilterIdc } from "../enum.ts";

export interface InitStdVideoEncodeH264SliceHeader {
  flags?: StdVideoEncodeH264SliceHeaderFlags;
  first_mb_in_slice?: number;
  slice_type?: StdVideoH264SliceType;
  idr_pic_id?: number;
  num_ref_idx_l0_active_minus1?: number;
  num_ref_idx_l1_active_minus1?: number;
  cabac_init_idc?: StdVideoH264CabacInitIdc;
  disable_deblocking_filter_idc?: StdVideoH264DisableDeblockingFilterIdc;
  slice_alpha_c0_offset_div2?: number;
  slice_beta_offset_div2?: number;
  pWeightTable?: AnyPointer;
}

export class StdVideoEncodeH264SliceHeader implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH264SliceHeader);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH264SliceHeader) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH264SliceHeader.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH264SliceHeader.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH264SliceHeader.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.first_mb_in_slice !== undefined) this.first_mb_in_slice = data.first_mb_in_slice;
      if (data.slice_type !== undefined) this.slice_type = data.slice_type;
      if (data.idr_pic_id !== undefined) this.idr_pic_id = data.idr_pic_id;
      if (data.num_ref_idx_l0_active_minus1 !== undefined) this.num_ref_idx_l0_active_minus1 = data.num_ref_idx_l0_active_minus1;
      if (data.num_ref_idx_l1_active_minus1 !== undefined) this.num_ref_idx_l1_active_minus1 = data.num_ref_idx_l1_active_minus1;
      if (data.cabac_init_idc !== undefined) this.cabac_init_idc = data.cabac_init_idc;
      if (data.disable_deblocking_filter_idc !== undefined) this.disable_deblocking_filter_idc = data.disable_deblocking_filter_idc;
      if (data.slice_alpha_c0_offset_div2 !== undefined) this.slice_alpha_c0_offset_div2 = data.slice_alpha_c0_offset_div2;
      if (data.slice_beta_offset_div2 !== undefined) this.slice_beta_offset_div2 = data.slice_beta_offset_div2;
      if (data.pWeightTable !== undefined) this.pWeightTable = data.pWeightTable;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH264SliceHeader.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags() {
    return new StdVideoEncodeH264SliceHeaderFlags(this.#data.subarray(0, 0 + StdVideoEncodeH264SliceHeaderFlags.size));
  }

  set flags(value: StdVideoEncodeH264SliceHeaderFlags) {
    if (value[BUFFER].byteLength < StdVideoEncodeH264SliceHeaderFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get first_mb_in_slice() {
    return this.#view.getUint32(20, LE);
  }

  set first_mb_in_slice(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get slice_type() {
    return this.#view.getUint32(24, LE);
  }

  set slice_type(value: StdVideoH264SliceType) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get idr_pic_id() {
    return this.#view.getUint16(28, LE);
  }

  set idr_pic_id(value: number) {
    this.#view.setUint16(28, Number(value), LE);
  }

  get num_ref_idx_l0_active_minus1() {
    return this.#view.getUint8(30);
  }

  set num_ref_idx_l0_active_minus1(value: number) {
    this.#view.setUint8(30, Number(value));
  }

  get num_ref_idx_l1_active_minus1() {
    return this.#view.getUint8(31);
  }

  set num_ref_idx_l1_active_minus1(value: number) {
    this.#view.setUint8(31, Number(value));
  }

  get cabac_init_idc() {
    return this.#view.getUint32(32, LE);
  }

  set cabac_init_idc(value: StdVideoH264CabacInitIdc) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get disable_deblocking_filter_idc() {
    return this.#view.getUint32(36, LE);
  }

  set disable_deblocking_filter_idc(value: StdVideoH264DisableDeblockingFilterIdc) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get slice_alpha_c0_offset_div2() {
    return this.#view.getInt8(40);
  }

  set slice_alpha_c0_offset_div2(value: number) {
    this.#view.setInt8(40, Number(value));
  }

  get slice_beta_offset_div2() {
    return this.#view.getInt8(41);
  }

  set slice_beta_offset_div2(value: number) {
    this.#view.setInt8(41, Number(value));
  }

  get pWeightTable() {
    return pointerFromView(this.#view, 48, LE);
  }

  set pWeightTable(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }
}