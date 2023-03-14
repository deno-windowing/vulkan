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
import {CoarseSampleLocationNV} from "./CoarseSampleLocationNV.ts";
import { ShadingRatePaletteEntryNV } from "../enum.ts";

export interface InitCoarseSampleOrderCustomNV {
  shadingRate?: ShadingRatePaletteEntryNV;
  sampleCount?: number;
  sampleLocationCount?: number;
  pSampleLocations?: AnyPointer;
}

export class CoarseSampleOrderCustomNV implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCoarseSampleOrderCustomNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCoarseSampleOrderCustomNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CoarseSampleOrderCustomNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CoarseSampleOrderCustomNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CoarseSampleOrderCustomNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.shadingRate !== undefined) this.shadingRate = data.shadingRate;
      if (data.sampleCount !== undefined) this.sampleCount = data.sampleCount;
      if (data.sampleLocationCount !== undefined) this.sampleLocationCount = data.sampleLocationCount;
      if (data.pSampleLocations !== undefined) this.pSampleLocations = data.pSampleLocations;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CoarseSampleOrderCustomNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get shadingRate() {
    return this.#view.getUint32(0, LE);
  }

  set shadingRate(value: ShadingRatePaletteEntryNV) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get sampleCount() {
    return this.#view.getUint32(4, LE);
  }

  set sampleCount(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get sampleLocationCount() {
    return this.#view.getUint32(8, LE);
  }

  set sampleLocationCount(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get pSampleLocations() {
    return pointerFromView(this.#view, 16, LE);
  }

  set pSampleLocations(value: AnyPointer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }
}