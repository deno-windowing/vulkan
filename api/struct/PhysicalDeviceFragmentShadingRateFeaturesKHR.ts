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

export interface InitPhysicalDeviceFragmentShadingRateFeaturesKHR {
  pNext?: AnyPointer;
  pipelineFragmentShadingRate?: Bool32;
  primitiveFragmentShadingRate?: Bool32;
  attachmentFragmentShadingRate?: Bool32;
}

export class PhysicalDeviceFragmentShadingRateFeaturesKHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceFragmentShadingRateFeaturesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceFragmentShadingRateFeaturesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceFragmentShadingRateFeaturesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceFragmentShadingRateFeaturesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceFragmentShadingRateFeaturesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.pipelineFragmentShadingRate !== undefined) this.pipelineFragmentShadingRate = data.pipelineFragmentShadingRate;
      if (data.primitiveFragmentShadingRate !== undefined) this.primitiveFragmentShadingRate = data.primitiveFragmentShadingRate;
      if (data.attachmentFragmentShadingRate !== undefined) this.attachmentFragmentShadingRate = data.attachmentFragmentShadingRate;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceFragmentShadingRateFeaturesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_FRAGMENT_SHADING_RATE_FEATURES_KHR;
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

  get pipelineFragmentShadingRate() {
    return this.#view.getUint32(16, LE);
  }

  set pipelineFragmentShadingRate(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get primitiveFragmentShadingRate() {
    return this.#view.getUint32(20, LE);
  }

  set primitiveFragmentShadingRate(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get attachmentFragmentShadingRate() {
    return this.#view.getUint32(24, LE);
  }

  set attachmentFragmentShadingRate(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }
}