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
import { AccelerationStructureMotionInfoFlagsNV } from "../def.ts";

export interface InitAccelerationStructureMotionInfoNV {
  pNext?: AnyPointer;
  maxInstances?: number;
  flags?: AccelerationStructureMotionInfoFlagsNV;
}

export class AccelerationStructureMotionInfoNV implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAccelerationStructureMotionInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAccelerationStructureMotionInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AccelerationStructureMotionInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AccelerationStructureMotionInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AccelerationStructureMotionInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxInstances !== undefined) this.maxInstances = data.maxInstances;
      if (data.flags !== undefined) this.flags = data.flags;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AccelerationStructureMotionInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ACCELERATION_STRUCTURE_MOTION_INFO_NV;
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

  get maxInstances() {
    return this.#view.getUint32(16, LE);
  }

  set maxInstances(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get flags() {
    return this.#view.getUint32(20, LE);
  }

  set flags(value: AccelerationStructureMotionInfoFlagsNV) {
    this.#view.setUint32(20, Number(value), LE);
  }
}