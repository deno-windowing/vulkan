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
import {Extent2D} from "./Extent2D.ts";

export interface InitDisplayModeParametersKHR {
  visibleRegion?: Extent2D;
  refreshRate?: number;
}

export class DisplayModeParametersKHR implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDisplayModeParametersKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDisplayModeParametersKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DisplayModeParametersKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DisplayModeParametersKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DisplayModeParametersKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.visibleRegion !== undefined) this.visibleRegion = data.visibleRegion;
      if (data.refreshRate !== undefined) this.refreshRate = data.refreshRate;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DisplayModeParametersKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get visibleRegion() {
    return new Extent2D(this.#data.subarray(0, 0 + Extent2D.size));
  }

  set visibleRegion(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get refreshRate() {
    return this.#view.getUint32(8, LE);
  }

  set refreshRate(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }
}