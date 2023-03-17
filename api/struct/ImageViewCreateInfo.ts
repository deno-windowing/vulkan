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
import {ImageSubresourceRange} from "./ImageSubresourceRange.ts";
import { StructureType, ImageViewType, Format } from "../enum.ts";
import { ImageViewCreateFlags, Image } from "../def.ts";

export interface InitImageViewCreateInfo {
  pNext?: AnyPointer;
  flags?: ImageViewCreateFlags;
  image?: Image;
  viewType?: ImageViewType;
  format?: Format;
  components?: ComponentMapping;
  subresourceRange?: ImageSubresourceRange;
}

export class ImageViewCreateInfo implements BaseStruct {
  static size = 80;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageViewCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageViewCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageViewCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageViewCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageViewCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.image !== undefined) this.image = data.image;
      if (data.viewType !== undefined) this.viewType = data.viewType;
      if (data.format !== undefined) this.format = data.format;
      if (data.components !== undefined) this.components = data.components;
      if (data.subresourceRange !== undefined) this.subresourceRange = data.subresourceRange;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageViewCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IMAGE_VIEW_CREATE_INFO;
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

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: ImageViewCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get image(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set image(value: Image) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get viewType(): number {
    return this.#view.getUint32(32, LE);
  }

  set viewType(value: ImageViewType) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get format(): number {
    return this.#view.getUint32(36, LE);
  }

  set format(value: Format) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get components(): ComponentMapping {
    return new ComponentMapping(this.#data.subarray(40, 40 + ComponentMapping.size));
  }

  set components(value: ComponentMapping) {
    if (value[BUFFER].byteLength < ComponentMapping.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 40);
  }

  get subresourceRange(): ImageSubresourceRange {
    return new ImageSubresourceRange(this.#data.subarray(56, 56 + ImageSubresourceRange.size));
  }

  set subresourceRange(value: ImageSubresourceRange) {
    if (value[BUFFER].byteLength < ImageSubresourceRange.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 56);
  }
}