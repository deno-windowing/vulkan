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
import { DeviceFaultVendorBinaryHeaderVersionEXT } from "../enum.ts";

export interface InitDeviceFaultVendorBinaryHeaderVersionOneEXT {
  headerSize?: number;
  headerVersion?: DeviceFaultVendorBinaryHeaderVersionEXT;
  vendorID?: number;
  deviceID?: number;
  driverVersion?: number;
  pipelineCacheUUID?: Uint8Array;
  applicationNameOffset?: number;
  applicationVersion?: number;
  engineNameOffset?: number;
}

export class DeviceFaultVendorBinaryHeaderVersionOneEXT implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDeviceFaultVendorBinaryHeaderVersionOneEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDeviceFaultVendorBinaryHeaderVersionOneEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DeviceFaultVendorBinaryHeaderVersionOneEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DeviceFaultVendorBinaryHeaderVersionOneEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DeviceFaultVendorBinaryHeaderVersionOneEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.headerSize !== undefined) this.headerSize = data.headerSize;
      if (data.headerVersion !== undefined) this.headerVersion = data.headerVersion;
      if (data.vendorID !== undefined) this.vendorID = data.vendorID;
      if (data.deviceID !== undefined) this.deviceID = data.deviceID;
      if (data.driverVersion !== undefined) this.driverVersion = data.driverVersion;
      if (data.pipelineCacheUUID !== undefined) this.pipelineCacheUUID = data.pipelineCacheUUID;
      if (data.applicationNameOffset !== undefined) this.applicationNameOffset = data.applicationNameOffset;
      if (data.applicationVersion !== undefined) this.applicationVersion = data.applicationVersion;
      if (data.engineNameOffset !== undefined) this.engineNameOffset = data.engineNameOffset;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DeviceFaultVendorBinaryHeaderVersionOneEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get headerSize(): number {
    return this.#view.getUint32(0, LE);
  }

  set headerSize(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get headerVersion(): number {
    return this.#view.getUint32(4, LE);
  }

  set headerVersion(value: DeviceFaultVendorBinaryHeaderVersionEXT) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get vendorID(): number {
    return this.#view.getUint32(8, LE);
  }

  set vendorID(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get deviceID(): number {
    return this.#view.getUint32(12, LE);
  }

  set deviceID(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get driverVersion(): number {
    return this.#view.getUint32(16, LE);
  }

  set driverVersion(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pipelineCacheUUID(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 20, 16);
  }

  set pipelineCacheUUID(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 20);
  }

  get applicationNameOffset(): number {
    return this.#view.getUint32(36, LE);
  }

  set applicationNameOffset(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get applicationVersion(): number {
    return this.#view.getUint32(40, LE);
  }

  set applicationVersion(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get engineNameOffset(): number {
    return this.#view.getUint32(44, LE);
  }

  set engineNameOffset(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }
}