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
import {Extent2D} from "./Extent2D.ts";
import { StructureType } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitPhysicalDeviceFragmentDensityMapPropertiesEXT {
  pNext?: AnyPointer;
  minFragmentDensityTexelSize?: Extent2D;
  maxFragmentDensityTexelSize?: Extent2D;
  fragmentDensityInvocations?: Bool32;
}

export class PhysicalDeviceFragmentDensityMapPropertiesEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceFragmentDensityMapPropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceFragmentDensityMapPropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceFragmentDensityMapPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceFragmentDensityMapPropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceFragmentDensityMapPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.minFragmentDensityTexelSize !== undefined) this.minFragmentDensityTexelSize = data.minFragmentDensityTexelSize;
      if (data.maxFragmentDensityTexelSize !== undefined) this.maxFragmentDensityTexelSize = data.maxFragmentDensityTexelSize;
      if (data.fragmentDensityInvocations !== undefined) this.fragmentDensityInvocations = data.fragmentDensityInvocations;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceFragmentDensityMapPropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_FRAGMENT_DENSITY_MAP_PROPERTIES_EXT;
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

  get minFragmentDensityTexelSize() {
    return new Extent2D(this.#data.subarray(16, 16 + Extent2D.size));
  }

  set minFragmentDensityTexelSize(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get maxFragmentDensityTexelSize() {
    return new Extent2D(this.#data.subarray(24, 24 + Extent2D.size));
  }

  set maxFragmentDensityTexelSize(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 24);
  }

  get fragmentDensityInvocations() {
    return this.#view.getUint32(32, LE);
  }

  set fragmentDensityInvocations(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }
}