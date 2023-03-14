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
import {ImageSubresourceRange} from "./ImageSubresourceRange.ts";
import { StructureType, ImageLayout } from "../enum.ts";
import { AccessFlags, Image } from "../def.ts";

export interface InitImageMemoryBarrier {
  pNext?: AnyPointer;
  srcAccessMask?: AccessFlags;
  dstAccessMask?: AccessFlags;
  oldLayout?: ImageLayout;
  newLayout?: ImageLayout;
  srcQueueFamilyIndex?: number;
  dstQueueFamilyIndex?: number;
  image?: Image;
  subresourceRange?: ImageSubresourceRange;
}

export class ImageMemoryBarrier implements BaseStruct {
  static size = 72;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageMemoryBarrier);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageMemoryBarrier) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageMemoryBarrier.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageMemoryBarrier.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageMemoryBarrier.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.srcAccessMask !== undefined) this.srcAccessMask = data.srcAccessMask;
      if (data.dstAccessMask !== undefined) this.dstAccessMask = data.dstAccessMask;
      if (data.oldLayout !== undefined) this.oldLayout = data.oldLayout;
      if (data.newLayout !== undefined) this.newLayout = data.newLayout;
      if (data.srcQueueFamilyIndex !== undefined) this.srcQueueFamilyIndex = data.srcQueueFamilyIndex;
      if (data.dstQueueFamilyIndex !== undefined) this.dstQueueFamilyIndex = data.dstQueueFamilyIndex;
      if (data.image !== undefined) this.image = data.image;
      if (data.subresourceRange !== undefined) this.subresourceRange = data.subresourceRange;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageMemoryBarrier.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IMAGE_MEMORY_BARRIER;
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

  get srcAccessMask() {
    return this.#view.getUint32(16, LE);
  }

  set srcAccessMask(value: AccessFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get dstAccessMask() {
    return this.#view.getUint32(20, LE);
  }

  set dstAccessMask(value: AccessFlags) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get oldLayout() {
    return this.#view.getUint32(24, LE);
  }

  set oldLayout(value: ImageLayout) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get newLayout() {
    return this.#view.getUint32(28, LE);
  }

  set newLayout(value: ImageLayout) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get srcQueueFamilyIndex() {
    return this.#view.getUint32(32, LE);
  }

  set srcQueueFamilyIndex(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get dstQueueFamilyIndex() {
    return this.#view.getUint32(36, LE);
  }

  set dstQueueFamilyIndex(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get image() {
    return pointerFromView(this.#view, 40, LE);
  }

  set image(value: Image) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get subresourceRange() {
    return new ImageSubresourceRange(this.#data.subarray(48, 48 + ImageSubresourceRange.size));
  }

  set subresourceRange(value: ImageSubresourceRange) {
    if (value[BUFFER].byteLength < ImageSubresourceRange.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 48);
  }
}