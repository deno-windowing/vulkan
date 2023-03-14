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
import {AccelerationStructureGeometryKHR} from "./AccelerationStructureGeometryKHR.ts";
import { StructureType, AccelerationStructureTypeKHR, BuildAccelerationStructureModeKHR } from "../enum.ts";
import { BuildAccelerationStructureFlagsKHR, AccelerationStructureKHR } from "../def.ts";

export interface InitAccelerationStructureBuildGeometryInfoKHR {
  pNext?: AnyPointer;
  type?: AccelerationStructureTypeKHR;
  flags?: BuildAccelerationStructureFlagsKHR;
  mode?: BuildAccelerationStructureModeKHR;
  srcAccelerationStructure?: AccelerationStructureKHR;
  dstAccelerationStructure?: AccelerationStructureKHR;
  geometryCount?: number;
  pGeometries?: AnyPointer;
  ppGeometries?: AnyPointer;
  scratchData?: DeviceOrHostAddressKHR;
}

export class AccelerationStructureBuildGeometryInfoKHR implements BaseStruct {
  static size = 80;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAccelerationStructureBuildGeometryInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAccelerationStructureBuildGeometryInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AccelerationStructureBuildGeometryInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AccelerationStructureBuildGeometryInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AccelerationStructureBuildGeometryInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.type !== undefined) this.type = data.type;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.mode !== undefined) this.mode = data.mode;
      if (data.srcAccelerationStructure !== undefined) this.srcAccelerationStructure = data.srcAccelerationStructure;
      if (data.dstAccelerationStructure !== undefined) this.dstAccelerationStructure = data.dstAccelerationStructure;
      if (data.geometryCount !== undefined) this.geometryCount = data.geometryCount;
      if (data.pGeometries !== undefined) this.pGeometries = data.pGeometries;
      if (data.ppGeometries !== undefined) this.ppGeometries = data.ppGeometries;
      if (data.scratchData !== undefined) this.scratchData = data.scratchData;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AccelerationStructureBuildGeometryInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ACCELERATION_STRUCTURE_BUILD_GEOMETRY_INFO_KHR;
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

  set type(value: AccelerationStructureTypeKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get flags() {
    return this.#view.getUint32(20, LE);
  }

  set flags(value: BuildAccelerationStructureFlagsKHR) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get mode() {
    return this.#view.getUint32(24, LE);
  }

  set mode(value: BuildAccelerationStructureModeKHR) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get srcAccelerationStructure() {
    return pointerFromView(this.#view, 32, LE);
  }

  set srcAccelerationStructure(value: AccelerationStructureKHR) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get dstAccelerationStructure() {
    return pointerFromView(this.#view, 40, LE);
  }

  set dstAccelerationStructure(value: AccelerationStructureKHR) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get geometryCount() {
    return this.#view.getUint32(48, LE);
  }

  set geometryCount(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get pGeometries() {
    return pointerFromView(this.#view, 56, LE);
  }

  set pGeometries(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }

  get ppGeometries() {
    return pointerFromView(this.#view, 64, LE);
  }

  set ppGeometries(value: AnyPointer) {
    this.#view.setBigUint64(64, BigInt(anyPointer(value)), LE);
  }

  get scratchData() {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  set scratchData(value: DeviceOrHostAddressKHR) {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }
}