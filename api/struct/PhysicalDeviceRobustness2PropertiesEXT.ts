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

export interface InitPhysicalDeviceRobustness2PropertiesEXT {
  pNext?: AnyPointer;
  robustStorageBufferAccessSizeAlignment?: DeviceSize;
  robustUniformBufferAccessSizeAlignment?: DeviceSize;
}

export class PhysicalDeviceRobustness2PropertiesEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceRobustness2PropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceRobustness2PropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceRobustness2PropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceRobustness2PropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceRobustness2PropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.robustStorageBufferAccessSizeAlignment !== undefined) this.robustStorageBufferAccessSizeAlignment = data.robustStorageBufferAccessSizeAlignment;
      if (data.robustUniformBufferAccessSizeAlignment !== undefined) this.robustUniformBufferAccessSizeAlignment = data.robustUniformBufferAccessSizeAlignment;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceRobustness2PropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_ROBUSTNESS_2_PROPERTIES_EXT;
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

  get robustStorageBufferAccessSizeAlignment() {
    return this.#view.getBigUint64(16, LE);
  }

  set robustStorageBufferAccessSizeAlignment(value: DeviceSize) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get robustUniformBufferAccessSizeAlignment() {
    return this.#view.getBigUint64(24, LE);
  }

  set robustUniformBufferAccessSizeAlignment(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }
}