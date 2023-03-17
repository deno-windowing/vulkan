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

export interface InitStdVideoH264PpsFlags {
  transform_8x8_mode_flag?: number;
  redundant_pic_cnt_present_flag?: number;
  constrained_intra_pred_flag?: number;
  deblocking_filter_control_present_flag?: number;
  weighted_pred_flag?: number;
  bottom_field_pic_order_in_frame_present_flag?: number;
  entropy_coding_mode_flag?: number;
  pic_scaling_matrix_present_flag?: number;
}

export class StdVideoH264PpsFlags implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH264PpsFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH264PpsFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH264PpsFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH264PpsFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH264PpsFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.transform_8x8_mode_flag !== undefined) this.transform_8x8_mode_flag = data.transform_8x8_mode_flag;
      if (data.redundant_pic_cnt_present_flag !== undefined) this.redundant_pic_cnt_present_flag = data.redundant_pic_cnt_present_flag;
      if (data.constrained_intra_pred_flag !== undefined) this.constrained_intra_pred_flag = data.constrained_intra_pred_flag;
      if (data.deblocking_filter_control_present_flag !== undefined) this.deblocking_filter_control_present_flag = data.deblocking_filter_control_present_flag;
      if (data.weighted_pred_flag !== undefined) this.weighted_pred_flag = data.weighted_pred_flag;
      if (data.bottom_field_pic_order_in_frame_present_flag !== undefined) this.bottom_field_pic_order_in_frame_present_flag = data.bottom_field_pic_order_in_frame_present_flag;
      if (data.entropy_coding_mode_flag !== undefined) this.entropy_coding_mode_flag = data.entropy_coding_mode_flag;
      if (data.pic_scaling_matrix_present_flag !== undefined) this.pic_scaling_matrix_present_flag = data.pic_scaling_matrix_present_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH264PpsFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get transform_8x8_mode_flag(): number {
    return this.#view.getUint32(0, LE);
  }

  set transform_8x8_mode_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get redundant_pic_cnt_present_flag(): number {
    return this.#view.getUint32(4, LE);
  }

  set redundant_pic_cnt_present_flag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get constrained_intra_pred_flag(): number {
    return this.#view.getUint32(8, LE);
  }

  set constrained_intra_pred_flag(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get deblocking_filter_control_present_flag(): number {
    return this.#view.getUint32(12, LE);
  }

  set deblocking_filter_control_present_flag(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get weighted_pred_flag(): number {
    return this.#view.getUint32(16, LE);
  }

  set weighted_pred_flag(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get bottom_field_pic_order_in_frame_present_flag(): number {
    return this.#view.getUint32(20, LE);
  }

  set bottom_field_pic_order_in_frame_present_flag(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get entropy_coding_mode_flag(): number {
    return this.#view.getUint32(24, LE);
  }

  set entropy_coding_mode_flag(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pic_scaling_matrix_present_flag(): number {
    return this.#view.getUint32(28, LE);
  }

  set pic_scaling_matrix_present_flag(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }
}