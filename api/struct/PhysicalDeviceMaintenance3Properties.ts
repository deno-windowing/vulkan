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

export interface InitPhysicalDeviceMaintenance3Properties {
  pNext?: AnyPointer;
  maxPerSetDescriptors?: number;
  maxMemoryAllocationSize?: DeviceSize;
}

export class PhysicalDeviceMaintenance3Properties implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceMaintenance3Properties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceMaintenance3Properties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceMaintenance3Properties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceMaintenance3Properties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceMaintenance3Properties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxPerSetDescriptors !== undefined) this.maxPerSetDescriptors = data.maxPerSetDescriptors;
      if (data.maxMemoryAllocationSize !== undefined) this.maxMemoryAllocationSize = data.maxMemoryAllocationSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceMaintenance3Properties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_MAINTENANCE_3_PROPERTIES;
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

  get maxPerSetDescriptors(): number {
    return this.#view.getUint32(16, LE);
  }

  set maxPerSetDescriptors(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxMemoryAllocationSize(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set maxMemoryAllocationSize(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }
}