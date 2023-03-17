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
import {StdVideoH264SpsVuiFlags} from "./StdVideoH264SpsVuiFlags.ts";
import {StdVideoH264HrdParameters} from "./StdVideoH264HrdParameters.ts";
import { StdVideoH264AspectRatioIdc } from "../enum.ts";

export interface InitStdVideoH264SequenceParameterSetVui {
  flags?: StdVideoH264SpsVuiFlags;
  aspect_ratio_idc?: StdVideoH264AspectRatioIdc;
  sar_width?: number;
  sar_height?: number;
  video_format?: number;
  colour_primaries?: number;
  transfer_characteristics?: number;
  matrix_coefficients?: number;
  num_units_in_tick?: number;
  time_scale?: number;
  max_num_reorder_frames?: number;
  max_dec_frame_buffering?: number;
  chroma_sample_loc_type_top_field?: number;
  chroma_sample_loc_type_bottom_field?: number;
  reserved1?: number;
  pHrdParameters?: AnyPointer;
}

export class StdVideoH264SequenceParameterSetVui implements BaseStruct {
  static size = 88;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH264SequenceParameterSetVui);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH264SequenceParameterSetVui) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH264SequenceParameterSetVui.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH264SequenceParameterSetVui.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH264SequenceParameterSetVui.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.aspect_ratio_idc !== undefined) this.aspect_ratio_idc = data.aspect_ratio_idc;
      if (data.sar_width !== undefined) this.sar_width = data.sar_width;
      if (data.sar_height !== undefined) this.sar_height = data.sar_height;
      if (data.video_format !== undefined) this.video_format = data.video_format;
      if (data.colour_primaries !== undefined) this.colour_primaries = data.colour_primaries;
      if (data.transfer_characteristics !== undefined) this.transfer_characteristics = data.transfer_characteristics;
      if (data.matrix_coefficients !== undefined) this.matrix_coefficients = data.matrix_coefficients;
      if (data.num_units_in_tick !== undefined) this.num_units_in_tick = data.num_units_in_tick;
      if (data.time_scale !== undefined) this.time_scale = data.time_scale;
      if (data.max_num_reorder_frames !== undefined) this.max_num_reorder_frames = data.max_num_reorder_frames;
      if (data.max_dec_frame_buffering !== undefined) this.max_dec_frame_buffering = data.max_dec_frame_buffering;
      if (data.chroma_sample_loc_type_top_field !== undefined) this.chroma_sample_loc_type_top_field = data.chroma_sample_loc_type_top_field;
      if (data.chroma_sample_loc_type_bottom_field !== undefined) this.chroma_sample_loc_type_bottom_field = data.chroma_sample_loc_type_bottom_field;
      if (data.reserved1 !== undefined) this.reserved1 = data.reserved1;
      if (data.pHrdParameters !== undefined) this.pHrdParameters = data.pHrdParameters;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH264SequenceParameterSetVui.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags(): StdVideoH264SpsVuiFlags {
    return new StdVideoH264SpsVuiFlags(this.#data.subarray(0, 0 + StdVideoH264SpsVuiFlags.size));
  }

  set flags(value: StdVideoH264SpsVuiFlags) {
    if (value[BUFFER].byteLength < StdVideoH264SpsVuiFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get aspect_ratio_idc(): number {
    return this.#view.getUint32(48, LE);
  }

  set aspect_ratio_idc(value: StdVideoH264AspectRatioIdc) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get sar_width(): number {
    return this.#view.getUint16(52, LE);
  }

  set sar_width(value: number) {
    this.#view.setUint16(52, Number(value), LE);
  }

  get sar_height(): number {
    return this.#view.getUint16(54, LE);
  }

  set sar_height(value: number) {
    this.#view.setUint16(54, Number(value), LE);
  }

  get video_format(): number {
    return this.#view.getUint8(56);
  }

  set video_format(value: number) {
    this.#view.setUint8(56, Number(value));
  }

  get colour_primaries(): number {
    return this.#view.getUint8(57);
  }

  set colour_primaries(value: number) {
    this.#view.setUint8(57, Number(value));
  }

  get transfer_characteristics(): number {
    return this.#view.getUint8(58);
  }

  set transfer_characteristics(value: number) {
    this.#view.setUint8(58, Number(value));
  }

  get matrix_coefficients(): number {
    return this.#view.getUint8(59);
  }

  set matrix_coefficients(value: number) {
    this.#view.setUint8(59, Number(value));
  }

  get num_units_in_tick(): number {
    return this.#view.getUint32(60, LE);
  }

  set num_units_in_tick(value: number) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get time_scale(): number {
    return this.#view.getUint32(64, LE);
  }

  set time_scale(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get max_num_reorder_frames(): number {
    return this.#view.getUint8(68);
  }

  set max_num_reorder_frames(value: number) {
    this.#view.setUint8(68, Number(value));
  }

  get max_dec_frame_buffering(): number {
    return this.#view.getUint8(69);
  }

  set max_dec_frame_buffering(value: number) {
    this.#view.setUint8(69, Number(value));
  }

  get chroma_sample_loc_type_top_field(): number {
    return this.#view.getUint8(70);
  }

  set chroma_sample_loc_type_top_field(value: number) {
    this.#view.setUint8(70, Number(value));
  }

  get chroma_sample_loc_type_bottom_field(): number {
    return this.#view.getUint8(71);
  }

  set chroma_sample_loc_type_bottom_field(value: number) {
    this.#view.setUint8(71, Number(value));
  }

  get reserved1(): number {
    return this.#view.getUint32(72, LE);
  }

  set reserved1(value: number) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get pHrdParameters(): Deno.PointerValue {
    return pointerFromView(this.#view, 80, LE);
  }

  set pHrdParameters(value: AnyPointer) {
    this.#view.setBigUint64(80, BigInt(anyPointer(value)), LE);
  }
}