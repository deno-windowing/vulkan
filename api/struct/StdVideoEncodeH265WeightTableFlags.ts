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

export interface InitStdVideoEncodeH265WeightTableFlags {
  luma_weight_l0_flag?: number;
  chroma_weight_l0_flag?: number;
  luma_weight_l1_flag?: number;
  chroma_weight_l1_flag?: number;
}

export class StdVideoEncodeH265WeightTableFlags implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH265WeightTableFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH265WeightTableFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH265WeightTableFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH265WeightTableFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH265WeightTableFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.luma_weight_l0_flag !== undefined) this.luma_weight_l0_flag = data.luma_weight_l0_flag;
      if (data.chroma_weight_l0_flag !== undefined) this.chroma_weight_l0_flag = data.chroma_weight_l0_flag;
      if (data.luma_weight_l1_flag !== undefined) this.luma_weight_l1_flag = data.luma_weight_l1_flag;
      if (data.chroma_weight_l1_flag !== undefined) this.chroma_weight_l1_flag = data.chroma_weight_l1_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH265WeightTableFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get luma_weight_l0_flag() {
    return this.#view.getUint16(0, LE);
  }

  set luma_weight_l0_flag(value: number) {
    this.#view.setUint16(0, Number(value), LE);
  }

  get chroma_weight_l0_flag() {
    return this.#view.getUint16(2, LE);
  }

  set chroma_weight_l0_flag(value: number) {
    this.#view.setUint16(2, Number(value), LE);
  }

  get luma_weight_l1_flag() {
    return this.#view.getUint16(4, LE);
  }

  set luma_weight_l1_flag(value: number) {
    this.#view.setUint16(4, Number(value), LE);
  }

  get chroma_weight_l1_flag() {
    return this.#view.getUint16(6, LE);
  }

  set chroma_weight_l1_flag(value: number) {
    this.#view.setUint16(6, Number(value), LE);
  }
}