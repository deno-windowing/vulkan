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
import { DescriptorPool, DescriptorSetLayout } from "../def.ts";

export interface InitDescriptorSetAllocateInfo {
  pNext?: AnyPointer;
  descriptorPool?: DescriptorPool;
  descriptorSetCount?: number;
  pSetLayouts?: AnyPointer;
}

export class DescriptorSetAllocateInfo implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDescriptorSetAllocateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDescriptorSetAllocateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DescriptorSetAllocateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DescriptorSetAllocateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DescriptorSetAllocateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.descriptorPool !== undefined) this.descriptorPool = data.descriptorPool;
      if (data.descriptorSetCount !== undefined) this.descriptorSetCount = data.descriptorSetCount;
      if (data.pSetLayouts !== undefined) this.pSetLayouts = data.pSetLayouts;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DescriptorSetAllocateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DESCRIPTOR_SET_ALLOCATE_INFO;
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

  get descriptorPool(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set descriptorPool(value: DescriptorPool) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get descriptorSetCount(): number {
    return this.#view.getUint32(24, LE);
  }

  set descriptorSetCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pSetLayouts(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pSetLayouts(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}