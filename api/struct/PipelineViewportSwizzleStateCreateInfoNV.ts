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
import {ViewportSwizzleNV} from "./ViewportSwizzleNV.ts";
import { StructureType } from "../enum.ts";
import { PipelineViewportSwizzleStateCreateFlagsNV } from "../def.ts";

export interface InitPipelineViewportSwizzleStateCreateInfoNV {
  pNext?: AnyPointer;
  flags?: PipelineViewportSwizzleStateCreateFlagsNV;
  viewportCount?: number;
  pViewportSwizzles?: AnyPointer;
}

export class PipelineViewportSwizzleStateCreateInfoNV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineViewportSwizzleStateCreateInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineViewportSwizzleStateCreateInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineViewportSwizzleStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineViewportSwizzleStateCreateInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineViewportSwizzleStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.viewportCount !== undefined) this.viewportCount = data.viewportCount;
      if (data.pViewportSwizzles !== undefined) this.pViewportSwizzles = data.pViewportSwizzles;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineViewportSwizzleStateCreateInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_VIEWPORT_SWIZZLE_STATE_CREATE_INFO_NV;
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

  get flags() {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: PipelineViewportSwizzleStateCreateFlagsNV) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get viewportCount() {
    return this.#view.getUint32(20, LE);
  }

  set viewportCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pViewportSwizzles() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pViewportSwizzles(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}