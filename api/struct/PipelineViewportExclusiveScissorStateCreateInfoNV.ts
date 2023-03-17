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
import {Rect2D} from "./Rect2D.ts";
import { StructureType } from "../enum.ts";

export interface InitPipelineViewportExclusiveScissorStateCreateInfoNV {
  pNext?: AnyPointer;
  exclusiveScissorCount?: number;
  pExclusiveScissors?: AnyPointer;
}

export class PipelineViewportExclusiveScissorStateCreateInfoNV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineViewportExclusiveScissorStateCreateInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineViewportExclusiveScissorStateCreateInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineViewportExclusiveScissorStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineViewportExclusiveScissorStateCreateInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineViewportExclusiveScissorStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.exclusiveScissorCount !== undefined) this.exclusiveScissorCount = data.exclusiveScissorCount;
      if (data.pExclusiveScissors !== undefined) this.pExclusiveScissors = data.pExclusiveScissors;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineViewportExclusiveScissorStateCreateInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_VIEWPORT_EXCLUSIVE_SCISSOR_STATE_CREATE_INFO_NV;
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

  get exclusiveScissorCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set exclusiveScissorCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pExclusiveScissors(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pExclusiveScissors(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}