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
import { SemaphoreWaitFlags, Semaphore } from "../def.ts";

export interface InitSemaphoreWaitInfo {
  pNext?: AnyPointer;
  flags?: SemaphoreWaitFlags;
  semaphoreCount?: number;
  pSemaphores?: AnyPointer;
  pValues?: AnyPointer;
}

export class SemaphoreWaitInfo implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSemaphoreWaitInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSemaphoreWaitInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SemaphoreWaitInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SemaphoreWaitInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SemaphoreWaitInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.semaphoreCount !== undefined) this.semaphoreCount = data.semaphoreCount;
      if (data.pSemaphores !== undefined) this.pSemaphores = data.pSemaphores;
      if (data.pValues !== undefined) this.pValues = data.pValues;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SemaphoreWaitInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SEMAPHORE_WAIT_INFO;
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

  set flags(value: SemaphoreWaitFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get semaphoreCount(): number {
    return this.#view.getUint32(20, LE);
  }

  set semaphoreCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pSemaphores(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pSemaphores(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get pValues(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pValues(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}