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
import { PipelineCoverageToColorStateCreateFlagsNV, Bool32 } from "../def.ts";

export interface InitPipelineCoverageToColorStateCreateInfoNV {
  pNext?: AnyPointer;
  flags?: PipelineCoverageToColorStateCreateFlagsNV;
  coverageToColorEnable?: Bool32;
  coverageToColorLocation?: number;
}

export class PipelineCoverageToColorStateCreateInfoNV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineCoverageToColorStateCreateInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineCoverageToColorStateCreateInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineCoverageToColorStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineCoverageToColorStateCreateInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineCoverageToColorStateCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.coverageToColorEnable !== undefined) this.coverageToColorEnable = data.coverageToColorEnable;
      if (data.coverageToColorLocation !== undefined) this.coverageToColorLocation = data.coverageToColorLocation;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineCoverageToColorStateCreateInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_COVERAGE_TO_COLOR_STATE_CREATE_INFO_NV;
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

  set flags(value: PipelineCoverageToColorStateCreateFlagsNV) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get coverageToColorEnable(): number {
    return this.#view.getUint32(20, LE);
  }

  set coverageToColorEnable(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get coverageToColorLocation(): number {
    return this.#view.getUint32(24, LE);
  }

  set coverageToColorLocation(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }
}