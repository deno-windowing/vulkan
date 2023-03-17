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
import { PerformanceCounterDescriptionFlagsKHR } from "../def.ts";

export interface InitPerformanceCounterDescriptionKHR {
  pNext?: AnyPointer;
  flags?: PerformanceCounterDescriptionFlagsKHR;
  name?: Uint8Array;
  category?: Uint8Array;
  description?: Uint8Array;
}

export class PerformanceCounterDescriptionKHR implements BaseStruct {
  static size = 792;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPerformanceCounterDescriptionKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPerformanceCounterDescriptionKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PerformanceCounterDescriptionKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PerformanceCounterDescriptionKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PerformanceCounterDescriptionKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.name !== undefined) this.name = data.name;
      if (data.category !== undefined) this.category = data.category;
      if (data.description !== undefined) this.description = data.description;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PerformanceCounterDescriptionKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PERFORMANCE_COUNTER_DESCRIPTION_KHR;
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

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: PerformanceCounterDescriptionFlagsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get name(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 20, 256);
  }

  set name(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 20);
  }

  get category(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 276, 256);
  }

  set category(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 276);
  }

  get description(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 532, 256);
  }

  set description(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 532);
  }
}