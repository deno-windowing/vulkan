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
import { ViewportCoordinateSwizzleNV } from "../enum.ts";

export interface InitViewportSwizzleNV {
  x?: ViewportCoordinateSwizzleNV;
  y?: ViewportCoordinateSwizzleNV;
  z?: ViewportCoordinateSwizzleNV;
  w?: ViewportCoordinateSwizzleNV;
}

export class ViewportSwizzleNV implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitViewportSwizzleNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitViewportSwizzleNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ViewportSwizzleNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ViewportSwizzleNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ViewportSwizzleNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.x !== undefined) this.x = data.x;
      if (data.y !== undefined) this.y = data.y;
      if (data.z !== undefined) this.z = data.z;
      if (data.w !== undefined) this.w = data.w;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ViewportSwizzleNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get x(): number {
    return this.#view.getUint32(0, LE);
  }

  set x(value: ViewportCoordinateSwizzleNV) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get y(): number {
    return this.#view.getUint32(4, LE);
  }

  set y(value: ViewportCoordinateSwizzleNV) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get z(): number {
    return this.#view.getUint32(8, LE);
  }

  set z(value: ViewportCoordinateSwizzleNV) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get w(): number {
    return this.#view.getUint32(12, LE);
  }

  set w(value: ViewportCoordinateSwizzleNV) {
    this.#view.setUint32(12, Number(value), LE);
  }
}