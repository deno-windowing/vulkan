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
import {MemoryBarrier2} from "./MemoryBarrier2.ts";
import {BufferMemoryBarrier2} from "./BufferMemoryBarrier2.ts";
import {ImageMemoryBarrier2} from "./ImageMemoryBarrier2.ts";
import { StructureType } from "../enum.ts";
import { DependencyFlags } from "../def.ts";

export interface InitDependencyInfo {
  pNext?: AnyPointer;
  dependencyFlags?: DependencyFlags;
  memoryBarrierCount?: number;
  pMemoryBarriers?: AnyPointer;
  bufferMemoryBarrierCount?: number;
  pBufferMemoryBarriers?: AnyPointer;
  imageMemoryBarrierCount?: number;
  pImageMemoryBarriers?: AnyPointer;
}

export class DependencyInfo implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDependencyInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDependencyInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DependencyInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DependencyInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DependencyInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.dependencyFlags !== undefined) this.dependencyFlags = data.dependencyFlags;
      if (data.memoryBarrierCount !== undefined) this.memoryBarrierCount = data.memoryBarrierCount;
      if (data.pMemoryBarriers !== undefined) this.pMemoryBarriers = data.pMemoryBarriers;
      if (data.bufferMemoryBarrierCount !== undefined) this.bufferMemoryBarrierCount = data.bufferMemoryBarrierCount;
      if (data.pBufferMemoryBarriers !== undefined) this.pBufferMemoryBarriers = data.pBufferMemoryBarriers;
      if (data.imageMemoryBarrierCount !== undefined) this.imageMemoryBarrierCount = data.imageMemoryBarrierCount;
      if (data.pImageMemoryBarriers !== undefined) this.pImageMemoryBarriers = data.pImageMemoryBarriers;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DependencyInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEPENDENCY_INFO;
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

  get dependencyFlags() {
    return this.#view.getUint32(16, LE);
  }

  set dependencyFlags(value: DependencyFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get memoryBarrierCount() {
    return this.#view.getUint32(20, LE);
  }

  set memoryBarrierCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pMemoryBarriers() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pMemoryBarriers(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get bufferMemoryBarrierCount() {
    return this.#view.getUint32(32, LE);
  }

  set bufferMemoryBarrierCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pBufferMemoryBarriers() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pBufferMemoryBarriers(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get imageMemoryBarrierCount() {
    return this.#view.getUint32(48, LE);
  }

  set imageMemoryBarrierCount(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get pImageMemoryBarriers() {
    return pointerFromView(this.#view, 56, LE);
  }

  set pImageMemoryBarriers(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }
}