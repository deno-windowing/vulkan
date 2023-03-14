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
import {ComponentMapping} from "./ComponentMapping.ts";
import { StructureType, Format, ImageType, ImageTiling } from "../enum.ts";
import { ImageCreateFlags, ImageUsageFlags } from "../def.ts";

export interface InitVideoFormatPropertiesKHR {
  pNext?: AnyPointer;
  format?: Format;
  componentMapping?: ComponentMapping;
  imageCreateFlags?: ImageCreateFlags;
  imageType?: ImageType;
  imageTiling?: ImageTiling;
  imageUsageFlags?: ImageUsageFlags;
}

export class VideoFormatPropertiesKHR implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoFormatPropertiesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoFormatPropertiesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoFormatPropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoFormatPropertiesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoFormatPropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.format !== undefined) this.format = data.format;
      if (data.componentMapping !== undefined) this.componentMapping = data.componentMapping;
      if (data.imageCreateFlags !== undefined) this.imageCreateFlags = data.imageCreateFlags;
      if (data.imageType !== undefined) this.imageType = data.imageType;
      if (data.imageTiling !== undefined) this.imageTiling = data.imageTiling;
      if (data.imageUsageFlags !== undefined) this.imageUsageFlags = data.imageUsageFlags;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoFormatPropertiesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_FORMAT_PROPERTIES_KHR;
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

  get format() {
    return this.#view.getUint32(16, LE);
  }

  set format(value: Format) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get componentMapping() {
    return new ComponentMapping(this.#data.subarray(20, 20 + ComponentMapping.size));
  }

  set componentMapping(value: ComponentMapping) {
    if (value[BUFFER].byteLength < ComponentMapping.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 20);
  }

  get imageCreateFlags() {
    return this.#view.getUint32(36, LE);
  }

  set imageCreateFlags(value: ImageCreateFlags) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get imageType() {
    return this.#view.getUint32(40, LE);
  }

  set imageType(value: ImageType) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get imageTiling() {
    return this.#view.getUint32(44, LE);
  }

  set imageTiling(value: ImageTiling) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get imageUsageFlags() {
    return this.#view.getUint32(48, LE);
  }

  set imageUsageFlags(value: ImageUsageFlags) {
    this.#view.setUint32(48, Number(value), LE);
  }
}