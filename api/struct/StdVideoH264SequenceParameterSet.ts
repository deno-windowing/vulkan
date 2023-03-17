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
import {StdVideoH264SpsFlags} from "./StdVideoH264SpsFlags.ts";
import {StdVideoH264ScalingLists} from "./StdVideoH264ScalingLists.ts";
import {StdVideoH264SequenceParameterSetVui} from "./StdVideoH264SequenceParameterSetVui.ts";
import { StdVideoH264ProfileIdc, StdVideoH264LevelIdc, StdVideoH264ChromaFormatIdc, StdVideoH264PocType } from "../enum.ts";

export interface InitStdVideoH264SequenceParameterSet {
  flags?: StdVideoH264SpsFlags;
  profile_idc?: StdVideoH264ProfileIdc;
  level_idc?: StdVideoH264LevelIdc;
  chroma_format_idc?: StdVideoH264ChromaFormatIdc;
  seq_parameter_set_id?: number;
  bit_depth_luma_minus8?: number;
  bit_depth_chroma_minus8?: number;
  log2_max_frame_num_minus4?: number;
  pic_order_cnt_type?: StdVideoH264PocType;
  offset_for_non_ref_pic?: number;
  offset_for_top_to_bottom_field?: number;
  log2_max_pic_order_cnt_lsb_minus4?: number;
  num_ref_frames_in_pic_order_cnt_cycle?: number;
  max_num_ref_frames?: number;
  reserved1?: number;
  pic_width_in_mbs_minus1?: number;
  pic_height_in_map_units_minus1?: number;
  frame_crop_left_offset?: number;
  frame_crop_right_offset?: number;
  frame_crop_top_offset?: number;
  frame_crop_bottom_offset?: number;
  reserved2?: number;
  pOffsetForRefFrame?: AnyPointer;
  pScalingLists?: AnyPointer;
  pSequenceParameterSetVui?: AnyPointer;
}

