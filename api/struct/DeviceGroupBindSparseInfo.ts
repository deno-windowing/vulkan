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

export interface InitDeviceGroupBindSparseInfo {
  pNext?: AnyPointer;
  resourceDeviceIndex?: number;
  memoryDeviceIndex?: number;
}

export class DeviceGroupBindSparseInfo implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDeviceGroupBindSparseInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDeviceGroupBindSparseInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DeviceGroupBindSparseInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DeviceGroupBindSparseInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DeviceGroupBindSparseInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.resourceDeviceIndex !== undefined) this.resourceDeviceIndex = data.resourceDeviceIndex;
      if (data.memoryDeviceIndex !== undefined) this.memoryDeviceIndex = data.memoryDeviceIndex;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DeviceGroupBindSparseInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEVICE_GROUP_BIND_SPARSE_INFO;
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

  get resourceDeviceIndex() {
    return this.#view.getUint32(16, LE);
  }

  set resourceDeviceIndex(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get memoryDeviceIndex() {
    return this.#view.getUint32(20, LE);
  }

  set memoryDeviceIndex(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }
}