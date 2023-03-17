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
import {DisplayModeParametersKHR} from "./DisplayModeParametersKHR.ts";
import { DisplayModeKHR } from "../def.ts";

export interface InitDisplayModePropertiesKHR {
  displayMode?: DisplayModeKHR;
  parameters?: DisplayModeParametersKHR;
}

export class DisplayModePropertiesKHR implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDisplayModePropertiesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDisplayModePropertiesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DisplayModePropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DisplayModePropertiesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DisplayModePropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.displayMode !== undefined) this.displayMode = data.displayMode;
      if (data.parameters !== undefined) this.parameters = data.parameters;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DisplayModePropertiesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get displayMode(): Deno.PointerValue {
    return pointerFromView(this.#view, 0, LE);
  }

  set displayMode(value: DisplayModeKHR) {
    this.#view.setBigUint64(0, BigInt(anyPointer(value)), LE);
  }

  get parameters(): DisplayModeParametersKHR {
    return new DisplayModeParametersKHR(this.#data.subarray(8, 8 + DisplayModeParametersKHR.size));
  }

  set parameters(value: DisplayModeParametersKHR) {
    if (value[BUFFER].byteLength < DisplayModeParametersKHR.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 8);
  }
}