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

export interface InitTimelineSemaphoreSubmitInfo {
  pNext?: AnyPointer;
  waitSemaphoreValueCount?: number;
  pWaitSemaphoreValues?: AnyPointer;
  signalSemaphoreValueCount?: number;
  pSignalSemaphoreValues?: AnyPointer;
}

export class TimelineSemaphoreSubmitInfo implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitTimelineSemaphoreSubmitInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitTimelineSemaphoreSubmitInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(TimelineSemaphoreSubmitInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < TimelineSemaphoreSubmitInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(TimelineSemaphoreSubmitInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.waitSemaphoreValueCount !== undefined) this.waitSemaphoreValueCount = data.waitSemaphoreValueCount;
      if (data.pWaitSemaphoreValues !== undefined) this.pWaitSemaphoreValues = data.pWaitSemaphoreValues;
      if (data.signalSemaphoreValueCount !== undefined) this.signalSemaphoreValueCount = data.signalSemaphoreValueCount;
      if (data.pSignalSemaphoreValues !== undefined) this.pSignalSemaphoreValues = data.pSignalSemaphoreValues;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, TimelineSemaphoreSubmitInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.TIMELINE_SEMAPHORE_SUBMIT_INFO;
  }

  get sType(): number {
    return this.#view.getUint32(0, LE);
  }

  set sType(value: StructureType) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pNext(): Deno.PointerValue {
    return pointerFromView(this.#view, 8, LE);
  }

  set pNext(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }

  get waitSemaphoreValueCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set waitSemaphoreValueCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pWaitSemaphoreValues(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pWaitSemaphoreValues(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get signalSemaphoreValueCount(): number {
    return this.#view.getUint32(32, LE);
  }

  set signalSemaphoreValueCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pSignalSemaphoreValues(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set pSignalSemaphoreValues(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}