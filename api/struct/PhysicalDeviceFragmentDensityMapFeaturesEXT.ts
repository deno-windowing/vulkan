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

export interface InitPhysicalDeviceFragmentDensityMapFeaturesEXT {
  pNext?: AnyPointer;
  fragmentDensityMap?: Bool32;
  fragmentDensityMapDynamic?: Bool32;
  fragmentDensityMapNonSubsampledImages?: Bool32;
}

export class PhysicalDeviceFragmentDensityMapFeaturesEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceFragmentDensityMapFeaturesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceFragmentDensityMapFeaturesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceFragmentDensityMapFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceFragmentDensityMapFeaturesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceFragmentDensityMapFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.fragmentDensityMap !== undefined) this.fragmentDensityMap = data.fragmentDensityMap;
      if (data.fragmentDensityMapDynamic !== undefined) this.fragmentDensityMapDynamic = data.fragmentDensityMapDynamic;
      if (data.fragmentDensityMapNonSubsampledImages !== undefined) this.fragmentDensityMapNonSubsampledImages = data.fragmentDensityMapNonSubsampledImages;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceFragmentDensityMapFeaturesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_FRAGMENT_DENSITY_MAP_FEATURES_EXT;
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

  get fragmentDensityMap() {
    return this.#view.getUint32(16, LE);
  }

  set fragmentDensityMap(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get fragmentDensityMapDynamic() {
    return this.#view.getUint32(20, LE);
  }

  set fragmentDensityMapDynamic(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get fragmentDensityMapNonSubsampledImages() {
    return this.#view.getUint32(24, LE);
  }

  set fragmentDensityMapNonSubsampledImages(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }
}