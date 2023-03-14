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

export interface InitTraceRaysIndirectCommandKHR {
  width?: number;
  height?: number;
  depth?: number;
}

export class TraceRaysIndirectCommandKHR implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitTraceRaysIndirectCommandKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitTraceRaysIndirectCommandKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(TraceRaysIndirectCommandKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < TraceRaysIndirectCommandKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(TraceRaysIndirectCommandKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.width !== undefined) this.width = data.width;
      if (data.height !== undefined) this.height = data.height;
      if (data.depth !== undefined) this.depth = data.depth;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, TraceRaysIndirectCommandKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get width() {
    return this.#view.getUint32(0, LE);
  }

  set width(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get height() {
    return this.#view.getUint32(4, LE);
  }

  set height(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get depth() {
    return this.#view.getUint32(8, LE);
  }

  set depth(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }
}