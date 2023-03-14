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

export interface InitAmigoProfilingSubmitInfoSEC {
  pNext?: AnyPointer;
  firstDrawTimestamp?: number | bigint;
  swapBufferTimestamp?: number | bigint;
}

export class AmigoProfilingSubmitInfoSEC implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAmigoProfilingSubmitInfoSEC);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAmigoProfilingSubmitInfoSEC) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AmigoProfilingSubmitInfoSEC.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AmigoProfilingSubmitInfoSEC.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AmigoProfilingSubmitInfoSEC.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.firstDrawTimestamp !== undefined) this.firstDrawTimestamp = data.firstDrawTimestamp;
      if (data.swapBufferTimestamp !== undefined) this.swapBufferTimestamp = data.swapBufferTimestamp;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AmigoProfilingSubmitInfoSEC.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.AMIGO_PROFILING_SUBMIT_INFO_SEC;
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

  get firstDrawTimestamp() {
    return this.#view.getBigUint64(16, LE);
  }

  set firstDrawTimestamp(value: number | bigint) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get swapBufferTimestamp() {
    return this.#view.getBigUint64(24, LE);
  }

  set swapBufferTimestamp(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }
}