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
import {GeometryNV} from "./GeometryNV.ts";
import { StructureType } from "../enum.ts";
import { AccelerationStructureTypeNV, BuildAccelerationStructureFlagsNV } from "../def.ts";

export interface InitAccelerationStructureInfoNV {
  pNext?: AnyPointer;
  type?: AccelerationStructureTypeNV;
  flags?: BuildAccelerationStructureFlagsNV;
  instanceCount?: number;
  geometryCount?: number;
  pGeometries?: AnyPointer;
}

export class AccelerationStructureInfoNV implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAccelerationStructureInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAccelerationStructureInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AccelerationStructureInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AccelerationStructureInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AccelerationStructureInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.type !== undefined) this.type = data.type;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.instanceCount !== undefined) this.instanceCount = data.instanceCount;
      if (data.geometryCount !== undefined) this.geometryCount = data.geometryCount;
      if (data.pGeometries !== undefined) this.pGeometries = data.pGeometries;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AccelerationStructureInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ACCELERATION_STRUCTURE_INFO_NV;
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

  set type(value: AccelerationStructureTypeNV) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get flags() {
    return this.#view.getUint32(20, LE);
  }

  set flags(value: BuildAccelerationStructureFlagsNV) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get instanceCount() {
    return this.#view.getUint32(24, LE);
  }

  set instanceCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get geometryCount() {
    return this.#view.getUint32(28, LE);
  }

  set geometryCount(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get pGeometries() {
    return pointerFromView(this.#view, 32, LE);
  }

  set pGeometries(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}