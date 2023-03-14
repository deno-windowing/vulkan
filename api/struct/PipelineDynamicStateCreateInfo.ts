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
import { StructureType, DynamicState } from "../enum.ts";
import { PipelineDynamicStateCreateFlags } from "../def.ts";

export interface InitPipelineDynamicStateCreateInfo {
  pNext?: AnyPointer;
  flags?: PipelineDynamicStateCreateFlags;
  dynamicStateCount?: number;
  pDynamicStates?: AnyPointer;
}

export class PipelineDynamicStateCreateInfo implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineDynamicStateCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineDynamicStateCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineDynamicStateCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineDynamicStateCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineDynamicStateCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.dynamicStateCount !== undefined) this.dynamicStateCount = data.dynamicStateCount;
      if (data.pDynamicStates !== undefined) this.pDynamicStates = data.pDynamicStates;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineDynamicStateCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_DYNAMIC_STATE_CREATE_INFO;
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

  set flags(value: PipelineDynamicStateCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get dynamicStateCount() {
    return this.#view.getUint32(20, LE);
  }

  set dynamicStateCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pDynamicStates() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pDynamicStates(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}