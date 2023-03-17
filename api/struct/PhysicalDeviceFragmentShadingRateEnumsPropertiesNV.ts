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
import { StructureType, SampleCountFlagBits } from "../enum.ts";

export interface InitPhysicalDeviceFragmentShadingRateEnumsPropertiesNV {
  pNext?: AnyPointer;
  maxFragmentShadingRateInvocationCount?: SampleCountFlagBits;
}

export class PhysicalDeviceFragmentShadingRateEnumsPropertiesNV implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceFragmentShadingRateEnumsPropertiesNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceFragmentShadingRateEnumsPropertiesNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceFragmentShadingRateEnumsPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceFragmentShadingRateEnumsPropertiesNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceFragmentShadingRateEnumsPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxFragmentShadingRateInvocationCount !== undefined) this.maxFragmentShadingRateInvocationCount = data.maxFragmentShadingRateInvocationCount;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceFragmentShadingRateEnumsPropertiesNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_FRAGMENT_SHADING_RATE_ENUMS_PROPERTIES_NV;
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

  get maxFragmentShadingRateInvocationCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set maxFragmentShadingRateInvocationCount(value: SampleCountFlagBits) {
    this.#view.setUint32(16, Number(value), LE);
  }
}