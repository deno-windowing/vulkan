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

export interface InitPastPresentationTimingGOOGLE {
  presentID?: number;
  desiredPresentTime?: number | bigint;
  actualPresentTime?: number | bigint;
  earliestPresentTime?: number | bigint;
  presentMargin?: number | bigint;
}

export class PastPresentationTimingGOOGLE implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPastPresentationTimingGOOGLE);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPastPresentationTimingGOOGLE) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PastPresentationTimingGOOGLE.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PastPresentationTimingGOOGLE.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PastPresentationTimingGOOGLE.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.presentID !== undefined) this.presentID = data.presentID;
      if (data.desiredPresentTime !== undefined) this.desiredPresentTime = data.desiredPresentTime;
      if (data.actualPresentTime !== undefined) this.actualPresentTime = data.actualPresentTime;
      if (data.earliestPresentTime !== undefined) this.earliestPresentTime = data.earliestPresentTime;
      if (data.presentMargin !== undefined) this.presentMargin = data.presentMargin;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PastPresentationTimingGOOGLE.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get presentID(): number {
    return this.#view.getUint32(0, LE);
  }

  set presentID(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get desiredPresentTime(): bigint {
    return this.#view.getBigUint64(8, LE);
  }

  set desiredPresentTime(value: number | bigint) {
    this.#view.setBigUint64(8, BigInt(value), LE);
  }

  get actualPresentTime(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set actualPresentTime(value: number | bigint) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get earliestPresentTime(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set earliestPresentTime(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get presentMargin(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set presentMargin(value: number | bigint) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }
}