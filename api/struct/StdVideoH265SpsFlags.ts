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

export interface InitStdVideoH265SpsFlags {
  sps_temporal_id_nesting_flag?: number;
  separate_colour_plane_flag?: number;
  conformance_window_flag?: number;
  sps_sub_layer_ordering_info_present_flag?: number;
  scaling_list_enabled_flag?: number;
  sps_scaling_list_data_present_flag?: number;
  amp_enabled_flag?: number;
  sample_adaptive_offset_enabled_flag?: number;
  pcm_enabled_flag?: number;
  pcm_loop_filter_disabled_flag?: number;
  long_term_ref_pics_present_flag?: number;
  sps_temporal_mvp_enabled_flag?: number;
  strong_intra_smoothing_enabled_flag?: number;
  vui_parameters_present_flag?: number;
  sps_extension_present_flag?: number;
  sps_range_extension_flag?: number;
  transform_skip_rotation_enabled_flag?: number;
  transform_skip_context_enabled_flag?: number;
  implicit_rdpcm_enabled_flag?: number;
  explicit_rdpcm_enabled_flag?: number;
  extended_precision_processing_flag?: number;
  intra_smoothing_disabled_flag?: number;
  high_precision_offsets_enabled_flag?: number;
  persistent_rice_adaptation_enabled_flag?: number;
  cabac_bypass_alignment_enabled_flag?: number;
  sps_scc_extension_flag?: number;
  sps_curr_pic_ref_enabled_flag?: number;
  palette_mode_enabled_flag?: number;
  sps_palette_predictor_initializers_present_flag?: number;
  intra_boundary_filtering_disabled_flag?: number;
}

