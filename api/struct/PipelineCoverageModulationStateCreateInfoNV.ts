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
import { StructureType, CoverageModulationModeNV } from "../enum.ts";
import { PipelineCoverageModulationStateCreateFlagsNV, Bool32 } from "../def.ts";

export interface InitPipelineCoverageModulationStateCreateInfoNV {
  pNext?: AnyPointer;
  flags?: PipelineCoverageModulationStateCreateFlagsNV;
  coverageModulationMode?: CoverageModulationModeNV;
  coverageModulationTableEnable?: Bool32;
  coverageModulationTableCount?: number;
  pCoverageModulationTable?: AnyPointer;
}

export class PipelineCoverageModulationStateCreateInfoNV implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineCoverageModulationStateCreateInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineCoverageModulationStateCreateInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineCoverageModulationStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineCoverageModulationStateCreateInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineCoverageModulationStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.coverageModulationMode !== undefined) this.coverageModulationMode = data.coverageModulationMode;
      if (data.coverageModulationTableEnable !== undefined) this.coverageModulationTableEnable = data.coverageModulationTableEnable;
      if (data.coverageModulationTableCount !== undefined) this.coverageModulationTableCount = data.coverageModulationTableCount;
      if (data.pCoverageModulationTable !== undefined) this.pCoverageModulationTable = data.pCoverageModulationTable;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineCoverageModulationStateCreateInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_COVERAGE_MODULATION_STATE_CREATE_INFO_NV;
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

  set flags(value: PipelineCoverageModulationStateCreateFlagsNV) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get coverageModulationMode() {
    return this.#view.getUint32(20, LE);
  }

  set coverageModulationMode(value: CoverageModulationModeNV) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get coverageModulationTableEnable() {
    return this.#view.getUint32(24, LE);
  }

  set coverageModulationTableEnable(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get coverageModulationTableCount() {
    return this.#view.getUint32(28, LE);
  }

  set coverageModulationTableCount(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get pCoverageModulationTable() {
    return pointerFromView(this.#view, 32, LE);
  }

  set pCoverageModulationTable(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}