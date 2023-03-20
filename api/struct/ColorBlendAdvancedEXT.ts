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
import { BlendOp, BlendOverlapEXT } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitColorBlendAdvancedEXT {
  advancedBlendOp?: BlendOp;
  srcPremultiplied?: Bool32;
  dstPremultiplied?: Bool32;
  blendOverlap?: BlendOverlapEXT;
  clampResults?: Bool32;
}

export class ColorBlendAdvancedEXT implements BaseStruct {
  static size = 20;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitColorBlendAdvancedEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitColorBlendAdvancedEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ColorBlendAdvancedEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ColorBlendAdvancedEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ColorBlendAdvancedEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.advancedBlendOp !== undefined) this.advancedBlendOp = data.advancedBlendOp;
      if (data.srcPremultiplied !== undefined) this.srcPremultiplied = data.srcPremultiplied;
      if (data.dstPremultiplied !== undefined) this.dstPremultiplied = data.dstPremultiplied;
      if (data.blendOverlap !== undefined) this.blendOverlap = data.blendOverlap;
      if (data.clampResults !== undefined) this.clampResults = data.clampResults;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ColorBlendAdvancedEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get advancedBlendOp(): number {
    return this.#view.getUint32(0, LE);
  }

  set advancedBlendOp(value: BlendOp) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get srcPremultiplied(): number {
    return this.#view.getUint32(4, LE);
  }

  set srcPremultiplied(value: Bool32) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get dstPremultiplied(): number {
    return this.#view.getUint32(8, LE);
  }

  set dstPremultiplied(value: Bool32) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get blendOverlap(): number {
    return this.#view.getUint32(12, LE);
  }

  set blendOverlap(value: BlendOverlapEXT) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get clampResults(): number {
    return this.#view.getUint32(16, LE);
  }

  set clampResults(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }
}