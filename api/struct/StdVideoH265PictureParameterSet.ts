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
import {StdVideoH265PpsFlags} from "./StdVideoH265PpsFlags.ts";
import {StdVideoH265ScalingLists} from "./StdVideoH265ScalingLists.ts";
import {StdVideoH265PredictorPaletteEntries} from "./StdVideoH265PredictorPaletteEntries.ts";

export interface InitStdVideoH265PictureParameterSet {
  flags?: StdVideoH265PpsFlags;
  pps_pic_parameter_set_id?: number;
  pps_seq_parameter_set_id?: number;
  sps_video_parameter_set_id?: number;
  num_extra_slice_header_bits?: number;
  num_ref_idx_l0_default_active_minus1?: number;
  num_ref_idx_l1_default_active_minus1?: number;
  init_qp_minus26?: number;
  diff_cu_qp_delta_depth?: number;
  pps_cb_qp_offset?: number;
  pps_cr_qp_offset?: number;
  pps_beta_offset_div2?: number;
  pps_tc_offset_div2?: number;
  log2_parallel_merge_level_minus2?: number;
  log2_max_transform_skip_block_size_minus2?: number;
  diff_cu_chroma_qp_offset_depth?: number;
  chroma_qp_offset_list_len_minus1?: number;
  cb_qp_offset_list?: Int8Array;
  cr_qp_offset_list?: Int8Array;
  log2_sao_offset_scale_luma?: number;
  log2_sao_offset_scale_chroma?: number;
  pps_act_y_qp_offset_plus5?: number;
  pps_act_cb_qp_offset_plus5?: number;
  pps_act_cr_qp_offset_plus3?: number;
  pps_num_palette_predictor_initializers?: number;
  luma_bit_depth_entry_minus8?: number;
  chroma_bit_depth_entry_minus8?: number;
  num_tile_columns_minus1?: number;
  num_tile_rows_minus1?: number;
  reserved1?: number;
  reserved2?: number;
  column_width_minus1?: Uint16Array;
  row_height_minus1?: Uint16Array;
  reserved3?: number;
  pScalingLists?: AnyPointer;
  pPredictorPaletteEntries?: AnyPointer;
}

