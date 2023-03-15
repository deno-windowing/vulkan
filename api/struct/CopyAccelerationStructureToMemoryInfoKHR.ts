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
import { StructureType, CopyAccelerationStructureModeKHR } from "../enum.ts";
import { AccelerationStructureKHR } from "../def.ts";
import { DeviceOrHostAddressKHR } from "../union.ts";

export interface InitCopyAccelerationStructureToMemoryInfoKHR {
  pNext?: AnyPointer;
  src?: AccelerationStructureKHR;
  dst?: DeviceOrHostAddressKHR;
  mode?: CopyAccelerationStructureModeKHR;
}

export class CopyAccelerationStructureToMemoryInfoKHR implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCopyAccelerationStructureToMemoryInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCopyAccelerationStructureToMemoryInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CopyAccelerationStructureToMemoryInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CopyAccelerationStructureToMemoryInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CopyAccelerationStructureToMemoryInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.src !== undefined) this.src = data.src;
      if (data.dst !== undefined) this.dst = data.dst;
      if (data.mode !== undefined) this.mode = data.mode;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CopyAccelerationStructureToMemoryInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.COPY_ACCELERATION_STRUCTURE_TO_MEMORY_INFO_KHR;
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

  get src() {
    return pointerFromView(this.#view, 16, LE);
  }

  set src(value: AccelerationStructureKHR) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get dst() {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  set dst(value: DeviceOrHostAddressKHR) {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  get mode() {
    return this.#view.getUint32(32, LE);
  }

  set mode(value: CopyAccelerationStructureModeKHR) {
    this.#view.setUint32(32, Number(value), LE);
  }
}