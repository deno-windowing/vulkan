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
import { StructureType, PerformanceCounterUnitKHR, PerformanceCounterScopeKHR, PerformanceCounterStorageKHR } from "../enum.ts";

export interface InitPerformanceCounterKHR {
  pNext?: AnyPointer;
  unit?: PerformanceCounterUnitKHR;
  scope?: PerformanceCounterScopeKHR;
  storage?: PerformanceCounterStorageKHR;
  uuid?: Uint8Array;
}

export class PerformanceCounterKHR implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPerformanceCounterKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPerformanceCounterKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PerformanceCounterKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PerformanceCounterKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PerformanceCounterKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.unit !== undefined) this.unit = data.unit;
      if (data.scope !== undefined) this.scope = data.scope;
      if (data.storage !== undefined) this.storage = data.storage;
      if (data.uuid !== undefined) this.uuid = data.uuid;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PerformanceCounterKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PERFORMANCE_COUNTER_KHR;
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

  get unit(): number {
    return this.#view.getUint32(16, LE);
  }

  set unit(value: PerformanceCounterUnitKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get scope(): number {
    return this.#view.getUint32(20, LE);
  }

  set scope(value: PerformanceCounterScopeKHR) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get storage(): number {
    return this.#view.getUint32(24, LE);
  }

  set storage(value: PerformanceCounterStorageKHR) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get uuid(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 28, 16);
  }

  set uuid(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 28);
  }
}