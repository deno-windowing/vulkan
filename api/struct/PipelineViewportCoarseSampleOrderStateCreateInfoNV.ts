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
import {CoarseSampleOrderCustomNV} from "./CoarseSampleOrderCustomNV.ts";
import { StructureType, CoarseSampleOrderTypeNV } from "../enum.ts";

export interface InitPipelineViewportCoarseSampleOrderStateCreateInfoNV {
  pNext?: AnyPointer;
  sampleOrderType?: CoarseSampleOrderTypeNV;
  customSampleOrderCount?: number;
  pCustomSampleOrders?: AnyPointer;
}

export class PipelineViewportCoarseSampleOrderStateCreateInfoNV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineViewportCoarseSampleOrderStateCreateInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineViewportCoarseSampleOrderStateCreateInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineViewportCoarseSampleOrderStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineViewportCoarseSampleOrderStateCreateInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineViewportCoarseSampleOrderStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.sampleOrderType !== undefined) this.sampleOrderType = data.sampleOrderType;
      if (data.customSampleOrderCount !== undefined) this.customSampleOrderCount = data.customSampleOrderCount;
      if (data.pCustomSampleOrders !== undefined) this.pCustomSampleOrders = data.pCustomSampleOrders;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineViewportCoarseSampleOrderStateCreateInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_VIEWPORT_COARSE_SAMPLE_ORDER_STATE_CREATE_INFO_NV;
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

  get sampleOrderType(): number {
    return this.#view.getUint32(16, LE);
  }

  set sampleOrderType(value: CoarseSampleOrderTypeNV) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get customSampleOrderCount(): number {
    return this.#view.getUint32(20, LE);
  }

  set customSampleOrderCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pCustomSampleOrders(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pCustomSampleOrders(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}