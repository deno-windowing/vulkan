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

export interface InitStdVideoDecodeH264ReferenceInfoFlags {
  top_field_flag?: number;
  bottom_field_flag?: number;
  used_for_long_term_reference?: number;
  is_non_existing?: number;
}

export class StdVideoDecodeH264ReferenceInfoFlags implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoDecodeH264ReferenceInfoFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoDecodeH264ReferenceInfoFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoDecodeH264ReferenceInfoFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoDecodeH264ReferenceInfoFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoDecodeH264ReferenceInfoFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.top_field_flag !== undefined) this.top_field_flag = data.top_field_flag;
      if (data.bottom_field_flag !== undefined) this.bottom_field_flag = data.bottom_field_flag;
      if (data.used_for_long_term_reference !== undefined) this.used_for_long_term_reference = data.used_for_long_term_reference;
      if (data.is_non_existing !== undefined) this.is_non_existing = data.is_non_existing;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoDecodeH264ReferenceInfoFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get top_field_flag(): number {
    return this.#view.getUint32(0, LE);
  }

  set top_field_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get bottom_field_flag(): number {
    return this.#view.getUint32(4, LE);
  }

  set bottom_field_flag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get used_for_long_term_reference(): number {
    return this.#view.getUint32(8, LE);
  }

  set used_for_long_term_reference(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get is_non_existing(): number {
    return this.#view.getUint32(12, LE);
  }

  set is_non_existing(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }
}