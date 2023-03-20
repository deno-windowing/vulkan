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
import {SparseBufferMemoryBindInfo} from "./SparseBufferMemoryBindInfo.ts";
import {SparseImageOpaqueMemoryBindInfo} from "./SparseImageOpaqueMemoryBindInfo.ts";
import {SparseImageMemoryBindInfo} from "./SparseImageMemoryBindInfo.ts";
import { StructureType } from "../enum.ts";
import { Semaphore } from "../def.ts";

export interface InitBindSparseInfo {
  pNext?: AnyPointer;
  waitSemaphoreCount?: number;
  pWaitSemaphores?: AnyPointer;
  bufferBindCount?: number;
  pBufferBinds?: AnyPointer;
  imageOpaqueBindCount?: number;
  pImageOpaqueBinds?: AnyPointer;
  imageBindCount?: number;
  pImageBinds?: AnyPointer;
  signalSemaphoreCount?: number;
  pSignalSemaphores?: AnyPointer;
}

export class BindSparseInfo implements BaseStruct {
  static size = 96;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBindSparseInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBindSparseInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BindSparseInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BindSparseInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BindSparseInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.waitSemaphoreCount !== undefined) this.waitSemaphoreCount = data.waitSemaphoreCount;
      if (data.pWaitSemaphores !== undefined) this.pWaitSemaphores = data.pWaitSemaphores;
      if (data.bufferBindCount !== undefined) this.bufferBindCount = data.bufferBindCount;
      if (data.pBufferBinds !== undefined) this.pBufferBinds = data.pBufferBinds;
      if (data.imageOpaqueBindCount !== undefined) this.imageOpaqueBindCount = data.imageOpaqueBindCount;
      if (data.pImageOpaqueBinds !== undefined) this.pImageOpaqueBinds = data.pImageOpaqueBinds;
      if (data.imageBindCount !== undefined) this.imageBindCount = data.imageBindCount;
      if (data.pImageBinds !== undefined) this.pImageBinds = data.pImageBinds;
      if (data.signalSemaphoreCount !== undefined) this.signalSemaphoreCount = data.signalSemaphoreCount;
      if (data.pSignalSemaphores !== undefined) this.pSignalSemaphores = data.pSignalSemaphores;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BindSparseInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.BIND_SPARSE_INFO;
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

  get bufferBindCount(): number {
    return this.#view.getUint32(32, LE);
  }

  set bufferBindCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pBufferBinds(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set pBufferBinds(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get imageOpaqueBindCount(): number {
    return this.#view.getUint32(48, LE);
  }

  set imageOpaqueBindCount(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get pImageOpaqueBinds(): Deno.PointerValue {
    return pointerFromView(this.#view, 56, LE);
  }

  set pImageOpaqueBinds(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }

  get imageBindCount(): number {
    return this.#view.getUint32(64, LE);
  }

  set imageBindCount(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get pImageBinds(): Deno.PointerValue {
    return pointerFromView(this.#view, 72, LE);
  }

  set pImageBinds(value: AnyPointer) {
    this.#view.setBigUint64(72, BigInt(anyPointer(value)), LE);
  }

  get signalSemaphoreCount(): number {
    return this.#view.getUint32(80, LE);
  }

  set signalSemaphoreCount(value: number) {
    this.#view.setUint32(80, Number(value), LE);
  }

  get pSignalSemaphores(): Deno.PointerValue {
    return pointerFromView(this.#view, 88, LE);
  }

  set pSignalSemaphores(value: AnyPointer) {
    this.#view.setBigUint64(88, BigInt(anyPointer(value)), LE);
  }
}