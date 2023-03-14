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

export interface InitStdVideoH265SpsVuiFlags {
  aspect_ratio_info_present_flag?: number;
  overscan_info_present_flag?: number;
  overscan_appropriate_flag?: number;
  video_signal_type_present_flag?: number;
  video_full_range_flag?: number;
  colour_description_present_flag?: number;
  chroma_loc_info_present_flag?: number;
  neutral_chroma_indication_flag?: number;
  field_seq_flag?: number;
  frame_field_info_present_flag?: number;
  default_display_window_flag?: number;
  vui_timing_info_present_flag?: number;
  vui_poc_proportional_to_timing_flag?: number;
  vui_hrd_parameters_present_flag?: number;
  bitstream_restriction_flag?: number;
  tiles_fixed_structure_flag?: number;
  motion_vectors_over_pic_boundaries_flag?: number;
  restricted_ref_pic_lists_flag?: number;
}

export class StdVideoH265SpsVuiFlags implements BaseStruct {
  static size = 72;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265SpsVuiFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265SpsVuiFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265SpsVuiFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265SpsVuiFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265SpsVuiFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.aspect_ratio_info_present_flag !== undefined) this.aspect_ratio_info_present_flag = data.aspect_ratio_info_present_flag;
      if (data.overscan_info_present_flag !== undefined) this.overscan_info_present_flag = data.overscan_info_present_flag;
      if (data.overscan_appropriate_flag !== undefined) this.overscan_appropriate_flag = data.overscan_appropriate_flag;
      if (data.video_signal_type_present_flag !== undefined) this.video_signal_type_present_flag = data.video_signal_type_present_flag;
      if (data.video_full_range_flag !== undefined) this.video_full_range_flag = data.video_full_range_flag;
      if (data.colour_description_present_flag !== undefined) this.colour_description_present_flag = data.colour_description_present_flag;
      if (data.chroma_loc_info_present_flag !== undefined) this.chroma_loc_info_present_flag = data.chroma_loc_info_present_flag;
      if (data.neutral_chroma_indication_flag !== undefined) this.neutral_chroma_indication_flag = data.neutral_chroma_indication_flag;
      if (data.field_seq_flag !== undefined) this.field_seq_flag = data.field_seq_flag;
      if (data.frame_field_info_present_flag !== undefined) this.frame_field_info_present_flag = data.frame_field_info_present_flag;
      if (data.default_display_window_flag !== undefined) this.default_display_window_flag = data.default_display_window_flag;
      if (data.vui_timing_info_present_flag !== undefined) this.vui_timing_info_present_flag = data.vui_timing_info_present_flag;
      if (data.vui_poc_proportional_to_timing_flag !== undefined) this.vui_poc_proportional_to_timing_flag = data.vui_poc_proportional_to_timing_flag;
      if (data.vui_hrd_parameters_present_flag !== undefined) this.vui_hrd_parameters_present_flag = data.vui_hrd_parameters_present_flag;
      if (data.bitstream_restriction_flag !== undefined) this.bitstream_restriction_flag = data.bitstream_restriction_flag;
      if (data.tiles_fixed_structure_flag !== undefined) this.tiles_fixed_structure_flag = data.tiles_fixed_structure_flag;
      if (data.motion_vectors_over_pic_boundaries_flag !== undefined) this.motion_vectors_over_pic_boundaries_flag = data.motion_vectors_over_pic_boundaries_flag;
      if (data.restricted_ref_pic_lists_flag !== undefined) this.restricted_ref_pic_lists_flag = data.restricted_ref_pic_lists_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265SpsVuiFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get aspect_ratio_info_present_flag() {
    return this.#view.getUint32(0, LE);
  }

  set aspect_ratio_info_present_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get overscan_info_present_flag() {
    return this.#view.getUint32(4, LE);
  }

  set overscan_info_present_flag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get overscan_appropriate_flag() {
    return this.#view.getUint32(8, LE);
  }

  set overscan_appropriate_flag(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get video_signal_type_present_flag() {
    return this.#view.getUint32(12, LE);
  }

  set video_signal_type_present_flag(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get video_full_range_flag() {
    return this.#view.getUint32(16, LE);
  }

  set video_full_range_flag(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get colour_description_present_flag() {
    return this.#view.getUint32(20, LE);
  }

  set colour_description_present_flag(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get chroma_loc_info_present_flag() {
    return this.#view.getUint32(24, LE);
  }

  set chroma_loc_info_present_flag(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get neutral_chroma_indication_flag() {
    return this.#view.getUint32(28, LE);
  }

  set neutral_chroma_indication_flag(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get field_seq_flag() {
    return this.#view.getUint32(32, LE);
  }

  set field_seq_flag(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get frame_field_info_present_flag() {
    return this.#view.getUint32(36, LE);
  }

  set frame_field_info_present_flag(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get default_display_window_flag() {
    return this.#view.getUint32(40, LE);
  }

  set default_display_window_flag(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get vui_timing_info_present_flag() {
    return this.#view.getUint32(44, LE);
  }

  set vui_timing_info_present_flag(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get vui_poc_proportional_to_timing_flag() {
    return this.#view.getUint32(48, LE);
  }

  set vui_poc_proportional_to_timing_flag(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get vui_hrd_parameters_present_flag() {
    return this.#view.getUint32(52, LE);
  }

  set vui_hrd_parameters_present_flag(value: number) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get bitstream_restriction_flag() {
    return this.#view.getUint32(56, LE);
  }

  set bitstream_restriction_flag(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get tiles_fixed_structure_flag() {
    return this.#view.getUint32(60, LE);
  }

  set tiles_fixed_structure_flag(value: number) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get motion_vectors_over_pic_boundaries_flag() {
    return this.#view.getUint32(64, LE);
  }

  set motion_vectors_over_pic_boundaries_flag(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get restricted_ref_pic_lists_flag() {
    return this.#view.getUint32(68, LE);
  }

  set restricted_ref_pic_lists_flag(value: number) {
    this.#view.setUint32(68, Number(value), LE);
  }
}