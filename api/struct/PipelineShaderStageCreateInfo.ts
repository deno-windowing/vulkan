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
import {SpecializationInfo} from "./SpecializationInfo.ts";
import { StructureType, ShaderStageFlagBits } from "../enum.ts";
import { PipelineShaderStageCreateFlags, ShaderModule } from "../def.ts";

export interface InitPipelineShaderStageCreateInfo {
  pNext?: AnyPointer;
  flags?: PipelineShaderStageCreateFlags;
  stage?: ShaderStageFlagBits;
  module?: ShaderModule;
  pName?: AnyPointer;
  pSpecializationInfo?: AnyPointer;
}

export class PipelineShaderStageCreateInfo implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineShaderStageCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineShaderStageCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineShaderStageCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineShaderStageCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineShaderStageCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.stage !== undefined) this.stage = data.stage;
      if (data.module !== undefined) this.module = data.module;
      if (data.pName !== undefined) this.pName = data.pName;
      if (data.pSpecializationInfo !== undefined) this.pSpecializationInfo = data.pSpecializationInfo;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineShaderStageCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_SHADER_STAGE_CREATE_INFO;
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

  set flags(value: PipelineShaderStageCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get stage() {
    return this.#view.getUint32(20, LE);
  }

  set stage(value: ShaderStageFlagBits) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get module() {
    return pointerFromView(this.#view, 24, LE);
  }

  set module(value: ShaderModule) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get pName() {
    return pointerFromView(this.#view, 32, LE);
  }

  set pName(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get pSpecializationInfo() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pSpecializationInfo(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}