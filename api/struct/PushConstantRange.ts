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
import { ShaderStageFlags } from "../def.ts";

export interface InitPushConstantRange {
  stageFlags?: ShaderStageFlags;
  offset?: number;
  size?: number;
}

export class PushConstantRange implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPushConstantRange);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPushConstantRange) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PushConstantRange.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PushConstantRange.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PushConstantRange.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.stageFlags !== undefined) this.stageFlags = data.stageFlags;
      if (data.offset !== undefined) this.offset = data.offset;
      if (data.size !== undefined) this.size = data.size;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PushConstantRange.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get stageFlags() {
    return this.#view.getUint32(0, LE);
  }

  set stageFlags(value: ShaderStageFlags) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get offset() {
    return this.#view.getUint32(4, LE);
  }

  set offset(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get size() {
    return this.#view.getUint32(8, LE);
  }

  set size(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }
}