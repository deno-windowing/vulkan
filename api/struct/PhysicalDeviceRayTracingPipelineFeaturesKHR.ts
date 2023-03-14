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

export interface InitPhysicalDeviceRayTracingPipelineFeaturesKHR {
  pNext?: AnyPointer;
  rayTracingPipeline?: Bool32;
  rayTracingPipelineShaderGroupHandleCaptureReplay?: Bool32;
  rayTracingPipelineShaderGroupHandleCaptureReplayMixed?: Bool32;
  rayTracingPipelineTraceRaysIndirect?: Bool32;
  rayTraversalPrimitiveCulling?: Bool32;
}

export class PhysicalDeviceRayTracingPipelineFeaturesKHR implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceRayTracingPipelineFeaturesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceRayTracingPipelineFeaturesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceRayTracingPipelineFeaturesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceRayTracingPipelineFeaturesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceRayTracingPipelineFeaturesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.rayTracingPipeline !== undefined) this.rayTracingPipeline = data.rayTracingPipeline;
      if (data.rayTracingPipelineShaderGroupHandleCaptureReplay !== undefined) this.rayTracingPipelineShaderGroupHandleCaptureReplay = data.rayTracingPipelineShaderGroupHandleCaptureReplay;
      if (data.rayTracingPipelineShaderGroupHandleCaptureReplayMixed !== undefined) this.rayTracingPipelineShaderGroupHandleCaptureReplayMixed = data.rayTracingPipelineShaderGroupHandleCaptureReplayMixed;
      if (data.rayTracingPipelineTraceRaysIndirect !== undefined) this.rayTracingPipelineTraceRaysIndirect = data.rayTracingPipelineTraceRaysIndirect;
      if (data.rayTraversalPrimitiveCulling !== undefined) this.rayTraversalPrimitiveCulling = data.rayTraversalPrimitiveCulling;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceRayTracingPipelineFeaturesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_RAY_TRACING_PIPELINE_FEATURES_KHR;
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

  get rayTracingPipeline() {
    return this.#view.getUint32(16, LE);
  }

  set rayTracingPipeline(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get rayTracingPipelineShaderGroupHandleCaptureReplay() {
    return this.#view.getUint32(20, LE);
  }

  set rayTracingPipelineShaderGroupHandleCaptureReplay(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get rayTracingPipelineShaderGroupHandleCaptureReplayMixed() {
    return this.#view.getUint32(24, LE);
  }

  set rayTracingPipelineShaderGroupHandleCaptureReplayMixed(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get rayTracingPipelineTraceRaysIndirect() {
    return this.#view.getUint32(28, LE);
  }

  set rayTracingPipelineTraceRaysIndirect(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get rayTraversalPrimitiveCulling() {
    return this.#view.getUint32(32, LE);
  }

  set rayTraversalPrimitiveCulling(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }
}