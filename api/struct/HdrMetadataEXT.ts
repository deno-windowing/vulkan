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
import {XYColorEXT} from "./XYColorEXT.ts";
import { StructureType } from "../enum.ts";

export interface InitHdrMetadataEXT {
  pNext?: AnyPointer;
  displayPrimaryRed?: XYColorEXT;
  displayPrimaryGreen?: XYColorEXT;
  displayPrimaryBlue?: XYColorEXT;
  whitePoint?: XYColorEXT;
  maxLuminance?: number;
  minLuminance?: number;
  maxContentLightLevel?: number;
  maxFrameAverageLightLevel?: number;
}

export class HdrMetadataEXT implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitHdrMetadataEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitHdrMetadataEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(HdrMetadataEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < HdrMetadataEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(HdrMetadataEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.displayPrimaryRed !== undefined) this.displayPrimaryRed = data.displayPrimaryRed;
      if (data.displayPrimaryGreen !== undefined) this.displayPrimaryGreen = data.displayPrimaryGreen;
      if (data.displayPrimaryBlue !== undefined) this.displayPrimaryBlue = data.displayPrimaryBlue;
      if (data.whitePoint !== undefined) this.whitePoint = data.whitePoint;
      if (data.maxLuminance !== undefined) this.maxLuminance = data.maxLuminance;
      if (data.minLuminance !== undefined) this.minLuminance = data.minLuminance;
      if (data.maxContentLightLevel !== undefined) this.maxContentLightLevel = data.maxContentLightLevel;
      if (data.maxFrameAverageLightLevel !== undefined) this.maxFrameAverageLightLevel = data.maxFrameAverageLightLevel;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, HdrMetadataEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.HDR_METADATA_EXT;
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

  get displayPrimaryRed() {
    return new XYColorEXT(this.#data.subarray(16, 16 + XYColorEXT.size));
  }

  set displayPrimaryRed(value: XYColorEXT) {
    if (value[BUFFER].byteLength < XYColorEXT.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get displayPrimaryGreen() {
    return new XYColorEXT(this.#data.subarray(24, 24 + XYColorEXT.size));
  }

  set displayPrimaryGreen(value: XYColorEXT) {
    if (value[BUFFER].byteLength < XYColorEXT.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 24);
  }

  get displayPrimaryBlue() {
    return new XYColorEXT(this.#data.subarray(32, 32 + XYColorEXT.size));
  }

  set displayPrimaryBlue(value: XYColorEXT) {
    if (value[BUFFER].byteLength < XYColorEXT.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 32);
  }

  get whitePoint() {
    return new XYColorEXT(this.#data.subarray(40, 40 + XYColorEXT.size));
  }

  set whitePoint(value: XYColorEXT) {
    if (value[BUFFER].byteLength < XYColorEXT.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 40);
  }

  get maxLuminance() {
    return this.#view.getFloat32(48, LE);
  }

  set maxLuminance(value: number) {
    this.#view.setFloat32(48, Number(value), LE);
  }

  get minLuminance() {
    return this.#view.getFloat32(52, LE);
  }

  set minLuminance(value: number) {
    this.#view.setFloat32(52, Number(value), LE);
  }

  get maxContentLightLevel() {
    return this.#view.getFloat32(56, LE);
  }

  set maxContentLightLevel(value: number) {
    this.#view.setFloat32(56, Number(value), LE);
  }

  get maxFrameAverageLightLevel() {
    return this.#view.getFloat32(60, LE);
  }

  set maxFrameAverageLightLevel(value: number) {
    this.#view.setFloat32(60, Number(value), LE);
  }
}