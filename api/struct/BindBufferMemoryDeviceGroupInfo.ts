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

export interface InitBindBufferMemoryDeviceGroupInfo {
  pNext?: AnyPointer;
  deviceIndexCount?: number;
  pDeviceIndices?: AnyPointer;
}

export class BindBufferMemoryDeviceGroupInfo implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBindBufferMemoryDeviceGroupInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBindBufferMemoryDeviceGroupInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BindBufferMemoryDeviceGroupInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BindBufferMemoryDeviceGroupInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BindBufferMemoryDeviceGroupInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.deviceIndexCount !== undefined) this.deviceIndexCount = data.deviceIndexCount;
      if (data.pDeviceIndices !== undefined) this.pDeviceIndices = data.pDeviceIndices;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BindBufferMemoryDeviceGroupInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.BIND_BUFFER_MEMORY_DEVICE_GROUP_INFO;
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

  get deviceIndexCount() {
    return this.#view.getUint32(16, LE);
  }

  set deviceIndexCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pDeviceIndices() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pDeviceIndices(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}