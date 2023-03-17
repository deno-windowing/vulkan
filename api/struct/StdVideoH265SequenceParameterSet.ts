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
import {StdVideoH265SpsFlags} from "./StdVideoH265SpsFlags.ts";
import {StdVideoH265ProfileTierLevel} from "./StdVideoH265ProfileTierLevel.ts";
import {StdVideoH265DecPicBufMgr} from "./StdVideoH265DecPicBufMgr.ts";
import {StdVideoH265ScalingLists} from "./StdVideoH265ScalingLists.ts";
import {StdVideoH265ShortTermRefPicSet} from "./StdVideoH265ShortTermRefPicSet.ts";
import {StdVideoH265LongTermRefPicsSps} from "./StdVideoH265LongTermRefPicsSps.ts";
import {StdVideoH265SequenceParameterSetVui} from "./StdVideoH265SequenceParameterSetVui.ts";
import {StdVideoH265PredictorPaletteEntries} from "./StdVideoH265PredictorPaletteEntries.ts";
import { StdVideoH265ChromaFormatIdc } from "../enum.ts";

export interface InitStdVideoH265SequenceParameterSet {
  flags?: StdVideoH265SpsFlags;
  chroma_format_idc?: StdVideoH265ChromaFormatIdc;
  pic_width_in_luma_samples?: number;
  pic_height_in_luma_samples?: number;
  sps_video_parameter_set_id?: number;
  sps_max_sub_layers_minus1?: number;
  sps_seq_parameter_set_id?: number;
  bit_depth_luma_minus8?: number;
  bit_depth_chroma_minus8?: number;
  log2_max_pic_order_cnt_lsb_minus4?: number;
  log2_min_luma_coding_block_size_minus3?: number;
  log2_diff_max_min_luma_coding_block_size?: number;
  log2_min_luma_transform_block_size_minus2?: number;
  log2_diff_max_min_luma_transform_block_size?: number;
  max_transform_hierarchy_depth_inter?: number;
  max_transform_hierarchy_depth_intra?: number;
  num_short_term_ref_pic_sets?: number;
  num_long_term_ref_pics_sps?: number;
  pcm_sample_bit_depth_luma_minus1?: number;
  pcm_sample_bit_depth_chroma_minus1?: number;
  log2_min_pcm_luma_coding_block_size_minus3?: number;
  log2_diff_max_min_pcm_luma_coding_block_size?: number;
  reserved1?: number;
  reserved2?: number;
  palette_max_size?: number;
  delta_palette_max_predictor_size?: number;
  motion_vector_resolution_control_idc?: number;
  sps_num_palette_predictor_initializers_minus1?: number;
  conf_win_left_offset?: number;
  conf_win_right_offset?: number;
  conf_win_top_offset?: number;
  conf_win_bottom_offset?: number;
  pProfileTierLevel?: AnyPointer;
  pDecPicBufMgr?: AnyPointer;
  pScalingLists?: AnyPointer;
  pShortTermRefPicSet?: AnyPointer;
  pLongTermRefPicsSps?: AnyPointer;
  pSequenceParameterSetVui?: AnyPointer;
  pPredictorPaletteEntries?: AnyPointer;
}

