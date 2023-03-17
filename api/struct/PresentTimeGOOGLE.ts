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

export interface InitPresentTimeGOOGLE {
  presentID?: number;
  desiredPresentTime?: number | bigint;
}

export class PresentTimeGOOGLE implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPresentTimeGOOGLE);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPresentTimeGOOGLE) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PresentTimeGOOGLE.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PresentTimeGOOGLE.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PresentTimeGOOGLE.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.presentID !== undefined) this.presentID = data.presentID;
      if (data.desiredPresentTime !== undefined) this.desiredPresentTime = data.desiredPresentTime;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PresentTimeGOOGLE.size));
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
}