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
import {PushConstantRange} from "./PushConstantRange.ts";
import { StructureType } from "../enum.ts";
import { PipelineLayoutCreateFlags, DescriptorSetLayout } from "../def.ts";

export interface InitPipelineLayoutCreateInfo {
  pNext?: AnyPointer;
  flags?: PipelineLayoutCreateFlags;
  setLayoutCount?: number;
  pSetLayouts?: AnyPointer;
  pushConstantRangeCount?: number;
  pPushConstantRanges?: AnyPointer;
}

export class PipelineLayoutCreateInfo implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineLayoutCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineLayoutCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineLayoutCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineLayoutCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineLayoutCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.setLayoutCount !== undefined) this.setLayoutCount = data.setLayoutCount;
      if (data.pSetLayouts !== undefined) this.pSetLayouts = data.pSetLayouts;
      if (data.pushConstantRangeCount !== undefined) this.pushConstantRangeCount = data.pushConstantRangeCount;
      if (data.pPushConstantRanges !== undefined) this.pPushConstantRanges = data.pPushConstantRanges;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineLayoutCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_LAYOUT_CREATE_INFO;
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

  set flags(value: PipelineLayoutCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get setLayoutCount(): number {
    return this.#view.getUint32(20, LE);
  }

  set setLayoutCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pSetLayouts(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pSetLayouts(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get pushConstantRangeCount(): number {
    return this.#view.getUint32(32, LE);
  }

  set pushConstantRangeCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pPushConstantRanges(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set pPushConstantRanges(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}