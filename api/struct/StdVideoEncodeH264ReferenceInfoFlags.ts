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

export interface InitStdVideoEncodeH264ReferenceInfoFlags {
  used_for_long_term_reference?: number;
}

export class StdVideoEncodeH264ReferenceInfoFlags implements BaseStruct {
  static size = 4;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH264ReferenceInfoFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH264ReferenceInfoFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH264ReferenceInfoFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH264ReferenceInfoFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH264ReferenceInfoFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.used_for_long_term_reference !== undefined) this.used_for_long_term_reference = data.used_for_long_term_reference;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH264ReferenceInfoFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get used_for_long_term_reference() {
    return this.#view.getUint32(0, LE);
  }

  set used_for_long_term_reference(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }
}