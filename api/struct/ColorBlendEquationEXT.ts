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
import { BlendFactor, BlendOp } from "../enum.ts";

export interface InitColorBlendEquationEXT {
  srcColorBlendFactor?: BlendFactor;
  dstColorBlendFactor?: BlendFactor;
  colorBlendOp?: BlendOp;
  srcAlphaBlendFactor?: BlendFactor;
  dstAlphaBlendFactor?: BlendFactor;
  alphaBlendOp?: BlendOp;
}

export class ColorBlendEquationEXT implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitColorBlendEquationEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitColorBlendEquationEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ColorBlendEquationEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ColorBlendEquationEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ColorBlendEquationEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.srcColorBlendFactor !== undefined) this.srcColorBlendFactor = data.srcColorBlendFactor;
      if (data.dstColorBlendFactor !== undefined) this.dstColorBlendFactor = data.dstColorBlendFactor;
      if (data.colorBlendOp !== undefined) this.colorBlendOp = data.colorBlendOp;
      if (data.srcAlphaBlendFactor !== undefined) this.srcAlphaBlendFactor = data.srcAlphaBlendFactor;
      if (data.dstAlphaBlendFactor !== undefined) this.dstAlphaBlendFactor = data.dstAlphaBlendFactor;
      if (data.alphaBlendOp !== undefined) this.alphaBlendOp = data.alphaBlendOp;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ColorBlendEquationEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get srcColorBlendFactor(): number {
    return this.#view.getUint32(0, LE);
  }

  set srcColorBlendFactor(value: BlendFactor) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get dstColorBlendFactor(): number {
    return this.#view.getUint32(4, LE);
  }

  set dstColorBlendFactor(value: BlendFactor) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get colorBlendOp(): number {
    return this.#view.getUint32(8, LE);
  }

  set colorBlendOp(value: BlendOp) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get srcAlphaBlendFactor(): number {
    return this.#view.getUint32(12, LE);
  }

  set srcAlphaBlendFactor(value: BlendFactor) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get dstAlphaBlendFactor(): number {
    return this.#view.getUint32(16, LE);
  }

  set dstAlphaBlendFactor(value: BlendFactor) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get alphaBlendOp(): number {
    return this.#view.getUint32(20, LE);
  }

  set alphaBlendOp(value: BlendOp) {
    this.#view.setUint32(20, Number(value), LE);
  }
}