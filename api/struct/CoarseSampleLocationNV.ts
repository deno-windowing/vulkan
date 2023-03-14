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

export interface InitCoarseSampleLocationNV {
  pixelX?: number;
  pixelY?: number;
  sample?: number;
}

export class CoarseSampleLocationNV implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCoarseSampleLocationNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCoarseSampleLocationNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CoarseSampleLocationNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CoarseSampleLocationNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CoarseSampleLocationNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pixelX !== undefined) this.pixelX = data.pixelX;
      if (data.pixelY !== undefined) this.pixelY = data.pixelY;
      if (data.sample !== undefined) this.sample = data.sample;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CoarseSampleLocationNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get pixelX() {
    return this.#view.getUint32(0, LE);
  }

  set pixelX(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pixelY() {
    return this.#view.getUint32(4, LE);
  }

  set pixelY(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get sample() {
    return this.#view.getUint32(8, LE);
  }

  set sample(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }
}