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
import { StructureType, FragmentShadingRateCombinerOpKHR } from "../enum.ts";

export interface InitPipelineFragmentShadingRateStateCreateInfoKHR {
  pNext?: AnyPointer;
  fragmentSize?: Extent2D;
  combinerOps?: Uint32Array;
}

export class PipelineFragmentShadingRateStateCreateInfoKHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineFragmentShadingRateStateCreateInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineFragmentShadingRateStateCreateInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineFragmentShadingRateStateCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineFragmentShadingRateStateCreateInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineFragmentShadingRateStateCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.fragmentSize !== undefined) this.fragmentSize = data.fragmentSize;
      if (data.combinerOps !== undefined) this.combinerOps = data.combinerOps;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineFragmentShadingRateStateCreateInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_FRAGMENT_SHADING_RATE_STATE_CREATE_INFO_KHR;
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

  get fragmentSize(): Extent2D {
    return new Extent2D(this.#data.subarray(16, 16 + Extent2D.size));
  }

  set fragmentSize(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get combinerOps(): Uint32Array {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 24, 2);
  }

  set combinerOps(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 24);
  }
}