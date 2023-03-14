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
import {RectLayerKHR} from "./RectLayerKHR.ts";

export interface InitPresentRegionKHR {
  rectangleCount?: number;
  pRectangles?: AnyPointer;
}

export class PresentRegionKHR implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPresentRegionKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPresentRegionKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PresentRegionKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PresentRegionKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PresentRegionKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.rectangleCount !== undefined) this.rectangleCount = data.rectangleCount;
      if (data.pRectangles !== undefined) this.pRectangles = data.pRectangles;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PresentRegionKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get rectangleCount() {
    return this.#view.getUint32(0, LE);
  }

  set rectangleCount(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pRectangles() {
    return pointerFromView(this.#view, 8, LE);
  }

  set pRectangles(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }
}