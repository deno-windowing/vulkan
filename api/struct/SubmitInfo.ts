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
import { Semaphore, PipelineStageFlags, CommandBuffer } from "../def.ts";

export interface InitSubmitInfo {
  pNext?: AnyPointer;
  waitSemaphoreCount?: number;
  pWaitSemaphores?: AnyPointer;
  pWaitDstStageMask?: AnyPointer;
  commandBufferCount?: number;
  pCommandBuffers?: AnyPointer;
  signalSemaphoreCount?: number;
  pSignalSemaphores?: AnyPointer;
}

export class SubmitInfo implements BaseStruct {
  static size = 72;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSubmitInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSubmitInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SubmitInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SubmitInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SubmitInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.waitSemaphoreCount !== undefined) this.waitSemaphoreCount = data.waitSemaphoreCount;
      if (data.pWaitSemaphores !== undefined) this.pWaitSemaphores = data.pWaitSemaphores;
      if (data.pWaitDstStageMask !== undefined) this.pWaitDstStageMask = data.pWaitDstStageMask;
      if (data.commandBufferCount !== undefined) this.commandBufferCount = data.commandBufferCount;
      if (data.pCommandBuffers !== undefined) this.pCommandBuffers = data.pCommandBuffers;
      if (data.signalSemaphoreCount !== undefined) this.signalSemaphoreCount = data.signalSemaphoreCount;
      if (data.pSignalSemaphores !== undefined) this.pSignalSemaphores = data.pSignalSemaphores;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SubmitInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SUBMIT_INFO;
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

  get waitSemaphoreCount() {
    return this.#view.getUint32(16, LE);
  }

  set waitSemaphoreCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pWaitSemaphores() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pWaitSemaphores(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get pWaitDstStageMask() {
    return pointerFromView(this.#view, 32, LE);
  }

  set pWaitDstStageMask(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get commandBufferCount() {
    return this.#view.getUint32(40, LE);
  }

  set commandBufferCount(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get pCommandBuffers() {
    return pointerFromView(this.#view, 48, LE);
  }

  set pCommandBuffers(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }

  get signalSemaphoreCount() {
    return this.#view.getUint32(56, LE);
  }

  set signalSemaphoreCount(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get pSignalSemaphores() {
    return pointerFromView(this.#view, 64, LE);
  }

  set pSignalSemaphores(value: AnyPointer) {
    this.#view.setBigUint64(64, BigInt(anyPointer(value)), LE);
  }
}