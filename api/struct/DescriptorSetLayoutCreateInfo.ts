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
import {DescriptorSetLayoutBinding} from "./DescriptorSetLayoutBinding.ts";
import { StructureType } from "../enum.ts";
import { DescriptorSetLayoutCreateFlags } from "../def.ts";

export interface InitDescriptorSetLayoutCreateInfo {
  pNext?: AnyPointer;
  flags?: DescriptorSetLayoutCreateFlags;
  bindingCount?: number;
  pBindings?: AnyPointer;
}

export class DescriptorSetLayoutCreateInfo implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDescriptorSetLayoutCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDescriptorSetLayoutCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DescriptorSetLayoutCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DescriptorSetLayoutCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DescriptorSetLayoutCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.bindingCount !== undefined) this.bindingCount = data.bindingCount;
      if (data.pBindings !== undefined) this.pBindings = data.pBindings;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DescriptorSetLayoutCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DESCRIPTOR_SET_LAYOUT_CREATE_INFO;
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

  set flags(value: DescriptorSetLayoutCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get bindingCount() {
    return this.#view.getUint32(20, LE);
  }

  set bindingCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pBindings() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pBindings(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}