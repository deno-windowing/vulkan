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
import { StructureType, DiscardRectangleModeEXT } from "../enum.ts";
import { PipelineDiscardRectangleStateCreateFlagsEXT } from "../def.ts";

export interface InitPipelineDiscardRectangleStateCreateInfoEXT {
  pNext?: AnyPointer;
  flags?: PipelineDiscardRectangleStateCreateFlagsEXT;
  discardRectangleMode?: DiscardRectangleModeEXT;
  discardRectangleCount?: number;
  pDiscardRectangles?: AnyPointer;
}

export class PipelineDiscardRectangleStateCreateInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineDiscardRectangleStateCreateInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineDiscardRectangleStateCreateInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineDiscardRectangleStateCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineDiscardRectangleStateCreateInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineDiscardRectangleStateCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.discardRectangleMode !== undefined) this.discardRectangleMode = data.discardRectangleMode;
      if (data.discardRectangleCount !== undefined) this.discardRectangleCount = data.discardRectangleCount;
      if (data.pDiscardRectangles !== undefined) this.pDiscardRectangles = data.pDiscardRectangles;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineDiscardRectangleStateCreateInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_DISCARD_RECTANGLE_STATE_CREATE_INFO_EXT;
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

  set flags(value: PipelineDiscardRectangleStateCreateFlagsEXT) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get discardRectangleMode(): number {
    return this.#view.getUint32(20, LE);
  }

  set discardRectangleMode(value: DiscardRectangleModeEXT) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get discardRectangleCount(): number {
    return this.#view.getUint32(24, LE);
  }

  set discardRectangleCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pDiscardRectangles(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pDiscardRectangles(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}