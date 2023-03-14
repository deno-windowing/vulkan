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
import {StdVideoEncodeH265SliceSegmentHeaderFlags} from "./StdVideoEncodeH265SliceSegmentHeaderFlags.ts";
import {StdVideoH265ShortTermRefPicSet} from "./StdVideoH265ShortTermRefPicSet.ts";
import {StdVideoEncodeH265SliceSegmentLongTermRefPics} from "./StdVideoEncodeH265SliceSegmentLongTermRefPics.ts";
import {StdVideoEncodeH265WeightTable} from "./StdVideoEncodeH265WeightTable.ts";
import { StdVideoH265SliceType } from "../enum.ts";

export interface InitStdVideoEncodeH265SliceSegmentHeader {
  flags?: StdVideoEncodeH265SliceSegmentHeaderFlags;
  slice_type?: StdVideoH265SliceType;
  slice_segment_address?: number;
  short_term_ref_pic_set_idx?: number;
  collocated_ref_idx?: number;
  num_ref_idx_l0_active_minus1?: number;
  num_ref_idx_l1_active_minus1?: number;
  MaxNumMergeCand?: number;
  slice_cb_qp_offset?: number;
  slice_cr_qp_offset?: number;
  slice_beta_offset_div2?: number;
  slice_tc_offset_div2?: number;
  slice_act_y_qp_offset?: number;
  slice_act_cb_qp_offset?: number;
  slice_act_cr_qp_offset?: number;
  pShortTermRefPicSet?: AnyPointer;
  pLongTermRefPics?: AnyPointer;
  pWeightTable?: AnyPointer;
}

