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
import { DisplayKHR } from "../def.ts";

export interface InitDisplayPlanePropertiesKHR {
  currentDisplay?: DisplayKHR;
  currentStackIndex?: number;
}

export class DisplayPlanePropertiesKHR implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDisplayPlanePropertiesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDisplayPlanePropertiesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DisplayPlanePropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DisplayPlanePropertiesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DisplayPlanePropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.currentDisplay !== undefined) this.currentDisplay = data.currentDisplay;
      if (data.currentStackIndex !== undefined) this.currentStackIndex = data.currentStackIndex;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DisplayPlanePropertiesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get currentDisplay(): Deno.PointerValue {
    return pointerFromView(this.#view, 0, LE);
  }

  set currentDisplay(value: DisplayKHR) {
    this.#view.setBigUint64(0, BigInt(anyPointer(value)), LE);
  }

  get currentStackIndex(): number {
    return this.#view.getUint32(8, LE);
  }

  set currentStackIndex(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }
}