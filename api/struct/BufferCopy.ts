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

export interface InitBufferCopy {
  srcOffset?: DeviceSize;
  dstOffset?: DeviceSize;
  size?: DeviceSize;
}

export class BufferCopy implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBufferCopy);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBufferCopy) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BufferCopy.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BufferCopy.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BufferCopy.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.srcOffset !== undefined) this.srcOffset = data.srcOffset;
      if (data.dstOffset !== undefined) this.dstOffset = data.dstOffset;
      if (data.size !== undefined) this.size = data.size;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BufferCopy.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get srcOffset(): bigint {
    return this.#view.getBigUint64(0, LE);
  }

  set srcOffset(value: DeviceSize) {
    this.#view.setBigUint64(0, BigInt(value), LE);
  }

  get dstOffset(): bigint {
    return this.#view.getBigUint64(8, LE);
  }

  set dstOffset(value: DeviceSize) {
    this.#view.setBigUint64(8, BigInt(value), LE);
  }

  get size(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set size(value: DeviceSize) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }
}