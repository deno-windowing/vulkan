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
import {DescriptorImageInfo} from "./DescriptorImageInfo.ts";
import {DescriptorBufferInfo} from "./DescriptorBufferInfo.ts";
import { StructureType, DescriptorType } from "../enum.ts";
import { DescriptorSet, BufferView } from "../def.ts";

export interface InitWriteDescriptorSet {
  pNext?: AnyPointer;
  dstSet?: DescriptorSet;
  dstBinding?: number;
  dstArrayElement?: number;
  descriptorCount?: number;
  descriptorType?: DescriptorType;
  pImageInfo?: AnyPointer;
  pBufferInfo?: AnyPointer;
  pTexelBufferView?: AnyPointer;
}

export class WriteDescriptorSet implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitWriteDescriptorSet);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitWriteDescriptorSet) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(WriteDescriptorSet.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < WriteDescriptorSet.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(WriteDescriptorSet.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.dstSet !== undefined) this.dstSet = data.dstSet;
      if (data.dstBinding !== undefined) this.dstBinding = data.dstBinding;
      if (data.dstArrayElement !== undefined) this.dstArrayElement = data.dstArrayElement;
      if (data.descriptorCount !== undefined) this.descriptorCount = data.descriptorCount;
      if (data.descriptorType !== undefined) this.descriptorType = data.descriptorType;
      if (data.pImageInfo !== undefined) this.pImageInfo = data.pImageInfo;
      if (data.pBufferInfo !== undefined) this.pBufferInfo = data.pBufferInfo;
      if (data.pTexelBufferView !== undefined) this.pTexelBufferView = data.pTexelBufferView;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, WriteDescriptorSet.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.WRITE_DESCRIPTOR_SET;
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

  get dstSet(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set dstSet(value: DescriptorSet) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get dstBinding(): number {
    return this.#view.getUint32(24, LE);
  }

  set dstBinding(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get dstArrayElement(): number {
    return this.#view.getUint32(28, LE);
  }

  set dstArrayElement(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get descriptorCount(): number {
    return this.#view.getUint32(32, LE);
  }

  set descriptorCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get descriptorType(): number {
    return this.#view.getUint32(36, LE);
  }

  set descriptorType(value: DescriptorType) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get pImageInfo(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set pImageInfo(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get pBufferInfo(): Deno.PointerValue {
    return pointerFromView(this.#view, 48, LE);
  }

  set pBufferInfo(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }

  get pTexelBufferView(): Deno.PointerValue {
    return pointerFromView(this.#view, 56, LE);
  }

  set pTexelBufferView(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }
}