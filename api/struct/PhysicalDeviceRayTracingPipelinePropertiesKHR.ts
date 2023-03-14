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

export interface InitPhysicalDeviceRayTracingPipelinePropertiesKHR {
  pNext?: AnyPointer;
  shaderGroupHandleSize?: number;
  maxRayRecursionDepth?: number;
  maxShaderGroupStride?: number;
  shaderGroupBaseAlignment?: number;
  shaderGroupHandleCaptureReplaySize?: number;
  maxRayDispatchInvocationCount?: number;
  shaderGroupHandleAlignment?: number;
  maxRayHitAttributeSize?: number;
}

export class PhysicalDeviceRayTracingPipelinePropertiesKHR implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceRayTracingPipelinePropertiesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceRayTracingPipelinePropertiesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceRayTracingPipelinePropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceRayTracingPipelinePropertiesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceRayTracingPipelinePropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shaderGroupHandleSize !== undefined) this.shaderGroupHandleSize = data.shaderGroupHandleSize;
      if (data.maxRayRecursionDepth !== undefined) this.maxRayRecursionDepth = data.maxRayRecursionDepth;
      if (data.maxShaderGroupStride !== undefined) this.maxShaderGroupStride = data.maxShaderGroupStride;
      if (data.shaderGroupBaseAlignment !== undefined) this.shaderGroupBaseAlignment = data.shaderGroupBaseAlignment;
      if (data.shaderGroupHandleCaptureReplaySize !== undefined) this.shaderGroupHandleCaptureReplaySize = data.shaderGroupHandleCaptureReplaySize;
      if (data.maxRayDispatchInvocationCount !== undefined) this.maxRayDispatchInvocationCount = data.maxRayDispatchInvocationCount;
      if (data.shaderGroupHandleAlignment !== undefined) this.shaderGroupHandleAlignment = data.shaderGroupHandleAlignment;
      if (data.maxRayHitAttributeSize !== undefined) this.maxRayHitAttributeSize = data.maxRayHitAttributeSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceRayTracingPipelinePropertiesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_RAY_TRACING_PIPELINE_PROPERTIES_KHR;
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

  get shaderGroupHandleSize() {
    return this.#view.getUint32(16, LE);
  }

  set shaderGroupHandleSize(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxRayRecursionDepth() {
    return this.#view.getUint32(20, LE);
  }

  set maxRayRecursionDepth(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get maxShaderGroupStride() {
    return this.#view.getUint32(24, LE);
  }

  set maxShaderGroupStride(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get shaderGroupBaseAlignment() {
    return this.#view.getUint32(28, LE);
  }

  set shaderGroupBaseAlignment(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get shaderGroupHandleCaptureReplaySize() {
    return this.#view.getUint32(32, LE);
  }

  set shaderGroupHandleCaptureReplaySize(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get maxRayDispatchInvocationCount() {
    return this.#view.getUint32(36, LE);
  }

  set maxRayDispatchInvocationCount(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get shaderGroupHandleAlignment() {
    return this.#view.getUint32(40, LE);
  }

  set shaderGroupHandleAlignment(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get maxRayHitAttributeSize() {
    return this.#view.getUint32(44, LE);
  }

  set maxRayHitAttributeSize(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }
}