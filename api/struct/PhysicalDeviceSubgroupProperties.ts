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
import { ShaderStageFlags, SubgroupFeatureFlags, Bool32 } from "../def.ts";

export interface InitPhysicalDeviceSubgroupProperties {
  pNext?: AnyPointer;
  subgroupSize?: number;
  supportedStages?: ShaderStageFlags;
  supportedOperations?: SubgroupFeatureFlags;
  quadOperationsInAllStages?: Bool32;
}

export class PhysicalDeviceSubgroupProperties implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceSubgroupProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceSubgroupProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceSubgroupProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceSubgroupProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceSubgroupProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.subgroupSize !== undefined) this.subgroupSize = data.subgroupSize;
      if (data.supportedStages !== undefined) this.supportedStages = data.supportedStages;
      if (data.supportedOperations !== undefined) this.supportedOperations = data.supportedOperations;
      if (data.quadOperationsInAllStages !== undefined) this.quadOperationsInAllStages = data.quadOperationsInAllStages;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceSubgroupProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SUBGROUP_PROPERTIES;
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

  get subgroupSize() {
    return this.#view.getUint32(16, LE);
  }

  set subgroupSize(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get supportedStages() {
    return this.#view.getUint32(20, LE);
  }

  set supportedStages(value: ShaderStageFlags) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get supportedOperations() {
    return this.#view.getUint32(24, LE);
  }

  set supportedOperations(value: SubgroupFeatureFlags) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get quadOperationsInAllStages() {
    return this.#view.getUint32(28, LE);
  }

  set quadOperationsInAllStages(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }
}