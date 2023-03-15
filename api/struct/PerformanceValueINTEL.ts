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
import { PerformanceValueTypeINTEL } from "../enum.ts";
import { PerformanceValueDataINTEL } from "../union.ts";

export interface InitPerformanceValueINTEL {
  type?: PerformanceValueTypeINTEL;
  data?: PerformanceValueDataINTEL;
}

export class PerformanceValueINTEL implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPerformanceValueINTEL);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPerformanceValueINTEL) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PerformanceValueINTEL.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PerformanceValueINTEL.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PerformanceValueINTEL.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.type !== undefined) this.type = data.type;
      if (data.data !== undefined) this.data = data.data;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PerformanceValueINTEL.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get type() {
    return this.#view.getUint32(0, LE);
  }

  set type(value: PerformanceValueTypeINTEL) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get data() {
    throw new Error(`Unknown type: {"union":["u32","u64","f32","u32","buffer"]}`);
  }

  set data(value: PerformanceValueDataINTEL) {
    throw new Error(`Unknown type: {"union":["u32","u64","f32","u32","buffer"]}`);
  }
}