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
import {SRTDataNV} from "./SRTDataNV.ts";
import { GeometryInstanceFlagsKHR } from "../def.ts";

export interface InitAccelerationStructureSRTMotionInstanceNV {
  transformT0?: SRTDataNV;
  transformT1?: SRTDataNV;
  instanceCustomIndex?: number;
  mask?: number;
  instanceShaderBindingTableRecordOffset?: number;
  flags?: GeometryInstanceFlagsKHR;
  accelerationStructureReference?: number | bigint;
}

export class AccelerationStructureSRTMotionInstanceNV implements BaseStruct {
  static size = 152;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAccelerationStructureSRTMotionInstanceNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAccelerationStructureSRTMotionInstanceNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AccelerationStructureSRTMotionInstanceNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AccelerationStructureSRTMotionInstanceNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AccelerationStructureSRTMotionInstanceNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.transformT0 !== undefined) this.transformT0 = data.transformT0;
      if (data.transformT1 !== undefined) this.transformT1 = data.transformT1;
      if (data.instanceCustomIndex !== undefined) this.instanceCustomIndex = data.instanceCustomIndex;
      if (data.mask !== undefined) this.mask = data.mask;
      if (data.instanceShaderBindingTableRecordOffset !== undefined) this.instanceShaderBindingTableRecordOffset = data.instanceShaderBindingTableRecordOffset;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.accelerationStructureReference !== undefined) this.accelerationStructureReference = data.accelerationStructureReference;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AccelerationStructureSRTMotionInstanceNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get transformT0() {
    return new SRTDataNV(this.#data.subarray(0, 0 + SRTDataNV.size));
  }

  set transformT0(value: SRTDataNV) {
    if (value[BUFFER].byteLength < SRTDataNV.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get transformT1() {
    return new SRTDataNV(this.#data.subarray(64, 64 + SRTDataNV.size));
  }

  set transformT1(value: SRTDataNV) {
    if (value[BUFFER].byteLength < SRTDataNV.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 64);
  }

  get instanceCustomIndex() {
    return this.#view.getUint32(128, LE);
  }

  set instanceCustomIndex(value: number) {
    this.#view.setUint32(128, Number(value), LE);
  }

  get mask() {
    return this.#view.getUint32(132, LE);
  }

  set mask(value: number) {
    this.#view.setUint32(132, Number(value), LE);
  }

  get instanceShaderBindingTableRecordOffset() {
    return this.#view.getUint32(136, LE);
  }

  set instanceShaderBindingTableRecordOffset(value: number) {
    this.#view.setUint32(136, Number(value), LE);
  }

  get flags() {
    return this.#view.getUint32(140, LE);
  }

  set flags(value: GeometryInstanceFlagsKHR) {
    this.#view.setUint32(140, Number(value), LE);
  }

  get accelerationStructureReference() {
    return this.#view.getBigUint64(144, LE);
  }

  set accelerationStructureReference(value: number | bigint) {
    this.#view.setBigUint64(144, BigInt(value), LE);
  }
}