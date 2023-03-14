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
import {SpecializationMapEntry} from "./SpecializationMapEntry.ts";

export interface InitSpecializationInfo {
  mapEntryCount?: number;
  pMapEntries?: AnyPointer;
  dataSize?: number | bigint;
  pData?: AnyPointer;
}

export class SpecializationInfo implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSpecializationInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSpecializationInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SpecializationInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SpecializationInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SpecializationInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.mapEntryCount !== undefined) this.mapEntryCount = data.mapEntryCount;
      if (data.pMapEntries !== undefined) this.pMapEntries = data.pMapEntries;
      if (data.dataSize !== undefined) this.dataSize = data.dataSize;
      if (data.pData !== undefined) this.pData = data.pData;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SpecializationInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get mapEntryCount() {
    return this.#view.getUint32(0, LE);
  }

  set mapEntryCount(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pMapEntries() {
    return pointerFromView(this.#view, 8, LE);
  }

  set pMapEntries(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }

  get dataSize() {
    return this.#view.getBigUint64(16, LE);
  }

  set dataSize(value: number | bigint) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get pData() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pData(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}