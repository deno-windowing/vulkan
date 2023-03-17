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
import { AccelerationStructureNV, DeviceMemory, DeviceSize } from "../def.ts";

export interface InitBindAccelerationStructureMemoryInfoNV {
  pNext?: AnyPointer;
  accelerationStructure?: AccelerationStructureNV;
  memory?: DeviceMemory;
  memoryOffset?: DeviceSize;
  deviceIndexCount?: number;
  pDeviceIndices?: AnyPointer;
}

export class BindAccelerationStructureMemoryInfoNV implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBindAccelerationStructureMemoryInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBindAccelerationStructureMemoryInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BindAccelerationStructureMemoryInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BindAccelerationStructureMemoryInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BindAccelerationStructureMemoryInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.accelerationStructure !== undefined) this.accelerationStructure = data.accelerationStructure;
      if (data.memory !== undefined) this.memory = data.memory;
      if (data.memoryOffset !== undefined) this.memoryOffset = data.memoryOffset;
      if (data.deviceIndexCount !== undefined) this.deviceIndexCount = data.deviceIndexCount;
      if (data.pDeviceIndices !== undefined) this.pDeviceIndices = data.pDeviceIndices;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BindAccelerationStructureMemoryInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.BIND_ACCELERATION_STRUCTURE_MEMORY_INFO_NV;
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

  get accelerationStructure(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set accelerationStructure(value: AccelerationStructureNV) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get memory(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set memory(value: DeviceMemory) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get memoryOffset(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set memoryOffset(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get deviceIndexCount(): number {
    return this.#view.getUint32(40, LE);
  }

  set deviceIndexCount(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get pDeviceIndices(): Deno.PointerValue {
    return pointerFromView(this.#view, 48, LE);
  }

  set pDeviceIndices(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }
}