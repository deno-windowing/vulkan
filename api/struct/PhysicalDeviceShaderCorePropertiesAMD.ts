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
import { StructureType } from "../enum.ts";

export interface InitPhysicalDeviceShaderCorePropertiesAMD {
  pNext?: AnyPointer;
  shaderEngineCount?: number;
  shaderArraysPerEngineCount?: number;
  computeUnitsPerShaderArray?: number;
  simdPerComputeUnit?: number;
  wavefrontsPerSimd?: number;
  wavefrontSize?: number;
  sgprsPerSimd?: number;
  minSgprAllocation?: number;
  maxSgprAllocation?: number;
  sgprAllocationGranularity?: number;
  vgprsPerSimd?: number;
  minVgprAllocation?: number;
  maxVgprAllocation?: number;
  vgprAllocationGranularity?: number;
}

export class PhysicalDeviceShaderCorePropertiesAMD implements BaseStruct {
  static size = 72;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceShaderCorePropertiesAMD);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceShaderCorePropertiesAMD) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceShaderCorePropertiesAMD.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceShaderCorePropertiesAMD.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceShaderCorePropertiesAMD.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shaderEngineCount !== undefined) this.shaderEngineCount = data.shaderEngineCount;
      if (data.shaderArraysPerEngineCount !== undefined) this.shaderArraysPerEngineCount = data.shaderArraysPerEngineCount;
      if (data.computeUnitsPerShaderArray !== undefined) this.computeUnitsPerShaderArray = data.computeUnitsPerShaderArray;
      if (data.simdPerComputeUnit !== undefined) this.simdPerComputeUnit = data.simdPerComputeUnit;
      if (data.wavefrontsPerSimd !== undefined) this.wavefrontsPerSimd = data.wavefrontsPerSimd;
      if (data.wavefrontSize !== undefined) this.wavefrontSize = data.wavefrontSize;
      if (data.sgprsPerSimd !== undefined) this.sgprsPerSimd = data.sgprsPerSimd;
      if (data.minSgprAllocation !== undefined) this.minSgprAllocation = data.minSgprAllocation;
      if (data.maxSgprAllocation !== undefined) this.maxSgprAllocation = data.maxSgprAllocation;
      if (data.sgprAllocationGranularity !== undefined) this.sgprAllocationGranularity = data.sgprAllocationGranularity;
      if (data.vgprsPerSimd !== undefined) this.vgprsPerSimd = data.vgprsPerSimd;
      if (data.minVgprAllocation !== undefined) this.minVgprAllocation = data.minVgprAllocation;
      if (data.maxVgprAllocation !== undefined) this.maxVgprAllocation = data.maxVgprAllocation;
      if (data.vgprAllocationGranularity !== undefined) this.vgprAllocationGranularity = data.vgprAllocationGranularity;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceShaderCorePropertiesAMD.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SHADER_CORE_PROPERTIES_AMD;
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

  get shaderEngineCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set shaderEngineCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get shaderArraysPerEngineCount(): number {
    return this.#view.getUint32(20, LE);
  }

  set shaderArraysPerEngineCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get computeUnitsPerShaderArray(): number {
    return this.#view.getUint32(24, LE);
  }

  set computeUnitsPerShaderArray(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get simdPerComputeUnit(): number {
    return this.#view.getUint32(28, LE);
  }

  set simdPerComputeUnit(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get wavefrontsPerSimd(): number {
    return this.#view.getUint32(32, LE);
  }

  set wavefrontsPerSimd(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get wavefrontSize(): number {
    return this.#view.getUint32(36, LE);
  }

  set wavefrontSize(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get sgprsPerSimd(): number {
    return this.#view.getUint32(40, LE);
  }

  set sgprsPerSimd(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get minSgprAllocation(): number {
    return this.#view.getUint32(44, LE);
  }

  set minSgprAllocation(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get maxSgprAllocation(): number {
    return this.#view.getUint32(48, LE);
  }

  set maxSgprAllocation(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get sgprAllocationGranularity(): number {
    return this.#view.getUint32(52, LE);
  }

  set sgprAllocationGranularity(value: number) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get vgprsPerSimd(): number {
    return this.#view.getUint32(56, LE);
  }

  set vgprsPerSimd(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get minVgprAllocation(): number {
    return this.#view.getUint32(60, LE);
  }

  set minVgprAllocation(value: number) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get maxVgprAllocation(): number {
    return this.#view.getUint32(64, LE);
  }

  set maxVgprAllocation(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get vgprAllocationGranularity(): number {
    return this.#view.getUint32(68, LE);
  }

  set vgprAllocationGranularity(value: number) {
    this.#view.setUint32(68, Number(value), LE);
  }
}