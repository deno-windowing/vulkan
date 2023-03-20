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

export interface InitPhysicalDeviceRayTracingMaintenance1FeaturesKHR {
  pNext?: AnyPointer;
  rayTracingMaintenance1?: Bool32;
  rayTracingPipelineTraceRaysIndirect2?: Bool32;
}

export class PhysicalDeviceRayTracingMaintenance1FeaturesKHR implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceRayTracingMaintenance1FeaturesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceRayTracingMaintenance1FeaturesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceRayTracingMaintenance1FeaturesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceRayTracingMaintenance1FeaturesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceRayTracingMaintenance1FeaturesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.rayTracingMaintenance1 !== undefined) this.rayTracingMaintenance1 = data.rayTracingMaintenance1;
      if (data.rayTracingPipelineTraceRaysIndirect2 !== undefined) this.rayTracingPipelineTraceRaysIndirect2 = data.rayTracingPipelineTraceRaysIndirect2;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceRayTracingMaintenance1FeaturesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_RAY_TRACING_MAINTENANCE_1_FEATURES_KHR;
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

  get rayTracingMaintenance1(): number {
    return this.#view.getUint32(16, LE);
  }

  set rayTracingMaintenance1(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get rayTracingPipelineTraceRaysIndirect2(): number {
    return this.#view.getUint32(20, LE);
  }

  set rayTracingPipelineTraceRaysIndirect2(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }
}