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
import { StencilOp, CompareOp } from "../enum.ts";

export interface InitStencilOpState {
  failOp?: StencilOp;
  passOp?: StencilOp;
  depthFailOp?: StencilOp;
  compareOp?: CompareOp;
  compareMask?: number;
  writeMask?: number;
  reference?: number;
}

export class StencilOpState implements BaseStruct {
  static size = 28;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStencilOpState);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStencilOpState) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StencilOpState.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StencilOpState.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StencilOpState.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.failOp !== undefined) this.failOp = data.failOp;
      if (data.passOp !== undefined) this.passOp = data.passOp;
      if (data.depthFailOp !== undefined) this.depthFailOp = data.depthFailOp;
      if (data.compareOp !== undefined) this.compareOp = data.compareOp;
      if (data.compareMask !== undefined) this.compareMask = data.compareMask;
      if (data.writeMask !== undefined) this.writeMask = data.writeMask;
      if (data.reference !== undefined) this.reference = data.reference;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StencilOpState.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get failOp() {
    return this.#view.getUint32(0, LE);
  }

  set failOp(value: StencilOp) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get passOp() {
    return this.#view.getUint32(4, LE);
  }

  set passOp(value: StencilOp) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get depthFailOp() {
    return this.#view.getUint32(8, LE);
  }

  set depthFailOp(value: StencilOp) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get compareOp() {
    return this.#view.getUint32(12, LE);
  }

  set compareOp(value: CompareOp) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get compareMask() {
    return this.#view.getUint32(16, LE);
  }

  set compareMask(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get writeMask() {
    return this.#view.getUint32(20, LE);
  }

  set writeMask(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get reference() {
    return this.#view.getUint32(24, LE);
  }

  set reference(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }
}