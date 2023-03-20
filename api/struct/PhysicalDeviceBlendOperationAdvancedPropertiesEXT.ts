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

export interface InitPhysicalDeviceBlendOperationAdvancedPropertiesEXT {
  pNext?: AnyPointer;
  advancedBlendMaxColorAttachments?: number;
  advancedBlendIndependentBlend?: Bool32;
  advancedBlendNonPremultipliedSrcColor?: Bool32;
  advancedBlendNonPremultipliedDstColor?: Bool32;
  advancedBlendCorrelatedOverlap?: Bool32;
  advancedBlendAllOperations?: Bool32;
}

export class PhysicalDeviceBlendOperationAdvancedPropertiesEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceBlendOperationAdvancedPropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceBlendOperationAdvancedPropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceBlendOperationAdvancedPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceBlendOperationAdvancedPropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceBlendOperationAdvancedPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.advancedBlendMaxColorAttachments !== undefined) this.advancedBlendMaxColorAttachments = data.advancedBlendMaxColorAttachments;
      if (data.advancedBlendIndependentBlend !== undefined) this.advancedBlendIndependentBlend = data.advancedBlendIndependentBlend;
      if (data.advancedBlendNonPremultipliedSrcColor !== undefined) this.advancedBlendNonPremultipliedSrcColor = data.advancedBlendNonPremultipliedSrcColor;
      if (data.advancedBlendNonPremultipliedDstColor !== undefined) this.advancedBlendNonPremultipliedDstColor = data.advancedBlendNonPremultipliedDstColor;
      if (data.advancedBlendCorrelatedOverlap !== undefined) this.advancedBlendCorrelatedOverlap = data.advancedBlendCorrelatedOverlap;
      if (data.advancedBlendAllOperations !== undefined) this.advancedBlendAllOperations = data.advancedBlendAllOperations;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceBlendOperationAdvancedPropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_BLEND_OPERATION_ADVANCED_PROPERTIES_EXT;
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

  get advancedBlendMaxColorAttachments(): number {
    return this.#view.getUint32(16, LE);
  }

  set advancedBlendMaxColorAttachments(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get advancedBlendIndependentBlend(): number {
    return this.#view.getUint32(20, LE);
  }

  set advancedBlendIndependentBlend(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get advancedBlendNonPremultipliedSrcColor(): number {
    return this.#view.getUint32(24, LE);
  }

  set advancedBlendNonPremultipliedSrcColor(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get advancedBlendNonPremultipliedDstColor(): number {
    return this.#view.getUint32(28, LE);
  }

  set advancedBlendNonPremultipliedDstColor(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get advancedBlendCorrelatedOverlap(): number {
    return this.#view.getUint32(32, LE);
  }

  set advancedBlendCorrelatedOverlap(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get advancedBlendAllOperations(): number {
    return this.#view.getUint32(36, LE);
  }

  set advancedBlendAllOperations(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }
}