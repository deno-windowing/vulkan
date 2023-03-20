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

export interface InitDrmFormatModifierPropertiesEXT {
  drmFormatModifier?: number | bigint;
  drmFormatModifierPlaneCount?: number;
  drmFormatModifierTilingFeatures?: FormatFeatureFlags;
}

export class DrmFormatModifierPropertiesEXT implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDrmFormatModifierPropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDrmFormatModifierPropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DrmFormatModifierPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DrmFormatModifierPropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DrmFormatModifierPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.drmFormatModifier !== undefined) this.drmFormatModifier = data.drmFormatModifier;
      if (data.drmFormatModifierPlaneCount !== undefined) this.drmFormatModifierPlaneCount = data.drmFormatModifierPlaneCount;
      if (data.drmFormatModifierTilingFeatures !== undefined) this.drmFormatModifierTilingFeatures = data.drmFormatModifierTilingFeatures;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DrmFormatModifierPropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get drmFormatModifier(): bigint {
    return this.#view.getBigUint64(0, LE);
  }

  set drmFormatModifier(value: number | bigint) {
    this.#view.setBigUint64(0, BigInt(value), LE);
  }

  get drmFormatModifierPlaneCount(): number {
    return this.#view.getUint32(8, LE);
  }

  set drmFormatModifierPlaneCount(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get drmFormatModifierTilingFeatures(): number {
    return this.#view.getUint32(12, LE);
  }

  set drmFormatModifierTilingFeatures(value: FormatFeatureFlags) {
    this.#view.setUint32(12, Number(value), LE);
  }
}