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

export interface InitSpecializationMapEntry {
  constantID?: number;
  offset?: number;
  size?: number | bigint;
}

export class SpecializationMapEntry implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSpecializationMapEntry);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSpecializationMapEntry) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SpecializationMapEntry.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SpecializationMapEntry.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SpecializationMapEntry.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.constantID !== undefined) this.constantID = data.constantID;
      if (data.offset !== undefined) this.offset = data.offset;
      if (data.size !== undefined) this.size = data.size;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SpecializationMapEntry.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get constantID() {
    return this.#view.getUint32(0, LE);
  }

  set constantID(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get offset() {
    return this.#view.getUint32(4, LE);
  }

  set offset(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get size() {
    return this.#view.getBigUint64(8, LE);
  }

  set size(value: number | bigint) {
    this.#view.setBigUint64(8, BigInt(value), LE);
  }
}