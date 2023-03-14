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

export interface InitAndroidHardwareBufferPropertiesANDROID {
  pNext?: AnyPointer;
  allocationSize?: DeviceSize;
  memoryTypeBits?: number;
}

export class AndroidHardwareBufferPropertiesANDROID implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAndroidHardwareBufferPropertiesANDROID);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAndroidHardwareBufferPropertiesANDROID) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AndroidHardwareBufferPropertiesANDROID.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AndroidHardwareBufferPropertiesANDROID.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AndroidHardwareBufferPropertiesANDROID.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.allocationSize !== undefined) this.allocationSize = data.allocationSize;
      if (data.memoryTypeBits !== undefined) this.memoryTypeBits = data.memoryTypeBits;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AndroidHardwareBufferPropertiesANDROID.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ANDROID_HARDWARE_BUFFER_PROPERTIES_ANDROID;
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

  get allocationSize() {
    return this.#view.getBigUint64(16, LE);
  }

  set allocationSize(value: DeviceSize) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get memoryTypeBits() {
    return this.#view.getUint32(24, LE);
  }

  set memoryTypeBits(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }
}