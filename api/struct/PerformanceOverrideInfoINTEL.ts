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
import { StructureType, PerformanceOverrideTypeINTEL } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitPerformanceOverrideInfoINTEL {
  pNext?: AnyPointer;
  type?: PerformanceOverrideTypeINTEL;
  enable?: Bool32;
  parameter?: number | bigint;
}

export class PerformanceOverrideInfoINTEL implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPerformanceOverrideInfoINTEL);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPerformanceOverrideInfoINTEL) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PerformanceOverrideInfoINTEL.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PerformanceOverrideInfoINTEL.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PerformanceOverrideInfoINTEL.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.type !== undefined) this.type = data.type;
      if (data.enable !== undefined) this.enable = data.enable;
      if (data.parameter !== undefined) this.parameter = data.parameter;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PerformanceOverrideInfoINTEL.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PERFORMANCE_OVERRIDE_INFO_INTEL;
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

  set type(value: PerformanceOverrideTypeINTEL) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get enable() {
    return this.#view.getUint32(20, LE);
  }

  set enable(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get parameter() {
    return this.#view.getBigUint64(24, LE);
  }

  set parameter(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }
}