export class StdVideoH264SequenceParameterSet implements BaseStruct {
  static size = 152;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH264SequenceParameterSet);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH264SequenceParameterSet) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH264SequenceParameterSet.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH264SequenceParameterSet.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH264SequenceParameterSet.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.profile_idc !== undefined) this.profile_idc = data.profile_idc;
      if (data.level_idc !== undefined) this.level_idc = data.level_idc;
      if (data.chroma_format_idc !== undefined) this.chroma_format_idc = data.chroma_format_idc;
      if (data.seq_parameter_set_id !== undefined) this.seq_parameter_set_id = data.seq_parameter_set_id;
      if (data.bit_depth_luma_minus8 !== undefined) this.bit_depth_luma_minus8 = data.bit_depth_luma_minus8;
      if (data.bit_depth_chroma_minus8 !== undefined) this.bit_depth_chroma_minus8 = data.bit_depth_chroma_minus8;
      if (data.log2_max_frame_num_minus4 !== undefined) this.log2_max_frame_num_minus4 = data.log2_max_frame_num_minus4;
      if (data.pic_order_cnt_type !== undefined) this.pic_order_cnt_type = data.pic_order_cnt_type;
      if (data.offset_for_non_ref_pic !== undefined) this.offset_for_non_ref_pic = data.offset_for_non_ref_pic;
      if (data.offset_for_top_to_bottom_field !== undefined) this.offset_for_top_to_bottom_field = data.offset_for_top_to_bottom_field;
      if (data.log2_max_pic_order_cnt_lsb_minus4 !== undefined) this.log2_max_pic_order_cnt_lsb_minus4 = data.log2_max_pic_order_cnt_lsb_minus4;
      if (data.num_ref_frames_in_pic_order_cnt_cycle !== undefined) this.num_ref_frames_in_pic_order_cnt_cycle = data.num_ref_frames_in_pic_order_cnt_cycle;
      if (data.max_num_ref_frames !== undefined) this.max_num_ref_frames = data.max_num_ref_frames;
      if (data.reserved1 !== undefined) this.reserved1 = data.reserved1;
      if (data.pic_width_in_mbs_minus1 !== undefined) this.pic_width_in_mbs_minus1 = data.pic_width_in_mbs_minus1;
      if (data.pic_height_in_map_units_minus1 !== undefined) this.pic_height_in_map_units_minus1 = data.pic_height_in_map_units_minus1;
      if (data.frame_crop_left_offset !== undefined) this.frame_crop_left_offset = data.frame_crop_left_offset;
      if (data.frame_crop_right_offset !== undefined) this.frame_crop_right_offset = data.frame_crop_right_offset;
      if (data.frame_crop_top_offset !== undefined) this.frame_crop_top_offset = data.frame_crop_top_offset;
      if (data.frame_crop_bottom_offset !== undefined) this.frame_crop_bottom_offset = data.frame_crop_bottom_offset;
      if (data.reserved2 !== undefined) this.reserved2 = data.reserved2;
      if (data.pOffsetForRefFrame !== undefined) this.pOffsetForRefFrame = data.pOffsetForRefFrame;
      if (data.pScalingLists !== undefined) this.pScalingLists = data.pScalingLists;
      if (data.pSequenceParameterSetVui !== undefined) this.pSequenceParameterSetVui = data.pSequenceParameterSetVui;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH264SequenceParameterSet.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags(): StdVideoH264SpsFlags {
    return new StdVideoH264SpsFlags(this.#data.subarray(0, 0 + StdVideoH264SpsFlags.size));
  }

  set flags(value: StdVideoH264SpsFlags) {
    if (value[BUFFER].byteLength < StdVideoH264SpsFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get profile_idc(): number {
    return this.#view.getUint32(64, LE);
  }

  set profile_idc(value: StdVideoH264ProfileIdc) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get level_idc(): number {
    return this.#view.getUint32(68, LE);
  }

  set level_idc(value: StdVideoH264LevelIdc) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get chroma_format_idc(): number {
    return this.#view.getUint32(72, LE);
  }

  set chroma_format_idc(value: StdVideoH264ChromaFormatIdc) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get seq_parameter_set_id(): number {
    return this.#view.getUint8(76);
  }

  set seq_parameter_set_id(value: number) {
    this.#view.setUint8(76, Number(value));
  }

  get bit_depth_luma_minus8(): number {
    return this.#view.getUint8(77);
  }

  set bit_depth_luma_minus8(value: number) {
    this.#view.setUint8(77, Number(value));
  }

  get bit_depth_chroma_minus8(): number {
    return this.#view.getUint8(78);
  }

  set bit_depth_chroma_minus8(value: number) {
    this.#view.setUint8(78, Number(value));
  }

  get log2_max_frame_num_minus4(): number {
    return this.#view.getUint8(79);
  }

  set log2_max_frame_num_minus4(value: number) {
    this.#view.setUint8(79, Number(value));
  }

  get pic_order_cnt_type(): number {
    return this.#view.getUint32(80, LE);
  }

  set pic_order_cnt_type(value: StdVideoH264PocType) {
    this.#view.setUint32(80, Number(value), LE);
  }

  get offset_for_non_ref_pic(): number {
    return this.#view.getInt32(84, LE);
  }

  set offset_for_non_ref_pic(value: number) {
    this.#view.setInt32(84, Number(value), LE);
  }

  get offset_for_top_to_bottom_field(): number {
    return this.#view.getInt32(88, LE);
  }

  set offset_for_top_to_bottom_field(value: number) {
    this.#view.setInt32(88, Number(value), LE);
  }

  get log2_max_pic_order_cnt_lsb_minus4(): number {
    return this.#view.getUint8(92);
  }

  set log2_max_pic_order_cnt_lsb_minus4(value: number) {
    this.#view.setUint8(92, Number(value));
  }

  get num_ref_frames_in_pic_order_cnt_cycle(): number {
    return this.#view.getUint8(93);
  }

  set num_ref_frames_in_pic_order_cnt_cycle(value: number) {
    this.#view.setUint8(93, Number(value));
  }

  get max_num_ref_frames(): number {
    return this.#view.getUint8(94);
  }

  set max_num_ref_frames(value: number) {
    this.#view.setUint8(94, Number(value));
  }

  get reserved1(): number {
    return this.#view.getUint8(95);
  }

  set reserved1(value: number) {
    this.#view.setUint8(95, Number(value));
  }

  get pic_width_in_mbs_minus1(): number {
    return this.#view.getUint32(96, LE);
  }

  set pic_width_in_mbs_minus1(value: number) {
    this.#view.setUint32(96, Number(value), LE);
  }

  get pic_height_in_map_units_minus1(): number {
    return this.#view.getUint32(100, LE);
  }

  set pic_height_in_map_units_minus1(value: number) {
    this.#view.setUint32(100, Number(value), LE);
  }

  get frame_crop_left_offset(): number {
    return this.#view.getUint32(104, LE);
  }

  set frame_crop_left_offset(value: number) {
    this.#view.setUint32(104, Number(value), LE);
  }

  get frame_crop_right_offset(): number {
    return this.#view.getUint32(108, LE);
  }

  set frame_crop_right_offset(value: number) {
    this.#view.setUint32(108, Number(value), LE);
  }

  get frame_crop_top_offset(): number {
    return this.#view.getUint32(112, LE);
  }

  set frame_crop_top_offset(value: number) {
    this.#view.setUint32(112, Number(value), LE);
  }

  get frame_crop_bottom_offset(): number {
    return this.#view.getUint32(116, LE);
  }

  set frame_crop_bottom_offset(value: number) {
    this.#view.setUint32(116, Number(value), LE);
  }

  get reserved2(): number {
    return this.#view.getUint32(120, LE);
  }

  set reserved2(value: number) {
    this.#view.setUint32(120, Number(value), LE);
  }

  get pOffsetForRefFrame(): Deno.PointerValue {
    return pointerFromView(this.#view, 128, LE);
  }

  set pOffsetForRefFrame(value: AnyPointer) {
    this.#view.setBigUint64(128, BigInt(anyPointer(value)), LE);
  }

  get pScalingLists(): Deno.PointerValue {
    return pointerFromView(this.#view, 136, LE);
  }

  set pScalingLists(value: AnyPointer) {
    this.#view.setBigUint64(136, BigInt(anyPointer(value)), LE);
  }

  get pSequenceParameterSetVui(): Deno.PointerValue {
    return pointerFromView(this.#view, 144, LE);
  }

  set pSequenceParameterSetVui(value: AnyPointer) {
    this.#view.setBigUint64(144, BigInt(anyPointer(value)), LE);
  }
}