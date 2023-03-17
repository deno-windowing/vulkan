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

export interface InitPhysicalDeviceFragmentDensityMap2PropertiesEXT {
  pNext?: AnyPointer;
  subsampledLoads?: Bool32;
  subsampledCoarseReconstructionEarlyAccess?: Bool32;
  maxSubsampledArrayLayers?: number;
  maxDescriptorSetSubsampledSamplers?: number;
}

export class PhysicalDeviceFragmentDensityMap2PropertiesEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceFragmentDensityMap2PropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceFragmentDensityMap2PropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceFragmentDensityMap2PropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceFragmentDensityMap2PropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceFragmentDensityMap2PropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.subsampledLoads !== undefined) this.subsampledLoads = data.subsampledLoads;
      if (data.subsampledCoarseReconstructionEarlyAccess !== undefined) this.subsampledCoarseReconstructionEarlyAccess = data.subsampledCoarseReconstructionEarlyAccess;
      if (data.maxSubsampledArrayLayers !== undefined) this.maxSubsampledArrayLayers = data.maxSubsampledArrayLayers;
      if (data.maxDescriptorSetSubsampledSamplers !== undefined) this.maxDescriptorSetSubsampledSamplers = data.maxDescriptorSetSubsampledSamplers;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceFragmentDensityMap2PropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_FRAGMENT_DENSITY_MAP_2_PROPERTIES_EXT;
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

  get subsampledLoads(): number {
    return this.#view.getUint32(16, LE);
  }

  set subsampledLoads(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get subsampledCoarseReconstructionEarlyAccess(): number {
    return this.#view.getUint32(20, LE);
  }

  set subsampledCoarseReconstructionEarlyAccess(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get maxSubsampledArrayLayers(): number {
    return this.#view.getUint32(24, LE);
  }

  set maxSubsampledArrayLayers(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get maxDescriptorSetSubsampledSamplers(): number {
    return this.#view.getUint32(28, LE);
  }

  set maxDescriptorSetSubsampledSamplers(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }
}