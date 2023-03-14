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
import {Offset2D} from "./Offset2D.ts";
import {Extent2D} from "./Extent2D.ts";
import { StructureType } from "../enum.ts";

export interface InitImageViewSampleWeightCreateInfoQCOM {
  pNext?: AnyPointer;
  filterCenter?: Offset2D;
  filterSize?: Extent2D;
  numPhases?: number;
}

export class ImageViewSampleWeightCreateInfoQCOM implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageViewSampleWeightCreateInfoQCOM);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageViewSampleWeightCreateInfoQCOM) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageViewSampleWeightCreateInfoQCOM.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageViewSampleWeightCreateInfoQCOM.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageViewSampleWeightCreateInfoQCOM.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.filterCenter !== undefined) this.filterCenter = data.filterCenter;
      if (data.filterSize !== undefined) this.filterSize = data.filterSize;
      if (data.numPhases !== undefined) this.numPhases = data.numPhases;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageViewSampleWeightCreateInfoQCOM.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IMAGE_VIEW_SAMPLE_WEIGHT_CREATE_INFO_QCOM;
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

  get filterCenter() {
    return new Offset2D(this.#data.subarray(16, 16 + Offset2D.size));
  }

  set filterCenter(value: Offset2D) {
    if (value[BUFFER].byteLength < Offset2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get filterSize() {
    return new Extent2D(this.#data.subarray(24, 24 + Extent2D.size));
  }

  set filterSize(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 24);
  }

  get numPhases() {
    return this.#view.getUint32(32, LE);
  }

  set numPhases(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }
}