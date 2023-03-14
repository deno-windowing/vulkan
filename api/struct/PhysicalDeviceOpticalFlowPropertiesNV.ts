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
import { OpticalFlowGridSizeFlagsNV, Bool32 } from "../def.ts";

export interface InitPhysicalDeviceOpticalFlowPropertiesNV {
  pNext?: AnyPointer;
  supportedOutputGridSizes?: OpticalFlowGridSizeFlagsNV;
  supportedHintGridSizes?: OpticalFlowGridSizeFlagsNV;
  hintSupported?: Bool32;
  costSupported?: Bool32;
  bidirectionalFlowSupported?: Bool32;
  globalFlowSupported?: Bool32;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  maxNumRegionsOfInterest?: number;
}

export class PhysicalDeviceOpticalFlowPropertiesNV implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceOpticalFlowPropertiesNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceOpticalFlowPropertiesNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceOpticalFlowPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceOpticalFlowPropertiesNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceOpticalFlowPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.supportedOutputGridSizes !== undefined) this.supportedOutputGridSizes = data.supportedOutputGridSizes;
      if (data.supportedHintGridSizes !== undefined) this.supportedHintGridSizes = data.supportedHintGridSizes;
      if (data.hintSupported !== undefined) this.hintSupported = data.hintSupported;
      if (data.costSupported !== undefined) this.costSupported = data.costSupported;
      if (data.bidirectionalFlowSupported !== undefined) this.bidirectionalFlowSupported = data.bidirectionalFlowSupported;
      if (data.globalFlowSupported !== undefined) this.globalFlowSupported = data.globalFlowSupported;
      if (data.minWidth !== undefined) this.minWidth = data.minWidth;
      if (data.minHeight !== undefined) this.minHeight = data.minHeight;
      if (data.maxWidth !== undefined) this.maxWidth = data.maxWidth;
      if (data.maxHeight !== undefined) this.maxHeight = data.maxHeight;
      if (data.maxNumRegionsOfInterest !== undefined) this.maxNumRegionsOfInterest = data.maxNumRegionsOfInterest;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceOpticalFlowPropertiesNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_OPTICAL_FLOW_PROPERTIES_NV;
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

  get supportedOutputGridSizes() {
    return this.#view.getUint32(16, LE);
  }

  set supportedOutputGridSizes(value: OpticalFlowGridSizeFlagsNV) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get supportedHintGridSizes() {
    return this.#view.getUint32(20, LE);
  }

  set supportedHintGridSizes(value: OpticalFlowGridSizeFlagsNV) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get hintSupported() {
    return this.#view.getUint32(24, LE);
  }

  set hintSupported(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get costSupported() {
    return this.#view.getUint32(28, LE);
  }

  set costSupported(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get bidirectionalFlowSupported() {
    return this.#view.getUint32(32, LE);
  }

  set bidirectionalFlowSupported(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get globalFlowSupported() {
    return this.#view.getUint32(36, LE);
  }

  set globalFlowSupported(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get minWidth() {
    return this.#view.getUint32(40, LE);
  }

  set minWidth(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get minHeight() {
    return this.#view.getUint32(44, LE);
  }

  set minHeight(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get maxWidth() {
    return this.#view.getUint32(48, LE);
  }

  set maxWidth(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get maxHeight() {
    return this.#view.getUint32(52, LE);
  }

  set maxHeight(value: number) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get maxNumRegionsOfInterest() {
    return this.#view.getUint32(56, LE);
  }

  set maxNumRegionsOfInterest(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }
}