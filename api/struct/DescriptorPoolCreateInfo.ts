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
import {DescriptorPoolSize} from "./DescriptorPoolSize.ts";
import { StructureType } from "../enum.ts";
import { DescriptorPoolCreateFlags } from "../def.ts";

export interface InitDescriptorPoolCreateInfo {
  pNext?: AnyPointer;
  flags?: DescriptorPoolCreateFlags;
  maxSets?: number;
  poolSizeCount?: number;
  pPoolSizes?: AnyPointer;
}

export class DescriptorPoolCreateInfo implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDescriptorPoolCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDescriptorPoolCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DescriptorPoolCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DescriptorPoolCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DescriptorPoolCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.maxSets !== undefined) this.maxSets = data.maxSets;
      if (data.poolSizeCount !== undefined) this.poolSizeCount = data.poolSizeCount;
      if (data.pPoolSizes !== undefined) this.pPoolSizes = data.pPoolSizes;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DescriptorPoolCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DESCRIPTOR_POOL_CREATE_INFO;
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

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: DescriptorPoolCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxSets(): number {
    return this.#view.getUint32(20, LE);
  }

  set maxSets(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get poolSizeCount(): number {
    return this.#view.getUint32(24, LE);
  }

  set poolSizeCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pPoolSizes(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pPoolSizes(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}