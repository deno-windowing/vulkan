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
import { DescriptorType } from "../enum.ts";

export interface InitDescriptorUpdateTemplateEntry {
  dstBinding?: number;
  dstArrayElement?: number;
  descriptorCount?: number;
  descriptorType?: DescriptorType;
  offset?: number | bigint;
  stride?: number | bigint;
}

export class DescriptorUpdateTemplateEntry implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDescriptorUpdateTemplateEntry);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDescriptorUpdateTemplateEntry) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DescriptorUpdateTemplateEntry.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DescriptorUpdateTemplateEntry.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DescriptorUpdateTemplateEntry.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.dstBinding !== undefined) this.dstBinding = data.dstBinding;
      if (data.dstArrayElement !== undefined) this.dstArrayElement = data.dstArrayElement;
      if (data.descriptorCount !== undefined) this.descriptorCount = data.descriptorCount;
      if (data.descriptorType !== undefined) this.descriptorType = data.descriptorType;
      if (data.offset !== undefined) this.offset = data.offset;
      if (data.stride !== undefined) this.stride = data.stride;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DescriptorUpdateTemplateEntry.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get dstBinding() {
    return this.#view.getUint32(0, LE);
  }

  set dstBinding(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get dstArrayElement() {
    return this.#view.getUint32(4, LE);
  }

  set dstArrayElement(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get descriptorCount() {
    return this.#view.getUint32(8, LE);
  }

  set descriptorCount(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get descriptorType() {
    return this.#view.getUint32(12, LE);
  }

  set descriptorType(value: DescriptorType) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get offset() {
    return this.#view.getBigUint64(16, LE);
  }

  set offset(value: number | bigint) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get stride() {
    return this.#view.getBigUint64(24, LE);
  }

  set stride(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }
}