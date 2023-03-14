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
import { StructureType, SharingMode } from "../enum.ts";
import { BufferCreateFlags, DeviceSize, BufferUsageFlags } from "../def.ts";

export interface InitBufferCreateInfo {
  pNext?: AnyPointer;
  flags?: BufferCreateFlags;
  size?: DeviceSize;
  usage?: BufferUsageFlags;
  sharingMode?: SharingMode;
  queueFamilyIndexCount?: number;
  pQueueFamilyIndices?: AnyPointer;
}

export class BufferCreateInfo implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBufferCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBufferCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BufferCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BufferCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BufferCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.size !== undefined) this.size = data.size;
      if (data.usage !== undefined) this.usage = data.usage;
      if (data.sharingMode !== undefined) this.sharingMode = data.sharingMode;
      if (data.queueFamilyIndexCount !== undefined) this.queueFamilyIndexCount = data.queueFamilyIndexCount;
      if (data.pQueueFamilyIndices !== undefined) this.pQueueFamilyIndices = data.pQueueFamilyIndices;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BufferCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.BUFFER_CREATE_INFO;
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

  set flags(value: BufferCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get size() {
    return this.#view.getBigUint64(24, LE);
  }

  set size(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get usage() {
    return this.#view.getUint32(32, LE);
  }

  set usage(value: BufferUsageFlags) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get sharingMode() {
    return this.#view.getUint32(36, LE);
  }

  set sharingMode(value: SharingMode) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get queueFamilyIndexCount() {
    return this.#view.getUint32(40, LE);
  }

  set queueFamilyIndexCount(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get pQueueFamilyIndices() {
    return pointerFromView(this.#view, 48, LE);
  }

  set pQueueFamilyIndices(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }
}