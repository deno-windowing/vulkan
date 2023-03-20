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

export interface InitRayTracingPipelineInterfaceCreateInfoKHR {
  pNext?: AnyPointer;
  maxPipelineRayPayloadSize?: number;
  maxPipelineRayHitAttributeSize?: number;
}

export class RayTracingPipelineInterfaceCreateInfoKHR implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitRayTracingPipelineInterfaceCreateInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitRayTracingPipelineInterfaceCreateInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(RayTracingPipelineInterfaceCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < RayTracingPipelineInterfaceCreateInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(RayTracingPipelineInterfaceCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxPipelineRayPayloadSize !== undefined) this.maxPipelineRayPayloadSize = data.maxPipelineRayPayloadSize;
      if (data.maxPipelineRayHitAttributeSize !== undefined) this.maxPipelineRayHitAttributeSize = data.maxPipelineRayHitAttributeSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, RayTracingPipelineInterfaceCreateInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.RAY_TRACING_PIPELINE_INTERFACE_CREATE_INFO_KHR;
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

  get maxPipelineRayPayloadSize(): number {
    return this.#view.getUint32(16, LE);
  }

  set maxPipelineRayPayloadSize(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxPipelineRayHitAttributeSize(): number {
    return this.#view.getUint32(20, LE);
  }

  set maxPipelineRayHitAttributeSize(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }
}