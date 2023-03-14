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
import {Offset2D} from "./Offset2D.ts";
import {Extent2D} from "./Extent2D.ts";

export interface InitRect2D {
  offset?: Offset2D;
  extent?: Extent2D;
}

export class Rect2D implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitRect2D);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitRect2D) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(Rect2D.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < Rect2D.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(Rect2D.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.offset !== undefined) this.offset = data.offset;
      if (data.extent !== undefined) this.extent = data.extent;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, Rect2D.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get offset() {
    return new Offset2D(this.#data.subarray(0, 0 + Offset2D.size));
  }

  set offset(value: Offset2D) {
    if (value[BUFFER].byteLength < Offset2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get extent() {
    return new Extent2D(this.#data.subarray(8, 8 + Extent2D.size));
  }

  set extent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 8);
  }
}