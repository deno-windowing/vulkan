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

export interface InitExtent2D {
  width?: number;
  height?: number;
}

export class Extent2D implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitExtent2D);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitExtent2D) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(Extent2D.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < Extent2D.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(Extent2D.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.width !== undefined) this.width = data.width;
      if (data.height !== undefined) this.height = data.height;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, Extent2D.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get width(): number {
    return this.#view.getUint32(0, LE);
  }

  set width(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get height(): number {
    return this.#view.getUint32(4, LE);
  }

  set height(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }
}