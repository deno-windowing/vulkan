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
import {ShaderResourceUsageAMD} from "./ShaderResourceUsageAMD.ts";
import { ShaderStageFlags } from "../def.ts";

export interface InitShaderStatisticsInfoAMD {
  shaderStageMask?: ShaderStageFlags;
  resourceUsage?: ShaderResourceUsageAMD;
  numPhysicalVgprs?: number;
  numPhysicalSgprs?: number;
  numAvailableVgprs?: number;
  numAvailableSgprs?: number;
  computeWorkGroupSize?: Uint32Array;
}

export class ShaderStatisticsInfoAMD implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitShaderStatisticsInfoAMD);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitShaderStatisticsInfoAMD) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ShaderStatisticsInfoAMD.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ShaderStatisticsInfoAMD.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ShaderStatisticsInfoAMD.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.shaderStageMask !== undefined) this.shaderStageMask = data.shaderStageMask;
      if (data.resourceUsage !== undefined) this.resourceUsage = data.resourceUsage;
      if (data.numPhysicalVgprs !== undefined) this.numPhysicalVgprs = data.numPhysicalVgprs;
      if (data.numPhysicalSgprs !== undefined) this.numPhysicalSgprs = data.numPhysicalSgprs;
      if (data.numAvailableVgprs !== undefined) this.numAvailableVgprs = data.numAvailableVgprs;
      if (data.numAvailableSgprs !== undefined) this.numAvailableSgprs = data.numAvailableSgprs;
      if (data.computeWorkGroupSize !== undefined) this.computeWorkGroupSize = data.computeWorkGroupSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ShaderStatisticsInfoAMD.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get shaderStageMask(): number {
    return this.#view.getUint32(0, LE);
  }

  set shaderStageMask(value: ShaderStageFlags) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get resourceUsage(): ShaderResourceUsageAMD {
    return new ShaderResourceUsageAMD(this.#data.subarray(4, 4 + ShaderResourceUsageAMD.size));
  }

  set resourceUsage(value: ShaderResourceUsageAMD) {
    if (value[BUFFER].byteLength < ShaderResourceUsageAMD.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 4);
  }

  get numPhysicalVgprs(): number {
    return this.#view.getUint32(36, LE);
  }

  set numPhysicalVgprs(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get numPhysicalSgprs(): number {
    return this.#view.getUint32(40, LE);
  }

  set numPhysicalSgprs(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get numAvailableVgprs(): number {
    return this.#view.getUint32(44, LE);
  }

  set numAvailableVgprs(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get numAvailableSgprs(): number {
    return this.#view.getUint32(48, LE);
  }

  set numAvailableSgprs(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get computeWorkGroupSize(): Uint32Array {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 52, 3);
  }

  set computeWorkGroupSize(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 52);
  }
}