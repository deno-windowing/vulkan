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
import { DeviceSize } from "../def.ts";

export interface InitMemoryRequirements {
  size?: DeviceSize;
  alignment?: DeviceSize;
  memoryTypeBits?: number;
}

export class MemoryRequirements implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMemoryRequirements);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMemoryRequirements) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MemoryRequirements.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MemoryRequirements.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MemoryRequirements.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.size !== undefined) this.size = data.size;
      if (data.alignment !== undefined) this.alignment = data.alignment;
      if (data.memoryTypeBits !== undefined) this.memoryTypeBits = data.memoryTypeBits;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MemoryRequirements.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get size(): bigint {
    return this.#view.getBigUint64(0, LE);
  }

  set size(value: DeviceSize) {
    this.#view.setBigUint64(0, BigInt(value), LE);
  }

  get alignment(): bigint {
    return this.#view.getBigUint64(8, LE);
  }

  set alignment(value: DeviceSize) {
    this.#view.setBigUint64(8, BigInt(value), LE);
  }

  get memoryTypeBits(): number {
    return this.#view.getUint32(16, LE);
  }

  set memoryTypeBits(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }
}