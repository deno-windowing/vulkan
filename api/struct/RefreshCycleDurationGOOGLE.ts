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

export interface InitRefreshCycleDurationGOOGLE {
  refreshDuration?: number | bigint;
}

export class RefreshCycleDurationGOOGLE implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitRefreshCycleDurationGOOGLE);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitRefreshCycleDurationGOOGLE) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(RefreshCycleDurationGOOGLE.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < RefreshCycleDurationGOOGLE.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(RefreshCycleDurationGOOGLE.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.refreshDuration !== undefined) this.refreshDuration = data.refreshDuration;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, RefreshCycleDurationGOOGLE.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get refreshDuration(): bigint {
    return this.#view.getBigUint64(0, LE);
  }

  set refreshDuration(value: number | bigint) {
    this.#view.setBigUint64(0, BigInt(value), LE);
  }
}