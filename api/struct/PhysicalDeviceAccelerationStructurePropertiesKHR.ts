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

export interface InitPhysicalDeviceAccelerationStructurePropertiesKHR {
  pNext?: AnyPointer;
  maxGeometryCount?: number | bigint;
  maxInstanceCount?: number | bigint;
  maxPrimitiveCount?: number | bigint;
  maxPerStageDescriptorAccelerationStructures?: number;
  maxPerStageDescriptorUpdateAfterBindAccelerationStructures?: number;
  maxDescriptorSetAccelerationStructures?: number;
  maxDescriptorSetUpdateAfterBindAccelerationStructures?: number;
  minAccelerationStructureScratchOffsetAlignment?: number;
}

export class PhysicalDeviceAccelerationStructurePropertiesKHR implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceAccelerationStructurePropertiesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceAccelerationStructurePropertiesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceAccelerationStructurePropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceAccelerationStructurePropertiesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceAccelerationStructurePropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxGeometryCount !== undefined) this.maxGeometryCount = data.maxGeometryCount;
      if (data.maxInstanceCount !== undefined) this.maxInstanceCount = data.maxInstanceCount;
      if (data.maxPrimitiveCount !== undefined) this.maxPrimitiveCount = data.maxPrimitiveCount;
      if (data.maxPerStageDescriptorAccelerationStructures !== undefined) this.maxPerStageDescriptorAccelerationStructures = data.maxPerStageDescriptorAccelerationStructures;
      if (data.maxPerStageDescriptorUpdateAfterBindAccelerationStructures !== undefined) this.maxPerStageDescriptorUpdateAfterBindAccelerationStructures = data.maxPerStageDescriptorUpdateAfterBindAccelerationStructures;
      if (data.maxDescriptorSetAccelerationStructures !== undefined) this.maxDescriptorSetAccelerationStructures = data.maxDescriptorSetAccelerationStructures;
      if (data.maxDescriptorSetUpdateAfterBindAccelerationStructures !== undefined) this.maxDescriptorSetUpdateAfterBindAccelerationStructures = data.maxDescriptorSetUpdateAfterBindAccelerationStructures;
      if (data.minAccelerationStructureScratchOffsetAlignment !== undefined) this.minAccelerationStructureScratchOffsetAlignment = data.minAccelerationStructureScratchOffsetAlignment;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceAccelerationStructurePropertiesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_ACCELERATION_STRUCTURE_PROPERTIES_KHR;
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

  get maxGeometryCount(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set maxGeometryCount(value: number | bigint) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get maxInstanceCount(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set maxInstanceCount(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get maxPrimitiveCount(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set maxPrimitiveCount(value: number | bigint) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get maxPerStageDescriptorAccelerationStructures(): number {
    return this.#view.getUint32(40, LE);
  }

  set maxPerStageDescriptorAccelerationStructures(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get maxPerStageDescriptorUpdateAfterBindAccelerationStructures(): number {
    return this.#view.getUint32(44, LE);
  }

  set maxPerStageDescriptorUpdateAfterBindAccelerationStructures(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get maxDescriptorSetAccelerationStructures(): number {
    return this.#view.getUint32(48, LE);
  }

  set maxDescriptorSetAccelerationStructures(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get maxDescriptorSetUpdateAfterBindAccelerationStructures(): number {
    return this.#view.getUint32(52, LE);
  }

  set maxDescriptorSetUpdateAfterBindAccelerationStructures(value: number) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get minAccelerationStructureScratchOffsetAlignment(): number {
    return this.#view.getUint32(56, LE);
  }

  set minAccelerationStructureScratchOffsetAlignment(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }
}