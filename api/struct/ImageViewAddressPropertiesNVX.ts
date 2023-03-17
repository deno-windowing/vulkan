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
import { DeviceAddress, DeviceSize } from "../def.ts";

export interface InitImageViewAddressPropertiesNVX {
  pNext?: AnyPointer;
  deviceAddress?: DeviceAddress;
  size?: DeviceSize;
}

export class ImageViewAddressPropertiesNVX implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageViewAddressPropertiesNVX);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageViewAddressPropertiesNVX) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageViewAddressPropertiesNVX.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageViewAddressPropertiesNVX.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageViewAddressPropertiesNVX.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.deviceAddress !== undefined) this.deviceAddress = data.deviceAddress;
      if (data.size !== undefined) this.size = data.size;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageViewAddressPropertiesNVX.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IMAGE_VIEW_ADDRESS_PROPERTIES_NVX;
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

  get deviceAddress(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set deviceAddress(value: DeviceAddress) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get size(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set size(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }
}