export class StdVideoH265PictureParameterSet implements BaseStruct {
  static size = 264;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265PictureParameterSet);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265PictureParameterSet) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265PictureParameterSet.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265PictureParameterSet.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265PictureParameterSet.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.pps_pic_parameter_set_id !== undefined) this.pps_pic_parameter_set_id = data.pps_pic_parameter_set_id;
      if (data.pps_seq_parameter_set_id !== undefined) this.pps_seq_parameter_set_id = data.pps_seq_parameter_set_id;
      if (data.sps_video_parameter_set_id !== undefined) this.sps_video_parameter_set_id = data.sps_video_parameter_set_id;
      if (data.num_extra_slice_header_bits !== undefined) this.num_extra_slice_header_bits = data.num_extra_slice_header_bits;
      if (data.num_ref_idx_l0_default_active_minus1 !== undefined) this.num_ref_idx_l0_default_active_minus1 = data.num_ref_idx_l0_default_active_minus1;
      if (data.num_ref_idx_l1_default_active_minus1 !== undefined) this.num_ref_idx_l1_default_active_minus1 = data.num_ref_idx_l1_default_active_minus1;
      if (data.init_qp_minus26 !== undefined) this.init_qp_minus26 = data.init_qp_minus26;
      if (data.diff_cu_qp_delta_depth !== undefined) this.diff_cu_qp_delta_depth = data.diff_cu_qp_delta_depth;
      if (data.pps_cb_qp_offset !== undefined) this.pps_cb_qp_offset = data.pps_cb_qp_offset;
      if (data.pps_cr_qp_offset !== undefined) this.pps_cr_qp_offset = data.pps_cr_qp_offset;
      if (data.pps_beta_offset_div2 !== undefined) this.pps_beta_offset_div2 = data.pps_beta_offset_div2;
      if (data.pps_tc_offset_div2 !== undefined) this.pps_tc_offset_div2 = data.pps_tc_offset_div2;
      if (data.log2_parallel_merge_level_minus2 !== undefined) this.log2_parallel_merge_level_minus2 = data.log2_parallel_merge_level_minus2;
      if (data.log2_max_transform_skip_block_size_minus2 !== undefined) this.log2_max_transform_skip_block_size_minus2 = data.log2_max_transform_skip_block_size_minus2;
      if (data.diff_cu_chroma_qp_offset_depth !== undefined) this.diff_cu_chroma_qp_offset_depth = data.diff_cu_chroma_qp_offset_depth;
      if (data.chroma_qp_offset_list_len_minus1 !== undefined) this.chroma_qp_offset_list_len_minus1 = data.chroma_qp_offset_list_len_minus1;
      if (data.cb_qp_offset_list !== undefined) this.cb_qp_offset_list = data.cb_qp_offset_list;
      if (data.cr_qp_offset_list !== undefined) this.cr_qp_offset_list = data.cr_qp_offset_list;
      if (data.log2_sao_offset_scale_luma !== undefined) this.log2_sao_offset_scale_luma = data.log2_sao_offset_scale_luma;
      if (data.log2_sao_offset_scale_chroma !== undefined) this.log2_sao_offset_scale_chroma = data.log2_sao_offset_scale_chroma;
      if (data.pps_act_y_qp_offset_plus5 !== undefined) this.pps_act_y_qp_offset_plus5 = data.pps_act_y_qp_offset_plus5;
      if (data.pps_act_cb_qp_offset_plus5 !== undefined) this.pps_act_cb_qp_offset_plus5 = data.pps_act_cb_qp_offset_plus5;
      if (data.pps_act_cr_qp_offset_plus3 !== undefined) this.pps_act_cr_qp_offset_plus3 = data.pps_act_cr_qp_offset_plus3;
      if (data.pps_num_palette_predictor_initializers !== undefined) this.pps_num_palette_predictor_initializers = data.pps_num_palette_predictor_initializers;
      if (data.luma_bit_depth_entry_minus8 !== undefined) this.luma_bit_depth_entry_minus8 = data.luma_bit_depth_entry_minus8;
      if (data.chroma_bit_depth_entry_minus8 !== undefined) this.chroma_bit_depth_entry_minus8 = data.chroma_bit_depth_entry_minus8;
      if (data.num_tile_columns_minus1 !== undefined) this.num_tile_columns_minus1 = data.num_tile_columns_minus1;
      if (data.num_tile_rows_minus1 !== undefined) this.num_tile_rows_minus1 = data.num_tile_rows_minus1;
      if (data.reserved1 !== undefined) this.reserved1 = data.reserved1;
      if (data.reserved2 !== undefined) this.reserved2 = data.reserved2;
      if (data.column_width_minus1 !== undefined) this.column_width_minus1 = data.column_width_minus1;
      if (data.row_height_minus1 !== undefined) this.row_height_minus1 = data.row_height_minus1;
      if (data.reserved3 !== undefined) this.reserved3 = data.reserved3;
      if (data.pScalingLists !== undefined) this.pScalingLists = data.pScalingLists;
      if (data.pPredictorPaletteEntries !== undefined) this.pPredictorPaletteEntries = data.pPredictorPaletteEntries;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265PictureParameterSet.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags() {
    return new StdVideoH265PpsFlags(this.#data.subarray(0, 0 + StdVideoH265PpsFlags.size));
  }

  set flags(value: StdVideoH265PpsFlags) {
    if (value[BUFFER].byteLength < StdVideoH265PpsFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get pps_pic_parameter_set_id() {
    return this.#view.getUint8(124);
  }

  set pps_pic_parameter_set_id(value: number) {
    this.#view.setUint8(124, Number(value));
  }

  get pps_seq_parameter_set_id() {
    return this.#view.getUint8(125);
  }

  set pps_seq_parameter_set_id(value: number) {
    this.#view.setUint8(125, Number(value));
  }

  get sps_video_parameter_set_id() {
    return this.#view.getUint8(126);
  }

  set sps_video_parameter_set_id(value: number) {
    this.#view.setUint8(126, Number(value));
  }

  get num_extra_slice_header_bits() {
    return this.#view.getUint8(127);
  }

  set num_extra_slice_header_bits(value: number) {
    this.#view.setUint8(127, Number(value));
  }

  get num_ref_idx_l0_default_active_minus1() {
    return this.#view.getUint8(128);
  }

  set num_ref_idx_l0_default_active_minus1(value: number) {
    this.#view.setUint8(128, Number(value));
  }

  get num_ref_idx_l1_default_active_minus1() {
    return this.#view.getUint8(129);
  }

  set num_ref_idx_l1_default_active_minus1(value: number) {
    this.#view.setUint8(129, Number(value));
  }

  get init_qp_minus26() {
    return this.#view.getInt8(130);
  }

  set init_qp_minus26(value: number) {
    this.#view.setInt8(130, Number(value));
  }

  get diff_cu_qp_delta_depth() {
    return this.#view.getUint8(131);
  }

  set diff_cu_qp_delta_depth(value: number) {
    this.#view.setUint8(131, Number(value));
  }

  get pps_cb_qp_offset() {
    return this.#view.getInt8(132);
  }

  set pps_cb_qp_offset(value: number) {
    this.#view.setInt8(132, Number(value));
  }

  get pps_cr_qp_offset() {
    return this.#view.getInt8(133);
  }

  set pps_cr_qp_offset(value: number) {
    this.#view.setInt8(133, Number(value));
  }

  get pps_beta_offset_div2() {
    return this.#view.getInt8(134);
  }

  set pps_beta_offset_div2(value: number) {
    this.#view.setInt8(134, Number(value));
  }

  get pps_tc_offset_div2() {
    return this.#view.getInt8(135);
  }

  set pps_tc_offset_div2(value: number) {
    this.#view.setInt8(135, Number(value));
  }

  get log2_parallel_merge_level_minus2() {
    return this.#view.getUint8(136);
  }

  set log2_parallel_merge_level_minus2(value: number) {
    this.#view.setUint8(136, Number(value));
  }

  get log2_max_transform_skip_block_size_minus2() {
    return this.#view.getUint8(137);
  }

  set log2_max_transform_skip_block_size_minus2(value: number) {
    this.#view.setUint8(137, Number(value));
  }

  get diff_cu_chroma_qp_offset_depth() {
    return this.#view.getUint8(138);
  }

  set diff_cu_chroma_qp_offset_depth(value: number) {
    this.#view.setUint8(138, Number(value));
  }

  get chroma_qp_offset_list_len_minus1() {
    return this.#view.getUint8(139);
  }

  set chroma_qp_offset_list_len_minus1(value: number) {
    this.#view.setUint8(139, Number(value));
  }

  get cb_qp_offset_list() {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 140, 6);
  }

  set cb_qp_offset_list(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 140);
  }

  get cr_qp_offset_list() {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 146, 6);
  }

  set cr_qp_offset_list(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 146);
  }

  get log2_sao_offset_scale_luma() {
    return this.#view.getUint8(152);
  }

  set log2_sao_offset_scale_luma(value: number) {
    this.#view.setUint8(152, Number(value));
  }

  get log2_sao_offset_scale_chroma() {
    return this.#view.getUint8(153);
  }

  set log2_sao_offset_scale_chroma(value: number) {
    this.#view.setUint8(153, Number(value));
  }

  get pps_act_y_qp_offset_plus5() {
    return this.#view.getInt8(154);
  }

  set pps_act_y_qp_offset_plus5(value: number) {
    this.#view.setInt8(154, Number(value));
  }

  get pps_act_cb_qp_offset_plus5() {
    return this.#view.getInt8(155);
  }

  set pps_act_cb_qp_offset_plus5(value: number) {
    this.#view.setInt8(155, Number(value));
  }

  get pps_act_cr_qp_offset_plus3() {
    return this.#view.getInt8(156);
  }

  set pps_act_cr_qp_offset_plus3(value: number) {
    this.#view.setInt8(156, Number(value));
  }

  get pps_num_palette_predictor_initializers() {
    return this.#view.getUint8(157);
  }

  set pps_num_palette_predictor_initializers(value: number) {
    this.#view.setUint8(157, Number(value));
  }

  get luma_bit_depth_entry_minus8() {
    return this.#view.getUint8(158);
  }

  set luma_bit_depth_entry_minus8(value: number) {
    this.#view.setUint8(158, Number(value));
  }

  get chroma_bit_depth_entry_minus8() {
    return this.#view.getUint8(159);
  }

  set chroma_bit_depth_entry_minus8(value: number) {
    this.#view.setUint8(159, Number(value));
  }

  get num_tile_columns_minus1() {
    return this.#view.getUint8(160);
  }

  set num_tile_columns_minus1(value: number) {
    this.#view.setUint8(160, Number(value));
  }

  get num_tile_rows_minus1() {
    return this.#view.getUint8(161);
  }

  set num_tile_rows_minus1(value: number) {
    this.#view.setUint8(161, Number(value));
  }

  get reserved1() {
    return this.#view.getUint8(162);
  }

  set reserved1(value: number) {
    this.#view.setUint8(162, Number(value));
  }

  get reserved2() {
    return this.#view.getUint8(163);
  }

  set reserved2(value: number) {
    this.#view.setUint8(163, Number(value));
  }

  get column_width_minus1() {
    return new Uint16Array(this.#data.buffer, this.#data.byteOffset + 164, 19);
  }

  set column_width_minus1(value: Uint16Array) {
    this.#data.set(new Uint8Array(value.buffer), 164);
  }

  get row_height_minus1() {
    return new Uint16Array(this.#data.buffer, this.#data.byteOffset + 202, 21);
  }

  set row_height_minus1(value: Uint16Array) {
    this.#data.set(new Uint8Array(value.buffer), 202);
  }

  get reserved3() {
    return this.#view.getUint32(244, LE);
  }

  set reserved3(value: number) {
    this.#view.setUint32(244, Number(value), LE);
  }

  get pScalingLists() {
    return pointerFromView(this.#view, 248, LE);
  }

  set pScalingLists(value: AnyPointer) {
    this.#view.setBigUint64(248, BigInt(anyPointer(value)), LE);
  }

  get pPredictorPaletteEntries() {
    return pointerFromView(this.#view, 256, LE);
  }

  set pPredictorPaletteEntries(value: AnyPointer) {
    this.#view.setBigUint64(256, BigInt(anyPointer(value)), LE);
  }
}