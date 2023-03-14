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

export interface InitStdVideoH264ScalingLists {
  scaling_list_present_mask?: number;
  use_default_scaling_matrix_mask?: number;
  ScalingList4x4?: Uint8Array;
  ScalingList8x8?: Uint8Array;
}

export class StdVideoH264ScalingLists implements BaseStruct {
  static size = 484;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH264ScalingLists);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH264ScalingLists) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH264ScalingLists.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH264ScalingLists.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH264ScalingLists.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.scaling_list_present_mask !== undefined) this.scaling_list_present_mask = data.scaling_list_present_mask;
      if (data.use_default_scaling_matrix_mask !== undefined) this.use_default_scaling_matrix_mask = data.use_default_scaling_matrix_mask;
      if (data.ScalingList4x4 !== undefined) this.ScalingList4x4 = data.ScalingList4x4;
      if (data.ScalingList8x8 !== undefined) this.ScalingList8x8 = data.ScalingList8x8;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH264ScalingLists.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get scaling_list_present_mask() {
    return this.#view.getUint16(0, LE);
  }

  set scaling_list_present_mask(value: number) {
    this.#view.setUint16(0, Number(value), LE);
  }

  get use_default_scaling_matrix_mask() {
    return this.#view.getUint16(2, LE);
  }

  set use_default_scaling_matrix_mask(value: number) {
    this.#view.setUint16(2, Number(value), LE);
  }

  get ScalingList4x4() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 4, 96);
  }

  set ScalingList4x4(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 4);
  }

  get ScalingList8x8() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 100, 384);
  }

  set ScalingList8x8(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 100);
  }
}