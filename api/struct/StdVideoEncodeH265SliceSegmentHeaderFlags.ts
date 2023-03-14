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

export interface InitStdVideoEncodeH265SliceSegmentHeaderFlags {
  first_slice_segment_in_pic_flag?: number;
  no_output_of_prior_pics_flag?: number;
  dependent_slice_segment_flag?: number;
  pic_output_flag?: number;
  short_term_ref_pic_set_sps_flag?: number;
  slice_temporal_mvp_enable_flag?: number;
  slice_sao_luma_flag?: number;
  slice_sao_chroma_flag?: number;
  num_ref_idx_active_override_flag?: number;
  mvd_l1_zero_flag?: number;
  cabac_init_flag?: number;
  cu_chroma_qp_offset_enabled_flag?: number;
  deblocking_filter_override_flag?: number;
  slice_deblocking_filter_disabled_flag?: number;
  collocated_from_l0_flag?: number;
  slice_loop_filter_across_slices_enabled_flag?: number;
}

export class StdVideoEncodeH265SliceSegmentHeaderFlags implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH265SliceSegmentHeaderFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH265SliceSegmentHeaderFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH265SliceSegmentHeaderFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH265SliceSegmentHeaderFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH265SliceSegmentHeaderFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.first_slice_segment_in_pic_flag !== undefined) this.first_slice_segment_in_pic_flag = data.first_slice_segment_in_pic_flag;
      if (data.no_output_of_prior_pics_flag !== undefined) this.no_output_of_prior_pics_flag = data.no_output_of_prior_pics_flag;
      if (data.dependent_slice_segment_flag !== undefined) this.dependent_slice_segment_flag = data.dependent_slice_segment_flag;
      if (data.pic_output_flag !== undefined) this.pic_output_flag = data.pic_output_flag;
      if (data.short_term_ref_pic_set_sps_flag !== undefined) this.short_term_ref_pic_set_sps_flag = data.short_term_ref_pic_set_sps_flag;
      if (data.slice_temporal_mvp_enable_flag !== undefined) this.slice_temporal_mvp_enable_flag = data.slice_temporal_mvp_enable_flag;
      if (data.slice_sao_luma_flag !== undefined) this.slice_sao_luma_flag = data.slice_sao_luma_flag;
      if (data.slice_sao_chroma_flag !== undefined) this.slice_sao_chroma_flag = data.slice_sao_chroma_flag;
      if (data.num_ref_idx_active_override_flag !== undefined) this.num_ref_idx_active_override_flag = data.num_ref_idx_active_override_flag;
      if (data.mvd_l1_zero_flag !== undefined) this.mvd_l1_zero_flag = data.mvd_l1_zero_flag;
      if (data.cabac_init_flag !== undefined) this.cabac_init_flag = data.cabac_init_flag;
      if (data.cu_chroma_qp_offset_enabled_flag !== undefined) this.cu_chroma_qp_offset_enabled_flag = data.cu_chroma_qp_offset_enabled_flag;
      if (data.deblocking_filter_override_flag !== undefined) this.deblocking_filter_override_flag = data.deblocking_filter_override_flag;
      if (data.slice_deblocking_filter_disabled_flag !== undefined) this.slice_deblocking_filter_disabled_flag = data.slice_deblocking_filter_disabled_flag;
      if (data.collocated_from_l0_flag !== undefined) this.collocated_from_l0_flag = data.collocated_from_l0_flag;
      if (data.slice_loop_filter_across_slices_enabled_flag !== undefined) this.slice_loop_filter_across_slices_enabled_flag = data.slice_loop_filter_across_slices_enabled_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH265SliceSegmentHeaderFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get first_slice_segment_in_pic_flag() {
    return this.#view.getUint32(0, LE);
  }

  set first_slice_segment_in_pic_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get no_output_of_prior_pics_flag() {
    return this.#view.getUint32(4, LE);
  }

  set no_output_of_prior_pics_flag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get dependent_slice_segment_flag() {
    return this.#view.getUint32(8, LE);
  }

  set dependent_slice_segment_flag(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get pic_output_flag() {
    return this.#view.getUint32(12, LE);
  }

  set pic_output_flag(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get short_term_ref_pic_set_sps_flag() {
    return this.#view.getUint32(16, LE);
  }

  set short_term_ref_pic_set_sps_flag(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get slice_temporal_mvp_enable_flag() {
    return this.#view.getUint32(20, LE);
  }

  set slice_temporal_mvp_enable_flag(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get slice_sao_luma_flag() {
    return this.#view.getUint32(24, LE);
  }

  set slice_sao_luma_flag(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get slice_sao_chroma_flag() {
    return this.#view.getUint32(28, LE);
  }

  set slice_sao_chroma_flag(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get num_ref_idx_active_override_flag() {
    return this.#view.getUint32(32, LE);
  }

  set num_ref_idx_active_override_flag(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get mvd_l1_zero_flag() {
    return this.#view.getUint32(36, LE);
  }

  set mvd_l1_zero_flag(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get cabac_init_flag() {
    return this.#view.getUint32(40, LE);
  }

  set cabac_init_flag(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get cu_chroma_qp_offset_enabled_flag() {
    return this.#view.getUint32(44, LE);
  }

  set cu_chroma_qp_offset_enabled_flag(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get deblocking_filter_override_flag() {
    return this.#view.getUint32(48, LE);
  }

  set deblocking_filter_override_flag(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get slice_deblocking_filter_disabled_flag() {
    return this.#view.getUint32(52, LE);
  }

  set slice_deblocking_filter_disabled_flag(value: number) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get collocated_from_l0_flag() {
    return this.#view.getUint32(56, LE);
  }

  set collocated_from_l0_flag(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get slice_loop_filter_across_slices_enabled_flag() {
    return this.#view.getUint32(60, LE);
  }

  set slice_loop_filter_across_slices_enabled_flag(value: number) {
    this.#view.setUint32(60, Number(value), LE);
  }
}