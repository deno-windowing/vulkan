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
import { AccelerationStructureKHR } from "../def.ts";

export interface InitWriteDescriptorSetAccelerationStructureKHR {
  pNext?: AnyPointer;
  accelerationStructureCount?: number;
  pAccelerationStructures?: AnyPointer;
}

export class WriteDescriptorSetAccelerationStructureKHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitWriteDescriptorSetAccelerationStructureKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitWriteDescriptorSetAccelerationStructureKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(WriteDescriptorSetAccelerationStructureKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < WriteDescriptorSetAccelerationStructureKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(WriteDescriptorSetAccelerationStructureKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.accelerationStructureCount !== undefined) this.accelerationStructureCount = data.accelerationStructureCount;
      if (data.pAccelerationStructures !== undefined) this.pAccelerationStructures = data.pAccelerationStructures;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, WriteDescriptorSetAccelerationStructureKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.WRITE_DESCRIPTOR_SET_ACCELERATION_STRUCTURE_KHR;
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

  get accelerationStructureCount() {
    return this.#view.getUint32(16, LE);
  }

  set accelerationStructureCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pAccelerationStructures() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pAccelerationStructures(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}