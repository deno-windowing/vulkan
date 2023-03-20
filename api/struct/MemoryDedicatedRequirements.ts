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
import { Bool32 } from "../def.ts";

export interface InitMemoryDedicatedRequirements {
  pNext?: AnyPointer;
  prefersDedicatedAllocation?: Bool32;
  requiresDedicatedAllocation?: Bool32;
}

export class MemoryDedicatedRequirements implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMemoryDedicatedRequirements);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMemoryDedicatedRequirements) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MemoryDedicatedRequirements.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MemoryDedicatedRequirements.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MemoryDedicatedRequirements.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.prefersDedicatedAllocation !== undefined) this.prefersDedicatedAllocation = data.prefersDedicatedAllocation;
      if (data.requiresDedicatedAllocation !== undefined) this.requiresDedicatedAllocation = data.requiresDedicatedAllocation;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MemoryDedicatedRequirements.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.MEMORY_DEDICATED_REQUIREMENTS;
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

  get prefersDedicatedAllocation(): number {
    return this.#view.getUint32(16, LE);
  }

  set prefersDedicatedAllocation(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get requiresDedicatedAllocation(): number {
    return this.#view.getUint32(20, LE);
  }

  set requiresDedicatedAllocation(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }
}