export class StdVideoH265SpsFlags implements BaseStruct {
  static size = 120;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265SpsFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265SpsFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265SpsFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265SpsFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265SpsFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.sps_temporal_id_nesting_flag !== undefined) this.sps_temporal_id_nesting_flag = data.sps_temporal_id_nesting_flag;
      if (data.separate_colour_plane_flag !== undefined) this.separate_colour_plane_flag = data.separate_colour_plane_flag;
      if (data.conformance_window_flag !== undefined) this.conformance_window_flag = data.conformance_window_flag;
      if (data.sps_sub_layer_ordering_info_present_flag !== undefined) this.sps_sub_layer_ordering_info_present_flag = data.sps_sub_layer_ordering_info_present_flag;
      if (data.scaling_list_enabled_flag !== undefined) this.scaling_list_enabled_flag = data.scaling_list_enabled_flag;
      if (data.sps_scaling_list_data_present_flag !== undefined) this.sps_scaling_list_data_present_flag = data.sps_scaling_list_data_present_flag;
      if (data.amp_enabled_flag !== undefined) this.amp_enabled_flag = data.amp_enabled_flag;
      if (data.sample_adaptive_offset_enabled_flag !== undefined) this.sample_adaptive_offset_enabled_flag = data.sample_adaptive_offset_enabled_flag;
      if (data.pcm_enabled_flag !== undefined) this.pcm_enabled_flag = data.pcm_enabled_flag;
      if (data.pcm_loop_filter_disabled_flag !== undefined) this.pcm_loop_filter_disabled_flag = data.pcm_loop_filter_disabled_flag;
      if (data.long_term_ref_pics_present_flag !== undefined) this.long_term_ref_pics_present_flag = data.long_term_ref_pics_present_flag;
      if (data.sps_temporal_mvp_enabled_flag !== undefined) this.sps_temporal_mvp_enabled_flag = data.sps_temporal_mvp_enabled_flag;
      if (data.strong_intra_smoothing_enabled_flag !== undefined) this.strong_intra_smoothing_enabled_flag = data.strong_intra_smoothing_enabled_flag;
      if (data.vui_parameters_present_flag !== undefined) this.vui_parameters_present_flag = data.vui_parameters_present_flag;
      if (data.sps_extension_present_flag !== undefined) this.sps_extension_present_flag = data.sps_extension_present_flag;
      if (data.sps_range_extension_flag !== undefined) this.sps_range_extension_flag = data.sps_range_extension_flag;
      if (data.transform_skip_rotation_enabled_flag !== undefined) this.transform_skip_rotation_enabled_flag = data.transform_skip_rotation_enabled_flag;
      if (data.transform_skip_context_enabled_flag !== undefined) this.transform_skip_context_enabled_flag = data.transform_skip_context_enabled_flag;
      if (data.implicit_rdpcm_enabled_flag !== undefined) this.implicit_rdpcm_enabled_flag = data.implicit_rdpcm_enabled_flag;
      if (data.explicit_rdpcm_enabled_flag !== undefined) this.explicit_rdpcm_enabled_flag = data.explicit_rdpcm_enabled_flag;
      if (data.extended_precision_processing_flag !== undefined) this.extended_precision_processing_flag = data.extended_precision_processing_flag;
      if (data.intra_smoothing_disabled_flag !== undefined) this.intra_smoothing_disabled_flag = data.intra_smoothing_disabled_flag;
      if (data.high_precision_offsets_enabled_flag !== undefined) this.high_precision_offsets_enabled_flag = data.high_precision_offsets_enabled_flag;
      if (data.persistent_rice_adaptation_enabled_flag !== undefined) this.persistent_rice_adaptation_enabled_flag = data.persistent_rice_adaptation_enabled_flag;
      if (data.cabac_bypass_alignment_enabled_flag !== undefined) this.cabac_bypass_alignment_enabled_flag = data.cabac_bypass_alignment_enabled_flag;
      if (data.sps_scc_extension_flag !== undefined) this.sps_scc_extension_flag = data.sps_scc_extension_flag;
      if (data.sps_curr_pic_ref_enabled_flag !== undefined) this.sps_curr_pic_ref_enabled_flag = data.sps_curr_pic_ref_enabled_flag;
      if (data.palette_mode_enabled_flag !== undefined) this.palette_mode_enabled_flag = data.palette_mode_enabled_flag;
      if (data.sps_palette_predictor_initializers_present_flag !== undefined) this.sps_palette_predictor_initializers_present_flag = data.sps_palette_predictor_initializers_present_flag;
      if (data.intra_boundary_filtering_disabled_flag !== undefined) this.intra_boundary_filtering_disabled_flag = data.intra_boundary_filtering_disabled_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265SpsFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get sps_temporal_id_nesting_flag() {
    return this.#view.getUint32(0, LE);
  }

  set sps_temporal_id_nesting_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get separate_colour_plane_flag() {
    return this.#view.getUint32(4, LE);
  }

  set separate_colour_plane_flag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get conformance_window_flag() {
    return this.#view.getUint32(8, LE);
  }

  set conformance_window_flag(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get sps_sub_layer_ordering_info_present_flag() {
    return this.#view.getUint32(12, LE);
  }

  set sps_sub_layer_ordering_info_present_flag(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get scaling_list_enabled_flag() {
    return this.#view.getUint32(16, LE);
  }

  set scaling_list_enabled_flag(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get sps_scaling_list_data_present_flag() {
    return this.#view.getUint32(20, LE);
  }

  set sps_scaling_list_data_present_flag(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get amp_enabled_flag() {
    return this.#view.getUint32(24, LE);
  }

  set amp_enabled_flag(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get sample_adaptive_offset_enabled_flag() {
    return this.#view.getUint32(28, LE);
  }

  set sample_adaptive_offset_enabled_flag(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get pcm_enabled_flag() {
    return this.#view.getUint32(32, LE);
  }

  set pcm_enabled_flag(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pcm_loop_filter_disabled_flag() {
    return this.#view.getUint32(36, LE);
  }

  set pcm_loop_filter_disabled_flag(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get long_term_ref_pics_present_flag() {
    return this.#view.getUint32(40, LE);
  }

  set long_term_ref_pics_present_flag(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get sps_temporal_mvp_enabled_flag() {
    return this.#view.getUint32(44, LE);
  }

  set sps_temporal_mvp_enabled_flag(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get strong_intra_smoothing_enabled_flag() {
    return this.#view.getUint32(48, LE);
  }

  set strong_intra_smoothing_enabled_flag(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get vui_parameters_present_flag() {
    return this.#view.getUint32(52, LE);
  }

  set vui_parameters_present_flag(value: number) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get sps_extension_present_flag() {
    return this.#view.getUint32(56, LE);
  }

  set sps_extension_present_flag(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get sps_range_extension_flag() {
    return this.#view.getUint32(60, LE);
  }

  set sps_range_extension_flag(value: number) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get transform_skip_rotation_enabled_flag() {
    return this.#view.getUint32(64, LE);
  }

  set transform_skip_rotation_enabled_flag(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get transform_skip_context_enabled_flag() {
    return this.#view.getUint32(68, LE);
  }

  set transform_skip_context_enabled_flag(value: number) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get implicit_rdpcm_enabled_flag() {
    return this.#view.getUint32(72, LE);
  }

  set implicit_rdpcm_enabled_flag(value: number) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get explicit_rdpcm_enabled_flag() {
    return this.#view.getUint32(76, LE);
  }

  set explicit_rdpcm_enabled_flag(value: number) {
    this.#view.setUint32(76, Number(value), LE);
  }

  get extended_precision_processing_flag() {
    return this.#view.getUint32(80, LE);
  }

  set extended_precision_processing_flag(value: number) {
    this.#view.setUint32(80, Number(value), LE);
  }

  get intra_smoothing_disabled_flag() {
    return this.#view.getUint32(84, LE);
  }

  set intra_smoothing_disabled_flag(value: number) {
    this.#view.setUint32(84, Number(value), LE);
  }

  get high_precision_offsets_enabled_flag() {
    return this.#view.getUint32(88, LE);
  }

  set high_precision_offsets_enabled_flag(value: number) {
    this.#view.setUint32(88, Number(value), LE);
  }

  get persistent_rice_adaptation_enabled_flag() {
    return this.#view.getUint32(92, LE);
  }

  set persistent_rice_adaptation_enabled_flag(value: number) {
    this.#view.setUint32(92, Number(value), LE);
  }

  get cabac_bypass_alignment_enabled_flag() {
    return this.#view.getUint32(96, LE);
  }

  set cabac_bypass_alignment_enabled_flag(value: number) {
    this.#view.setUint32(96, Number(value), LE);
  }

  get sps_scc_extension_flag() {
    return this.#view.getUint32(100, LE);
  }

  set sps_scc_extension_flag(value: number) {
    this.#view.setUint32(100, Number(value), LE);
  }

  get sps_curr_pic_ref_enabled_flag() {
    return this.#view.getUint32(104, LE);
  }

  set sps_curr_pic_ref_enabled_flag(value: number) {
    this.#view.setUint32(104, Number(value), LE);
  }

  get palette_mode_enabled_flag() {
    return this.#view.getUint32(108, LE);
  }

  set palette_mode_enabled_flag(value: number) {
    this.#view.setUint32(108, Number(value), LE);
  }

  get sps_palette_predictor_initializers_present_flag() {
    return this.#view.getUint32(112, LE);
  }

  set sps_palette_predictor_initializers_present_flag(value: number) {
    this.#view.setUint32(112, Number(value), LE);
  }

  get intra_boundary_filtering_disabled_flag() {
    return this.#view.getUint32(116, LE);
  }

  set intra_boundary_filtering_disabled_flag(value: number) {
    this.#view.setUint32(116, Number(value), LE);
  }
}