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
import { StructureType, QueryPoolSamplingModeINTEL } from "../enum.ts";

export interface InitQueryPoolPerformanceQueryCreateInfoINTEL {
  pNext?: AnyPointer;
  performanceCountersSampling?: QueryPoolSamplingModeINTEL;
}

export class QueryPoolPerformanceQueryCreateInfoINTEL implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitQueryPoolPerformanceQueryCreateInfoINTEL);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitQueryPoolPerformanceQueryCreateInfoINTEL) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(QueryPoolPerformanceQueryCreateInfoINTEL.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < QueryPoolPerformanceQueryCreateInfoINTEL.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(QueryPoolPerformanceQueryCreateInfoINTEL.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.performanceCountersSampling !== undefined) this.performanceCountersSampling = data.performanceCountersSampling;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, QueryPoolPerformanceQueryCreateInfoINTEL.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.QUERY_POOL_PERFORMANCE_QUERY_CREATE_INFO_INTEL;
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

  get performanceCountersSampling() {
    return this.#view.getUint32(16, LE);
  }

  set performanceCountersSampling(value: QueryPoolSamplingModeINTEL) {
    this.#view.setUint32(16, Number(value), LE);
  }
}