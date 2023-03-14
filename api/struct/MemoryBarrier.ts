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
import { AccessFlags } from "../def.ts";

export interface InitMemoryBarrier {
  pNext?: AnyPointer;
  srcAccessMask?: AccessFlags;
  dstAccessMask?: AccessFlags;
}

export class MemoryBarrier implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMemoryBarrier);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMemoryBarrier) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MemoryBarrier.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MemoryBarrier.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MemoryBarrier.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.srcAccessMask !== undefined) this.srcAccessMask = data.srcAccessMask;
      if (data.dstAccessMask !== undefined) this.dstAccessMask = data.dstAccessMask;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MemoryBarrier.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.MEMORY_BARRIER;
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
}