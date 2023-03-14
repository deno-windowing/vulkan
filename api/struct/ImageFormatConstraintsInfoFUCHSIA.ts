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
import {ImageCreateInfo} from "./ImageCreateInfo.ts";
import {SysmemColorSpaceFUCHSIA} from "./SysmemColorSpaceFUCHSIA.ts";
import { StructureType } from "../enum.ts";
import { FormatFeatureFlags, ImageFormatConstraintsFlagsFUCHSIA } from "../def.ts";

export interface InitImageFormatConstraintsInfoFUCHSIA {
  pNext?: AnyPointer;
  imageCreateInfo?: ImageCreateInfo;
  requiredFormatFeatures?: FormatFeatureFlags;
  flags?: ImageFormatConstraintsFlagsFUCHSIA;
  sysmemPixelFormat?: number | bigint;
  colorSpaceCount?: number;
  pColorSpaces?: AnyPointer;
}

export class ImageFormatConstraintsInfoFUCHSIA implements BaseStruct {
  static size = 136;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageFormatConstraintsInfoFUCHSIA);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageFormatConstraintsInfoFUCHSIA) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageFormatConstraintsInfoFUCHSIA.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageFormatConstraintsInfoFUCHSIA.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageFormatConstraintsInfoFUCHSIA.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.imageCreateInfo !== undefined) this.imageCreateInfo = data.imageCreateInfo;
      if (data.requiredFormatFeatures !== undefined) this.requiredFormatFeatures = data.requiredFormatFeatures;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.sysmemPixelFormat !== undefined) this.sysmemPixelFormat = data.sysmemPixelFormat;
      if (data.colorSpaceCount !== undefined) this.colorSpaceCount = data.colorSpaceCount;
      if (data.pColorSpaces !== undefined) this.pColorSpaces = data.pColorSpaces;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageFormatConstraintsInfoFUCHSIA.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IMAGE_FORMAT_CONSTRAINTS_INFO_FUCHSIA;
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

  get imageCreateInfo() {
    return new ImageCreateInfo(this.#data.subarray(16, 16 + ImageCreateInfo.size));
  }

  set imageCreateInfo(value: ImageCreateInfo) {
    if (value[BUFFER].byteLength < ImageCreateInfo.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get requiredFormatFeatures() {
    return this.#view.getUint32(104, LE);
  }

  set requiredFormatFeatures(value: FormatFeatureFlags) {
    this.#view.setUint32(104, Number(value), LE);
  }

  get flags() {
    return this.#view.getUint32(108, LE);
  }

  set flags(value: ImageFormatConstraintsFlagsFUCHSIA) {
    this.#view.setUint32(108, Number(value), LE);
  }

  get sysmemPixelFormat() {
    return this.#view.getBigUint64(112, LE);
  }

  set sysmemPixelFormat(value: number | bigint) {
    this.#view.setBigUint64(112, BigInt(value), LE);
  }

  get colorSpaceCount() {
    return this.#view.getUint32(120, LE);
  }

  set colorSpaceCount(value: number) {
    this.#view.setUint32(120, Number(value), LE);
  }

  get pColorSpaces() {
    return pointerFromView(this.#view, 128, LE);
  }

  set pColorSpaces(value: AnyPointer) {
    this.#view.setBigUint64(128, BigInt(anyPointer(value)), LE);
  }
}