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
import {StdVideoH265VpsFlags} from "./StdVideoH265VpsFlags.ts";
import {StdVideoH265DecPicBufMgr} from "./StdVideoH265DecPicBufMgr.ts";
import {StdVideoH265HrdParameters} from "./StdVideoH265HrdParameters.ts";
import {StdVideoH265ProfileTierLevel} from "./StdVideoH265ProfileTierLevel.ts";

export interface InitStdVideoH265VideoParameterSet {
  flags?: StdVideoH265VpsFlags;
  vps_video_parameter_set_id?: number;
  vps_max_sub_layers_minus1?: number;
  reserved1?: number;
  reserved2?: number;
  vps_num_units_in_tick?: number;
  vps_time_scale?: number;
  vps_num_ticks_poc_diff_one_minus1?: number;
  reserved3?: number;
  pDecPicBufMgr?: AnyPointer;
  pHrdParameters?: AnyPointer;
  pProfileTierLevel?: AnyPointer;
}

export class StdVideoH265VideoParameterSet implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265VideoParameterSet);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265VideoParameterSet) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265VideoParameterSet.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265VideoParameterSet.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265VideoParameterSet.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.vps_video_parameter_set_id !== undefined) this.vps_video_parameter_set_id = data.vps_video_parameter_set_id;
      if (data.vps_max_sub_layers_minus1 !== undefined) this.vps_max_sub_layers_minus1 = data.vps_max_sub_layers_minus1;
      if (data.reserved1 !== undefined) this.reserved1 = data.reserved1;
      if (data.reserved2 !== undefined) this.reserved2 = data.reserved2;
      if (data.vps_num_units_in_tick !== undefined) this.vps_num_units_in_tick = data.vps_num_units_in_tick;
      if (data.vps_time_scale !== undefined) this.vps_time_scale = data.vps_time_scale;
      if (data.vps_num_ticks_poc_diff_one_minus1 !== undefined) this.vps_num_ticks_poc_diff_one_minus1 = data.vps_num_ticks_poc_diff_one_minus1;
      if (data.reserved3 !== undefined) this.reserved3 = data.reserved3;
      if (data.pDecPicBufMgr !== undefined) this.pDecPicBufMgr = data.pDecPicBufMgr;
      if (data.pHrdParameters !== undefined) this.pHrdParameters = data.pHrdParameters;
      if (data.pProfileTierLevel !== undefined) this.pProfileTierLevel = data.pProfileTierLevel;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265VideoParameterSet.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags() {
    return new StdVideoH265VpsFlags(this.#data.subarray(0, 0 + StdVideoH265VpsFlags.size));
  }

  set flags(value: StdVideoH265VpsFlags) {
    if (value[BUFFER].byteLength < StdVideoH265VpsFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get vps_video_parameter_set_id() {
    return this.#view.getUint8(16);
  }

  set vps_video_parameter_set_id(value: number) {
    this.#view.setUint8(16, Number(value));
  }

  get vps_max_sub_layers_minus1() {
    return this.#view.getUint8(17);
  }

  set vps_max_sub_layers_minus1(value: number) {
    this.#view.setUint8(17, Number(value));
  }

  get reserved1() {
    return this.#view.getUint8(18);
  }

  set reserved1(value: number) {
    this.#view.setUint8(18, Number(value));
  }

  get reserved2() {
    return this.#view.getUint8(19);
  }

  set reserved2(value: number) {
    this.#view.setUint8(19, Number(value));
  }

  get vps_num_units_in_tick() {
    return this.#view.getUint32(20, LE);
  }

  set vps_num_units_in_tick(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get vps_time_scale() {
    return this.#view.getUint32(24, LE);
  }

  set vps_time_scale(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get vps_num_ticks_poc_diff_one_minus1() {
    return this.#view.getUint32(28, LE);
  }

  set vps_num_ticks_poc_diff_one_minus1(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get reserved3() {
    return this.#view.getUint32(32, LE);
  }

  set reserved3(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pDecPicBufMgr() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pDecPicBufMgr(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get pHrdParameters() {
    return pointerFromView(this.#view, 48, LE);
  }

  set pHrdParameters(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }

  get pProfileTierLevel() {
    return pointerFromView(this.#view, 56, LE);
  }

  set pProfileTierLevel(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }
}