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

export interface InitAabbPositionsKHR {
  minX?: number;
  minY?: number;
  minZ?: number;
  maxX?: number;
  maxY?: number;
  maxZ?: number;
}

export class AabbPositionsKHR implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAabbPositionsKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAabbPositionsKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AabbPositionsKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AabbPositionsKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AabbPositionsKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.minX !== undefined) this.minX = data.minX;
      if (data.minY !== undefined) this.minY = data.minY;
      if (data.minZ !== undefined) this.minZ = data.minZ;
      if (data.maxX !== undefined) this.maxX = data.maxX;
      if (data.maxY !== undefined) this.maxY = data.maxY;
      if (data.maxZ !== undefined) this.maxZ = data.maxZ;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AabbPositionsKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get minX() {
    return this.#view.getFloat32(0, LE);
  }

  set minX(value: number) {
    this.#view.setFloat32(0, Number(value), LE);
  }

  get minY() {
    return this.#view.getFloat32(4, LE);
  }

  set minY(value: number) {
    this.#view.setFloat32(4, Number(value), LE);
  }

  get minZ() {
    return this.#view.getFloat32(8, LE);
  }

  set minZ(value: number) {
    this.#view.setFloat32(8, Number(value), LE);
  }

  get maxX() {
    return this.#view.getFloat32(12, LE);
  }

  set maxX(value: number) {
    this.#view.setFloat32(12, Number(value), LE);
  }

  get maxY() {
    return this.#view.getFloat32(16, LE);
  }

  set maxY(value: number) {
    this.#view.setFloat32(16, Number(value), LE);
  }

  get maxZ() {
    return this.#view.getFloat32(20, LE);
  }

  set maxZ(value: number) {
    this.#view.setFloat32(20, Number(value), LE);
  }
}