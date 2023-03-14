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
import { StructureType, Format } from "../enum.ts";
import { DeviceAddress, DeviceSize } from "../def.ts";

export interface InitDescriptorAddressInfoEXT {
  pNext?: AnyPointer;
  address?: DeviceAddress;
  range?: DeviceSize;
  format?: Format;
}

export class DescriptorAddressInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDescriptorAddressInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDescriptorAddressInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DescriptorAddressInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DescriptorAddressInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DescriptorAddressInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.address !== undefined) this.address = data.address;
      if (data.range !== undefined) this.range = data.range;
      if (data.format !== undefined) this.format = data.format;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DescriptorAddressInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DESCRIPTOR_ADDRESS_INFO_EXT;
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

  get address() {
    return this.#view.getBigUint64(16, LE);
  }

  set address(value: DeviceAddress) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get range() {
    return this.#view.getBigUint64(24, LE);
  }

  set range(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get format() {
    return this.#view.getUint32(32, LE);
  }

  set format(value: Format) {
    this.#view.setUint32(32, Number(value), LE);
  }
}