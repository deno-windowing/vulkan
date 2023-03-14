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
import {StdVideoH265HrdFlags} from "./StdVideoH265HrdFlags.ts";
import {StdVideoH265SubLayerHrdParameters} from "./StdVideoH265SubLayerHrdParameters.ts";

export interface InitStdVideoH265HrdParameters {
  flags?: StdVideoH265HrdFlags;
  tick_divisor_minus2?: number;
  du_cpb_removal_delay_increment_length_minus1?: number;
  dpb_output_delay_du_length_minus1?: number;
  bit_rate_scale?: number;
  cpb_size_scale?: number;
  cpb_size_du_scale?: number;
  initial_cpb_removal_delay_length_minus1?: number;
  au_cpb_removal_delay_length_minus1?: number;
  dpb_output_delay_length_minus1?: number;
  cpb_cnt_minus1?: Uint8Array;
  elemental_duration_in_tc_minus1?: Uint16Array;
  reserved?: Uint16Array;
  pSubLayerHrdParametersNal?: AnyPointer;
  pSubLayerHrdParametersVcl?: AnyPointer;
}

export class StdVideoH265HrdParameters implements BaseStruct {
  static size = 80;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265HrdParameters);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265HrdParameters) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265HrdParameters.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265HrdParameters.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265HrdParameters.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.tick_divisor_minus2 !== undefined) this.tick_divisor_minus2 = data.tick_divisor_minus2;
      if (data.du_cpb_removal_delay_increment_length_minus1 !== undefined) this.du_cpb_removal_delay_increment_length_minus1 = data.du_cpb_removal_delay_increment_length_minus1;
      if (data.dpb_output_delay_du_length_minus1 !== undefined) this.dpb_output_delay_du_length_minus1 = data.dpb_output_delay_du_length_minus1;
      if (data.bit_rate_scale !== undefined) this.bit_rate_scale = data.bit_rate_scale;
      if (data.cpb_size_scale !== undefined) this.cpb_size_scale = data.cpb_size_scale;
      if (data.cpb_size_du_scale !== undefined) this.cpb_size_du_scale = data.cpb_size_du_scale;
      if (data.initial_cpb_removal_delay_length_minus1 !== undefined) this.initial_cpb_removal_delay_length_minus1 = data.initial_cpb_removal_delay_length_minus1;
      if (data.au_cpb_removal_delay_length_minus1 !== undefined) this.au_cpb_removal_delay_length_minus1 = data.au_cpb_removal_delay_length_minus1;
      if (data.dpb_output_delay_length_minus1 !== undefined) this.dpb_output_delay_length_minus1 = data.dpb_output_delay_length_minus1;
      if (data.cpb_cnt_minus1 !== undefined) this.cpb_cnt_minus1 = data.cpb_cnt_minus1;
      if (data.elemental_duration_in_tc_minus1 !== undefined) this.elemental_duration_in_tc_minus1 = data.elemental_duration_in_tc_minus1;
      if (data.reserved !== undefined) this.reserved = data.reserved;
      if (data.pSubLayerHrdParametersNal !== undefined) this.pSubLayerHrdParametersNal = data.pSubLayerHrdParametersNal;
      if (data.pSubLayerHrdParametersVcl !== undefined) this.pSubLayerHrdParametersVcl = data.pSubLayerHrdParametersVcl;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265HrdParameters.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags() {
    return new StdVideoH265HrdFlags(this.#data.subarray(0, 0 + StdVideoH265HrdFlags.size));
  }

  set flags(value: StdVideoH265HrdFlags) {
    if (value[BUFFER].byteLength < StdVideoH265HrdFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get tick_divisor_minus2() {
    return this.#view.getUint8(28);
  }

  set tick_divisor_minus2(value: number) {
    this.#view.setUint8(28, Number(value));
  }

  get du_cpb_removal_delay_increment_length_minus1() {
    return this.#view.getUint8(29);
  }

  set du_cpb_removal_delay_increment_length_minus1(value: number) {
    this.#view.setUint8(29, Number(value));
  }

  get dpb_output_delay_du_length_minus1() {
    return this.#view.getUint8(30);
  }

  set dpb_output_delay_du_length_minus1(value: number) {
    this.#view.setUint8(30, Number(value));
  }

  get bit_rate_scale() {
    return this.#view.getUint8(31);
  }

  set bit_rate_scale(value: number) {
    this.#view.setUint8(31, Number(value));
  }

  get cpb_size_scale() {
    return this.#view.getUint8(32);
  }

  set cpb_size_scale(value: number) {
    this.#view.setUint8(32, Number(value));
  }

  get cpb_size_du_scale() {
    return this.#view.getUint8(33);
  }

  set cpb_size_du_scale(value: number) {
    this.#view.setUint8(33, Number(value));
  }

  get initial_cpb_removal_delay_length_minus1() {
    return this.#view.getUint8(34);
  }

  set initial_cpb_removal_delay_length_minus1(value: number) {
    this.#view.setUint8(34, Number(value));
  }

  get au_cpb_removal_delay_length_minus1() {
    return this.#view.getUint8(35);
  }

  set au_cpb_removal_delay_length_minus1(value: number) {
    this.#view.setUint8(35, Number(value));
  }

  get dpb_output_delay_length_minus1() {
    return this.#view.getUint8(36);
  }

  set dpb_output_delay_length_minus1(value: number) {
    this.#view.setUint8(36, Number(value));
  }

  get cpb_cnt_minus1() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 37, 7);
  }

  set cpb_cnt_minus1(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 37);
  }

  get elemental_duration_in_tc_minus1() {
    return new Uint16Array(this.#data.buffer, this.#data.byteOffset + 44, 7);
  }

  set elemental_duration_in_tc_minus1(value: Uint16Array) {
    this.#data.set(new Uint8Array(value.buffer), 44);
  }

  get reserved() {
    return new Uint16Array(this.#data.buffer, this.#data.byteOffset + 58, 3);
  }

  set reserved(value: Uint16Array) {
    this.#data.set(new Uint8Array(value.buffer), 58);
  }

  get pSubLayerHrdParametersNal() {
    return pointerFromView(this.#view, 64, LE);
  }

  set pSubLayerHrdParametersNal(value: AnyPointer) {
    this.#view.setBigUint64(64, BigInt(anyPointer(value)), LE);
  }

  get pSubLayerHrdParametersVcl() {
    return pointerFromView(this.#view, 72, LE);
  }

  set pSubLayerHrdParametersVcl(value: AnyPointer) {
    this.#view.setBigUint64(72, BigInt(anyPointer(value)), LE);
  }
}