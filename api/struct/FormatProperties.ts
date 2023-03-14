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
import { FormatFeatureFlags } from "../def.ts";

export interface InitFormatProperties {
  linearTilingFeatures?: FormatFeatureFlags;
  optimalTilingFeatures?: FormatFeatureFlags;
  bufferFeatures?: FormatFeatureFlags;
}

export class FormatProperties implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitFormatProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitFormatProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(FormatProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < FormatProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(FormatProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.linearTilingFeatures !== undefined) this.linearTilingFeatures = data.linearTilingFeatures;
      if (data.optimalTilingFeatures !== undefined) this.optimalTilingFeatures = data.optimalTilingFeatures;
      if (data.bufferFeatures !== undefined) this.bufferFeatures = data.bufferFeatures;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, FormatProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get linearTilingFeatures() {
    return this.#view.getUint32(0, LE);
  }

  set linearTilingFeatures(value: FormatFeatureFlags) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get optimalTilingFeatures() {
    return this.#view.getUint32(4, LE);
  }

  set optimalTilingFeatures(value: FormatFeatureFlags) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get bufferFeatures() {
    return this.#view.getUint32(8, LE);
  }

  set bufferFeatures(value: FormatFeatureFlags) {
    this.#view.setUint32(8, Number(value), LE);
  }
}