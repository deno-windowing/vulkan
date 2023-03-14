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
import { DeviceAddress, DeviceSize } from "../def.ts";

export interface InitStridedDeviceAddressRegionKHR {
  deviceAddress?: DeviceAddress;
  stride?: DeviceSize;
  size?: DeviceSize;
}

export class StridedDeviceAddressRegionKHR implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStridedDeviceAddressRegionKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStridedDeviceAddressRegionKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StridedDeviceAddressRegionKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StridedDeviceAddressRegionKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StridedDeviceAddressRegionKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.deviceAddress !== undefined) this.deviceAddress = data.deviceAddress;
      if (data.stride !== undefined) this.stride = data.stride;
      if (data.size !== undefined) this.size = data.size;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StridedDeviceAddressRegionKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get deviceAddress() {
    return this.#view.getBigUint64(0, LE);
  }

  set deviceAddress(value: DeviceAddress) {
    this.#view.setBigUint64(0, BigInt(value), LE);
  }

  get stride() {
    return this.#view.getBigUint64(8, LE);
  }

  set stride(value: DeviceSize) {
    this.#view.setBigUint64(8, BigInt(value), LE);
  }

  get size() {
    return this.#view.getBigUint64(16, LE);
  }

  set size(value: DeviceSize) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }
}