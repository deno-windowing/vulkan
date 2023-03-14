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
import { Bool32 } from "../def.ts";

export interface InitPhysicalDeviceDrmPropertiesEXT {
  pNext?: AnyPointer;
  hasPrimary?: Bool32;
  hasRender?: Bool32;
  primaryMajor?: number | bigint;
  primaryMinor?: number | bigint;
  renderMajor?: number | bigint;
  renderMinor?: number | bigint;
}

export class PhysicalDeviceDrmPropertiesEXT implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceDrmPropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceDrmPropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceDrmPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceDrmPropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceDrmPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.hasPrimary !== undefined) this.hasPrimary = data.hasPrimary;
      if (data.hasRender !== undefined) this.hasRender = data.hasRender;
      if (data.primaryMajor !== undefined) this.primaryMajor = data.primaryMajor;
      if (data.primaryMinor !== undefined) this.primaryMinor = data.primaryMinor;
      if (data.renderMajor !== undefined) this.renderMajor = data.renderMajor;
      if (data.renderMinor !== undefined) this.renderMinor = data.renderMinor;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceDrmPropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_DRM_PROPERTIES_EXT;
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

  get hasPrimary() {
    return this.#view.getUint32(16, LE);
  }

  set hasPrimary(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get hasRender() {
    return this.#view.getUint32(20, LE);
  }

  set hasRender(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get primaryMajor() {
    return this.#view.getBigInt64(24, LE);
  }

  set primaryMajor(value: number | bigint) {
    this.#view.setBigInt64(24, BigInt(value), LE);
  }

  get primaryMinor() {
    return this.#view.getBigInt64(32, LE);
  }

  set primaryMinor(value: number | bigint) {
    this.#view.setBigInt64(32, BigInt(value), LE);
  }

  get renderMajor() {
    return this.#view.getBigInt64(40, LE);
  }

  set renderMajor(value: number | bigint) {
    this.#view.setBigInt64(40, BigInt(value), LE);
  }

  get renderMinor() {
    return this.#view.getBigInt64(48, LE);
  }

  set renderMinor(value: number | bigint) {
    this.#view.setBigInt64(48, BigInt(value), LE);
  }
}