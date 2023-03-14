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
import { DeviceSize } from "../def.ts";

export interface InitDeviceFaultCountsEXT {
  pNext?: AnyPointer;
  addressInfoCount?: number;
  vendorInfoCount?: number;
  vendorBinarySize?: DeviceSize;
}

export class DeviceFaultCountsEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDeviceFaultCountsEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDeviceFaultCountsEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DeviceFaultCountsEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DeviceFaultCountsEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DeviceFaultCountsEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.addressInfoCount !== undefined) this.addressInfoCount = data.addressInfoCount;
      if (data.vendorInfoCount !== undefined) this.vendorInfoCount = data.vendorInfoCount;
      if (data.vendorBinarySize !== undefined) this.vendorBinarySize = data.vendorBinarySize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DeviceFaultCountsEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEVICE_FAULT_COUNTS_EXT;
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

  get addressInfoCount() {
    return this.#view.getUint32(16, LE);
  }

  set addressInfoCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get vendorInfoCount() {
    return this.#view.getUint32(20, LE);
  }

  set vendorInfoCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get vendorBinarySize() {
    return this.#view.getBigUint64(24, LE);
  }

  set vendorBinarySize(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }
}