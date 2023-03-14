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

export interface InitApplicationInfo {
  pNext?: AnyPointer;
  pApplicationName?: AnyPointer;
  applicationVersion?: number;
  pEngineName?: AnyPointer;
  engineVersion?: number;
  apiVersion?: number;
}

export class ApplicationInfo implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitApplicationInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitApplicationInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ApplicationInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ApplicationInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ApplicationInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.pApplicationName !== undefined) this.pApplicationName = data.pApplicationName;
      if (data.applicationVersion !== undefined) this.applicationVersion = data.applicationVersion;
      if (data.pEngineName !== undefined) this.pEngineName = data.pEngineName;
      if (data.engineVersion !== undefined) this.engineVersion = data.engineVersion;
      if (data.apiVersion !== undefined) this.apiVersion = data.apiVersion;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ApplicationInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.APPLICATION_INFO;
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

  get pApplicationName() {
    return pointerFromView(this.#view, 16, LE);
  }

  set pApplicationName(value: AnyPointer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get applicationVersion() {
    return this.#view.getUint32(24, LE);
  }

  set applicationVersion(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pEngineName() {
    return pointerFromView(this.#view, 32, LE);
  }

  set pEngineName(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get engineVersion() {
    return this.#view.getUint32(40, LE);
  }

  set engineVersion(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get apiVersion() {
    return this.#view.getUint32(44, LE);
  }

  set apiVersion(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }
}