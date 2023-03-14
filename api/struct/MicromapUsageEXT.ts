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

export interface InitMicromapUsageEXT {
  count?: number;
  subdivisionLevel?: number;
  format?: number;
}

export class MicromapUsageEXT implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMicromapUsageEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMicromapUsageEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MicromapUsageEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MicromapUsageEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MicromapUsageEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.count !== undefined) this.count = data.count;
      if (data.subdivisionLevel !== undefined) this.subdivisionLevel = data.subdivisionLevel;
      if (data.format !== undefined) this.format = data.format;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MicromapUsageEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get count() {
    return this.#view.getUint32(0, LE);
  }

  set count(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get subdivisionLevel() {
    return this.#view.getUint32(4, LE);
  }

  set subdivisionLevel(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get format() {
    return this.#view.getUint32(8, LE);
  }

  set format(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }
}