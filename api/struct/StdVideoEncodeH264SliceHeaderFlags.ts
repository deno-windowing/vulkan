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

export interface InitStdVideoEncodeH264SliceHeaderFlags {
  direct_spatial_mv_pred_flag?: number;
  num_ref_idx_active_override_flag?: number;
  no_output_of_prior_pics_flag?: number;
  adaptive_ref_pic_marking_mode_flag?: number;
  no_prior_references_available_flag?: number;
}

export class StdVideoEncodeH264SliceHeaderFlags implements BaseStruct {
  static size = 20;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH264SliceHeaderFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH264SliceHeaderFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH264SliceHeaderFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH264SliceHeaderFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH264SliceHeaderFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.direct_spatial_mv_pred_flag !== undefined) this.direct_spatial_mv_pred_flag = data.direct_spatial_mv_pred_flag;
      if (data.num_ref_idx_active_override_flag !== undefined) this.num_ref_idx_active_override_flag = data.num_ref_idx_active_override_flag;
      if (data.no_output_of_prior_pics_flag !== undefined) this.no_output_of_prior_pics_flag = data.no_output_of_prior_pics_flag;
      if (data.adaptive_ref_pic_marking_mode_flag !== undefined) this.adaptive_ref_pic_marking_mode_flag = data.adaptive_ref_pic_marking_mode_flag;
      if (data.no_prior_references_available_flag !== undefined) this.no_prior_references_available_flag = data.no_prior_references_available_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH264SliceHeaderFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get direct_spatial_mv_pred_flag() {
    return this.#view.getUint32(0, LE);
  }

  set direct_spatial_mv_pred_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get num_ref_idx_active_override_flag() {
    return this.#view.getUint32(4, LE);
  }

  set num_ref_idx_active_override_flag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get no_output_of_prior_pics_flag() {
    return this.#view.getUint32(8, LE);
  }

  set no_output_of_prior_pics_flag(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get adaptive_ref_pic_marking_mode_flag() {
    return this.#view.getUint32(12, LE);
  }

  set adaptive_ref_pic_marking_mode_flag(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get no_prior_references_available_flag() {
    return this.#view.getUint32(16, LE);
  }

  set no_prior_references_available_flag(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }
}