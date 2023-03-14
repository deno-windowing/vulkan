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
import { StructureType, AccelerationStructureMemoryRequirementsTypeNV } from "../enum.ts";
import { AccelerationStructureNV } from "../def.ts";

export interface InitAccelerationStructureMemoryRequirementsInfoNV {
  pNext?: AnyPointer;
  type?: AccelerationStructureMemoryRequirementsTypeNV;
  accelerationStructure?: AccelerationStructureNV;
}

export class AccelerationStructureMemoryRequirementsInfoNV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAccelerationStructureMemoryRequirementsInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAccelerationStructureMemoryRequirementsInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AccelerationStructureMemoryRequirementsInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AccelerationStructureMemoryRequirementsInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AccelerationStructureMemoryRequirementsInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.type !== undefined) this.type = data.type;
      if (data.accelerationStructure !== undefined) this.accelerationStructure = data.accelerationStructure;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AccelerationStructureMemoryRequirementsInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ACCELERATION_STRUCTURE_MEMORY_REQUIREMENTS_INFO_NV;
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

  set type(value: AccelerationStructureMemoryRequirementsTypeNV) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get accelerationStructure() {
    return pointerFromView(this.#view, 24, LE);
  }

  set accelerationStructure(value: AccelerationStructureNV) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}