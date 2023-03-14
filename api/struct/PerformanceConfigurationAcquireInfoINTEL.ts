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
import { StructureType, PerformanceConfigurationTypeINTEL } from "../enum.ts";

export interface InitPerformanceConfigurationAcquireInfoINTEL {
  pNext?: AnyPointer;
  type?: PerformanceConfigurationTypeINTEL;
}

export class PerformanceConfigurationAcquireInfoINTEL implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPerformanceConfigurationAcquireInfoINTEL);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPerformanceConfigurationAcquireInfoINTEL) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PerformanceConfigurationAcquireInfoINTEL.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PerformanceConfigurationAcquireInfoINTEL.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PerformanceConfigurationAcquireInfoINTEL.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.type !== undefined) this.type = data.type;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PerformanceConfigurationAcquireInfoINTEL.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PERFORMANCE_CONFIGURATION_ACQUIRE_INFO_INTEL;
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

  get type() {
    return this.#view.getUint32(16, LE);
  }

  set type(value: PerformanceConfigurationTypeINTEL) {
    this.#view.setUint32(16, Number(value), LE);
  }
}