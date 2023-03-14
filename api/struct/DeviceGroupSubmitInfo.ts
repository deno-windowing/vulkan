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

export interface InitDeviceGroupSubmitInfo {
  pNext?: AnyPointer;
  waitSemaphoreCount?: number;
  pWaitSemaphoreDeviceIndices?: AnyPointer;
  commandBufferCount?: number;
  pCommandBufferDeviceMasks?: AnyPointer;
  signalSemaphoreCount?: number;
  pSignalSemaphoreDeviceIndices?: AnyPointer;
}

export class DeviceGroupSubmitInfo implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDeviceGroupSubmitInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDeviceGroupSubmitInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DeviceGroupSubmitInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DeviceGroupSubmitInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DeviceGroupSubmitInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.waitSemaphoreCount !== undefined) this.waitSemaphoreCount = data.waitSemaphoreCount;
      if (data.pWaitSemaphoreDeviceIndices !== undefined) this.pWaitSemaphoreDeviceIndices = data.pWaitSemaphoreDeviceIndices;
      if (data.commandBufferCount !== undefined) this.commandBufferCount = data.commandBufferCount;
      if (data.pCommandBufferDeviceMasks !== undefined) this.pCommandBufferDeviceMasks = data.pCommandBufferDeviceMasks;
      if (data.signalSemaphoreCount !== undefined) this.signalSemaphoreCount = data.signalSemaphoreCount;
      if (data.pSignalSemaphoreDeviceIndices !== undefined) this.pSignalSemaphoreDeviceIndices = data.pSignalSemaphoreDeviceIndices;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DeviceGroupSubmitInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEVICE_GROUP_SUBMIT_INFO;
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

  get pWaitSemaphoreDeviceIndices() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pWaitSemaphoreDeviceIndices(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get commandBufferCount() {
    return this.#view.getUint32(32, LE);
  }

  set commandBufferCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pCommandBufferDeviceMasks() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pCommandBufferDeviceMasks(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get signalSemaphoreCount() {
    return this.#view.getUint32(48, LE);
  }

  set signalSemaphoreCount(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get pSignalSemaphoreDeviceIndices() {
    return pointerFromView(this.#view, 56, LE);
  }

  set pSignalSemaphoreDeviceIndices(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }
}