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
import { DeviceQueueCreateFlags } from "../def.ts";

export interface InitDeviceQueueInfo2 {
  pNext?: AnyPointer;
  flags?: DeviceQueueCreateFlags;
  queueFamilyIndex?: number;
  queueIndex?: number;
}

export class DeviceQueueInfo2 implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDeviceQueueInfo2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDeviceQueueInfo2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DeviceQueueInfo2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DeviceQueueInfo2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DeviceQueueInfo2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.queueFamilyIndex !== undefined) this.queueFamilyIndex = data.queueFamilyIndex;
      if (data.queueIndex !== undefined) this.queueIndex = data.queueIndex;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DeviceQueueInfo2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEVICE_QUEUE_INFO_2;
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

  set flags(value: DeviceQueueCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get queueFamilyIndex() {
    return this.#view.getUint32(20, LE);
  }

  set queueFamilyIndex(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get queueIndex() {
    return this.#view.getUint32(24, LE);
  }

  set queueIndex(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }
}