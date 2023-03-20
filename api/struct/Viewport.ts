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

export interface InitViewport {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  minDepth?: number;
  maxDepth?: number;
}

export class Viewport implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitViewport);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitViewport) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(Viewport.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < Viewport.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(Viewport.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.x !== undefined) this.x = data.x;
      if (data.y !== undefined) this.y = data.y;
      if (data.width !== undefined) this.width = data.width;
      if (data.height !== undefined) this.height = data.height;
      if (data.minDepth !== undefined) this.minDepth = data.minDepth;
      if (data.maxDepth !== undefined) this.maxDepth = data.maxDepth;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, Viewport.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get x(): number {
    return this.#view.getFloat32(0, LE);
  }

  set x(value: number) {
    this.#view.setFloat32(0, Number(value), LE);
  }

  get y(): number {
    return this.#view.getFloat32(4, LE);
  }

  set y(value: number) {
    this.#view.setFloat32(4, Number(value), LE);
  }

  get width(): number {
    return this.#view.getFloat32(8, LE);
  }

  set width(value: number) {
    this.#view.setFloat32(8, Number(value), LE);
  }

  get height(): number {
    return this.#view.getFloat32(12, LE);
  }

  set height(value: number) {
    this.#view.setFloat32(12, Number(value), LE);
  }

  get minDepth(): number {
    return this.#view.getFloat32(16, LE);
  }

  set minDepth(value: number) {
    this.#view.setFloat32(16, Number(value), LE);
  }

  get maxDepth(): number {
    return this.#view.getFloat32(20, LE);
  }

  set maxDepth(value: number) {
    this.#view.setFloat32(20, Number(value), LE);
  }
}