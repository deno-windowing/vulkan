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

export interface InitStdVideoDecodeH265ReferenceInfoFlags {
  used_for_long_term_reference?: number;
  unused_for_reference?: number;
}

export class StdVideoDecodeH265ReferenceInfoFlags implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoDecodeH265ReferenceInfoFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoDecodeH265ReferenceInfoFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoDecodeH265ReferenceInfoFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoDecodeH265ReferenceInfoFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoDecodeH265ReferenceInfoFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.used_for_long_term_reference !== undefined) this.used_for_long_term_reference = data.used_for_long_term_reference;
      if (data.unused_for_reference !== undefined) this.unused_for_reference = data.unused_for_reference;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoDecodeH265ReferenceInfoFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get used_for_long_term_reference(): number {
    return this.#view.getUint32(0, LE);
  }

  set used_for_long_term_reference(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get unused_for_reference(): number {
    return this.#view.getUint32(4, LE);
  }

  set unused_for_reference(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }
}