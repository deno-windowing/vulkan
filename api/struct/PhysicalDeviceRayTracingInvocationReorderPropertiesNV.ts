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
import { StructureType, RayTracingInvocationReorderModeNV } from "../enum.ts";

export interface InitPhysicalDeviceRayTracingInvocationReorderPropertiesNV {
  pNext?: AnyPointer;
  rayTracingInvocationReorderReorderingHint?: RayTracingInvocationReorderModeNV;
}

export class PhysicalDeviceRayTracingInvocationReorderPropertiesNV implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceRayTracingInvocationReorderPropertiesNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceRayTracingInvocationReorderPropertiesNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceRayTracingInvocationReorderPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceRayTracingInvocationReorderPropertiesNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceRayTracingInvocationReorderPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.rayTracingInvocationReorderReorderingHint !== undefined) this.rayTracingInvocationReorderReorderingHint = data.rayTracingInvocationReorderReorderingHint;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceRayTracingInvocationReorderPropertiesNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_RAY_TRACING_INVOCATION_REORDER_PROPERTIES_NV;
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

  get rayTracingInvocationReorderReorderingHint(): number {
    return this.#view.getUint32(16, LE);
  }

  set rayTracingInvocationReorderReorderingHint(value: RayTracingInvocationReorderModeNV) {
    this.#view.setUint32(16, Number(value), LE);
  }
}