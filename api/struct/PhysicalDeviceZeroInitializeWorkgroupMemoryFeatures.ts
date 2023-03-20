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

export interface InitPhysicalDeviceZeroInitializeWorkgroupMemoryFeatures {
  pNext?: AnyPointer;
  shaderZeroInitializeWorkgroupMemory?: Bool32;
}

export class PhysicalDeviceZeroInitializeWorkgroupMemoryFeatures implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceZeroInitializeWorkgroupMemoryFeatures);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceZeroInitializeWorkgroupMemoryFeatures) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceZeroInitializeWorkgroupMemoryFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceZeroInitializeWorkgroupMemoryFeatures.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceZeroInitializeWorkgroupMemoryFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shaderZeroInitializeWorkgroupMemory !== undefined) this.shaderZeroInitializeWorkgroupMemory = data.shaderZeroInitializeWorkgroupMemory;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceZeroInitializeWorkgroupMemoryFeatures.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_ZERO_INITIALIZE_WORKGROUP_MEMORY_FEATURES;
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

  get shaderZeroInitializeWorkgroupMemory(): number {
    return this.#view.getUint32(16, LE);
  }

  set shaderZeroInitializeWorkgroupMemory(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }
}