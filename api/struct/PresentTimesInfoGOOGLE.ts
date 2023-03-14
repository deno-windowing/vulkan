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
import {PresentTimeGOOGLE} from "./PresentTimeGOOGLE.ts";
import { StructureType } from "../enum.ts";

export interface InitPresentTimesInfoGOOGLE {
  pNext?: AnyPointer;
  swapchainCount?: number;
  pTimes?: AnyPointer;
}

export class PresentTimesInfoGOOGLE implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPresentTimesInfoGOOGLE);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPresentTimesInfoGOOGLE) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PresentTimesInfoGOOGLE.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PresentTimesInfoGOOGLE.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PresentTimesInfoGOOGLE.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.swapchainCount !== undefined) this.swapchainCount = data.swapchainCount;
      if (data.pTimes !== undefined) this.pTimes = data.pTimes;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PresentTimesInfoGOOGLE.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PRESENT_TIMES_INFO_GOOGLE;
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

  get swapchainCount() {
    return this.#view.getUint32(16, LE);
  }

  set swapchainCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pTimes() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pTimes(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}