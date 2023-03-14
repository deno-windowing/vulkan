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
import { DeviceSize } from "../def.ts";

export interface InitAccelerationStructureGeometryAabbsDataKHR {
  pNext?: AnyPointer;
  data?: DeviceOrHostAddressConstKHR;
  stride?: DeviceSize;
}

export class AccelerationStructureGeometryAabbsDataKHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAccelerationStructureGeometryAabbsDataKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAccelerationStructureGeometryAabbsDataKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AccelerationStructureGeometryAabbsDataKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AccelerationStructureGeometryAabbsDataKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AccelerationStructureGeometryAabbsDataKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.data !== undefined) this.data = data.data;
      if (data.stride !== undefined) this.stride = data.stride;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AccelerationStructureGeometryAabbsDataKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ACCELERATION_STRUCTURE_GEOMETRY_AABBS_DATA_KHR;
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

  get data() {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  set data(value: DeviceOrHostAddressConstKHR) {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  get stride() {
    return this.#view.getBigUint64(24, LE);
  }

  set stride(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }
}