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
import { StructureType, Format, OpticalFlowPerformanceLevelNV } from "../enum.ts";
import { OpticalFlowGridSizeFlagsNV, OpticalFlowSessionCreateFlagsNV } from "../def.ts";

export interface InitOpticalFlowSessionCreateInfoNV {
  pNext?: AnyPointer;
  width?: number;
  height?: number;
  imageFormat?: Format;
  flowVectorFormat?: Format;
  costFormat?: Format;
  outputGridSize?: OpticalFlowGridSizeFlagsNV;
  hintGridSize?: OpticalFlowGridSizeFlagsNV;
  performanceLevel?: OpticalFlowPerformanceLevelNV;
  flags?: OpticalFlowSessionCreateFlagsNV;
}

export class OpticalFlowSessionCreateInfoNV implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitOpticalFlowSessionCreateInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitOpticalFlowSessionCreateInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(OpticalFlowSessionCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < OpticalFlowSessionCreateInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(OpticalFlowSessionCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.width !== undefined) this.width = data.width;
      if (data.height !== undefined) this.height = data.height;
      if (data.imageFormat !== undefined) this.imageFormat = data.imageFormat;
      if (data.flowVectorFormat !== undefined) this.flowVectorFormat = data.flowVectorFormat;
      if (data.costFormat !== undefined) this.costFormat = data.costFormat;
      if (data.outputGridSize !== undefined) this.outputGridSize = data.outputGridSize;
      if (data.hintGridSize !== undefined) this.hintGridSize = data.hintGridSize;
      if (data.performanceLevel !== undefined) this.performanceLevel = data.performanceLevel;
      if (data.flags !== undefined) this.flags = data.flags;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, OpticalFlowSessionCreateInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.OPTICAL_FLOW_SESSION_CREATE_INFO_NV;
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

  get width() {
    return this.#view.getUint32(16, LE);
  }

  set width(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get height() {
    return this.#view.getUint32(20, LE);
  }

  set height(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get imageFormat() {
    return this.#view.getUint32(24, LE);
  }

  set imageFormat(value: Format) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get flowVectorFormat() {
    return this.#view.getUint32(28, LE);
  }

  set flowVectorFormat(value: Format) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get costFormat() {
    return this.#view.getUint32(32, LE);
  }

  set costFormat(value: Format) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get outputGridSize() {
    return this.#view.getUint32(36, LE);
  }

  set outputGridSize(value: OpticalFlowGridSizeFlagsNV) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get hintGridSize() {
    return this.#view.getUint32(40, LE);
  }

  set hintGridSize(value: OpticalFlowGridSizeFlagsNV) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get performanceLevel() {
    return this.#view.getUint32(44, LE);
  }

  set performanceLevel(value: OpticalFlowPerformanceLevelNV) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get flags() {
    return this.#view.getUint32(48, LE);
  }

  set flags(value: OpticalFlowSessionCreateFlagsNV) {
    this.#view.setUint32(48, Number(value), LE);
  }
}