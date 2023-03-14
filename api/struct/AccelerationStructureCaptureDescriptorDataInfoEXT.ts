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
import { AccelerationStructureKHR, AccelerationStructureNV } from "../def.ts";

export interface InitAccelerationStructureCaptureDescriptorDataInfoEXT {
  pNext?: AnyPointer;
  accelerationStructure?: AccelerationStructureKHR;
  accelerationStructureNV?: AccelerationStructureNV;
}

export class AccelerationStructureCaptureDescriptorDataInfoEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAccelerationStructureCaptureDescriptorDataInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAccelerationStructureCaptureDescriptorDataInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AccelerationStructureCaptureDescriptorDataInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AccelerationStructureCaptureDescriptorDataInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AccelerationStructureCaptureDescriptorDataInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.accelerationStructure !== undefined) this.accelerationStructure = data.accelerationStructure;
      if (data.accelerationStructureNV !== undefined) this.accelerationStructureNV = data.accelerationStructureNV;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AccelerationStructureCaptureDescriptorDataInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ACCELERATION_STRUCTURE_CAPTURE_DESCRIPTOR_DATA_INFO_EXT;
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

  get accelerationStructure() {
    return pointerFromView(this.#view, 16, LE);
  }

  set accelerationStructure(value: AccelerationStructureKHR) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get accelerationStructureNV() {
    return pointerFromView(this.#view, 24, LE);
  }

  set accelerationStructureNV(value: AccelerationStructureNV) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}