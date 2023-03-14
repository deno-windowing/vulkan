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
import { ShaderStageFlags } from "../def.ts";

export interface InitPhysicalDeviceSubgroupSizeControlProperties {
  pNext?: AnyPointer;
  minSubgroupSize?: number;
  maxSubgroupSize?: number;
  maxComputeWorkgroupSubgroups?: number;
  requiredSubgroupSizeStages?: ShaderStageFlags;
}

export class PhysicalDeviceSubgroupSizeControlProperties implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceSubgroupSizeControlProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceSubgroupSizeControlProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceSubgroupSizeControlProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceSubgroupSizeControlProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceSubgroupSizeControlProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.minSubgroupSize !== undefined) this.minSubgroupSize = data.minSubgroupSize;
      if (data.maxSubgroupSize !== undefined) this.maxSubgroupSize = data.maxSubgroupSize;
      if (data.maxComputeWorkgroupSubgroups !== undefined) this.maxComputeWorkgroupSubgroups = data.maxComputeWorkgroupSubgroups;
      if (data.requiredSubgroupSizeStages !== undefined) this.requiredSubgroupSizeStages = data.requiredSubgroupSizeStages;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceSubgroupSizeControlProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SUBGROUP_SIZE_CONTROL_PROPERTIES;
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

  get minSubgroupSize() {
    return this.#view.getUint32(16, LE);
  }

  set minSubgroupSize(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxSubgroupSize() {
    return this.#view.getUint32(20, LE);
  }

  set maxSubgroupSize(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get maxComputeWorkgroupSubgroups() {
    return this.#view.getUint32(24, LE);
  }

  set maxComputeWorkgroupSubgroups(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get requiredSubgroupSizeStages() {
    return this.#view.getUint32(28, LE);
  }

  set requiredSubgroupSizeStages(value: ShaderStageFlags) {
    this.#view.setUint32(28, Number(value), LE);
  }
}