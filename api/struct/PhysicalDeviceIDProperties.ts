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
import { Bool32 } from "../def.ts";

export interface InitPhysicalDeviceIDProperties {
  pNext?: AnyPointer;
  deviceUUID?: Uint8Array;
  driverUUID?: Uint8Array;
  deviceLUID?: Uint8Array;
  deviceNodeMask?: number;
  deviceLUIDValid?: Bool32;
}

export class PhysicalDeviceIDProperties implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceIDProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceIDProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceIDProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceIDProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceIDProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.deviceUUID !== undefined) this.deviceUUID = data.deviceUUID;
      if (data.driverUUID !== undefined) this.driverUUID = data.driverUUID;
      if (data.deviceLUID !== undefined) this.deviceLUID = data.deviceLUID;
      if (data.deviceNodeMask !== undefined) this.deviceNodeMask = data.deviceNodeMask;
      if (data.deviceLUIDValid !== undefined) this.deviceLUIDValid = data.deviceLUIDValid;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceIDProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_ID_PROPERTIES;
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

  get deviceUUID() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 16, 16);
  }

  set deviceUUID(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 16);
  }

  get driverUUID() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 32, 16);
  }

  set driverUUID(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 32);
  }

  get deviceLUID() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 48, 8);
  }

  set deviceLUID(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 48);
  }

  get deviceNodeMask() {
    return this.#view.getUint32(56, LE);
  }

  set deviceNodeMask(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get deviceLUIDValid() {
    return this.#view.getUint32(60, LE);
  }

  set deviceLUIDValid(value: Bool32) {
    this.#view.setUint32(60, Number(value), LE);
  }
}