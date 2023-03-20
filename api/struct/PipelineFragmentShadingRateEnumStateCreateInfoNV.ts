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
import { StructureType, FragmentShadingRateTypeNV, FragmentShadingRateNV, FragmentShadingRateCombinerOpKHR } from "../enum.ts";

export interface InitPipelineFragmentShadingRateEnumStateCreateInfoNV {
  pNext?: AnyPointer;
  shadingRateType?: FragmentShadingRateTypeNV;
  shadingRate?: FragmentShadingRateNV;
  combinerOps?: Uint32Array;
}

export class PipelineFragmentShadingRateEnumStateCreateInfoNV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineFragmentShadingRateEnumStateCreateInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineFragmentShadingRateEnumStateCreateInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineFragmentShadingRateEnumStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineFragmentShadingRateEnumStateCreateInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineFragmentShadingRateEnumStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shadingRateType !== undefined) this.shadingRateType = data.shadingRateType;
      if (data.shadingRate !== undefined) this.shadingRate = data.shadingRate;
      if (data.combinerOps !== undefined) this.combinerOps = data.combinerOps;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineFragmentShadingRateEnumStateCreateInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_FRAGMENT_SHADING_RATE_ENUM_STATE_CREATE_INFO_NV;
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

  get shadingRateType(): number {
    return this.#view.getUint32(16, LE);
  }

  set shadingRateType(value: FragmentShadingRateTypeNV) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get shadingRate(): number {
    return this.#view.getUint32(20, LE);
  }

  set shadingRate(value: FragmentShadingRateNV) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get combinerOps(): Uint32Array {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 24, 2);
  }

  set combinerOps(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 24);
  }
}