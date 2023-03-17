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
import { StructureType, CoverageReductionModeNV, SampleCountFlagBits } from "../enum.ts";
import { SampleCountFlags } from "../def.ts";

export interface InitFramebufferMixedSamplesCombinationNV {
  pNext?: AnyPointer;
  coverageReductionMode?: CoverageReductionModeNV;
  rasterizationSamples?: SampleCountFlagBits;
  depthStencilSamples?: SampleCountFlags;
  colorSamples?: SampleCountFlags;
}

export class FramebufferMixedSamplesCombinationNV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitFramebufferMixedSamplesCombinationNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitFramebufferMixedSamplesCombinationNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(FramebufferMixedSamplesCombinationNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < FramebufferMixedSamplesCombinationNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(FramebufferMixedSamplesCombinationNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.coverageReductionMode !== undefined) this.coverageReductionMode = data.coverageReductionMode;
      if (data.rasterizationSamples !== undefined) this.rasterizationSamples = data.rasterizationSamples;
      if (data.depthStencilSamples !== undefined) this.depthStencilSamples = data.depthStencilSamples;
      if (data.colorSamples !== undefined) this.colorSamples = data.colorSamples;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, FramebufferMixedSamplesCombinationNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.FRAMEBUFFER_MIXED_SAMPLES_COMBINATION_NV;
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

  get coverageReductionMode(): number {
    return this.#view.getUint32(16, LE);
  }

  set coverageReductionMode(value: CoverageReductionModeNV) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get rasterizationSamples(): number {
    return this.#view.getUint32(20, LE);
  }

  set rasterizationSamples(value: SampleCountFlagBits) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get depthStencilSamples(): number {
    return this.#view.getUint32(24, LE);
  }

  set depthStencilSamples(value: SampleCountFlags) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get colorSamples(): number {
    return this.#view.getUint32(28, LE);
  }

  set colorSamples(value: SampleCountFlags) {
    this.#view.setUint32(28, Number(value), LE);
  }
}