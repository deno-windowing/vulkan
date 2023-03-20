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
import {StdVideoH264PpsFlags} from "./StdVideoH264PpsFlags.ts";
import {StdVideoH264ScalingLists} from "./StdVideoH264ScalingLists.ts";
import { StdVideoH264WeightedBipredIdc } from "../enum.ts";

export interface InitStdVideoH264PictureParameterSet {
  flags?: StdVideoH264PpsFlags;
  seq_parameter_set_id?: number;
  pic_parameter_set_id?: number;
  num_ref_idx_l0_default_active_minus1?: number;
  num_ref_idx_l1_default_active_minus1?: number;
  weighted_bipred_idc?: StdVideoH264WeightedBipredIdc;
  pic_init_qp_minus26?: number;
  pic_init_qs_minus26?: number;
  chroma_qp_index_offset?: number;
  second_chroma_qp_index_offset?: number;
  pScalingLists?: AnyPointer;
}

export class StdVideoH264PictureParameterSet implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH264PictureParameterSet);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH264PictureParameterSet) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH264PictureParameterSet.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH264PictureParameterSet.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH264PictureParameterSet.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.seq_parameter_set_id !== undefined) this.seq_parameter_set_id = data.seq_parameter_set_id;
      if (data.pic_parameter_set_id !== undefined) this.pic_parameter_set_id = data.pic_parameter_set_id;
      if (data.num_ref_idx_l0_default_active_minus1 !== undefined) this.num_ref_idx_l0_default_active_minus1 = data.num_ref_idx_l0_default_active_minus1;
      if (data.num_ref_idx_l1_default_active_minus1 !== undefined) this.num_ref_idx_l1_default_active_minus1 = data.num_ref_idx_l1_default_active_minus1;
      if (data.weighted_bipred_idc !== undefined) this.weighted_bipred_idc = data.weighted_bipred_idc;
      if (data.pic_init_qp_minus26 !== undefined) this.pic_init_qp_minus26 = data.pic_init_qp_minus26;
      if (data.pic_init_qs_minus26 !== undefined) this.pic_init_qs_minus26 = data.pic_init_qs_minus26;
      if (data.chroma_qp_index_offset !== undefined) this.chroma_qp_index_offset = data.chroma_qp_index_offset;
      if (data.second_chroma_qp_index_offset !== undefined) this.second_chroma_qp_index_offset = data.second_chroma_qp_index_offset;
      if (data.pScalingLists !== undefined) this.pScalingLists = data.pScalingLists;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH264PictureParameterSet.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags(): StdVideoH264PpsFlags {
    return new StdVideoH264PpsFlags(this.#data.subarray(0, 0 + StdVideoH264PpsFlags.size));
  }

  set flags(value: StdVideoH264PpsFlags) {
    if (value[BUFFER].byteLength < StdVideoH264PpsFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get seq_parameter_set_id(): number {
    return this.#view.getUint8(32);
  }

  set seq_parameter_set_id(value: number) {
    this.#view.setUint8(32, Number(value));
  }

  get pic_parameter_set_id(): number {
    return this.#view.getUint8(33);
  }

  set pic_parameter_set_id(value: number) {
    this.#view.setUint8(33, Number(value));
  }

  get num_ref_idx_l0_default_active_minus1(): number {
    return this.#view.getUint8(34);
  }

  set num_ref_idx_l0_default_active_minus1(value: number) {
    this.#view.setUint8(34, Number(value));
  }

  get num_ref_idx_l1_default_active_minus1(): number {
    return this.#view.getUint8(35);
  }

  set num_ref_idx_l1_default_active_minus1(value: number) {
    this.#view.setUint8(35, Number(value));
  }

  get weighted_bipred_idc(): number {
    return this.#view.getUint32(36, LE);
  }

  set weighted_bipred_idc(value: StdVideoH264WeightedBipredIdc) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get pic_init_qp_minus26(): number {
    return this.#view.getInt8(40);
  }

  set pic_init_qp_minus26(value: number) {
    this.#view.setInt8(40, Number(value));
  }

  get pic_init_qs_minus26(): number {
    return this.#view.getInt8(41);
  }

  set pic_init_qs_minus26(value: number) {
    this.#view.setInt8(41, Number(value));
  }

  get chroma_qp_index_offset(): number {
    return this.#view.getInt8(42);
  }

  set chroma_qp_index_offset(value: number) {
    this.#view.setInt8(42, Number(value));
  }

  get second_chroma_qp_index_offset(): number {
    return this.#view.getInt8(43);
  }

  set second_chroma_qp_index_offset(value: number) {
    this.#view.setInt8(43, Number(value));
  }

  get pScalingLists(): Deno.PointerValue {
    return pointerFromView(this.#view, 48, LE);
  }

  set pScalingLists(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }
}