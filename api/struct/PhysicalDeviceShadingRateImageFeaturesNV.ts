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

export interface InitPhysicalDeviceShadingRateImageFeaturesNV {
  pNext?: AnyPointer;
  shadingRateImage?: Bool32;
  shadingRateCoarseSampleOrder?: Bool32;
}

export class PhysicalDeviceShadingRateImageFeaturesNV implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceShadingRateImageFeaturesNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceShadingRateImageFeaturesNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceShadingRateImageFeaturesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceShadingRateImageFeaturesNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceShadingRateImageFeaturesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shadingRateImage !== undefined) this.shadingRateImage = data.shadingRateImage;
      if (data.shadingRateCoarseSampleOrder !== undefined) this.shadingRateCoarseSampleOrder = data.shadingRateCoarseSampleOrder;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceShadingRateImageFeaturesNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SHADING_RATE_IMAGE_FEATURES_NV;
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

  get shadingRateImage() {
    return this.#view.getUint32(16, LE);
  }

  set shadingRateImage(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get shadingRateCoarseSampleOrder() {
    return this.#view.getUint32(20, LE);
  }

  set shadingRateCoarseSampleOrder(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }
}