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
import { StructureType, BlendOverlapEXT } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitPipelineColorBlendAdvancedStateCreateInfoEXT {
  pNext?: AnyPointer;
  srcPremultiplied?: Bool32;
  dstPremultiplied?: Bool32;
  blendOverlap?: BlendOverlapEXT;
}

export class PipelineColorBlendAdvancedStateCreateInfoEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineColorBlendAdvancedStateCreateInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineColorBlendAdvancedStateCreateInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineColorBlendAdvancedStateCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineColorBlendAdvancedStateCreateInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineColorBlendAdvancedStateCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.srcPremultiplied !== undefined) this.srcPremultiplied = data.srcPremultiplied;
      if (data.dstPremultiplied !== undefined) this.dstPremultiplied = data.dstPremultiplied;
      if (data.blendOverlap !== undefined) this.blendOverlap = data.blendOverlap;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineColorBlendAdvancedStateCreateInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_COLOR_BLEND_ADVANCED_STATE_CREATE_INFO_EXT;
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

  get srcPremultiplied(): number {
    return this.#view.getUint32(16, LE);
  }

  set srcPremultiplied(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get dstPremultiplied(): number {
    return this.#view.getUint32(20, LE);
  }

  set dstPremultiplied(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get blendOverlap(): number {
    return this.#view.getUint32(24, LE);
  }

  set blendOverlap(value: BlendOverlapEXT) {
    this.#view.setUint32(24, Number(value), LE);
  }
}