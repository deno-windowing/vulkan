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
import {ComponentMapping} from "./ComponentMapping.ts";
import { StructureType, Format, SamplerYcbcrModelConversion, SamplerYcbcrRange, ChromaLocation, Filter } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitSamplerYcbcrConversionCreateInfo {
  pNext?: AnyPointer;
  format?: Format;
  ycbcrModel?: SamplerYcbcrModelConversion;
  ycbcrRange?: SamplerYcbcrRange;
  components?: ComponentMapping;
  xChromaOffset?: ChromaLocation;
  yChromaOffset?: ChromaLocation;
  chromaFilter?: Filter;
  forceExplicitReconstruction?: Bool32;
}

export class SamplerYcbcrConversionCreateInfo implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSamplerYcbcrConversionCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSamplerYcbcrConversionCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SamplerYcbcrConversionCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SamplerYcbcrConversionCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SamplerYcbcrConversionCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.format !== undefined) this.format = data.format;
      if (data.ycbcrModel !== undefined) this.ycbcrModel = data.ycbcrModel;
      if (data.ycbcrRange !== undefined) this.ycbcrRange = data.ycbcrRange;
      if (data.components !== undefined) this.components = data.components;
      if (data.xChromaOffset !== undefined) this.xChromaOffset = data.xChromaOffset;
      if (data.yChromaOffset !== undefined) this.yChromaOffset = data.yChromaOffset;
      if (data.chromaFilter !== undefined) this.chromaFilter = data.chromaFilter;
      if (data.forceExplicitReconstruction !== undefined) this.forceExplicitReconstruction = data.forceExplicitReconstruction;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SamplerYcbcrConversionCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SAMPLER_YCBCR_CONVERSION_CREATE_INFO;
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

  get format(): number {
    return this.#view.getUint32(16, LE);
  }

  set format(value: Format) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get ycbcrModel(): number {
    return this.#view.getUint32(20, LE);
  }

  set ycbcrModel(value: SamplerYcbcrModelConversion) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get ycbcrRange(): number {
    return this.#view.getUint32(24, LE);
  }

  set ycbcrRange(value: SamplerYcbcrRange) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get components(): ComponentMapping {
    return new ComponentMapping(this.#data.subarray(28, 28 + ComponentMapping.size));
  }

  set components(value: ComponentMapping) {
    if (value[BUFFER].byteLength < ComponentMapping.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 28);
  }

  get xChromaOffset(): number {
    return this.#view.getUint32(44, LE);
  }

  set xChromaOffset(value: ChromaLocation) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get yChromaOffset(): number {
    return this.#view.getUint32(48, LE);
  }

  set yChromaOffset(value: ChromaLocation) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get chromaFilter(): number {
    return this.#view.getUint32(52, LE);
  }

  set chromaFilter(value: Filter) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get forceExplicitReconstruction(): number {
    return this.#view.getUint32(56, LE);
  }

  set forceExplicitReconstruction(value: Bool32) {
    this.#view.setUint32(56, Number(value), LE);
  }
}