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
import { StructureType, DeviceAddressBindingTypeEXT } from "../enum.ts";
import { DeviceAddressBindingFlagsEXT, DeviceAddress, DeviceSize } from "../def.ts";

export interface InitDeviceAddressBindingCallbackDataEXT {
  pNext?: AnyPointer;
  flags?: DeviceAddressBindingFlagsEXT;
  baseAddress?: DeviceAddress;
  size?: DeviceSize;
  bindingType?: DeviceAddressBindingTypeEXT;
}

export class DeviceAddressBindingCallbackDataEXT implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDeviceAddressBindingCallbackDataEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDeviceAddressBindingCallbackDataEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DeviceAddressBindingCallbackDataEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DeviceAddressBindingCallbackDataEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DeviceAddressBindingCallbackDataEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.baseAddress !== undefined) this.baseAddress = data.baseAddress;
      if (data.size !== undefined) this.size = data.size;
      if (data.bindingType !== undefined) this.bindingType = data.bindingType;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DeviceAddressBindingCallbackDataEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEVICE_ADDRESS_BINDING_CALLBACK_DATA_EXT;
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

  set flags(value: DeviceAddressBindingFlagsEXT) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get baseAddress() {
    return this.#view.getBigUint64(24, LE);
  }

  set baseAddress(value: DeviceAddress) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get size() {
    return this.#view.getBigUint64(32, LE);
  }

  set size(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get bindingType() {
    return this.#view.getUint32(40, LE);
  }

  set bindingType(value: DeviceAddressBindingTypeEXT) {
    this.#view.setUint32(40, Number(value), LE);
  }
}