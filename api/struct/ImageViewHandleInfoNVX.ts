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
import { StructureType, DescriptorType } from "../enum.ts";
import { ImageView, Sampler } from "../def.ts";

export interface InitImageViewHandleInfoNVX {
  pNext?: AnyPointer;
  imageView?: ImageView;
  descriptorType?: DescriptorType;
  sampler?: Sampler;
}

export class ImageViewHandleInfoNVX implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageViewHandleInfoNVX);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageViewHandleInfoNVX) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageViewHandleInfoNVX.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageViewHandleInfoNVX.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageViewHandleInfoNVX.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.imageView !== undefined) this.imageView = data.imageView;
      if (data.descriptorType !== undefined) this.descriptorType = data.descriptorType;
      if (data.sampler !== undefined) this.sampler = data.sampler;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageViewHandleInfoNVX.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IMAGE_VIEW_HANDLE_INFO_NVX;
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

  get imageView() {
    return pointerFromView(this.#view, 16, LE);
  }

  set imageView(value: ImageView) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get descriptorType() {
    return this.#view.getUint32(24, LE);
  }

  set descriptorType(value: DescriptorType) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get sampler() {
    return pointerFromView(this.#view, 32, LE);
  }

  set sampler(value: Sampler) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}