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
import { StructureType, ExternalSemaphoreHandleTypeFlagBits } from "../enum.ts";
import { Semaphore } from "../def.ts";

export interface InitSemaphoreGetWin32HandleInfoKHR {
  pNext?: AnyPointer;
  semaphore?: Semaphore;
  handleType?: ExternalSemaphoreHandleTypeFlagBits;
}

export class SemaphoreGetWin32HandleInfoKHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSemaphoreGetWin32HandleInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSemaphoreGetWin32HandleInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SemaphoreGetWin32HandleInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SemaphoreGetWin32HandleInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SemaphoreGetWin32HandleInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.semaphore !== undefined) this.semaphore = data.semaphore;
      if (data.handleType !== undefined) this.handleType = data.handleType;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SemaphoreGetWin32HandleInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SEMAPHORE_GET_WIN32_HANDLE_INFO_KHR;
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

  get semaphore(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set semaphore(value: Semaphore) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get handleType(): number {
    return this.#view.getUint32(24, LE);
  }

  set handleType(value: ExternalSemaphoreHandleTypeFlagBits) {
    this.#view.setUint32(24, Number(value), LE);
  }
}