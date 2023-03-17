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

export interface InitPhysicalDeviceRayTracingPropertiesNV {
  pNext?: AnyPointer;
  shaderGroupHandleSize?: number;
  maxRecursionDepth?: number;
  maxShaderGroupStride?: number;
  shaderGroupBaseAlignment?: number;
  maxGeometryCount?: number | bigint;
  maxInstanceCount?: number | bigint;
  maxTriangleCount?: number | bigint;
  maxDescriptorSetAccelerationStructures?: number;
}

export class PhysicalDeviceRayTracingPropertiesNV implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceRayTracingPropertiesNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceRayTracingPropertiesNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceRayTracingPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceRayTracingPropertiesNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceRayTracingPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shaderGroupHandleSize !== undefined) this.shaderGroupHandleSize = data.shaderGroupHandleSize;
      if (data.maxRecursionDepth !== undefined) this.maxRecursionDepth = data.maxRecursionDepth;
      if (data.maxShaderGroupStride !== undefined) this.maxShaderGroupStride = data.maxShaderGroupStride;
      if (data.shaderGroupBaseAlignment !== undefined) this.shaderGroupBaseAlignment = data.shaderGroupBaseAlignment;
      if (data.maxGeometryCount !== undefined) this.maxGeometryCount = data.maxGeometryCount;
      if (data.maxInstanceCount !== undefined) this.maxInstanceCount = data.maxInstanceCount;
      if (data.maxTriangleCount !== undefined) this.maxTriangleCount = data.maxTriangleCount;
      if (data.maxDescriptorSetAccelerationStructures !== undefined) this.maxDescriptorSetAccelerationStructures = data.maxDescriptorSetAccelerationStructures;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceRayTracingPropertiesNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_RAY_TRACING_PROPERTIES_NV;
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

  get shaderGroupHandleSize(): number {
    return this.#view.getUint32(16, LE);
  }

  set shaderGroupHandleSize(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxRecursionDepth(): number {
    return this.#view.getUint32(20, LE);
  }

  set maxRecursionDepth(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get maxShaderGroupStride(): number {
    return this.#view.getUint32(24, LE);
  }

  set maxShaderGroupStride(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get shaderGroupBaseAlignment(): number {
    return this.#view.getUint32(28, LE);
  }

  set shaderGroupBaseAlignment(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get maxGeometryCount(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set maxGeometryCount(value: number | bigint) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get maxInstanceCount(): bigint {
    return this.#view.getBigUint64(40, LE);
  }

  set maxInstanceCount(value: number | bigint) {
    this.#view.setBigUint64(40, BigInt(value), LE);
  }

  get maxTriangleCount(): bigint {
    return this.#view.getBigUint64(48, LE);
  }

  set maxTriangleCount(value: number | bigint) {
    this.#view.setBigUint64(48, BigInt(value), LE);
  }

  get maxDescriptorSetAccelerationStructures(): number {
    return this.#view.getUint32(56, LE);
  }

  set maxDescriptorSetAccelerationStructures(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }
}