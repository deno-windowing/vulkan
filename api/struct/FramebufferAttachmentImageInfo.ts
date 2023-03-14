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
import { StructureType, Format } from "../enum.ts";
import { ImageCreateFlags, ImageUsageFlags } from "../def.ts";

export interface InitFramebufferAttachmentImageInfo {
  pNext?: AnyPointer;
  flags?: ImageCreateFlags;
  usage?: ImageUsageFlags;
  width?: number;
  height?: number;
  layerCount?: number;
  viewFormatCount?: number;
  pViewFormats?: AnyPointer;
}

export class FramebufferAttachmentImageInfo implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitFramebufferAttachmentImageInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitFramebufferAttachmentImageInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(FramebufferAttachmentImageInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < FramebufferAttachmentImageInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(FramebufferAttachmentImageInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.usage !== undefined) this.usage = data.usage;
      if (data.width !== undefined) this.width = data.width;
      if (data.height !== undefined) this.height = data.height;
      if (data.layerCount !== undefined) this.layerCount = data.layerCount;
      if (data.viewFormatCount !== undefined) this.viewFormatCount = data.viewFormatCount;
      if (data.pViewFormats !== undefined) this.pViewFormats = data.pViewFormats;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, FramebufferAttachmentImageInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.FRAMEBUFFER_ATTACHMENT_IMAGE_INFO;
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

  get flags() {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: ImageCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get usage() {
    return this.#view.getUint32(20, LE);
  }

  set usage(value: ImageUsageFlags) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get width() {
    return this.#view.getUint32(24, LE);
  }

  set width(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get height() {
    return this.#view.getUint32(28, LE);
  }

  set height(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get layerCount() {
    return this.#view.getUint32(32, LE);
  }

  set layerCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get viewFormatCount() {
    return this.#view.getUint32(36, LE);
  }

  set viewFormatCount(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get pViewFormats() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pViewFormats(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}