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
import {ViewportWScalingNV} from "./ViewportWScalingNV.ts";
import { StructureType } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitPipelineViewportWScalingStateCreateInfoNV {
  pNext?: AnyPointer;
  viewportWScalingEnable?: Bool32;
  viewportCount?: number;
  pViewportWScalings?: AnyPointer;
}

export class PipelineViewportWScalingStateCreateInfoNV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineViewportWScalingStateCreateInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineViewportWScalingStateCreateInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineViewportWScalingStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineViewportWScalingStateCreateInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineViewportWScalingStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.viewportWScalingEnable !== undefined) this.viewportWScalingEnable = data.viewportWScalingEnable;
      if (data.viewportCount !== undefined) this.viewportCount = data.viewportCount;
      if (data.pViewportWScalings !== undefined) this.pViewportWScalings = data.pViewportWScalings;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineViewportWScalingStateCreateInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_VIEWPORT_W_SCALING_STATE_CREATE_INFO_NV;
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

  get viewportWScalingEnable() {
    return this.#view.getUint32(16, LE);
  }

  set viewportWScalingEnable(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get viewportCount() {
    return this.#view.getUint32(20, LE);
  }

  set viewportCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pViewportWScalings() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pViewportWScalings(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}