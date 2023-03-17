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

export interface InitQueryPoolPerformanceCreateInfoKHR {
  pNext?: AnyPointer;
  queueFamilyIndex?: number;
  counterIndexCount?: number;
  pCounterIndices?: AnyPointer;
}

export class QueryPoolPerformanceCreateInfoKHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitQueryPoolPerformanceCreateInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitQueryPoolPerformanceCreateInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(QueryPoolPerformanceCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < QueryPoolPerformanceCreateInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(QueryPoolPerformanceCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.queueFamilyIndex !== undefined) this.queueFamilyIndex = data.queueFamilyIndex;
      if (data.counterIndexCount !== undefined) this.counterIndexCount = data.counterIndexCount;
      if (data.pCounterIndices !== undefined) this.pCounterIndices = data.pCounterIndices;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, QueryPoolPerformanceCreateInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.QUERY_POOL_PERFORMANCE_CREATE_INFO_KHR;
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

  get queueFamilyIndex(): number {
    return this.#view.getUint32(16, LE);
  }

  set queueFamilyIndex(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get counterIndexCount(): number {
    return this.#view.getUint32(20, LE);
  }

  set counterIndexCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pCounterIndices(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pCounterIndices(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}