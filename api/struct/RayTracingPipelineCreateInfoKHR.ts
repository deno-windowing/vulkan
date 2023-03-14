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
import {PipelineShaderStageCreateInfo} from "./PipelineShaderStageCreateInfo.ts";
import {RayTracingShaderGroupCreateInfoKHR} from "./RayTracingShaderGroupCreateInfoKHR.ts";
import {PipelineLibraryCreateInfoKHR} from "./PipelineLibraryCreateInfoKHR.ts";
import {RayTracingPipelineInterfaceCreateInfoKHR} from "./RayTracingPipelineInterfaceCreateInfoKHR.ts";
import {PipelineDynamicStateCreateInfo} from "./PipelineDynamicStateCreateInfo.ts";
import { StructureType } from "../enum.ts";
import { PipelineCreateFlags, PipelineLayout, Pipeline } from "../def.ts";

export interface InitRayTracingPipelineCreateInfoKHR {
  pNext?: AnyPointer;
  flags?: PipelineCreateFlags;
  stageCount?: number;
  pStages?: AnyPointer;
  groupCount?: number;
  pGroups?: AnyPointer;
  maxPipelineRayRecursionDepth?: number;
  pLibraryInfo?: AnyPointer;
  pLibraryInterface?: AnyPointer;
  pDynamicState?: AnyPointer;
  layout?: PipelineLayout;
  basePipelineHandle?: Pipeline;
  basePipelineIndex?: number;
}

export class RayTracingPipelineCreateInfoKHR implements BaseStruct {
  static size = 104;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitRayTracingPipelineCreateInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitRayTracingPipelineCreateInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(RayTracingPipelineCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < RayTracingPipelineCreateInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(RayTracingPipelineCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.stageCount !== undefined) this.stageCount = data.stageCount;
      if (data.pStages !== undefined) this.pStages = data.pStages;
      if (data.groupCount !== undefined) this.groupCount = data.groupCount;
      if (data.pGroups !== undefined) this.pGroups = data.pGroups;
      if (data.maxPipelineRayRecursionDepth !== undefined) this.maxPipelineRayRecursionDepth = data.maxPipelineRayRecursionDepth;
      if (data.pLibraryInfo !== undefined) this.pLibraryInfo = data.pLibraryInfo;
      if (data.pLibraryInterface !== undefined) this.pLibraryInterface = data.pLibraryInterface;
      if (data.pDynamicState !== undefined) this.pDynamicState = data.pDynamicState;
      if (data.layout !== undefined) this.layout = data.layout;
      if (data.basePipelineHandle !== undefined) this.basePipelineHandle = data.basePipelineHandle;
      if (data.basePipelineIndex !== undefined) this.basePipelineIndex = data.basePipelineIndex;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, RayTracingPipelineCreateInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.RAY_TRACING_PIPELINE_CREATE_INFO_KHR;
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

  set flags(value: PipelineCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get stageCount() {
    return this.#view.getUint32(20, LE);
  }

  set stageCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pStages() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pStages(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get groupCount() {
    return this.#view.getUint32(32, LE);
  }

  set groupCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pGroups() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pGroups(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get maxPipelineRayRecursionDepth() {
    return this.#view.getUint32(48, LE);
  }

  set maxPipelineRayRecursionDepth(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get pLibraryInfo() {
    return pointerFromView(this.#view, 56, LE);
  }

  set pLibraryInfo(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }

  get pLibraryInterface() {
    return pointerFromView(this.#view, 64, LE);
  }

  set pLibraryInterface(value: AnyPointer) {
    this.#view.setBigUint64(64, BigInt(anyPointer(value)), LE);
  }

  get pDynamicState() {
    return pointerFromView(this.#view, 72, LE);
  }

  set pDynamicState(value: AnyPointer) {
    this.#view.setBigUint64(72, BigInt(anyPointer(value)), LE);
  }

  get layout() {
    return pointerFromView(this.#view, 80, LE);
  }

  set layout(value: PipelineLayout) {
    this.#view.setBigUint64(80, BigInt(anyPointer(value)), LE);
  }

  get basePipelineHandle() {
    return pointerFromView(this.#view, 88, LE);
  }

  set basePipelineHandle(value: Pipeline) {
    this.#view.setBigUint64(88, BigInt(anyPointer(value)), LE);
  }

  get basePipelineIndex() {
    return this.#view.getInt32(96, LE);
  }

  set basePipelineIndex(value: number) {
    this.#view.setInt32(96, Number(value), LE);
  }
}