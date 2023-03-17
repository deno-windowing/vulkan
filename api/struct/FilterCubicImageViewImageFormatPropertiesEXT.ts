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
import { Bool32 } from "../def.ts";

export interface InitFilterCubicImageViewImageFormatPropertiesEXT {
  pNext?: AnyPointer;
  filterCubic?: Bool32;
  filterCubicMinmax?: Bool32;
}

export class FilterCubicImageViewImageFormatPropertiesEXT implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitFilterCubicImageViewImageFormatPropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitFilterCubicImageViewImageFormatPropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(FilterCubicImageViewImageFormatPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < FilterCubicImageViewImageFormatPropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(FilterCubicImageViewImageFormatPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.filterCubic !== undefined) this.filterCubic = data.filterCubic;
      if (data.filterCubicMinmax !== undefined) this.filterCubicMinmax = data.filterCubicMinmax;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, FilterCubicImageViewImageFormatPropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.FILTER_CUBIC_IMAGE_VIEW_IMAGE_FORMAT_PROPERTIES_EXT;
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

  get filterCubic(): number {
    return this.#view.getUint32(16, LE);
  }

  set filterCubic(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get filterCubicMinmax(): number {
    return this.#view.getUint32(20, LE);
  }

  set filterCubicMinmax(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }
}