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

export interface InitPhysicalDeviceInlineUniformBlockProperties {
  pNext?: AnyPointer;
  maxInlineUniformBlockSize?: number;
  maxPerStageDescriptorInlineUniformBlocks?: number;
  maxPerStageDescriptorUpdateAfterBindInlineUniformBlocks?: number;
  maxDescriptorSetInlineUniformBlocks?: number;
  maxDescriptorSetUpdateAfterBindInlineUniformBlocks?: number;
}

export class PhysicalDeviceInlineUniformBlockProperties implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceInlineUniformBlockProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceInlineUniformBlockProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceInlineUniformBlockProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceInlineUniformBlockProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceInlineUniformBlockProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxInlineUniformBlockSize !== undefined) this.maxInlineUniformBlockSize = data.maxInlineUniformBlockSize;
      if (data.maxPerStageDescriptorInlineUniformBlocks !== undefined) this.maxPerStageDescriptorInlineUniformBlocks = data.maxPerStageDescriptorInlineUniformBlocks;
      if (data.maxPerStageDescriptorUpdateAfterBindInlineUniformBlocks !== undefined) this.maxPerStageDescriptorUpdateAfterBindInlineUniformBlocks = data.maxPerStageDescriptorUpdateAfterBindInlineUniformBlocks;
      if (data.maxDescriptorSetInlineUniformBlocks !== undefined) this.maxDescriptorSetInlineUniformBlocks = data.maxDescriptorSetInlineUniformBlocks;
      if (data.maxDescriptorSetUpdateAfterBindInlineUniformBlocks !== undefined) this.maxDescriptorSetUpdateAfterBindInlineUniformBlocks = data.maxDescriptorSetUpdateAfterBindInlineUniformBlocks;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceInlineUniformBlockProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_INLINE_UNIFORM_BLOCK_PROPERTIES;
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

  get maxInlineUniformBlockSize(): number {
    return this.#view.getUint32(16, LE);
  }

  set maxInlineUniformBlockSize(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxPerStageDescriptorInlineUniformBlocks(): number {
    return this.#view.getUint32(20, LE);
  }

  set maxPerStageDescriptorInlineUniformBlocks(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get maxPerStageDescriptorUpdateAfterBindInlineUniformBlocks(): number {
    return this.#view.getUint32(24, LE);
  }

  set maxPerStageDescriptorUpdateAfterBindInlineUniformBlocks(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get maxDescriptorSetInlineUniformBlocks(): number {
    return this.#view.getUint32(28, LE);
  }

  set maxDescriptorSetInlineUniformBlocks(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindInlineUniformBlocks(): number {
    return this.#view.getUint32(32, LE);
  }

  set maxDescriptorSetUpdateAfterBindInlineUniformBlocks(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }
}