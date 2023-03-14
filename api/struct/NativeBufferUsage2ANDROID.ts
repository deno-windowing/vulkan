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

export interface InitNativeBufferUsage2ANDROID {
  consumer?: number | bigint;
  producer?: number | bigint;
}

export class NativeBufferUsage2ANDROID implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitNativeBufferUsage2ANDROID);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitNativeBufferUsage2ANDROID) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(NativeBufferUsage2ANDROID.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < NativeBufferUsage2ANDROID.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(NativeBufferUsage2ANDROID.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.consumer !== undefined) this.consumer = data.consumer;
      if (data.producer !== undefined) this.producer = data.producer;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, NativeBufferUsage2ANDROID.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get consumer() {
    return this.#view.getBigUint64(0, LE);
  }

  set consumer(value: number | bigint) {
    this.#view.setBigUint64(0, BigInt(value), LE);
  }

  get producer() {
    return this.#view.getBigUint64(8, LE);
  }

  set producer(value: number | bigint) {
    this.#view.setBigUint64(8, BigInt(value), LE);
  }
}