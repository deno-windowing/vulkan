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

export interface InitStdVideoH265VpsFlags {
  vps_temporal_id_nesting_flag?: number;
  vps_sub_layer_ordering_info_present_flag?: number;
  vps_timing_info_present_flag?: number;
  vps_poc_proportional_to_timing_flag?: number;
}

export class StdVideoH265VpsFlags implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265VpsFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265VpsFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265VpsFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265VpsFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265VpsFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.vps_temporal_id_nesting_flag !== undefined) this.vps_temporal_id_nesting_flag = data.vps_temporal_id_nesting_flag;
      if (data.vps_sub_layer_ordering_info_present_flag !== undefined) this.vps_sub_layer_ordering_info_present_flag = data.vps_sub_layer_ordering_info_present_flag;
      if (data.vps_timing_info_present_flag !== undefined) this.vps_timing_info_present_flag = data.vps_timing_info_present_flag;
      if (data.vps_poc_proportional_to_timing_flag !== undefined) this.vps_poc_proportional_to_timing_flag = data.vps_poc_proportional_to_timing_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265VpsFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get vps_temporal_id_nesting_flag(): number {
    return this.#view.getUint32(0, LE);
  }

  set vps_temporal_id_nesting_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get vps_sub_layer_ordering_info_present_flag(): number {
    return this.#view.getUint32(4, LE);
  }

  set vps_sub_layer_ordering_info_present_flag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get vps_timing_info_present_flag(): number {
    return this.#view.getUint32(8, LE);
  }

  set vps_timing_info_present_flag(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get vps_poc_proportional_to_timing_flag(): number {
    return this.#view.getUint32(12, LE);
  }

  set vps_poc_proportional_to_timing_flag(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }
}