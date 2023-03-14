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

export interface InitXYColorEXT {
  x?: number;
  y?: number;
}

/** Chromaticity coordinate */
export class XYColorEXT implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitXYColorEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitXYColorEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(XYColorEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < XYColorEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(XYColorEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.x !== undefined) this.x = data.x;
      if (data.y !== undefined) this.y = data.y;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, XYColorEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get x() {
    return this.#view.getFloat32(0, LE);
  }

  set x(value: number) {
    this.#view.setFloat32(0, Number(value), LE);
  }

  get y() {
    return this.#view.getFloat32(4, LE);
  }

  set y(value: number) {
    this.#view.setFloat32(4, Number(value), LE);
  }
}