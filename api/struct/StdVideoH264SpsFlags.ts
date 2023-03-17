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

export interface InitStdVideoH264SpsFlags {
  constraint_set0_flag?: number;
  constraint_set1_flag?: number;
  constraint_set2_flag?: number;
  constraint_set3_flag?: number;
  constraint_set4_flag?: number;
  constraint_set5_flag?: number;
  direct_8x8_inference_flag?: number;
  mb_adaptive_frame_field_flag?: number;
  frame_mbs_only_flag?: number;
  delta_pic_order_always_zero_flag?: number;
  separate_colour_plane_flag?: number;
  gaps_in_frame_num_value_allowed_flag?: number;
  qpprime_y_zero_transform_bypass_flag?: number;
  frame_cropping_flag?: number;
  seq_scaling_matrix_present_flag?: number;
  vui_parameters_present_flag?: number;
}

export class StdVideoH264SpsFlags implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH264SpsFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH264SpsFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH264SpsFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH264SpsFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH264SpsFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.constraint_set0_flag !== undefined) this.constraint_set0_flag = data.constraint_set0_flag;
      if (data.constraint_set1_flag !== undefined) this.constraint_set1_flag = data.constraint_set1_flag;
      if (data.constraint_set2_flag !== undefined) this.constraint_set2_flag = data.constraint_set2_flag;
      if (data.constraint_set3_flag !== undefined) this.constraint_set3_flag = data.constraint_set3_flag;
      if (data.constraint_set4_flag !== undefined) this.constraint_set4_flag = data.constraint_set4_flag;
      if (data.constraint_set5_flag !== undefined) this.constraint_set5_flag = data.constraint_set5_flag;
      if (data.direct_8x8_inference_flag !== undefined) this.direct_8x8_inference_flag = data.direct_8x8_inference_flag;
      if (data.mb_adaptive_frame_field_flag !== undefined) this.mb_adaptive_frame_field_flag = data.mb_adaptive_frame_field_flag;
      if (data.frame_mbs_only_flag !== undefined) this.frame_mbs_only_flag = data.frame_mbs_only_flag;
      if (data.delta_pic_order_always_zero_flag !== undefined) this.delta_pic_order_always_zero_flag = data.delta_pic_order_always_zero_flag;
      if (data.separate_colour_plane_flag !== undefined) this.separate_colour_plane_flag = data.separate_colour_plane_flag;
      if (data.gaps_in_frame_num_value_allowed_flag !== undefined) this.gaps_in_frame_num_value_allowed_flag = data.gaps_in_frame_num_value_allowed_flag;
      if (data.qpprime_y_zero_transform_bypass_flag !== undefined) this.qpprime_y_zero_transform_bypass_flag = data.qpprime_y_zero_transform_bypass_flag;
      if (data.frame_cropping_flag !== undefined) this.frame_cropping_flag = data.frame_cropping_flag;
      if (data.seq_scaling_matrix_present_flag !== undefined) this.seq_scaling_matrix_present_flag = data.seq_scaling_matrix_present_flag;
      if (data.vui_parameters_present_flag !== undefined) this.vui_parameters_present_flag = data.vui_parameters_present_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH264SpsFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get constraint_set0_flag(): number {
    return this.#view.getUint32(0, LE);
  }

  set constraint_set0_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get constraint_set1_flag(): number {
    return this.#view.getUint32(4, LE);
  }

  set constraint_set1_flag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get constraint_set2_flag(): number {
    return this.#view.getUint32(8, LE);
  }

  set constraint_set2_flag(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get constraint_set3_flag(): number {
    return this.#view.getUint32(12, LE);
  }

  set constraint_set3_flag(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get constraint_set4_flag(): number {
    return this.#view.getUint32(16, LE);
  }

  set constraint_set4_flag(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get constraint_set5_flag(): number {
    return this.#view.getUint32(20, LE);
  }

  set constraint_set5_flag(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get direct_8x8_inference_flag(): number {
    return this.#view.getUint32(24, LE);
  }

  set direct_8x8_inference_flag(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get mb_adaptive_frame_field_flag(): number {
    return this.#view.getUint32(28, LE);
  }

  set mb_adaptive_frame_field_flag(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get frame_mbs_only_flag(): number {
    return this.#view.getUint32(32, LE);
  }

  set frame_mbs_only_flag(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get delta_pic_order_always_zero_flag(): number {
    return this.#view.getUint32(36, LE);
  }

  set delta_pic_order_always_zero_flag(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get separate_colour_plane_flag(): number {
    return this.#view.getUint32(40, LE);
  }

  set separate_colour_plane_flag(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get gaps_in_frame_num_value_allowed_flag(): number {
    return this.#view.getUint32(44, LE);
  }

  set gaps_in_frame_num_value_allowed_flag(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get qpprime_y_zero_transform_bypass_flag(): number {
    return this.#view.getUint32(48, LE);
  }

  set qpprime_y_zero_transform_bypass_flag(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get frame_cropping_flag(): number {
    return this.#view.getUint32(52, LE);
  }

  set frame_cropping_flag(value: number) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get seq_scaling_matrix_present_flag(): number {
    return this.#view.getUint32(56, LE);
  }

  set seq_scaling_matrix_present_flag(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get vui_parameters_present_flag(): number {
    return this.#view.getUint32(60, LE);
  }

  set vui_parameters_present_flag(value: number) {
    this.#view.setUint32(60, Number(value), LE);
  }
}