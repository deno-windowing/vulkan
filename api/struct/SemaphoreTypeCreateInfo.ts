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
import { StructureType, SemaphoreType } from "../enum.ts";

export interface InitSemaphoreTypeCreateInfo {
  pNext?: AnyPointer;
  semaphoreType?: SemaphoreType;
  initialValue?: number | bigint;
}

export class SemaphoreTypeCreateInfo implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSemaphoreTypeCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSemaphoreTypeCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SemaphoreTypeCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SemaphoreTypeCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SemaphoreTypeCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.semaphoreType !== undefined) this.semaphoreType = data.semaphoreType;
      if (data.initialValue !== undefined) this.initialValue = data.initialValue;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SemaphoreTypeCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SEMAPHORE_TYPE_CREATE_INFO;
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

  get semaphoreType(): number {
    return this.#view.getUint32(16, LE);
  }

  set semaphoreType(value: SemaphoreType) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get initialValue(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set initialValue(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }
}