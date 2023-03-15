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
import { StructureType, GeometryTypeKHR } from "../enum.ts";
import { GeometryFlagsKHR } from "../def.ts";
import { AccelerationStructureGeometryDataKHR } from "../union.ts";

export interface InitAccelerationStructureGeometryKHR {
  pNext?: AnyPointer;
  geometryType?: GeometryTypeKHR;
  geometry?: AccelerationStructureGeometryDataKHR;
  flags?: GeometryFlagsKHR;
}

export class AccelerationStructureGeometryKHR implements BaseStruct {
  static size = 88;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAccelerationStructureGeometryKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAccelerationStructureGeometryKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AccelerationStructureGeometryKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AccelerationStructureGeometryKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AccelerationStructureGeometryKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.geometryType !== undefined) this.geometryType = data.geometryType;
      if (data.geometry !== undefined) this.geometry = data.geometry;
      if (data.flags !== undefined) this.flags = data.flags;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AccelerationStructureGeometryKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ACCELERATION_STRUCTURE_GEOMETRY_KHR;
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

  get geometryType() {
    return this.#view.getUint32(16, LE);
  }

  set geometryType(value: GeometryTypeKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get geometry() {
    throw new Error(`Unknown type: {"union":[{"struct":["u32","buffer","u32",{"union":["u64","buffer"]},"u64","u32","u32",{"union":["u64","buffer"]},{"union":["u64","buffer"]}]},{"struct":["u32","buffer",{"union":["u64","buffer"]},"u64"]},{"struct":["u32","buffer","u32",{"union":["u64","buffer"]}]}]}`);
  }

  set geometry(value: AccelerationStructureGeometryDataKHR) {
    throw new Error(`Unknown type: {"union":[{"struct":["u32","buffer","u32",{"union":["u64","buffer"]},"u64","u32","u32",{"union":["u64","buffer"]},{"union":["u64","buffer"]}]},{"struct":["u32","buffer",{"union":["u64","buffer"]},"u64"]},{"struct":["u32","buffer","u32",{"union":["u64","buffer"]}]}]}`);
  }

  get flags() {
    return this.#view.getUint32(84, LE);
  }

  set flags(value: GeometryFlagsKHR) {
    this.#view.setUint32(84, Number(value), LE);
  }
}