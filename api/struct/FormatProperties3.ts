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
import { StructureType } from "../enum.ts";
import { FormatFeatureFlags2 } from "../def.ts";

export interface InitFormatProperties3 {
  pNext?: AnyPointer;
  linearTilingFeatures?: FormatFeatureFlags2;
  optimalTilingFeatures?: FormatFeatureFlags2;
  bufferFeatures?: FormatFeatureFlags2;
}

export class FormatProperties3 implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitFormatProperties3);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitFormatProperties3) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(FormatProperties3.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < FormatProperties3.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(FormatProperties3.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.linearTilingFeatures !== undefined) this.linearTilingFeatures = data.linearTilingFeatures;
      if (data.optimalTilingFeatures !== undefined) this.optimalTilingFeatures = data.optimalTilingFeatures;
      if (data.bufferFeatures !== undefined) this.bufferFeatures = data.bufferFeatures;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, FormatProperties3.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.FORMAT_PROPERTIES_3;
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

  get linearTilingFeatures() {
    return this.#view.getBigUint64(16, LE);
  }

  set linearTilingFeatures(value: FormatFeatureFlags2) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get optimalTilingFeatures() {
    return this.#view.getBigUint64(24, LE);
  }

  set optimalTilingFeatures(value: FormatFeatureFlags2) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get bufferFeatures() {
    return this.#view.getBigUint64(32, LE);
  }

  set bufferFeatures(value: FormatFeatureFlags2) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }
}