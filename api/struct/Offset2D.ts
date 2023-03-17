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

export interface InitOffset2D {
  x?: number;
  y?: number;
}

export class Offset2D implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitOffset2D);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitOffset2D) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(Offset2D.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < Offset2D.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(Offset2D.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.x !== undefined) this.x = data.x;
      if (data.y !== undefined) this.y = data.y;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, Offset2D.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get x(): number {
    return this.#view.getInt32(0, LE);
  }

  set x(value: number) {
    this.#view.setInt32(0, Number(value), LE);
  }

  get y(): number {
    return this.#view.getInt32(4, LE);
  }

  set y(value: number) {
    this.#view.setInt32(4, Number(value), LE);
  }
}