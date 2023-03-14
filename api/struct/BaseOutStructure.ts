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
import {BaseOutStructure} from "./BaseOutStructure.ts";
import { StructureType } from "../enum.ts";

export interface InitBaseOutStructure {
  sType?: StructureType;
  pNext?: AnyPointer;
}

export class BaseOutStructure implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBaseOutStructure);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBaseOutStructure) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BaseOutStructure.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BaseOutStructure.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BaseOutStructure.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.sType !== undefined) this.sType = data.sType;
      if (data.pNext !== undefined) this.pNext = data.pNext;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BaseOutStructure.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get sType() {
    return this.#view.getUint32(0, LE);
  }

  set sType(value: StructureType) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pNext() {
    return pointerFromView(this.#view, 8, LE);
  }

  set pNext(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }
}