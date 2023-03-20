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

export interface InitStdVideoH265PpsFlags {
  dependent_slice_segments_enabled_flag?: number;
  output_flag_present_flag?: number;
  sign_data_hiding_enabled_flag?: number;
  cabac_init_present_flag?: number;
  constrained_intra_pred_flag?: number;
  transform_skip_enabled_flag?: number;
  cu_qp_delta_enabled_flag?: number;
  pps_slice_chroma_qp_offsets_present_flag?: number;
  weighted_pred_flag?: number;
  weighted_bipred_flag?: number;
  transquant_bypass_enabled_flag?: number;
  tiles_enabled_flag?: number;
  entropy_coding_sync_enabled_flag?: number;
  uniform_spacing_flag?: number;
  loop_filter_across_tiles_enabled_flag?: number;
  pps_loop_filter_across_slices_enabled_flag?: number;
  deblocking_filter_control_present_flag?: number;
  deblocking_filter_override_enabled_flag?: number;
  pps_deblocking_filter_disabled_flag?: number;
  pps_scaling_list_data_present_flag?: number;
  lists_modification_present_flag?: number;
  slice_segment_header_extension_present_flag?: number;
  pps_extension_present_flag?: number;
  cross_component_prediction_enabled_flag?: number;
  chroma_qp_offset_list_enabled_flag?: number;
  pps_curr_pic_ref_enabled_flag?: number;
  residual_adaptive_colour_transform_enabled_flag?: number;
  pps_slice_act_qp_offsets_present_flag?: number;
  pps_palette_predictor_initializers_present_flag?: number;
  monochrome_palette_flag?: number;
  pps_range_extension_flag?: number;
}

