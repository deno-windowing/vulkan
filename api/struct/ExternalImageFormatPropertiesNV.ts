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
import {ImageFormatProperties} from "./ImageFormatProperties.ts";
import { ExternalMemoryFeatureFlagsNV, ExternalMemoryHandleTypeFlagsNV } from "../def.ts";

export interface InitExternalImageFormatPropertiesNV {
  imageFormatProperties?: ImageFormatProperties;
  externalMemoryFeatures?: ExternalMemoryFeatureFlagsNV;
  exportFromImportedHandleTypes?: ExternalMemoryHandleTypeFlagsNV;
  compatibleHandleTypes?: ExternalMemoryHandleTypeFlagsNV;
}

export class ExternalImageFormatPropertiesNV implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitExternalImageFormatPropertiesNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitExternalImageFormatPropertiesNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ExternalImageFormatPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ExternalImageFormatPropertiesNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ExternalImageFormatPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.imageFormatProperties !== undefined) this.imageFormatProperties = data.imageFormatProperties;
      if (data.externalMemoryFeatures !== undefined) this.externalMemoryFeatures = data.externalMemoryFeatures;
      if (data.exportFromImportedHandleTypes !== undefined) this.exportFromImportedHandleTypes = data.exportFromImportedHandleTypes;
      if (data.compatibleHandleTypes !== undefined) this.compatibleHandleTypes = data.compatibleHandleTypes;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ExternalImageFormatPropertiesNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get imageFormatProperties(): ImageFormatProperties {
    return new ImageFormatProperties(this.#data.subarray(0, 0 + ImageFormatProperties.size));
  }

  set imageFormatProperties(value: ImageFormatProperties) {
    if (value[BUFFER].byteLength < ImageFormatProperties.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get externalMemoryFeatures(): number {
    return this.#view.getUint32(32, LE);
  }

  set externalMemoryFeatures(value: ExternalMemoryFeatureFlagsNV) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get exportFromImportedHandleTypes(): number {
    return this.#view.getUint32(36, LE);
  }

  set exportFromImportedHandleTypes(value: ExternalMemoryHandleTypeFlagsNV) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get compatibleHandleTypes(): number {
    return this.#view.getUint32(40, LE);
  }

  set compatibleHandleTypes(value: ExternalMemoryHandleTypeFlagsNV) {
    this.#view.setUint32(40, Number(value), LE);
  }
}