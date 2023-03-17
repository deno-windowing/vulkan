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
import { Bool32 } from "../def.ts";

export interface InitPhysicalDevicePerformanceQueryFeaturesKHR {
  pNext?: AnyPointer;
  performanceCounterQueryPools?: Bool32;
  performanceCounterMultipleQueryPools?: Bool32;
}

export class PhysicalDevicePerformanceQueryFeaturesKHR implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDevicePerformanceQueryFeaturesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDevicePerformanceQueryFeaturesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDevicePerformanceQueryFeaturesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDevicePerformanceQueryFeaturesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDevicePerformanceQueryFeaturesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.performanceCounterQueryPools !== undefined) this.performanceCounterQueryPools = data.performanceCounterQueryPools;
      if (data.performanceCounterMultipleQueryPools !== undefined) this.performanceCounterMultipleQueryPools = data.performanceCounterMultipleQueryPools;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDevicePerformanceQueryFeaturesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_PERFORMANCE_QUERY_FEATURES_KHR;
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

  get performanceCounterQueryPools(): number {
    return this.#view.getUint32(16, LE);
  }

  set performanceCounterQueryPools(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get performanceCounterMultipleQueryPools(): number {
    return this.#view.getUint32(20, LE);
  }

  set performanceCounterMultipleQueryPools(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }
}