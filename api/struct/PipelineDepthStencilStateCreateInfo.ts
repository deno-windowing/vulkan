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
import {StencilOpState} from "./StencilOpState.ts";
import { StructureType, CompareOp } from "../enum.ts";
import { PipelineDepthStencilStateCreateFlags, Bool32 } from "../def.ts";

export interface InitPipelineDepthStencilStateCreateInfo {
  pNext?: AnyPointer;
  flags?: PipelineDepthStencilStateCreateFlags;
  depthTestEnable?: Bool32;
  depthWriteEnable?: Bool32;
  depthCompareOp?: CompareOp;
  depthBoundsTestEnable?: Bool32;
  stencilTestEnable?: Bool32;
  front?: StencilOpState;
  back?: StencilOpState;
  minDepthBounds?: number;
  maxDepthBounds?: number;
}

export class PipelineDepthStencilStateCreateInfo implements BaseStruct {
  static size = 104;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineDepthStencilStateCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineDepthStencilStateCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineDepthStencilStateCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineDepthStencilStateCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineDepthStencilStateCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.depthTestEnable !== undefined) this.depthTestEnable = data.depthTestEnable;
      if (data.depthWriteEnable !== undefined) this.depthWriteEnable = data.depthWriteEnable;
      if (data.depthCompareOp !== undefined) this.depthCompareOp = data.depthCompareOp;
      if (data.depthBoundsTestEnable !== undefined) this.depthBoundsTestEnable = data.depthBoundsTestEnable;
      if (data.stencilTestEnable !== undefined) this.stencilTestEnable = data.stencilTestEnable;
      if (data.front !== undefined) this.front = data.front;
      if (data.back !== undefined) this.back = data.back;
      if (data.minDepthBounds !== undefined) this.minDepthBounds = data.minDepthBounds;
      if (data.maxDepthBounds !== undefined) this.maxDepthBounds = data.maxDepthBounds;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineDepthStencilStateCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_DEPTH_STENCIL_STATE_CREATE_INFO;
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

  set flags(value: PipelineDepthStencilStateCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get depthTestEnable() {
    return this.#view.getUint32(20, LE);
  }

  set depthTestEnable(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get depthWriteEnable() {
    return this.#view.getUint32(24, LE);
  }

  set depthWriteEnable(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get depthCompareOp() {
    return this.#view.getUint32(28, LE);
  }

  set depthCompareOp(value: CompareOp) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get depthBoundsTestEnable() {
    return this.#view.getUint32(32, LE);
  }

  set depthBoundsTestEnable(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get stencilTestEnable() {
    return this.#view.getUint32(36, LE);
  }

  set stencilTestEnable(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get front() {
    return new StencilOpState(this.#data.subarray(40, 40 + StencilOpState.size));
  }

  set front(value: StencilOpState) {
    if (value[BUFFER].byteLength < StencilOpState.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 40);
  }

  get back() {
    return new StencilOpState(this.#data.subarray(68, 68 + StencilOpState.size));
  }

  set back(value: StencilOpState) {
    if (value[BUFFER].byteLength < StencilOpState.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 68);
  }

  get minDepthBounds() {
    return this.#view.getFloat32(96, LE);
  }

  set minDepthBounds(value: number) {
    this.#view.setFloat32(96, Number(value), LE);
  }

  get maxDepthBounds() {
    return this.#view.getFloat32(100, LE);
  }

  set maxDepthBounds(value: number) {
    this.#view.setFloat32(100, Number(value), LE);
  }
}