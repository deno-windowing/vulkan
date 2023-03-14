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
import { VertexInputRate } from "../enum.ts";

export interface InitVertexInputBindingDescription {
  binding?: number;
  stride?: number;
  inputRate?: VertexInputRate;
}

export class VertexInputBindingDescription implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVertexInputBindingDescription);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVertexInputBindingDescription) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VertexInputBindingDescription.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VertexInputBindingDescription.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VertexInputBindingDescription.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.binding !== undefined) this.binding = data.binding;
      if (data.stride !== undefined) this.stride = data.stride;
      if (data.inputRate !== undefined) this.inputRate = data.inputRate;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VertexInputBindingDescription.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get binding() {
    return this.#view.getUint32(0, LE);
  }

  set binding(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get stride() {
    return this.#view.getUint32(4, LE);
  }

  set stride(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get inputRate() {
    return this.#view.getUint32(8, LE);
  }

  set inputRate(value: VertexInputRate) {
    this.#view.setUint32(8, Number(value), LE);
  }
}