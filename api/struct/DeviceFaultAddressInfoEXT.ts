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
import { DeviceFaultAddressTypeEXT } from "../enum.ts";
import { DeviceAddress, DeviceSize } from "../def.ts";

export interface InitDeviceFaultAddressInfoEXT {
  addressType?: DeviceFaultAddressTypeEXT;
  reportedAddress?: DeviceAddress;
  addressPrecision?: DeviceSize;
}

export class DeviceFaultAddressInfoEXT implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDeviceFaultAddressInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDeviceFaultAddressInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DeviceFaultAddressInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DeviceFaultAddressInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DeviceFaultAddressInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.addressType !== undefined) this.addressType = data.addressType;
      if (data.reportedAddress !== undefined) this.reportedAddress = data.reportedAddress;
      if (data.addressPrecision !== undefined) this.addressPrecision = data.addressPrecision;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DeviceFaultAddressInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get addressType() {
    return this.#view.getUint32(0, LE);
  }

  set addressType(value: DeviceFaultAddressTypeEXT) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get reportedAddress() {
    return this.#view.getBigUint64(8, LE);
  }

  set reportedAddress(value: DeviceAddress) {
    this.#view.setBigUint64(8, BigInt(value), LE);
  }

  get addressPrecision() {
    return this.#view.getBigUint64(16, LE);
  }

  set addressPrecision(value: DeviceSize) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }
}