export class StdVideoH265SequenceParameterSet implements BaseStruct {
  static size = 232;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265SequenceParameterSet);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265SequenceParameterSet) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265SequenceParameterSet.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265SequenceParameterSet.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265SequenceParameterSet.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.chroma_format_idc !== undefined) this.chroma_format_idc = data.chroma_format_idc;
      if (data.pic_width_in_luma_samples !== undefined) this.pic_width_in_luma_samples = data.pic_width_in_luma_samples;
      if (data.pic_height_in_luma_samples !== undefined) this.pic_height_in_luma_samples = data.pic_height_in_luma_samples;
      if (data.sps_video_parameter_set_id !== undefined) this.sps_video_parameter_set_id = data.sps_video_parameter_set_id;
      if (data.sps_max_sub_layers_minus1 !== undefined) this.sps_max_sub_layers_minus1 = data.sps_max_sub_layers_minus1;
      if (data.sps_seq_parameter_set_id !== undefined) this.sps_seq_parameter_set_id = data.sps_seq_parameter_set_id;
      if (data.bit_depth_luma_minus8 !== undefined) this.bit_depth_luma_minus8 = data.bit_depth_luma_minus8;
      if (data.bit_depth_chroma_minus8 !== undefined) this.bit_depth_chroma_minus8 = data.bit_depth_chroma_minus8;
      if (data.log2_max_pic_order_cnt_lsb_minus4 !== undefined) this.log2_max_pic_order_cnt_lsb_minus4 = data.log2_max_pic_order_cnt_lsb_minus4;
      if (data.log2_min_luma_coding_block_size_minus3 !== undefined) this.log2_min_luma_coding_block_size_minus3 = data.log2_min_luma_coding_block_size_minus3;
      if (data.log2_diff_max_min_luma_coding_block_size !== undefined) this.log2_diff_max_min_luma_coding_block_size = data.log2_diff_max_min_luma_coding_block_size;
      if (data.log2_min_luma_transform_block_size_minus2 !== undefined) this.log2_min_luma_transform_block_size_minus2 = data.log2_min_luma_transform_block_size_minus2;
      if (data.log2_diff_max_min_luma_transform_block_size !== undefined) this.log2_diff_max_min_luma_transform_block_size = data.log2_diff_max_min_luma_transform_block_size;
      if (data.max_transform_hierarchy_depth_inter !== undefined) this.max_transform_hierarchy_depth_inter = data.max_transform_hierarchy_depth_inter;
      if (data.max_transform_hierarchy_depth_intra !== undefined) this.max_transform_hierarchy_depth_intra = data.max_transform_hierarchy_depth_intra;
      if (data.num_short_term_ref_pic_sets !== undefined) this.num_short_term_ref_pic_sets = data.num_short_term_ref_pic_sets;
      if (data.num_long_term_ref_pics_sps !== undefined) this.num_long_term_ref_pics_sps = data.num_long_term_ref_pics_sps;
      if (data.pcm_sample_bit_depth_luma_minus1 !== undefined) this.pcm_sample_bit_depth_luma_minus1 = data.pcm_sample_bit_depth_luma_minus1;
      if (data.pcm_sample_bit_depth_chroma_minus1 !== undefined) this.pcm_sample_bit_depth_chroma_minus1 = data.pcm_sample_bit_depth_chroma_minus1;
      if (data.log2_min_pcm_luma_coding_block_size_minus3 !== undefined) this.log2_min_pcm_luma_coding_block_size_minus3 = data.log2_min_pcm_luma_coding_block_size_minus3;
      if (data.log2_diff_max_min_pcm_luma_coding_block_size !== undefined) this.log2_diff_max_min_pcm_luma_coding_block_size = data.log2_diff_max_min_pcm_luma_coding_block_size;
      if (data.reserved1 !== undefined) this.reserved1 = data.reserved1;
      if (data.reserved2 !== undefined) this.reserved2 = data.reserved2;
      if (data.palette_max_size !== undefined) this.palette_max_size = data.palette_max_size;
      if (data.delta_palette_max_predictor_size !== undefined) this.delta_palette_max_predictor_size = data.delta_palette_max_predictor_size;
      if (data.motion_vector_resolution_control_idc !== undefined) this.motion_vector_resolution_control_idc = data.motion_vector_resolution_control_idc;
      if (data.sps_num_palette_predictor_initializers_minus1 !== undefined) this.sps_num_palette_predictor_initializers_minus1 = data.sps_num_palette_predictor_initializers_minus1;
      if (data.conf_win_left_offset !== undefined) this.conf_win_left_offset = data.conf_win_left_offset;
      if (data.conf_win_right_offset !== undefined) this.conf_win_right_offset = data.conf_win_right_offset;
      if (data.conf_win_top_offset !== undefined) this.conf_win_top_offset = data.conf_win_top_offset;
      if (data.conf_win_bottom_offset !== undefined) this.conf_win_bottom_offset = data.conf_win_bottom_offset;
      if (data.pProfileTierLevel !== undefined) this.pProfileTierLevel = data.pProfileTierLevel;
      if (data.pDecPicBufMgr !== undefined) this.pDecPicBufMgr = data.pDecPicBufMgr;
      if (data.pScalingLists !== undefined) this.pScalingLists = data.pScalingLists;
      if (data.pShortTermRefPicSet !== undefined) this.pShortTermRefPicSet = data.pShortTermRefPicSet;
      if (data.pLongTermRefPicsSps !== undefined) this.pLongTermRefPicsSps = data.pLongTermRefPicsSps;
      if (data.pSequenceParameterSetVui !== undefined) this.pSequenceParameterSetVui = data.pSequenceParameterSetVui;
      if (data.pPredictorPaletteEntries !== undefined) this.pPredictorPaletteEntries = data.pPredictorPaletteEntries;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265SequenceParameterSet.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags(): StdVideoH265SpsFlags {
    return new StdVideoH265SpsFlags(this.#data.subarray(0, 0 + StdVideoH265SpsFlags.size));
  }

  set flags(value: StdVideoH265SpsFlags) {
    if (value[BUFFER].byteLength < StdVideoH265SpsFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get chroma_format_idc(): number {
    return this.#view.getUint32(120, LE);
  }

  set chroma_format_idc(value: StdVideoH265ChromaFormatIdc) {
    this.#view.setUint32(120, Number(value), LE);
  }

  get pic_width_in_luma_samples(): number {
    return this.#view.getUint32(124, LE);
  }

  set pic_width_in_luma_samples(value: number) {
    this.#view.setUint32(124, Number(value), LE);
  }

  get pic_height_in_luma_samples(): number {
    return this.#view.getUint32(128, LE);
  }

  set pic_height_in_luma_samples(value: number) {
    this.#view.setUint32(128, Number(value), LE);
  }

  get sps_video_parameter_set_id(): number {
    return this.#view.getUint8(132);
  }

  set sps_video_parameter_set_id(value: number) {
    this.#view.setUint8(132, Number(value));
  }

  get sps_max_sub_layers_minus1(): number {
    return this.#view.getUint8(133);
  }

  set sps_max_sub_layers_minus1(value: number) {
    this.#view.setUint8(133, Number(value));
  }

  get sps_seq_parameter_set_id(): number {
    return this.#view.getUint8(134);
  }

  set sps_seq_parameter_set_id(value: number) {
    this.#view.setUint8(134, Number(value));
  }

  get bit_depth_luma_minus8(): number {
    return this.#view.getUint8(135);
  }

  set bit_depth_luma_minus8(value: number) {
    this.#view.setUint8(135, Number(value));
  }

  get bit_depth_chroma_minus8(): number {
    return this.#view.getUint8(136);
  }

  set bit_depth_chroma_minus8(value: number) {
    this.#view.setUint8(136, Number(value));
  }

  get log2_max_pic_order_cnt_lsb_minus4(): number {
    return this.#view.getUint8(137);
  }

  set log2_max_pic_order_cnt_lsb_minus4(value: number) {
    this.#view.setUint8(137, Number(value));
  }

  get log2_min_luma_coding_block_size_minus3(): number {
    return this.#view.getUint8(138);
  }

  set log2_min_luma_coding_block_size_minus3(value: number) {
    this.#view.setUint8(138, Number(value));
  }

  get log2_diff_max_min_luma_coding_block_size(): number {
    return this.#view.getUint8(139);
  }

  set log2_diff_max_min_luma_coding_block_size(value: number) {
    this.#view.setUint8(139, Number(value));
  }

  get log2_min_luma_transform_block_size_minus2(): number {
    return this.#view.getUint8(140);
  }

  set log2_min_luma_transform_block_size_minus2(value: number) {
    this.#view.setUint8(140, Number(value));
  }

  get log2_diff_max_min_luma_transform_block_size(): number {
    return this.#view.getUint8(141);
  }

  set log2_diff_max_min_luma_transform_block_size(value: number) {
    this.#view.setUint8(141, Number(value));
  }

  get max_transform_hierarchy_depth_inter(): number {
    return this.#view.getUint8(142);
  }

  set max_transform_hierarchy_depth_inter(value: number) {
    this.#view.setUint8(142, Number(value));
  }

  get max_transform_hierarchy_depth_intra(): number {
    return this.#view.getUint8(143);
  }

  set max_transform_hierarchy_depth_intra(value: number) {
    this.#view.setUint8(143, Number(value));
  }

  get num_short_term_ref_pic_sets(): number {
    return this.#view.getUint8(144);
  }

  set num_short_term_ref_pic_sets(value: number) {
    this.#view.setUint8(144, Number(value));
  }

  get num_long_term_ref_pics_sps(): number {
    return this.#view.getUint8(145);
  }

  set num_long_term_ref_pics_sps(value: number) {
    this.#view.setUint8(145, Number(value));
  }

  get pcm_sample_bit_depth_luma_minus1(): number {
    return this.#view.getUint8(146);
  }

  set pcm_sample_bit_depth_luma_minus1(value: number) {
    this.#view.setUint8(146, Number(value));
  }

  get pcm_sample_bit_depth_chroma_minus1(): number {
    return this.#view.getUint8(147);
  }

  set pcm_sample_bit_depth_chroma_minus1(value: number) {
    this.#view.setUint8(147, Number(value));
  }

  get log2_min_pcm_luma_coding_block_size_minus3(): number {
    return this.#view.getUint8(148);
  }

  set log2_min_pcm_luma_coding_block_size_minus3(value: number) {
    this.#view.setUint8(148, Number(value));
  }

  get log2_diff_max_min_pcm_luma_coding_block_size(): number {
    return this.#view.getUint8(149);
  }

  set log2_diff_max_min_pcm_luma_coding_block_size(value: number) {
    this.#view.setUint8(149, Number(value));
  }

  get reserved1(): number {
    return this.#view.getUint8(150);
  }

  set reserved1(value: number) {
    this.#view.setUint8(150, Number(value));
  }

  get reserved2(): number {
    return this.#view.getUint8(151);
  }

  set reserved2(value: number) {
    this.#view.setUint8(151, Number(value));
  }

  get palette_max_size(): number {
    return this.#view.getUint8(152);
  }

  set palette_max_size(value: number) {
    this.#view.setUint8(152, Number(value));
  }

  get delta_palette_max_predictor_size(): number {
    return this.#view.getUint8(153);
  }

  set delta_palette_max_predictor_size(value: number) {
    this.#view.setUint8(153, Number(value));
  }

  get motion_vector_resolution_control_idc(): number {
    return this.#view.getUint8(154);
  }

  set motion_vector_resolution_control_idc(value: number) {
    this.#view.setUint8(154, Number(value));
  }

  get sps_num_palette_predictor_initializers_minus1(): number {
    return this.#view.getUint8(155);
  }

  set sps_num_palette_predictor_initializers_minus1(value: number) {
    this.#view.setUint8(155, Number(value));
  }

  get conf_win_left_offset(): number {
    return this.#view.getUint32(156, LE);
  }

  set conf_win_left_offset(value: number) {
    this.#view.setUint32(156, Number(value), LE);
  }

  get conf_win_right_offset(): number {
    return this.#view.getUint32(160, LE);
  }

  set conf_win_right_offset(value: number) {
    this.#view.setUint32(160, Number(value), LE);
  }

  get conf_win_top_offset(): number {
    return this.#view.getUint32(164, LE);
  }

  set conf_win_top_offset(value: number) {
    this.#view.setUint32(164, Number(value), LE);
  }

  get conf_win_bottom_offset(): number {
    return this.#view.getUint32(168, LE);
  }

  set conf_win_bottom_offset(value: number) {
    this.#view.setUint32(168, Number(value), LE);
  }

  get pProfileTierLevel(): Deno.PointerValue {
    return pointerFromView(this.#view, 176, LE);
  }

  set pProfileTierLevel(value: AnyPointer) {
    this.#view.setBigUint64(176, BigInt(anyPointer(value)), LE);
  }

  get pDecPicBufMgr(): Deno.PointerValue {
    return pointerFromView(this.#view, 184, LE);
  }

  set pDecPicBufMgr(value: AnyPointer) {
    this.#view.setBigUint64(184, BigInt(anyPointer(value)), LE);
  }

  get pScalingLists(): Deno.PointerValue {
    return pointerFromView(this.#view, 192, LE);
  }

  set pScalingLists(value: AnyPointer) {
    this.#view.setBigUint64(192, BigInt(anyPointer(value)), LE);
  }

  get pShortTermRefPicSet(): Deno.PointerValue {
    return pointerFromView(this.#view, 200, LE);
  }

  set pShortTermRefPicSet(value: AnyPointer) {
    this.#view.setBigUint64(200, BigInt(anyPointer(value)), LE);
  }

  get pLongTermRefPicsSps(): Deno.PointerValue {
    return pointerFromView(this.#view, 208, LE);
  }

  set pLongTermRefPicsSps(value: AnyPointer) {
    this.#view.setBigUint64(208, BigInt(anyPointer(value)), LE);
  }

  get pSequenceParameterSetVui(): Deno.PointerValue {
    return pointerFromView(this.#view, 216, LE);
  }

  set pSequenceParameterSetVui(value: AnyPointer) {
    this.#view.setBigUint64(216, BigInt(anyPointer(value)), LE);
  }

  get pPredictorPaletteEntries(): Deno.PointerValue {
    return pointerFromView(this.#view, 224, LE);
  }

  set pPredictorPaletteEntries(value: AnyPointer) {
    this.#view.setBigUint64(224, BigInt(anyPointer(value)), LE);
  }
}