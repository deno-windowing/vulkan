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

export interface InitVertexInputBindingDivisorDescriptionEXT {
  binding?: number;
  divisor?: number;
}

export class VertexInputBindingDivisorDescriptionEXT implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVertexInputBindingDivisorDescriptionEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVertexInputBindingDivisorDescriptionEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VertexInputBindingDivisorDescriptionEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VertexInputBindingDivisorDescriptionEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VertexInputBindingDivisorDescriptionEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.binding !== undefined) this.binding = data.binding;
      if (data.divisor !== undefined) this.divisor = data.divisor;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VertexInputBindingDivisorDescriptionEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get binding() {
    return this.#view.getUint32(0, LE);
  }

  set binding(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get divisor() {
    return this.#view.getUint32(4, LE);
  }

  set divisor(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }
}