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
import { StructureType, SampleCountFlagBits } from "../enum.ts";
import { PipelineMultisampleStateCreateFlags, Bool32, SampleMask } from "../def.ts";

export interface InitPipelineMultisampleStateCreateInfo {
  pNext?: AnyPointer;
  flags?: PipelineMultisampleStateCreateFlags;
  rasterizationSamples?: SampleCountFlagBits;
  sampleShadingEnable?: Bool32;
  minSampleShading?: number;
  pSampleMask?: AnyPointer;
  alphaToCoverageEnable?: Bool32;
  alphaToOneEnable?: Bool32;
}

export class PipelineMultisampleStateCreateInfo implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineMultisampleStateCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineMultisampleStateCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineMultisampleStateCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineMultisampleStateCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineMultisampleStateCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.rasterizationSamples !== undefined) this.rasterizationSamples = data.rasterizationSamples;
      if (data.sampleShadingEnable !== undefined) this.sampleShadingEnable = data.sampleShadingEnable;
      if (data.minSampleShading !== undefined) this.minSampleShading = data.minSampleShading;
      if (data.pSampleMask !== undefined) this.pSampleMask = data.pSampleMask;
      if (data.alphaToCoverageEnable !== undefined) this.alphaToCoverageEnable = data.alphaToCoverageEnable;
      if (data.alphaToOneEnable !== undefined) this.alphaToOneEnable = data.alphaToOneEnable;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineMultisampleStateCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_MULTISAMPLE_STATE_CREATE_INFO;
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

  set flags(value: PipelineMultisampleStateCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get rasterizationSamples() {
    return this.#view.getUint32(20, LE);
  }

  set rasterizationSamples(value: SampleCountFlagBits) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get sampleShadingEnable() {
    return this.#view.getUint32(24, LE);
  }

  set sampleShadingEnable(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get minSampleShading() {
    return this.#view.getFloat32(28, LE);
  }

  set minSampleShading(value: number) {
    this.#view.setFloat32(28, Number(value), LE);
  }

  get pSampleMask() {
    return pointerFromView(this.#view, 32, LE);
  }

  set pSampleMask(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get alphaToCoverageEnable() {
    return this.#view.getUint32(40, LE);
  }

  set alphaToCoverageEnable(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get alphaToOneEnable() {
    return this.#view.getUint32(44, LE);
  }

  set alphaToOneEnable(value: Bool32) {
    this.#view.setUint32(44, Number(value), LE);
  }
}