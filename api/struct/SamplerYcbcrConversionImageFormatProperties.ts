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

export interface InitSamplerYcbcrConversionImageFormatProperties {
  pNext?: AnyPointer;
  combinedImageSamplerDescriptorCount?: number;
}

export class SamplerYcbcrConversionImageFormatProperties implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSamplerYcbcrConversionImageFormatProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSamplerYcbcrConversionImageFormatProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SamplerYcbcrConversionImageFormatProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SamplerYcbcrConversionImageFormatProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SamplerYcbcrConversionImageFormatProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.combinedImageSamplerDescriptorCount !== undefined) this.combinedImageSamplerDescriptorCount = data.combinedImageSamplerDescriptorCount;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SamplerYcbcrConversionImageFormatProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SAMPLER_YCBCR_CONVERSION_IMAGE_FORMAT_PROPERTIES;
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

  get combinedImageSamplerDescriptorCount() {
    return this.#view.getUint32(16, LE);
  }

  set combinedImageSamplerDescriptorCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }
}