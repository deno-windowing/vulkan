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

export interface InitClearDepthStencilValue {
  depth?: number;
  stencil?: number;
}

export class ClearDepthStencilValue implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitClearDepthStencilValue);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitClearDepthStencilValue) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ClearDepthStencilValue.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ClearDepthStencilValue.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ClearDepthStencilValue.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.depth !== undefined) this.depth = data.depth;
      if (data.stencil !== undefined) this.stencil = data.stencil;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ClearDepthStencilValue.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get depth(): number {
    return this.#view.getFloat32(0, LE);
  }

  set depth(value: number) {
    this.#view.setFloat32(0, Number(value), LE);
  }

  get stencil(): number {
    return this.#view.getUint32(4, LE);
  }

  set stencil(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }
}