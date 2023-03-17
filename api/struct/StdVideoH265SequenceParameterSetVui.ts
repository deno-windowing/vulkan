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
import {StdVideoH265SpsVuiFlags} from "./StdVideoH265SpsVuiFlags.ts";
import {StdVideoH265HrdParameters} from "./StdVideoH265HrdParameters.ts";
import { StdVideoH265AspectRatioIdc } from "../enum.ts";

export interface InitStdVideoH265SequenceParameterSetVui {
  flags?: StdVideoH265SpsVuiFlags;
  aspect_ratio_idc?: StdVideoH265AspectRatioIdc;
  sar_width?: number;
  sar_height?: number;
  video_format?: number;
  colour_primaries?: number;
  transfer_characteristics?: number;
  matrix_coeffs?: number;
  chroma_sample_loc_type_top_field?: number;
  chroma_sample_loc_type_bottom_field?: number;
  reserved1?: number;
  reserved2?: number;
  def_disp_win_left_offset?: number;
  def_disp_win_right_offset?: number;
  def_disp_win_top_offset?: number;
  def_disp_win_bottom_offset?: number;
  vui_num_units_in_tick?: number;
  vui_time_scale?: number;
  vui_num_ticks_poc_diff_one_minus1?: number;
  min_spatial_segmentation_idc?: number;
  reserved3?: number;
  max_bytes_per_pic_denom?: number;
  max_bits_per_min_cu_denom?: number;
  log2_max_mv_length_horizontal?: number;
  log2_max_mv_length_vertical?: number;
  pHrdParameters?: AnyPointer;
}

