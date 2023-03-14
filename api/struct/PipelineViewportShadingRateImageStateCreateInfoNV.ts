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
import {ShadingRatePaletteNV} from "./ShadingRatePaletteNV.ts";
import { StructureType } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitPipelineViewportShadingRateImageStateCreateInfoNV {
  pNext?: AnyPointer;
  shadingRateImageEnable?: Bool32;
  viewportCount?: number;
  pShadingRatePalettes?: AnyPointer;
}

export class PipelineViewportShadingRateImageStateCreateInfoNV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineViewportShadingRateImageStateCreateInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineViewportShadingRateImageStateCreateInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineViewportShadingRateImageStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineViewportShadingRateImageStateCreateInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineViewportShadingRateImageStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shadingRateImageEnable !== undefined) this.shadingRateImageEnable = data.shadingRateImageEnable;
      if (data.viewportCount !== undefined) this.viewportCount = data.viewportCount;
      if (data.pShadingRatePalettes !== undefined) this.pShadingRatePalettes = data.pShadingRatePalettes;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineViewportShadingRateImageStateCreateInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_VIEWPORT_SHADING_RATE_IMAGE_STATE_CREATE_INFO_NV;
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

  get shadingRateImageEnable() {
    return this.#view.getUint32(16, LE);
  }

  set shadingRateImageEnable(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get viewportCount() {
    return this.#view.getUint32(20, LE);
  }

  set viewportCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pShadingRatePalettes() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pShadingRatePalettes(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}