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
import {SampleLocationEXT} from "./SampleLocationEXT.ts";
import { StructureType, SampleCountFlagBits } from "../enum.ts";

export interface InitSampleLocationsInfoEXT {
  pNext?: AnyPointer;
  sampleLocationsPerPixel?: SampleCountFlagBits;
  sampleLocationGridSize?: Extent2D;
  sampleLocationsCount?: number;
  pSampleLocations?: AnyPointer;
}

export class SampleLocationsInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSampleLocationsInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSampleLocationsInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SampleLocationsInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SampleLocationsInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SampleLocationsInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.sampleLocationsPerPixel !== undefined) this.sampleLocationsPerPixel = data.sampleLocationsPerPixel;
      if (data.sampleLocationGridSize !== undefined) this.sampleLocationGridSize = data.sampleLocationGridSize;
      if (data.sampleLocationsCount !== undefined) this.sampleLocationsCount = data.sampleLocationsCount;
      if (data.pSampleLocations !== undefined) this.pSampleLocations = data.pSampleLocations;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SampleLocationsInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SAMPLE_LOCATIONS_INFO_EXT;
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

  get sampleLocationsPerPixel() {
    return this.#view.getUint32(16, LE);
  }

  set sampleLocationsPerPixel(value: SampleCountFlagBits) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get sampleLocationGridSize() {
    return new Extent2D(this.#data.subarray(20, 20 + Extent2D.size));
  }

  set sampleLocationGridSize(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 20);
  }

  get sampleLocationsCount() {
    return this.#view.getUint32(28, LE);
  }

  set sampleLocationsCount(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get pSampleLocations() {
    return pointerFromView(this.#view, 32, LE);
  }

  set pSampleLocations(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}