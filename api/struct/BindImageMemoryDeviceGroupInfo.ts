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
import {Rect2D} from "./Rect2D.ts";
import { StructureType } from "../enum.ts";

export interface InitBindImageMemoryDeviceGroupInfo {
  pNext?: AnyPointer;
  deviceIndexCount?: number;
  pDeviceIndices?: AnyPointer;
  splitInstanceBindRegionCount?: number;
  pSplitInstanceBindRegions?: AnyPointer;
}

export class BindImageMemoryDeviceGroupInfo implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBindImageMemoryDeviceGroupInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBindImageMemoryDeviceGroupInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BindImageMemoryDeviceGroupInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BindImageMemoryDeviceGroupInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BindImageMemoryDeviceGroupInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.deviceIndexCount !== undefined) this.deviceIndexCount = data.deviceIndexCount;
      if (data.pDeviceIndices !== undefined) this.pDeviceIndices = data.pDeviceIndices;
      if (data.splitInstanceBindRegionCount !== undefined) this.splitInstanceBindRegionCount = data.splitInstanceBindRegionCount;
      if (data.pSplitInstanceBindRegions !== undefined) this.pSplitInstanceBindRegions = data.pSplitInstanceBindRegions;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BindImageMemoryDeviceGroupInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.BIND_IMAGE_MEMORY_DEVICE_GROUP_INFO;
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

  get splitInstanceBindRegionCount() {
    return this.#view.getUint32(32, LE);
  }

  set splitInstanceBindRegionCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pSplitInstanceBindRegions() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pSplitInstanceBindRegions(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}