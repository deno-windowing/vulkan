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

export interface InitPhysicalDeviceShadingRateImagePropertiesNV {
  pNext?: AnyPointer;
  shadingRateTexelSize?: Extent2D;
  shadingRatePaletteSize?: number;
  shadingRateMaxCoarseSamples?: number;
}

export class PhysicalDeviceShadingRateImagePropertiesNV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceShadingRateImagePropertiesNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceShadingRateImagePropertiesNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceShadingRateImagePropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceShadingRateImagePropertiesNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceShadingRateImagePropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shadingRateTexelSize !== undefined) this.shadingRateTexelSize = data.shadingRateTexelSize;
      if (data.shadingRatePaletteSize !== undefined) this.shadingRatePaletteSize = data.shadingRatePaletteSize;
      if (data.shadingRateMaxCoarseSamples !== undefined) this.shadingRateMaxCoarseSamples = data.shadingRateMaxCoarseSamples;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceShadingRateImagePropertiesNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SHADING_RATE_IMAGE_PROPERTIES_NV;
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

  get shadingRateTexelSize(): Extent2D {
    return new Extent2D(this.#data.subarray(16, 16 + Extent2D.size));
  }

  set shadingRateTexelSize(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get shadingRatePaletteSize(): number {
    return this.#view.getUint32(24, LE);
  }

  set shadingRatePaletteSize(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get shadingRateMaxCoarseSamples(): number {
    return this.#view.getUint32(28, LE);
  }

  set shadingRateMaxCoarseSamples(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }
}