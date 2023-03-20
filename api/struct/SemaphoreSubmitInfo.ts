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
import { Semaphore, PipelineStageFlags2 } from "../def.ts";

export interface InitSemaphoreSubmitInfo {
  pNext?: AnyPointer;
  semaphore?: Semaphore;
  value?: number | bigint;
  stageMask?: PipelineStageFlags2;
  deviceIndex?: number;
}

export class SemaphoreSubmitInfo implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSemaphoreSubmitInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSemaphoreSubmitInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SemaphoreSubmitInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SemaphoreSubmitInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SemaphoreSubmitInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.semaphore !== undefined) this.semaphore = data.semaphore;
      if (data.value !== undefined) this.value = data.value;
      if (data.stageMask !== undefined) this.stageMask = data.stageMask;
      if (data.deviceIndex !== undefined) this.deviceIndex = data.deviceIndex;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SemaphoreSubmitInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SEMAPHORE_SUBMIT_INFO;
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

  get semaphore(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set semaphore(value: Semaphore) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get value(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set value(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get stageMask(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set stageMask(value: PipelineStageFlags2) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get deviceIndex(): number {
    return this.#view.getUint32(40, LE);
  }

  set deviceIndex(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }
}