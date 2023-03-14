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
import {NativeBufferUsage2ANDROID} from "./NativeBufferUsage2ANDROID.ts";
import { StructureType } from "../enum.ts";

export interface InitNativeBufferANDROID {
  pNext?: AnyPointer;
  handle?: AnyPointer;
  stride?: number;
  format?: number;
  usage?: number;
  usage2?: NativeBufferUsage2ANDROID;
}

export class NativeBufferANDROID implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitNativeBufferANDROID);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitNativeBufferANDROID) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(NativeBufferANDROID.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < NativeBufferANDROID.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(NativeBufferANDROID.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.handle !== undefined) this.handle = data.handle;
      if (data.stride !== undefined) this.stride = data.stride;
      if (data.format !== undefined) this.format = data.format;
      if (data.usage !== undefined) this.usage = data.usage;
      if (data.usage2 !== undefined) this.usage2 = data.usage2;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, NativeBufferANDROID.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.NATIVE_BUFFER_ANDROID;
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

  get handle() {
    return pointerFromView(this.#view, 16, LE);
  }

  set handle(value: AnyPointer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get stride() {
    return this.#view.getInt32(24, LE);
  }

  set stride(value: number) {
    this.#view.setInt32(24, Number(value), LE);
  }

  get format() {
    return this.#view.getInt32(28, LE);
  }

  set format(value: number) {
    this.#view.setInt32(28, Number(value), LE);
  }

  get usage() {
    return this.#view.getInt32(32, LE);
  }

  set usage(value: number) {
    this.#view.setInt32(32, Number(value), LE);
  }

  get usage2() {
    return new NativeBufferUsage2ANDROID(this.#data.subarray(40, 40 + NativeBufferUsage2ANDROID.size));
  }

  set usage2(value: NativeBufferUsage2ANDROID) {
    if (value[BUFFER].byteLength < NativeBufferUsage2ANDROID.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 40);
  }
}