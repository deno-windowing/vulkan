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
import { Format } from "../enum.ts";

export interface InitVertexInputAttributeDescription {
  location?: number;
  binding?: number;
  format?: Format;
  offset?: number;
}

export class VertexInputAttributeDescription implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVertexInputAttributeDescription);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVertexInputAttributeDescription) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VertexInputAttributeDescription.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VertexInputAttributeDescription.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VertexInputAttributeDescription.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.location !== undefined) this.location = data.location;
      if (data.binding !== undefined) this.binding = data.binding;
      if (data.format !== undefined) this.format = data.format;
      if (data.offset !== undefined) this.offset = data.offset;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VertexInputAttributeDescription.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get location() {
    return this.#view.getUint32(0, LE);
  }

  set location(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get binding() {
    return this.#view.getUint32(4, LE);
  }

  set binding(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get format() {
    return this.#view.getUint32(8, LE);
  }

  set format(value: Format) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get offset() {
    return this.#view.getUint32(12, LE);
  }

  set offset(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }
}