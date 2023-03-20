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
import { DeviceMemory, DeviceSize } from "../def.ts";

export interface InitMappedMemoryRange {
  pNext?: AnyPointer;
  memory?: DeviceMemory;
  offset?: DeviceSize;
  size?: DeviceSize;
}

export class MappedMemoryRange implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMappedMemoryRange);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMappedMemoryRange) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MappedMemoryRange.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MappedMemoryRange.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MappedMemoryRange.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.memory !== undefined) this.memory = data.memory;
      if (data.offset !== undefined) this.offset = data.offset;
      if (data.size !== undefined) this.size = data.size;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MappedMemoryRange.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.MAPPED_MEMORY_RANGE;
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

  get memory(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set memory(value: DeviceMemory) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get offset(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set offset(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get size(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set size(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }
}