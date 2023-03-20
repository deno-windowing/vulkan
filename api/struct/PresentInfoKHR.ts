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
import { StructureType, Result } from "../enum.ts";
import { Semaphore, SwapchainKHR } from "../def.ts";

export interface InitPresentInfoKHR {
  pNext?: AnyPointer;
  waitSemaphoreCount?: number;
  pWaitSemaphores?: AnyPointer;
  swapchainCount?: number;
  pSwapchains?: AnyPointer;
  pImageIndices?: AnyPointer;
  pResults?: AnyPointer;
}

export class PresentInfoKHR implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPresentInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPresentInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PresentInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PresentInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PresentInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.waitSemaphoreCount !== undefined) this.waitSemaphoreCount = data.waitSemaphoreCount;
      if (data.pWaitSemaphores !== undefined) this.pWaitSemaphores = data.pWaitSemaphores;
      if (data.swapchainCount !== undefined) this.swapchainCount = data.swapchainCount;
      if (data.pSwapchains !== undefined) this.pSwapchains = data.pSwapchains;
      if (data.pImageIndices !== undefined) this.pImageIndices = data.pImageIndices;
      if (data.pResults !== undefined) this.pResults = data.pResults;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PresentInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PRESENT_INFO_KHR;
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

  get waitSemaphoreCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set waitSemaphoreCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pWaitSemaphores(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pWaitSemaphores(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get swapchainCount(): number {
    return this.#view.getUint32(32, LE);
  }

  set swapchainCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pSwapchains(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set pSwapchains(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get pImageIndices(): Deno.PointerValue {
    return pointerFromView(this.#view, 48, LE);
  }

  set pImageIndices(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }

  get pResults(): Deno.PointerValue {
    return pointerFromView(this.#view, 56, LE);
  }

  set pResults(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }
}