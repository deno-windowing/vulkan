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
import {AccelerationStructureInfoNV} from "./AccelerationStructureInfoNV.ts";
import { StructureType } from "../enum.ts";
import { DeviceSize } from "../def.ts";

export interface InitAccelerationStructureCreateInfoNV {
  pNext?: AnyPointer;
  compactedSize?: DeviceSize;
  info?: AccelerationStructureInfoNV;
}

export class AccelerationStructureCreateInfoNV implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAccelerationStructureCreateInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAccelerationStructureCreateInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AccelerationStructureCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AccelerationStructureCreateInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AccelerationStructureCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.compactedSize !== undefined) this.compactedSize = data.compactedSize;
      if (data.info !== undefined) this.info = data.info;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AccelerationStructureCreateInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ACCELERATION_STRUCTURE_CREATE_INFO_NV;
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

  get compactedSize(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set compactedSize(value: DeviceSize) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get info(): AccelerationStructureInfoNV {
    return new AccelerationStructureInfoNV(this.#data.subarray(24, 24 + AccelerationStructureInfoNV.size));
  }

  set info(value: AccelerationStructureInfoNV) {
    if (value[BUFFER].byteLength < AccelerationStructureInfoNV.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 24);
  }
}