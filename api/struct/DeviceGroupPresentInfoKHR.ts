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
import { StructureType, DeviceGroupPresentModeFlagBitsKHR } from "../enum.ts";

export interface InitDeviceGroupPresentInfoKHR {
  pNext?: AnyPointer;
  swapchainCount?: number;
  pDeviceMasks?: AnyPointer;
  mode?: DeviceGroupPresentModeFlagBitsKHR;
}

export class DeviceGroupPresentInfoKHR implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDeviceGroupPresentInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDeviceGroupPresentInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DeviceGroupPresentInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DeviceGroupPresentInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DeviceGroupPresentInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.swapchainCount !== undefined) this.swapchainCount = data.swapchainCount;
      if (data.pDeviceMasks !== undefined) this.pDeviceMasks = data.pDeviceMasks;
      if (data.mode !== undefined) this.mode = data.mode;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DeviceGroupPresentInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEVICE_GROUP_PRESENT_INFO_KHR;
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

  get swapchainCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set swapchainCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pDeviceMasks(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pDeviceMasks(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get mode(): number {
    return this.#view.getUint32(32, LE);
  }

  set mode(value: DeviceGroupPresentModeFlagBitsKHR) {
    this.#view.setUint32(32, Number(value), LE);
  }
}