export class StdVideoH265PpsFlags implements BaseStruct {
  static size = 124;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265PpsFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265PpsFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265PpsFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265PpsFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265PpsFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.dependent_slice_segments_enabled_flag !== undefined) this.dependent_slice_segments_enabled_flag = data.dependent_slice_segments_enabled_flag;
      if (data.output_flag_present_flag !== undefined) this.output_flag_present_flag = data.output_flag_present_flag;
      if (data.sign_data_hiding_enabled_flag !== undefined) this.sign_data_hiding_enabled_flag = data.sign_data_hiding_enabled_flag;
      if (data.cabac_init_present_flag !== undefined) this.cabac_init_present_flag = data.cabac_init_present_flag;
      if (data.constrained_intra_pred_flag !== undefined) this.constrained_intra_pred_flag = data.constrained_intra_pred_flag;
      if (data.transform_skip_enabled_flag !== undefined) this.transform_skip_enabled_flag = data.transform_skip_enabled_flag;
      if (data.cu_qp_delta_enabled_flag !== undefined) this.cu_qp_delta_enabled_flag = data.cu_qp_delta_enabled_flag;
      if (data.pps_slice_chroma_qp_offsets_present_flag !== undefined) this.pps_slice_chroma_qp_offsets_present_flag = data.pps_slice_chroma_qp_offsets_present_flag;
      if (data.weighted_pred_flag !== undefined) this.weighted_pred_flag = data.weighted_pred_flag;
      if (data.weighted_bipred_flag !== undefined) this.weighted_bipred_flag = data.weighted_bipred_flag;
      if (data.transquant_bypass_enabled_flag !== undefined) this.transquant_bypass_enabled_flag = data.transquant_bypass_enabled_flag;
      if (data.tiles_enabled_flag !== undefined) this.tiles_enabled_flag = data.tiles_enabled_flag;
      if (data.entropy_coding_sync_enabled_flag !== undefined) this.entropy_coding_sync_enabled_flag = data.entropy_coding_sync_enabled_flag;
      if (data.uniform_spacing_flag !== undefined) this.uniform_spacing_flag = data.uniform_spacing_flag;
      if (data.loop_filter_across_tiles_enabled_flag !== undefined) this.loop_filter_across_tiles_enabled_flag = data.loop_filter_across_tiles_enabled_flag;
      if (data.pps_loop_filter_across_slices_enabled_flag !== undefined) this.pps_loop_filter_across_slices_enabled_flag = data.pps_loop_filter_across_slices_enabled_flag;
      if (data.deblocking_filter_control_present_flag !== undefined) this.deblocking_filter_control_present_flag = data.deblocking_filter_control_present_flag;
      if (data.deblocking_filter_override_enabled_flag !== undefined) this.deblocking_filter_override_enabled_flag = data.deblocking_filter_override_enabled_flag;
      if (data.pps_deblocking_filter_disabled_flag !== undefined) this.pps_deblocking_filter_disabled_flag = data.pps_deblocking_filter_disabled_flag;
      if (data.pps_scaling_list_data_present_flag !== undefined) this.pps_scaling_list_data_present_flag = data.pps_scaling_list_data_present_flag;
      if (data.lists_modification_present_flag !== undefined) this.lists_modification_present_flag = data.lists_modification_present_flag;
      if (data.slice_segment_header_extension_present_flag !== undefined) this.slice_segment_header_extension_present_flag = data.slice_segment_header_extension_present_flag;
      if (data.pps_extension_present_flag !== undefined) this.pps_extension_present_flag = data.pps_extension_present_flag;
      if (data.cross_component_prediction_enabled_flag !== undefined) this.cross_component_prediction_enabled_flag = data.cross_component_prediction_enabled_flag;
      if (data.chroma_qp_offset_list_enabled_flag !== undefined) this.chroma_qp_offset_list_enabled_flag = data.chroma_qp_offset_list_enabled_flag;
      if (data.pps_curr_pic_ref_enabled_flag !== undefined) this.pps_curr_pic_ref_enabled_flag = data.pps_curr_pic_ref_enabled_flag;
      if (data.residual_adaptive_colour_transform_enabled_flag !== undefined) this.residual_adaptive_colour_transform_enabled_flag = data.residual_adaptive_colour_transform_enabled_flag;
      if (data.pps_slice_act_qp_offsets_present_flag !== undefined) this.pps_slice_act_qp_offsets_present_flag = data.pps_slice_act_qp_offsets_present_flag;
      if (data.pps_palette_predictor_initializers_present_flag !== undefined) this.pps_palette_predictor_initializers_present_flag = data.pps_palette_predictor_initializers_present_flag;
      if (data.monochrome_palette_flag !== undefined) this.monochrome_palette_flag = data.monochrome_palette_flag;
      if (data.pps_range_extension_flag !== undefined) this.pps_range_extension_flag = data.pps_range_extension_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265PpsFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get dependent_slice_segments_enabled_flag(): number {
    return this.#view.getUint32(0, LE);
  }

  set dependent_slice_segments_enabled_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get output_flag_present_flag(): number {
    return this.#view.getUint32(4, LE);
  }

  set output_flag_present_flag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get sign_data_hiding_enabled_flag(): number {
    return this.#view.getUint32(8, LE);
  }

  set sign_data_hiding_enabled_flag(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get cabac_init_present_flag(): number {
    return this.#view.getUint32(12, LE);
  }

  set cabac_init_present_flag(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get constrained_intra_pred_flag(): number {
    return this.#view.getUint32(16, LE);
  }

  set constrained_intra_pred_flag(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get transform_skip_enabled_flag(): number {
    return this.#view.getUint32(20, LE);
  }

  set transform_skip_enabled_flag(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get cu_qp_delta_enabled_flag(): number {
    return this.#view.getUint32(24, LE);
  }

  set cu_qp_delta_enabled_flag(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pps_slice_chroma_qp_offsets_present_flag(): number {
    return this.#view.getUint32(28, LE);
  }

  set pps_slice_chroma_qp_offsets_present_flag(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get weighted_pred_flag(): number {
    return this.#view.getUint32(32, LE);
  }

  set weighted_pred_flag(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get weighted_bipred_flag(): number {
    return this.#view.getUint32(36, LE);
  }

  set weighted_bipred_flag(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get transquant_bypass_enabled_flag(): number {
    return this.#view.getUint32(40, LE);
  }

  set transquant_bypass_enabled_flag(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get tiles_enabled_flag(): number {
    return this.#view.getUint32(44, LE);
  }

  set tiles_enabled_flag(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get entropy_coding_sync_enabled_flag(): number {
    return this.#view.getUint32(48, LE);
  }

  set entropy_coding_sync_enabled_flag(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get uniform_spacing_flag(): number {
    return this.#view.getUint32(52, LE);
  }

  set uniform_spacing_flag(value: number) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get loop_filter_across_tiles_enabled_flag(): number {
    return this.#view.getUint32(56, LE);
  }

  set loop_filter_across_tiles_enabled_flag(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get pps_loop_filter_across_slices_enabled_flag(): number {
    return this.#view.getUint32(60, LE);
  }

  set pps_loop_filter_across_slices_enabled_flag(value: number) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get deblocking_filter_control_present_flag(): number {
    return this.#view.getUint32(64, LE);
  }

  set deblocking_filter_control_present_flag(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get deblocking_filter_override_enabled_flag(): number {
    return this.#view.getUint32(68, LE);
  }

  set deblocking_filter_override_enabled_flag(value: number) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get pps_deblocking_filter_disabled_flag(): number {
    return this.#view.getUint32(72, LE);
  }

  set pps_deblocking_filter_disabled_flag(value: number) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get pps_scaling_list_data_present_flag(): number {
    return this.#view.getUint32(76, LE);
  }

  set pps_scaling_list_data_present_flag(value: number) {
    this.#view.setUint32(76, Number(value), LE);
  }

  get lists_modification_present_flag(): number {
    return this.#view.getUint32(80, LE);
  }

  set lists_modification_present_flag(value: number) {
    this.#view.setUint32(80, Number(value), LE);
  }

  get slice_segment_header_extension_present_flag(): number {
    return this.#view.getUint32(84, LE);
  }

  set slice_segment_header_extension_present_flag(value: number) {
    this.#view.setUint32(84, Number(value), LE);
  }

  get pps_extension_present_flag(): number {
    return this.#view.getUint32(88, LE);
  }

  set pps_extension_present_flag(value: number) {
    this.#view.setUint32(88, Number(value), LE);
  }

  get cross_component_prediction_enabled_flag(): number {
    return this.#view.getUint32(92, LE);
  }

  set cross_component_prediction_enabled_flag(value: number) {
    this.#view.setUint32(92, Number(value), LE);
  }

  get chroma_qp_offset_list_enabled_flag(): number {
    return this.#view.getUint32(96, LE);
  }

  set chroma_qp_offset_list_enabled_flag(value: number) {
    this.#view.setUint32(96, Number(value), LE);
  }

  get pps_curr_pic_ref_enabled_flag(): number {
    return this.#view.getUint32(100, LE);
  }

  set pps_curr_pic_ref_enabled_flag(value: number) {
    this.#view.setUint32(100, Number(value), LE);
  }

  get residual_adaptive_colour_transform_enabled_flag(): number {
    return this.#view.getUint32(104, LE);
  }

  set residual_adaptive_colour_transform_enabled_flag(value: number) {
    this.#view.setUint32(104, Number(value), LE);
  }

  get pps_slice_act_qp_offsets_present_flag(): number {
    return this.#view.getUint32(108, LE);
  }

  set pps_slice_act_qp_offsets_present_flag(value: number) {
    this.#view.setUint32(108, Number(value), LE);
  }

  get pps_palette_predictor_initializers_present_flag(): number {
    return this.#view.getUint32(112, LE);
  }

  set pps_palette_predictor_initializers_present_flag(value: number) {
    this.#view.setUint32(112, Number(value), LE);
  }

  get monochrome_palette_flag(): number {
    return this.#view.getUint32(116, LE);
  }

  set monochrome_palette_flag(value: number) {
    this.#view.setUint32(116, Number(value), LE);
  }

  get pps_range_extension_flag(): number {
    return this.#view.getUint32(120, LE);
  }

  set pps_range_extension_flag(value: number) {
    this.#view.setUint32(120, Number(value), LE);
  }
}