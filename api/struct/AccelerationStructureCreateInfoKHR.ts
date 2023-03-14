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
import { StructureType, AccelerationStructureTypeKHR } from "../enum.ts";
import { AccelerationStructureCreateFlagsKHR, Buffer, DeviceSize, DeviceAddress } from "../def.ts";

export interface InitAccelerationStructureCreateInfoKHR {
  pNext?: AnyPointer;
  createFlags?: AccelerationStructureCreateFlagsKHR;
  buffer?: Buffer;
  offset?: DeviceSize;
  size?: DeviceSize;
  type?: AccelerationStructureTypeKHR;
  deviceAddress?: DeviceAddress;
}

export class AccelerationStructureCreateInfoKHR implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAccelerationStructureCreateInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAccelerationStructureCreateInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AccelerationStructureCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AccelerationStructureCreateInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AccelerationStructureCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.createFlags !== undefined) this.createFlags = data.createFlags;
      if (data.buffer !== undefined) this.buffer = data.buffer;
      if (data.offset !== undefined) this.offset = data.offset;
      if (data.size !== undefined) this.size = data.size;
      if (data.type !== undefined) this.type = data.type;
      if (data.deviceAddress !== undefined) this.deviceAddress = data.deviceAddress;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AccelerationStructureCreateInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ACCELERATION_STRUCTURE_CREATE_INFO_KHR;
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

  get createFlags() {
    return this.#view.getUint32(16, LE);
  }

  set createFlags(value: AccelerationStructureCreateFlagsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get buffer() {
    return pointerFromView(this.#view, 24, LE);
  }

  set buffer(value: Buffer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get offset() {
    return this.#view.getBigUint64(32, LE);
  }

  set offset(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get size() {
    return this.#view.getBigUint64(40, LE);
  }

  set size(value: DeviceSize) {
    this.#view.setBigUint64(40, BigInt(value), LE);
  }

  get type() {
    return this.#view.getUint32(48, LE);
  }

  set type(value: AccelerationStructureTypeKHR) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get deviceAddress() {
    return this.#view.getBigUint64(56, LE);
  }

  set deviceAddress(value: DeviceAddress) {
    this.#view.setBigUint64(56, BigInt(value), LE);
  }
}