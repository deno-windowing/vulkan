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

export interface InitStdVideoH265HrdFlags {
  nal_hrd_parameters_present_flag?: number;
  vcl_hrd_parameters_present_flag?: number;
  sub_pic_hrd_params_present_flag?: number;
  sub_pic_cpb_params_in_pic_timing_sei_flag?: number;
  fixed_pic_rate_general_flag?: number;
  fixed_pic_rate_within_cvs_flag?: number;
  low_delay_hrd_flag?: number;
}

export class StdVideoH265HrdFlags implements BaseStruct {
  static size = 28;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265HrdFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265HrdFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265HrdFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265HrdFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265HrdFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.nal_hrd_parameters_present_flag !== undefined) this.nal_hrd_parameters_present_flag = data.nal_hrd_parameters_present_flag;
      if (data.vcl_hrd_parameters_present_flag !== undefined) this.vcl_hrd_parameters_present_flag = data.vcl_hrd_parameters_present_flag;
      if (data.sub_pic_hrd_params_present_flag !== undefined) this.sub_pic_hrd_params_present_flag = data.sub_pic_hrd_params_present_flag;
      if (data.sub_pic_cpb_params_in_pic_timing_sei_flag !== undefined) this.sub_pic_cpb_params_in_pic_timing_sei_flag = data.sub_pic_cpb_params_in_pic_timing_sei_flag;
      if (data.fixed_pic_rate_general_flag !== undefined) this.fixed_pic_rate_general_flag = data.fixed_pic_rate_general_flag;
      if (data.fixed_pic_rate_within_cvs_flag !== undefined) this.fixed_pic_rate_within_cvs_flag = data.fixed_pic_rate_within_cvs_flag;
      if (data.low_delay_hrd_flag !== undefined) this.low_delay_hrd_flag = data.low_delay_hrd_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265HrdFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get nal_hrd_parameters_present_flag() {
    return this.#view.getUint32(0, LE);
  }

  set nal_hrd_parameters_present_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get vcl_hrd_parameters_present_flag() {
    return this.#view.getUint32(4, LE);
  }

  set vcl_hrd_parameters_present_flag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get sub_pic_hrd_params_present_flag() {
    return this.#view.getUint32(8, LE);
  }

  set sub_pic_hrd_params_present_flag(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get sub_pic_cpb_params_in_pic_timing_sei_flag() {
    return this.#view.getUint32(12, LE);
  }

  set sub_pic_cpb_params_in_pic_timing_sei_flag(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get fixed_pic_rate_general_flag() {
    return this.#view.getUint32(16, LE);
  }

  set fixed_pic_rate_general_flag(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get fixed_pic_rate_within_cvs_flag() {
    return this.#view.getUint32(20, LE);
  }

  set fixed_pic_rate_within_cvs_flag(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get low_delay_hrd_flag() {
    return this.#view.getUint32(24, LE);
  }

  set low_delay_hrd_flag(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }
}