export class StdVideoH265SequenceParameterSetVui implements BaseStruct {
  static size = 128;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265SequenceParameterSetVui);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265SequenceParameterSetVui) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265SequenceParameterSetVui.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265SequenceParameterSetVui.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265SequenceParameterSetVui.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.aspect_ratio_idc !== undefined) this.aspect_ratio_idc = data.aspect_ratio_idc;
      if (data.sar_width !== undefined) this.sar_width = data.sar_width;
      if (data.sar_height !== undefined) this.sar_height = data.sar_height;
      if (data.video_format !== undefined) this.video_format = data.video_format;
      if (data.colour_primaries !== undefined) this.colour_primaries = data.colour_primaries;
      if (data.transfer_characteristics !== undefined) this.transfer_characteristics = data.transfer_characteristics;
      if (data.matrix_coeffs !== undefined) this.matrix_coeffs = data.matrix_coeffs;
      if (data.chroma_sample_loc_type_top_field !== undefined) this.chroma_sample_loc_type_top_field = data.chroma_sample_loc_type_top_field;
      if (data.chroma_sample_loc_type_bottom_field !== undefined) this.chroma_sample_loc_type_bottom_field = data.chroma_sample_loc_type_bottom_field;
      if (data.reserved1 !== undefined) this.reserved1 = data.reserved1;
      if (data.reserved2 !== undefined) this.reserved2 = data.reserved2;
      if (data.def_disp_win_left_offset !== undefined) this.def_disp_win_left_offset = data.def_disp_win_left_offset;
      if (data.def_disp_win_right_offset !== undefined) this.def_disp_win_right_offset = data.def_disp_win_right_offset;
      if (data.def_disp_win_top_offset !== undefined) this.def_disp_win_top_offset = data.def_disp_win_top_offset;
      if (data.def_disp_win_bottom_offset !== undefined) this.def_disp_win_bottom_offset = data.def_disp_win_bottom_offset;
      if (data.vui_num_units_in_tick !== undefined) this.vui_num_units_in_tick = data.vui_num_units_in_tick;
      if (data.vui_time_scale !== undefined) this.vui_time_scale = data.vui_time_scale;
      if (data.vui_num_ticks_poc_diff_one_minus1 !== undefined) this.vui_num_ticks_poc_diff_one_minus1 = data.vui_num_ticks_poc_diff_one_minus1;
      if (data.min_spatial_segmentation_idc !== undefined) this.min_spatial_segmentation_idc = data.min_spatial_segmentation_idc;
      if (data.reserved3 !== undefined) this.reserved3 = data.reserved3;
      if (data.max_bytes_per_pic_denom !== undefined) this.max_bytes_per_pic_denom = data.max_bytes_per_pic_denom;
      if (data.max_bits_per_min_cu_denom !== undefined) this.max_bits_per_min_cu_denom = data.max_bits_per_min_cu_denom;
      if (data.log2_max_mv_length_horizontal !== undefined) this.log2_max_mv_length_horizontal = data.log2_max_mv_length_horizontal;
      if (data.log2_max_mv_length_vertical !== undefined) this.log2_max_mv_length_vertical = data.log2_max_mv_length_vertical;
      if (data.pHrdParameters !== undefined) this.pHrdParameters = data.pHrdParameters;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265SequenceParameterSetVui.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags(): StdVideoH265SpsVuiFlags {
    return new StdVideoH265SpsVuiFlags(this.#data.subarray(0, 0 + StdVideoH265SpsVuiFlags.size));
  }

  set flags(value: StdVideoH265SpsVuiFlags) {
    if (value[BUFFER].byteLength < StdVideoH265SpsVuiFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get aspect_ratio_idc(): number {
    return this.#view.getUint32(72, LE);
  }

  set aspect_ratio_idc(value: StdVideoH265AspectRatioIdc) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get sar_width(): number {
    return this.#view.getUint16(76, LE);
  }

  set sar_width(value: number) {
    this.#view.setUint16(76, Number(value), LE);
  }

  get sar_height(): number {
    return this.#view.getUint16(78, LE);
  }

  set sar_height(value: number) {
    this.#view.setUint16(78, Number(value), LE);
  }

  get video_format(): number {
    return this.#view.getUint8(80);
  }

  set video_format(value: number) {
    this.#view.setUint8(80, Number(value));
  }

  get colour_primaries(): number {
    return this.#view.getUint8(81);
  }

  set colour_primaries(value: number) {
    this.#view.setUint8(81, Number(value));
  }

  get transfer_characteristics(): number {
    return this.#view.getUint8(82);
  }

  set transfer_characteristics(value: number) {
    this.#view.setUint8(82, Number(value));
  }

  get matrix_coeffs(): number {
    return this.#view.getUint8(83);
  }

  set matrix_coeffs(value: number) {
    this.#view.setUint8(83, Number(value));
  }

  get chroma_sample_loc_type_top_field(): number {
    return this.#view.getUint8(84);
  }

  set chroma_sample_loc_type_top_field(value: number) {
    this.#view.setUint8(84, Number(value));
  }

  get chroma_sample_loc_type_bottom_field(): number {
    return this.#view.getUint8(85);
  }

  set chroma_sample_loc_type_bottom_field(value: number) {
    this.#view.setUint8(85, Number(value));
  }

  get reserved1(): number {
    return this.#view.getUint8(86);
  }

  set reserved1(value: number) {
    this.#view.setUint8(86, Number(value));
  }

  get reserved2(): number {
    return this.#view.getUint8(87);
  }

  set reserved2(value: number) {
    this.#view.setUint8(87, Number(value));
  }

  get def_disp_win_left_offset(): number {
    return this.#view.getUint16(88, LE);
  }

  set def_disp_win_left_offset(value: number) {
    this.#view.setUint16(88, Number(value), LE);
  }

  get def_disp_win_right_offset(): number {
    return this.#view.getUint16(90, LE);
  }

  set def_disp_win_right_offset(value: number) {
    this.#view.setUint16(90, Number(value), LE);
  }

  get def_disp_win_top_offset(): number {
    return this.#view.getUint16(92, LE);
  }

  set def_disp_win_top_offset(value: number) {
    this.#view.setUint16(92, Number(value), LE);
  }

  get def_disp_win_bottom_offset(): number {
    return this.#view.getUint16(94, LE);
  }

  set def_disp_win_bottom_offset(value: number) {
    this.#view.setUint16(94, Number(value), LE);
  }

  get vui_num_units_in_tick(): number {
    return this.#view.getUint32(96, LE);
  }

  set vui_num_units_in_tick(value: number) {
    this.#view.setUint32(96, Number(value), LE);
  }

  get vui_time_scale(): number {
    return this.#view.getUint32(100, LE);
  }

  set vui_time_scale(value: number) {
    this.#view.setUint32(100, Number(value), LE);
  }

  get vui_num_ticks_poc_diff_one_minus1(): number {
    return this.#view.getUint32(104, LE);
  }

  set vui_num_ticks_poc_diff_one_minus1(value: number) {
    this.#view.setUint32(104, Number(value), LE);
  }

  get min_spatial_segmentation_idc(): number {
    return this.#view.getUint16(108, LE);
  }

  set min_spatial_segmentation_idc(value: number) {
    this.#view.setUint16(108, Number(value), LE);
  }

  get reserved3(): number {
    return this.#view.getUint16(110, LE);
  }

  set reserved3(value: number) {
    this.#view.setUint16(110, Number(value), LE);
  }

  get max_bytes_per_pic_denom(): number {
    return this.#view.getUint8(112);
  }

  set max_bytes_per_pic_denom(value: number) {
    this.#view.setUint8(112, Number(value));
  }

  get max_bits_per_min_cu_denom(): number {
    return this.#view.getUint8(113);
  }

  set max_bits_per_min_cu_denom(value: number) {
    this.#view.setUint8(113, Number(value));
  }

  get log2_max_mv_length_horizontal(): number {
    return this.#view.getUint8(114);
  }

  set log2_max_mv_length_horizontal(value: number) {
    this.#view.setUint8(114, Number(value));
  }

  get log2_max_mv_length_vertical(): number {
    return this.#view.getUint8(115);
  }

  set log2_max_mv_length_vertical(value: number) {
    this.#view.setUint8(115, Number(value));
  }

  get pHrdParameters(): Deno.PointerValue {
    return pointerFromView(this.#view, 120, LE);
  }

  set pHrdParameters(value: AnyPointer) {
    this.#view.setBigUint64(120, BigInt(anyPointer(value)), LE);
  }
}