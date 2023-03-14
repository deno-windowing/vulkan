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
import {SemaphoreSubmitInfo} from "./SemaphoreSubmitInfo.ts";
import {CommandBufferSubmitInfo} from "./CommandBufferSubmitInfo.ts";
import { StructureType } from "../enum.ts";
import { SubmitFlags } from "../def.ts";

export interface InitSubmitInfo2 {
  pNext?: AnyPointer;
  flags?: SubmitFlags;
  waitSemaphoreInfoCount?: number;
  pWaitSemaphoreInfos?: AnyPointer;
  commandBufferInfoCount?: number;
  pCommandBufferInfos?: AnyPointer;
  signalSemaphoreInfoCount?: number;
  pSignalSemaphoreInfos?: AnyPointer;
}

export class SubmitInfo2 implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSubmitInfo2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSubmitInfo2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SubmitInfo2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SubmitInfo2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SubmitInfo2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.waitSemaphoreInfoCount !== undefined) this.waitSemaphoreInfoCount = data.waitSemaphoreInfoCount;
      if (data.pWaitSemaphoreInfos !== undefined) this.pWaitSemaphoreInfos = data.pWaitSemaphoreInfos;
      if (data.commandBufferInfoCount !== undefined) this.commandBufferInfoCount = data.commandBufferInfoCount;
      if (data.pCommandBufferInfos !== undefined) this.pCommandBufferInfos = data.pCommandBufferInfos;
      if (data.signalSemaphoreInfoCount !== undefined) this.signalSemaphoreInfoCount = data.signalSemaphoreInfoCount;
      if (data.pSignalSemaphoreInfos !== undefined) this.pSignalSemaphoreInfos = data.pSignalSemaphoreInfos;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SubmitInfo2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SUBMIT_INFO_2;
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

  get flags() {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: SubmitFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get waitSemaphoreInfoCount() {
    return this.#view.getUint32(20, LE);
  }

  set waitSemaphoreInfoCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pWaitSemaphoreInfos() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pWaitSemaphoreInfos(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get commandBufferInfoCount() {
    return this.#view.getUint32(32, LE);
  }

  set commandBufferInfoCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pCommandBufferInfos() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pCommandBufferInfos(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get signalSemaphoreInfoCount() {
    return this.#view.getUint32(48, LE);
  }

  set signalSemaphoreInfoCount(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get pSignalSemaphoreInfos() {
    return pointerFromView(this.#view, 56, LE);
  }

  set pSignalSemaphoreInfos(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }
}