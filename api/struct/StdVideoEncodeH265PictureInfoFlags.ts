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

export interface InitStdVideoEncodeH265PictureInfoFlags {
  is_reference_flag?: number;
  IrapPicFlag?: number;
  long_term_flag?: number;
  discardable_flag?: number;
  cross_layer_bla_flag?: number;
}

export class StdVideoEncodeH265PictureInfoFlags implements BaseStruct {
  static size = 20;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH265PictureInfoFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH265PictureInfoFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH265PictureInfoFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH265PictureInfoFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH265PictureInfoFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.is_reference_flag !== undefined) this.is_reference_flag = data.is_reference_flag;
      if (data.IrapPicFlag !== undefined) this.IrapPicFlag = data.IrapPicFlag;
      if (data.long_term_flag !== undefined) this.long_term_flag = data.long_term_flag;
      if (data.discardable_flag !== undefined) this.discardable_flag = data.discardable_flag;
      if (data.cross_layer_bla_flag !== undefined) this.cross_layer_bla_flag = data.cross_layer_bla_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH265PictureInfoFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get is_reference_flag() {
    return this.#view.getUint32(0, LE);
  }

  set is_reference_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get IrapPicFlag() {
    return this.#view.getUint32(4, LE);
  }

  set IrapPicFlag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get long_term_flag() {
    return this.#view.getUint32(8, LE);
  }

  set long_term_flag(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get discardable_flag() {
    return this.#view.getUint32(12, LE);
  }

  set discardable_flag(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get cross_layer_bla_flag() {
    return this.#view.getUint32(16, LE);
  }

  set cross_layer_bla_flag(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }
}