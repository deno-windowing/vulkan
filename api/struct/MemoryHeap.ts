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
import { DeviceSize, MemoryHeapFlags } from "../def.ts";

export interface InitMemoryHeap {
  size?: DeviceSize;
  flags?: MemoryHeapFlags;
}

export class MemoryHeap implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMemoryHeap);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMemoryHeap) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MemoryHeap.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MemoryHeap.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MemoryHeap.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.size !== undefined) this.size = data.size;
      if (data.flags !== undefined) this.flags = data.flags;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MemoryHeap.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get size() {
    return this.#view.getBigUint64(0, LE);
  }

  set size(value: DeviceSize) {
    this.#view.setBigUint64(0, BigInt(value), LE);
  }

  get flags() {
    return this.#view.getUint32(8, LE);
  }

  set flags(value: MemoryHeapFlags) {
    this.#view.setUint32(8, Number(value), LE);
  }
}