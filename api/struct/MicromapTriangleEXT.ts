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

export interface InitMicromapTriangleEXT {
  dataOffset?: number;
  subdivisionLevel?: number;
  format?: number;
}

export class MicromapTriangleEXT implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMicromapTriangleEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMicromapTriangleEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MicromapTriangleEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MicromapTriangleEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MicromapTriangleEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.dataOffset !== undefined) this.dataOffset = data.dataOffset;
      if (data.subdivisionLevel !== undefined) this.subdivisionLevel = data.subdivisionLevel;
      if (data.format !== undefined) this.format = data.format;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MicromapTriangleEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get dataOffset(): number {
    return this.#view.getUint32(0, LE);
  }

  set dataOffset(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get subdivisionLevel(): number {
    return this.#view.getUint16(4, LE);
  }

  set subdivisionLevel(value: number) {
    this.#view.setUint16(4, Number(value), LE);
  }

  get format(): number {
    return this.#view.getUint16(6, LE);
  }

  set format(value: number) {
    this.#view.setUint16(6, Number(value), LE);
  }
}