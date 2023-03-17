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
import {Viewport} from "./Viewport.ts";
import {Rect2D} from "./Rect2D.ts";
import { StructureType } from "../enum.ts";
import { PipelineViewportStateCreateFlags } from "../def.ts";

export interface InitPipelineViewportStateCreateInfo {
  pNext?: AnyPointer;
  flags?: PipelineViewportStateCreateFlags;
  viewportCount?: number;
  pViewports?: AnyPointer;
  scissorCount?: number;
  pScissors?: AnyPointer;
}

export class PipelineViewportStateCreateInfo implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineViewportStateCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineViewportStateCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineViewportStateCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineViewportStateCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineViewportStateCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.viewportCount !== undefined) this.viewportCount = data.viewportCount;
      if (data.pViewports !== undefined) this.pViewports = data.pViewports;
      if (data.scissorCount !== undefined) this.scissorCount = data.scissorCount;
      if (data.pScissors !== undefined) this.pScissors = data.pScissors;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineViewportStateCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_VIEWPORT_STATE_CREATE_INFO;
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

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: PipelineViewportStateCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get viewportCount(): number {
    return this.#view.getUint32(20, LE);
  }

  set viewportCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pViewports(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pViewports(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get scissorCount(): number {
    return this.#view.getUint32(32, LE);
  }

  set scissorCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pScissors(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set pScissors(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}