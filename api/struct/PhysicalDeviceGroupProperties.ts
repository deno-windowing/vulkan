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
import { PhysicalDevice, Bool32 } from "../def.ts";

export interface InitPhysicalDeviceGroupProperties {
  pNext?: AnyPointer;
  physicalDeviceCount?: number;
  physicalDevices?: PhysicalDevice[];
  subsetAllocation?: Bool32;
}

export class PhysicalDeviceGroupProperties implements BaseStruct {
  static size = 288;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceGroupProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceGroupProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceGroupProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceGroupProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceGroupProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.physicalDeviceCount !== undefined) this.physicalDeviceCount = data.physicalDeviceCount;
      if (data.physicalDevices !== undefined) this.physicalDevices = data.physicalDevices;
      if (data.subsetAllocation !== undefined) this.subsetAllocation = data.subsetAllocation;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceGroupProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_GROUP_PROPERTIES;
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

  get physicalDeviceCount() {
    return this.#view.getUint32(16, LE);
  }

  set physicalDeviceCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get physicalDevices() {
    const result: PhysicalDevice[] = [];
    for (let i = 0; i < 32; i++) {
      result.push((() => {
        return pointerFromView(this.#view, 24 + i * 8, LE);
      })());
    }
    return result;
  }

  set physicalDevices(value: PhysicalDevice[]) {
    for (let i = 0; i < value.length; i++) {
      this.#view.setBigUint64(24 + i * 8, BigInt(anyPointer(value[i])), LE);
    }
  }

  get subsetAllocation() {
    return this.#view.getUint32(280, LE);
  }

  set subsetAllocation(value: Bool32) {
    this.#view.setUint32(280, Number(value), LE);
  }
}