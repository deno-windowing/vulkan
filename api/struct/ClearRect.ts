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
import {Rect2D} from "./Rect2D.ts";

export interface InitClearRect {
  rect?: Rect2D;
  baseArrayLayer?: number;
  layerCount?: number;
}

export class ClearRect implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitClearRect);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitClearRect) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ClearRect.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ClearRect.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ClearRect.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.rect !== undefined) this.rect = data.rect;
      if (data.baseArrayLayer !== undefined) this.baseArrayLayer = data.baseArrayLayer;
      if (data.layerCount !== undefined) this.layerCount = data.layerCount;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ClearRect.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get rect(): Rect2D {
    return new Rect2D(this.#data.subarray(0, 0 + Rect2D.size));
  }

  set rect(value: Rect2D) {
    if (value[BUFFER].byteLength < Rect2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get baseArrayLayer(): number {
    return this.#view.getUint32(16, LE);
  }

  set baseArrayLayer(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get layerCount(): number {
    return this.#view.getUint32(20, LE);
  }

  set layerCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }
}