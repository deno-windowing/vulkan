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

export interface InitPhysicalDeviceVulkanMemoryModelFeatures {
  pNext?: AnyPointer;
  vulkanMemoryModel?: Bool32;
  vulkanMemoryModelDeviceScope?: Bool32;
  vulkanMemoryModelAvailabilityVisibilityChains?: Bool32;
}

export class PhysicalDeviceVulkanMemoryModelFeatures implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceVulkanMemoryModelFeatures);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceVulkanMemoryModelFeatures) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceVulkanMemoryModelFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceVulkanMemoryModelFeatures.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceVulkanMemoryModelFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.vulkanMemoryModel !== undefined) this.vulkanMemoryModel = data.vulkanMemoryModel;
      if (data.vulkanMemoryModelDeviceScope !== undefined) this.vulkanMemoryModelDeviceScope = data.vulkanMemoryModelDeviceScope;
      if (data.vulkanMemoryModelAvailabilityVisibilityChains !== undefined) this.vulkanMemoryModelAvailabilityVisibilityChains = data.vulkanMemoryModelAvailabilityVisibilityChains;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceVulkanMemoryModelFeatures.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_VULKAN_MEMORY_MODEL_FEATURES;
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

  get vulkanMemoryModel() {
    return this.#view.getUint32(16, LE);
  }

  set vulkanMemoryModel(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get vulkanMemoryModelDeviceScope() {
    return this.#view.getUint32(20, LE);
  }

  set vulkanMemoryModelDeviceScope(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get vulkanMemoryModelAvailabilityVisibilityChains() {
    return this.#view.getUint32(24, LE);
  }

  set vulkanMemoryModelAvailabilityVisibilityChains(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }
}