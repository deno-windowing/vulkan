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
import {Extent2D} from "./Extent2D.ts";
import { StructureType } from "../enum.ts";
import { SampleCountFlags, Bool32 } from "../def.ts";

export interface InitPhysicalDeviceSampleLocationsPropertiesEXT {
  pNext?: AnyPointer;
  sampleLocationSampleCounts?: SampleCountFlags;
  maxSampleLocationGridSize?: Extent2D;
  sampleLocationCoordinateRange?: Float32Array;
  sampleLocationSubPixelBits?: number;
  variableSampleLocations?: Bool32;
}

export class PhysicalDeviceSampleLocationsPropertiesEXT implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceSampleLocationsPropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceSampleLocationsPropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceSampleLocationsPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceSampleLocationsPropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceSampleLocationsPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.sampleLocationSampleCounts !== undefined) this.sampleLocationSampleCounts = data.sampleLocationSampleCounts;
      if (data.maxSampleLocationGridSize !== undefined) this.maxSampleLocationGridSize = data.maxSampleLocationGridSize;
      if (data.sampleLocationCoordinateRange !== undefined) this.sampleLocationCoordinateRange = data.sampleLocationCoordinateRange;
      if (data.sampleLocationSubPixelBits !== undefined) this.sampleLocationSubPixelBits = data.sampleLocationSubPixelBits;
      if (data.variableSampleLocations !== undefined) this.variableSampleLocations = data.variableSampleLocations;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceSampleLocationsPropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SAMPLE_LOCATIONS_PROPERTIES_EXT;
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

  get sampleLocationSampleCounts(): number {
    return this.#view.getUint32(16, LE);
  }

  set sampleLocationSampleCounts(value: SampleCountFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxSampleLocationGridSize(): Extent2D {
    return new Extent2D(this.#data.subarray(20, 20 + Extent2D.size));
  }

  set maxSampleLocationGridSize(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 20);
  }

  get sampleLocationCoordinateRange(): Float32Array {
    return new Float32Array(this.#data.buffer, this.#data.byteOffset + 28, 2);
  }

  set sampleLocationCoordinateRange(value: Float32Array) {
    this.#data.set(new Uint8Array(value.buffer), 28);
  }

  get sampleLocationSubPixelBits(): number {
    return this.#view.getUint32(36, LE);
  }

  set sampleLocationSubPixelBits(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get variableSampleLocations(): number {
    return this.#view.getUint32(40, LE);
  }

  set variableSampleLocations(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }
}