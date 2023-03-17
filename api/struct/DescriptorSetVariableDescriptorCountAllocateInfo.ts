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

export interface InitDescriptorSetVariableDescriptorCountAllocateInfo {
  pNext?: AnyPointer;
  descriptorSetCount?: number;
  pDescriptorCounts?: AnyPointer;
}

export class DescriptorSetVariableDescriptorCountAllocateInfo implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDescriptorSetVariableDescriptorCountAllocateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDescriptorSetVariableDescriptorCountAllocateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DescriptorSetVariableDescriptorCountAllocateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DescriptorSetVariableDescriptorCountAllocateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DescriptorSetVariableDescriptorCountAllocateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.descriptorSetCount !== undefined) this.descriptorSetCount = data.descriptorSetCount;
      if (data.pDescriptorCounts !== undefined) this.pDescriptorCounts = data.pDescriptorCounts;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DescriptorSetVariableDescriptorCountAllocateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DESCRIPTOR_SET_VARIABLE_DESCRIPTOR_COUNT_ALLOCATE_INFO;
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

  get descriptorSetCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set descriptorSetCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pDescriptorCounts(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pDescriptorCounts(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}