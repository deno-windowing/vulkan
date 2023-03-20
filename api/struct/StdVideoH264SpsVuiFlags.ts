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

export interface InitStdVideoH264SpsVuiFlags {
  aspect_ratio_info_present_flag?: number;
  overscan_info_present_flag?: number;
  overscan_appropriate_flag?: number;
  video_signal_type_present_flag?: number;
  video_full_range_flag?: number;
  color_description_present_flag?: number;
  chroma_loc_info_present_flag?: number;
  timing_info_present_flag?: number;
  fixed_frame_rate_flag?: number;
  bitstream_restriction_flag?: number;
  nal_hrd_parameters_present_flag?: number;
  vcl_hrd_parameters_present_flag?: number;
}

export class StdVideoH264SpsVuiFlags implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH264SpsVuiFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH264SpsVuiFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH264SpsVuiFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH264SpsVuiFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH264SpsVuiFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.aspect_ratio_info_present_flag !== undefined) this.aspect_ratio_info_present_flag = data.aspect_ratio_info_present_flag;
      if (data.overscan_info_present_flag !== undefined) this.overscan_info_present_flag = data.overscan_info_present_flag;
      if (data.overscan_appropriate_flag !== undefined) this.overscan_appropriate_flag = data.overscan_appropriate_flag;
      if (data.video_signal_type_present_flag !== undefined) this.video_signal_type_present_flag = data.video_signal_type_present_flag;
      if (data.video_full_range_flag !== undefined) this.video_full_range_flag = data.video_full_range_flag;
      if (data.color_description_present_flag !== undefined) this.color_description_present_flag = data.color_description_present_flag;
      if (data.chroma_loc_info_present_flag !== undefined) this.chroma_loc_info_present_flag = data.chroma_loc_info_present_flag;
      if (data.timing_info_present_flag !== undefined) this.timing_info_present_flag = data.timing_info_present_flag;
      if (data.fixed_frame_rate_flag !== undefined) this.fixed_frame_rate_flag = data.fixed_frame_rate_flag;
      if (data.bitstream_restriction_flag !== undefined) this.bitstream_restriction_flag = data.bitstream_restriction_flag;
      if (data.nal_hrd_parameters_present_flag !== undefined) this.nal_hrd_parameters_present_flag = data.nal_hrd_parameters_present_flag;
      if (data.vcl_hrd_parameters_present_flag !== undefined) this.vcl_hrd_parameters_present_flag = data.vcl_hrd_parameters_present_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH264SpsVuiFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get aspect_ratio_info_present_flag(): number {
    return this.#view.getUint32(0, LE);
  }

  set aspect_ratio_info_present_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get overscan_info_present_flag(): number {
    return this.#view.getUint32(4, LE);
  }

  set overscan_info_present_flag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get overscan_appropriate_flag(): number {
    return this.#view.getUint32(8, LE);
  }

  set overscan_appropriate_flag(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get video_signal_type_present_flag(): number {
    return this.#view.getUint32(12, LE);
  }

  set video_signal_type_present_flag(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get video_full_range_flag(): number {
    return this.#view.getUint32(16, LE);
  }

  set video_full_range_flag(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get color_description_present_flag(): number {
    return this.#view.getUint32(20, LE);
  }

  set color_description_present_flag(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get chroma_loc_info_present_flag(): number {
    return this.#view.getUint32(24, LE);
  }

  set chroma_loc_info_present_flag(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get timing_info_present_flag(): number {
    return this.#view.getUint32(28, LE);
  }

  set timing_info_present_flag(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get fixed_frame_rate_flag(): number {
    return this.#view.getUint32(32, LE);
  }

  set fixed_frame_rate_flag(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get bitstream_restriction_flag(): number {
    return this.#view.getUint32(36, LE);
  }

  set bitstream_restriction_flag(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get nal_hrd_parameters_present_flag(): number {
    return this.#view.getUint32(40, LE);
  }

  set nal_hrd_parameters_present_flag(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get vcl_hrd_parameters_present_flag(): number {
    return this.#view.getUint32(44, LE);
  }

  set vcl_hrd_parameters_present_flag(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }
}