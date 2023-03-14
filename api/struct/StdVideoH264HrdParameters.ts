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

export interface InitStdVideoH264HrdParameters {
  cpb_cnt_minus1?: number;
  bit_rate_scale?: number;
  cpb_size_scale?: number;
  reserved1?: number;
  bit_rate_value_minus1?: Uint32Array;
  cpb_size_value_minus1?: Uint32Array;
  cbr_flag?: Uint8Array;
  initial_cpb_removal_delay_length_minus1?: number;
  cpb_removal_delay_length_minus1?: number;
  dpb_output_delay_length_minus1?: number;
  time_offset_length?: number;
}

/** hrd_parameters */
export class StdVideoH264HrdParameters implements BaseStruct {
  static size = 308;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH264HrdParameters);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH264HrdParameters) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH264HrdParameters.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH264HrdParameters.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH264HrdParameters.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.cpb_cnt_minus1 !== undefined) this.cpb_cnt_minus1 = data.cpb_cnt_minus1;
      if (data.bit_rate_scale !== undefined) this.bit_rate_scale = data.bit_rate_scale;
      if (data.cpb_size_scale !== undefined) this.cpb_size_scale = data.cpb_size_scale;
      if (data.reserved1 !== undefined) this.reserved1 = data.reserved1;
      if (data.bit_rate_value_minus1 !== undefined) this.bit_rate_value_minus1 = data.bit_rate_value_minus1;
      if (data.cpb_size_value_minus1 !== undefined) this.cpb_size_value_minus1 = data.cpb_size_value_minus1;
      if (data.cbr_flag !== undefined) this.cbr_flag = data.cbr_flag;
      if (data.initial_cpb_removal_delay_length_minus1 !== undefined) this.initial_cpb_removal_delay_length_minus1 = data.initial_cpb_removal_delay_length_minus1;
      if (data.cpb_removal_delay_length_minus1 !== undefined) this.cpb_removal_delay_length_minus1 = data.cpb_removal_delay_length_minus1;
      if (data.dpb_output_delay_length_minus1 !== undefined) this.dpb_output_delay_length_minus1 = data.dpb_output_delay_length_minus1;
      if (data.time_offset_length !== undefined) this.time_offset_length = data.time_offset_length;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH264HrdParameters.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get cpb_cnt_minus1() {
    return this.#view.getUint8(0);
  }

  set cpb_cnt_minus1(value: number) {
    this.#view.setUint8(0, Number(value));
  }

  get bit_rate_scale() {
    return this.#view.getUint8(1);
  }

  set bit_rate_scale(value: number) {
    this.#view.setUint8(1, Number(value));
  }

  get cpb_size_scale() {
    return this.#view.getUint8(2);
  }

  set cpb_size_scale(value: number) {
    this.#view.setUint8(2, Number(value));
  }

  get reserved1() {
    return this.#view.getUint8(3);
  }

  set reserved1(value: number) {
    this.#view.setUint8(3, Number(value));
  }

  get bit_rate_value_minus1() {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 4, 32);
  }

  set bit_rate_value_minus1(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 4);
  }

  get cpb_size_value_minus1() {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 132, 32);
  }

  set cpb_size_value_minus1(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 132);
  }

  get cbr_flag() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 260, 32);
  }

  set cbr_flag(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 260);
  }

  get initial_cpb_removal_delay_length_minus1() {
    return this.#view.getUint32(292, LE);
  }

  set initial_cpb_removal_delay_length_minus1(value: number) {
    this.#view.setUint32(292, Number(value), LE);
  }

  get cpb_removal_delay_length_minus1() {
    return this.#view.getUint32(296, LE);
  }

  set cpb_removal_delay_length_minus1(value: number) {
    this.#view.setUint32(296, Number(value), LE);
  }

  get dpb_output_delay_length_minus1() {
    return this.#view.getUint32(300, LE);
  }

  set dpb_output_delay_length_minus1(value: number) {
    this.#view.setUint32(300, Number(value), LE);
  }

  get time_offset_length() {
    return this.#view.getUint32(304, LE);
  }

  set time_offset_length(value: number) {
    this.#view.setUint32(304, Number(value), LE);
  }
}