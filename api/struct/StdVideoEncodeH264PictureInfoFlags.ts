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

export interface InitStdVideoEncodeH264PictureInfoFlags {
  idr_flag?: number;
  is_reference_flag?: number;
  used_for_long_term_reference?: number;
}

export class StdVideoEncodeH264PictureInfoFlags implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH264PictureInfoFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH264PictureInfoFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH264PictureInfoFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH264PictureInfoFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH264PictureInfoFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.idr_flag !== undefined) this.idr_flag = data.idr_flag;
      if (data.is_reference_flag !== undefined) this.is_reference_flag = data.is_reference_flag;
      if (data.used_for_long_term_reference !== undefined) this.used_for_long_term_reference = data.used_for_long_term_reference;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH264PictureInfoFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get idr_flag() {
    return this.#view.getUint32(0, LE);
  }

  set idr_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get is_reference_flag() {
    return this.#view.getUint32(4, LE);
  }

  set is_reference_flag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get used_for_long_term_reference() {
    return this.#view.getUint32(8, LE);
  }

  set used_for_long_term_reference(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }
}