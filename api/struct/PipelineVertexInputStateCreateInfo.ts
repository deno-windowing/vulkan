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
import {VertexInputBindingDescription} from "./VertexInputBindingDescription.ts";
import {VertexInputAttributeDescription} from "./VertexInputAttributeDescription.ts";
import { StructureType } from "../enum.ts";
import { PipelineVertexInputStateCreateFlags } from "../def.ts";

export interface InitPipelineVertexInputStateCreateInfo {
  pNext?: AnyPointer;
  flags?: PipelineVertexInputStateCreateFlags;
  vertexBindingDescriptionCount?: number;
  pVertexBindingDescriptions?: AnyPointer;
  vertexAttributeDescriptionCount?: number;
  pVertexAttributeDescriptions?: AnyPointer;
}

export class PipelineVertexInputStateCreateInfo implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineVertexInputStateCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineVertexInputStateCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineVertexInputStateCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineVertexInputStateCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineVertexInputStateCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.vertexBindingDescriptionCount !== undefined) this.vertexBindingDescriptionCount = data.vertexBindingDescriptionCount;
      if (data.pVertexBindingDescriptions !== undefined) this.pVertexBindingDescriptions = data.pVertexBindingDescriptions;
      if (data.vertexAttributeDescriptionCount !== undefined) this.vertexAttributeDescriptionCount = data.vertexAttributeDescriptionCount;
      if (data.pVertexAttributeDescriptions !== undefined) this.pVertexAttributeDescriptions = data.pVertexAttributeDescriptions;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineVertexInputStateCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_VERTEX_INPUT_STATE_CREATE_INFO;
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

  set flags(value: PipelineVertexInputStateCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get vertexBindingDescriptionCount(): number {
    return this.#view.getUint32(20, LE);
  }

  set vertexBindingDescriptionCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pVertexBindingDescriptions(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pVertexBindingDescriptions(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get vertexAttributeDescriptionCount(): number {
    return this.#view.getUint32(32, LE);
  }

  set vertexAttributeDescriptionCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pVertexAttributeDescriptions(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set pVertexAttributeDescriptions(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}