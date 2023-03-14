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
import { DeviceSize, DeviceMemory, SparseMemoryBindFlags } from "../def.ts";

export interface InitSparseMemoryBind {
  resourceOffset?: DeviceSize;
  size?: DeviceSize;
  memory?: DeviceMemory;
  memoryOffset?: DeviceSize;
  flags?: SparseMemoryBindFlags;
}

export class SparseMemoryBind implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSparseMemoryBind);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSparseMemoryBind) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SparseMemoryBind.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SparseMemoryBind.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SparseMemoryBind.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.resourceOffset !== undefined) this.resourceOffset = data.resourceOffset;
      if (data.size !== undefined) this.size = data.size;
      if (data.memory !== undefined) this.memory = data.memory;
      if (data.memoryOffset !== undefined) this.memoryOffset = data.memoryOffset;
      if (data.flags !== undefined) this.flags = data.flags;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SparseMemoryBind.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get resourceOffset() {
    return this.#view.getBigUint64(0, LE);
  }

  set resourceOffset(value: DeviceSize) {
    this.#view.setBigUint64(0, BigInt(value), LE);
  }

  get size() {
    return this.#view.getBigUint64(8, LE);
  }

  set size(value: DeviceSize) {
    this.#view.setBigUint64(8, BigInt(value), LE);
  }

  get memory() {
    return pointerFromView(this.#view, 16, LE);
  }

  set memory(value: DeviceMemory) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get memoryOffset() {
    return this.#view.getBigUint64(24, LE);
  }

  set memoryOffset(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get flags() {
    return this.#view.getUint32(32, LE);
  }

  set flags(value: SparseMemoryBindFlags) {
    this.#view.setUint32(32, Number(value), LE);
  }
}