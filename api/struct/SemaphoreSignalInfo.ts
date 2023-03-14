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
import { Semaphore } from "../def.ts";

export interface InitSemaphoreSignalInfo {
  pNext?: AnyPointer;
  semaphore?: Semaphore;
  value?: number | bigint;
}

export class SemaphoreSignalInfo implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSemaphoreSignalInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSemaphoreSignalInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SemaphoreSignalInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SemaphoreSignalInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SemaphoreSignalInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.semaphore !== undefined) this.semaphore = data.semaphore;
      if (data.value !== undefined) this.value = data.value;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SemaphoreSignalInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SEMAPHORE_SIGNAL_INFO;
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

  get semaphore() {
    return pointerFromView(this.#view, 16, LE);
  }

  set semaphore(value: Semaphore) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get value() {
    return this.#view.getBigUint64(24, LE);
  }

  set value(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }
}