export class StdVideoEncodeH265SliceSegmentHeader implements BaseStruct {
  static size = 112;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH265SliceSegmentHeader);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH265SliceSegmentHeader) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH265SliceSegmentHeader.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH265SliceSegmentHeader.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH265SliceSegmentHeader.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.slice_type !== undefined) this.slice_type = data.slice_type;
      if (data.slice_segment_address !== undefined) this.slice_segment_address = data.slice_segment_address;
      if (data.short_term_ref_pic_set_idx !== undefined) this.short_term_ref_pic_set_idx = data.short_term_ref_pic_set_idx;
      if (data.collocated_ref_idx !== undefined) this.collocated_ref_idx = data.collocated_ref_idx;
      if (data.num_ref_idx_l0_active_minus1 !== undefined) this.num_ref_idx_l0_active_minus1 = data.num_ref_idx_l0_active_minus1;
      if (data.num_ref_idx_l1_active_minus1 !== undefined) this.num_ref_idx_l1_active_minus1 = data.num_ref_idx_l1_active_minus1;
      if (data.MaxNumMergeCand !== undefined) this.MaxNumMergeCand = data.MaxNumMergeCand;
      if (data.slice_cb_qp_offset !== undefined) this.slice_cb_qp_offset = data.slice_cb_qp_offset;
      if (data.slice_cr_qp_offset !== undefined) this.slice_cr_qp_offset = data.slice_cr_qp_offset;
      if (data.slice_beta_offset_div2 !== undefined) this.slice_beta_offset_div2 = data.slice_beta_offset_div2;
      if (data.slice_tc_offset_div2 !== undefined) this.slice_tc_offset_div2 = data.slice_tc_offset_div2;
      if (data.slice_act_y_qp_offset !== undefined) this.slice_act_y_qp_offset = data.slice_act_y_qp_offset;
      if (data.slice_act_cb_qp_offset !== undefined) this.slice_act_cb_qp_offset = data.slice_act_cb_qp_offset;
      if (data.slice_act_cr_qp_offset !== undefined) this.slice_act_cr_qp_offset = data.slice_act_cr_qp_offset;
      if (data.pShortTermRefPicSet !== undefined) this.pShortTermRefPicSet = data.pShortTermRefPicSet;
      if (data.pLongTermRefPics !== undefined) this.pLongTermRefPics = data.pLongTermRefPics;
      if (data.pWeightTable !== undefined) this.pWeightTable = data.pWeightTable;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH265SliceSegmentHeader.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags() {
    return new StdVideoEncodeH265SliceSegmentHeaderFlags(this.#data.subarray(0, 0 + StdVideoEncodeH265SliceSegmentHeaderFlags.size));
  }

  set flags(value: StdVideoEncodeH265SliceSegmentHeaderFlags) {
    if (value[BUFFER].byteLength < StdVideoEncodeH265SliceSegmentHeaderFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get slice_type() {
    return this.#view.getUint32(64, LE);
  }

  set slice_type(value: StdVideoH265SliceType) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get slice_segment_address() {
    return this.#view.getUint32(68, LE);
  }

  set slice_segment_address(value: number) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get short_term_ref_pic_set_idx() {
    return this.#view.getUint8(72);
  }

  set short_term_ref_pic_set_idx(value: number) {
    this.#view.setUint8(72, Number(value));
  }

  get collocated_ref_idx() {
    return this.#view.getUint8(73);
  }

  set collocated_ref_idx(value: number) {
    this.#view.setUint8(73, Number(value));
  }

  get num_ref_idx_l0_active_minus1() {
    return this.#view.getUint8(74);
  }

  set num_ref_idx_l0_active_minus1(value: number) {
    this.#view.setUint8(74, Number(value));
  }

  get num_ref_idx_l1_active_minus1() {
    return this.#view.getUint8(75);
  }

  set num_ref_idx_l1_active_minus1(value: number) {
    this.#view.setUint8(75, Number(value));
  }

  get MaxNumMergeCand() {
    return this.#view.getUint8(76);
  }

  set MaxNumMergeCand(value: number) {
    this.#view.setUint8(76, Number(value));
  }

  get slice_cb_qp_offset() {
    return this.#view.getInt8(77);
  }

  set slice_cb_qp_offset(value: number) {
    this.#view.setInt8(77, Number(value));
  }

  get slice_cr_qp_offset() {
    return this.#view.getInt8(78);
  }

  set slice_cr_qp_offset(value: number) {
    this.#view.setInt8(78, Number(value));
  }

  get slice_beta_offset_div2() {
    return this.#view.getInt8(79);
  }

  set slice_beta_offset_div2(value: number) {
    this.#view.setInt8(79, Number(value));
  }

  get slice_tc_offset_div2() {
    return this.#view.getInt8(80);
  }

  set slice_tc_offset_div2(value: number) {
    this.#view.setInt8(80, Number(value));
  }

  get slice_act_y_qp_offset() {
    return this.#view.getInt8(81);
  }

  set slice_act_y_qp_offset(value: number) {
    this.#view.setInt8(81, Number(value));
  }

  get slice_act_cb_qp_offset() {
    return this.#view.getInt8(82);
  }

  set slice_act_cb_qp_offset(value: number) {
    this.#view.setInt8(82, Number(value));
  }

  get slice_act_cr_qp_offset() {
    return this.#view.getInt8(83);
  }

  set slice_act_cr_qp_offset(value: number) {
    this.#view.setInt8(83, Number(value));
  }

  get pShortTermRefPicSet() {
    return pointerFromView(this.#view, 88, LE);
  }

  set pShortTermRefPicSet(value: AnyPointer) {
    this.#view.setBigUint64(88, BigInt(anyPointer(value)), LE);
  }

  get pLongTermRefPics() {
    return pointerFromView(this.#view, 96, LE);
  }

  set pLongTermRefPics(value: AnyPointer) {
    this.#view.setBigUint64(96, BigInt(anyPointer(value)), LE);
  }

  get pWeightTable() {
    return pointerFromView(this.#view, 104, LE);
  }

  set pWeightTable(value: AnyPointer) {
    this.#view.setBigUint64(104, BigInt(anyPointer(value)), LE);
  }
}