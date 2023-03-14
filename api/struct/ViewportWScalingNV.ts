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

export interface InitViewportWScalingNV {
  xcoeff?: number;
  ycoeff?: number;
}

export class ViewportWScalingNV implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitViewportWScalingNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitViewportWScalingNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ViewportWScalingNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ViewportWScalingNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ViewportWScalingNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.xcoeff !== undefined) this.xcoeff = data.xcoeff;
      if (data.ycoeff !== undefined) this.ycoeff = data.ycoeff;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ViewportWScalingNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get xcoeff() {
    return this.#view.getFloat32(0, LE);
  }

  set xcoeff(value: number) {
    this.#view.setFloat32(0, Number(value), LE);
  }

  get ycoeff() {
    return this.#view.getFloat32(4, LE);
  }

  set ycoeff(value: number) {
    this.#view.setFloat32(4, Number(value), LE);
  }
}