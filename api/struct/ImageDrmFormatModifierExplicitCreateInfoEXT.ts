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
import {SubresourceLayout} from "./SubresourceLayout.ts";
import { StructureType } from "../enum.ts";

export interface InitImageDrmFormatModifierExplicitCreateInfoEXT {
  pNext?: AnyPointer;
  drmFormatModifier?: number | bigint;
  drmFormatModifierPlaneCount?: number;
  pPlaneLayouts?: AnyPointer;
}

export class ImageDrmFormatModifierExplicitCreateInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageDrmFormatModifierExplicitCreateInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageDrmFormatModifierExplicitCreateInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageDrmFormatModifierExplicitCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageDrmFormatModifierExplicitCreateInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageDrmFormatModifierExplicitCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.drmFormatModifier !== undefined) this.drmFormatModifier = data.drmFormatModifier;
      if (data.drmFormatModifierPlaneCount !== undefined) this.drmFormatModifierPlaneCount = data.drmFormatModifierPlaneCount;
      if (data.pPlaneLayouts !== undefined) this.pPlaneLayouts = data.pPlaneLayouts;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageDrmFormatModifierExplicitCreateInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IMAGE_DRM_FORMAT_MODIFIER_EXPLICIT_CREATE_INFO_EXT;
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

  get drmFormatModifier(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set drmFormatModifier(value: number | bigint) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get drmFormatModifierPlaneCount(): number {
    return this.#view.getUint32(24, LE);
  }

  set drmFormatModifierPlaneCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pPlaneLayouts(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pPlaneLayouts(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}