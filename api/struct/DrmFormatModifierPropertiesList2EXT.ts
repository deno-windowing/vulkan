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
import {DrmFormatModifierProperties2EXT} from "./DrmFormatModifierProperties2EXT.ts";
import { StructureType } from "../enum.ts";

export interface InitDrmFormatModifierPropertiesList2EXT {
  pNext?: AnyPointer;
  drmFormatModifierCount?: number;
  pDrmFormatModifierProperties?: AnyPointer;
}

export class DrmFormatModifierPropertiesList2EXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDrmFormatModifierPropertiesList2EXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDrmFormatModifierPropertiesList2EXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DrmFormatModifierPropertiesList2EXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DrmFormatModifierPropertiesList2EXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DrmFormatModifierPropertiesList2EXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.drmFormatModifierCount !== undefined) this.drmFormatModifierCount = data.drmFormatModifierCount;
      if (data.pDrmFormatModifierProperties !== undefined) this.pDrmFormatModifierProperties = data.pDrmFormatModifierProperties;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DrmFormatModifierPropertiesList2EXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DRM_FORMAT_MODIFIER_PROPERTIES_LIST_2_EXT;
  }

  get sType(): number {
    return this.#view.getUint32(0, LE);
  }

  set sType(value: StructureType) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pNext(): Deno.PointerValue {
    return pointerFromView(this.#view, 8, LE);
  }

  set pNext(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }

  get drmFormatModifierCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set drmFormatModifierCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pDrmFormatModifierProperties(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pDrmFormatModifierProperties(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}