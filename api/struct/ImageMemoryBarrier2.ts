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
import { PipelineStageFlags2, AccessFlags2, Image } from "../def.ts";

export interface InitImageMemoryBarrier2 {
  pNext?: AnyPointer;
  srcStageMask?: PipelineStageFlags2;
  srcAccessMask?: AccessFlags2;
  dstStageMask?: PipelineStageFlags2;
  dstAccessMask?: AccessFlags2;
  oldLayout?: ImageLayout;
  newLayout?: ImageLayout;
  srcQueueFamilyIndex?: number;
  dstQueueFamilyIndex?: number;
  image?: Image;
  subresourceRange?: ImageSubresourceRange;
}

export class ImageMemoryBarrier2 implements BaseStruct {
  static size = 96;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageMemoryBarrier2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageMemoryBarrier2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageMemoryBarrier2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageMemoryBarrier2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageMemoryBarrier2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.srcStageMask !== undefined) this.srcStageMask = data.srcStageMask;
      if (data.srcAccessMask !== undefined) this.srcAccessMask = data.srcAccessMask;
      if (data.dstStageMask !== undefined) this.dstStageMask = data.dstStageMask;
      if (data.dstAccessMask !== undefined) this.dstAccessMask = data.dstAccessMask;
      if (data.oldLayout !== undefined) this.oldLayout = data.oldLayout;
      if (data.newLayout !== undefined) this.newLayout = data.newLayout;
      if (data.srcQueueFamilyIndex !== undefined) this.srcQueueFamilyIndex = data.srcQueueFamilyIndex;
      if (data.dstQueueFamilyIndex !== undefined) this.dstQueueFamilyIndex = data.dstQueueFamilyIndex;
      if (data.image !== undefined) this.image = data.image;
      if (data.subresourceRange !== undefined) this.subresourceRange = data.subresourceRange;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageMemoryBarrier2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IMAGE_MEMORY_BARRIER_2;
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

  get srcStageMask(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set srcStageMask(value: PipelineStageFlags2) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get srcAccessMask(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set srcAccessMask(value: AccessFlags2) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get dstStageMask(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set dstStageMask(value: PipelineStageFlags2) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get dstAccessMask(): bigint {
    return this.#view.getBigUint64(40, LE);
  }

  set dstAccessMask(value: AccessFlags2) {
    this.#view.setBigUint64(40, BigInt(value), LE);
  }

  get oldLayout(): number {
    return this.#view.getUint32(48, LE);
  }

  set oldLayout(value: ImageLayout) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get newLayout(): number {
    return this.#view.getUint32(52, LE);
  }

  set newLayout(value: ImageLayout) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get srcQueueFamilyIndex(): number {
    return this.#view.getUint32(56, LE);
  }

  set srcQueueFamilyIndex(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get dstQueueFamilyIndex(): number {
    return this.#view.getUint32(60, LE);
  }

  set dstQueueFamilyIndex(value: number) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get image(): Deno.PointerValue {
    return pointerFromView(this.#view, 64, LE);
  }

  set image(value: Image) {
    this.#view.setBigUint64(64, BigInt(anyPointer(value)), LE);
  }

  get subresourceRange(): ImageSubresourceRange {
    return new ImageSubresourceRange(this.#data.subarray(72, 72 + ImageSubresourceRange.size));
  }

  set subresourceRange(value: ImageSubresourceRange) {
    if (value[BUFFER].byteLength < ImageSubresourceRange.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 72);
  }
}