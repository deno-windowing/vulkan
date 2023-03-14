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

export interface InitPhysicalDeviceSamplerFilterMinmaxProperties {
  pNext?: AnyPointer;
  filterMinmaxSingleComponentFormats?: Bool32;
  filterMinmaxImageComponentMapping?: Bool32;
}

export class PhysicalDeviceSamplerFilterMinmaxProperties implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceSamplerFilterMinmaxProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceSamplerFilterMinmaxProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceSamplerFilterMinmaxProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceSamplerFilterMinmaxProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceSamplerFilterMinmaxProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.filterMinmaxSingleComponentFormats !== undefined) this.filterMinmaxSingleComponentFormats = data.filterMinmaxSingleComponentFormats;
      if (data.filterMinmaxImageComponentMapping !== undefined) this.filterMinmaxImageComponentMapping = data.filterMinmaxImageComponentMapping;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceSamplerFilterMinmaxProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SAMPLER_FILTER_MINMAX_PROPERTIES;
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

  get filterMinmaxSingleComponentFormats() {
    return this.#view.getUint32(16, LE);
  }

  set filterMinmaxSingleComponentFormats(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get filterMinmaxImageComponentMapping() {
    return this.#view.getUint32(20, LE);
  }

  set filterMinmaxImageComponentMapping(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }
}