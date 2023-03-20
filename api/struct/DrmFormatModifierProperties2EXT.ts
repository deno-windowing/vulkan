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
import { FormatFeatureFlags2 } from "../def.ts";

export interface InitDrmFormatModifierProperties2EXT {
  drmFormatModifier?: number | bigint;
  drmFormatModifierPlaneCount?: number;
  drmFormatModifierTilingFeatures?: FormatFeatureFlags2;
}

export class DrmFormatModifierProperties2EXT implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDrmFormatModifierProperties2EXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDrmFormatModifierProperties2EXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DrmFormatModifierProperties2EXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DrmFormatModifierProperties2EXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DrmFormatModifierProperties2EXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.drmFormatModifier !== undefined) this.drmFormatModifier = data.drmFormatModifier;
      if (data.drmFormatModifierPlaneCount !== undefined) this.drmFormatModifierPlaneCount = data.drmFormatModifierPlaneCount;
      if (data.drmFormatModifierTilingFeatures !== undefined) this.drmFormatModifierTilingFeatures = data.drmFormatModifierTilingFeatures;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DrmFormatModifierProperties2EXT.size));
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

  get drmFormatModifierTilingFeatures(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set drmFormatModifierTilingFeatures(value: FormatFeatureFlags2) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }
}