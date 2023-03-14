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
import { ToolPurposeFlags } from "../def.ts";

export interface InitPhysicalDeviceToolProperties {
  pNext?: AnyPointer;
  name?: Uint8Array;
  version?: Uint8Array;
  purposes?: ToolPurposeFlags;
  description?: Uint8Array;
  layer?: Uint8Array;
}

export class PhysicalDeviceToolProperties implements BaseStruct {
  static size = 1048;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceToolProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceToolProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceToolProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceToolProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceToolProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.name !== undefined) this.name = data.name;
      if (data.version !== undefined) this.version = data.version;
      if (data.purposes !== undefined) this.purposes = data.purposes;
      if (data.description !== undefined) this.description = data.description;
      if (data.layer !== undefined) this.layer = data.layer;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceToolProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_TOOL_PROPERTIES;
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

  get name() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 16, 256);
  }

  set name(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 16);
  }

  get version() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 272, 256);
  }

  set version(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 272);
  }

  get purposes() {
    return this.#view.getUint32(528, LE);
  }

  set purposes(value: ToolPurposeFlags) {
    this.#view.setUint32(528, Number(value), LE);
  }

  get description() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 532, 256);
  }

  set description(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 532);
  }

  get layer() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 788, 256);
  }

  set layer(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 788);
  }
}