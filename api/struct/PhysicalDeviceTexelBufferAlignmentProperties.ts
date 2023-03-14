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
import { DeviceSize, Bool32 } from "../def.ts";

export interface InitPhysicalDeviceTexelBufferAlignmentProperties {
  pNext?: AnyPointer;
  storageTexelBufferOffsetAlignmentBytes?: DeviceSize;
  storageTexelBufferOffsetSingleTexelAlignment?: Bool32;
  uniformTexelBufferOffsetAlignmentBytes?: DeviceSize;
  uniformTexelBufferOffsetSingleTexelAlignment?: Bool32;
}

export class PhysicalDeviceTexelBufferAlignmentProperties implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceTexelBufferAlignmentProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceTexelBufferAlignmentProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceTexelBufferAlignmentProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceTexelBufferAlignmentProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceTexelBufferAlignmentProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.storageTexelBufferOffsetAlignmentBytes !== undefined) this.storageTexelBufferOffsetAlignmentBytes = data.storageTexelBufferOffsetAlignmentBytes;
      if (data.storageTexelBufferOffsetSingleTexelAlignment !== undefined) this.storageTexelBufferOffsetSingleTexelAlignment = data.storageTexelBufferOffsetSingleTexelAlignment;
      if (data.uniformTexelBufferOffsetAlignmentBytes !== undefined) this.uniformTexelBufferOffsetAlignmentBytes = data.uniformTexelBufferOffsetAlignmentBytes;
      if (data.uniformTexelBufferOffsetSingleTexelAlignment !== undefined) this.uniformTexelBufferOffsetSingleTexelAlignment = data.uniformTexelBufferOffsetSingleTexelAlignment;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceTexelBufferAlignmentProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_TEXEL_BUFFER_ALIGNMENT_PROPERTIES;
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

  get storageTexelBufferOffsetAlignmentBytes() {
    return this.#view.getBigUint64(16, LE);
  }

  set storageTexelBufferOffsetAlignmentBytes(value: DeviceSize) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get storageTexelBufferOffsetSingleTexelAlignment() {
    return this.#view.getUint32(24, LE);
  }

  set storageTexelBufferOffsetSingleTexelAlignment(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get uniformTexelBufferOffsetAlignmentBytes() {
    return this.#view.getBigUint64(32, LE);
  }

  set uniformTexelBufferOffsetAlignmentBytes(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get uniformTexelBufferOffsetSingleTexelAlignment() {
    return this.#view.getUint32(40, LE);
  }

  set uniformTexelBufferOffsetSingleTexelAlignment(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }
}