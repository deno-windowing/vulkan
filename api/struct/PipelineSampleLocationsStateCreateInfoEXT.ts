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
import {SampleLocationsInfoEXT} from "./SampleLocationsInfoEXT.ts";
import { StructureType } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitPipelineSampleLocationsStateCreateInfoEXT {
  pNext?: AnyPointer;
  sampleLocationsEnable?: Bool32;
  sampleLocationsInfo?: SampleLocationsInfoEXT;
}

export class PipelineSampleLocationsStateCreateInfoEXT implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineSampleLocationsStateCreateInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineSampleLocationsStateCreateInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineSampleLocationsStateCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineSampleLocationsStateCreateInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineSampleLocationsStateCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.sampleLocationsEnable !== undefined) this.sampleLocationsEnable = data.sampleLocationsEnable;
      if (data.sampleLocationsInfo !== undefined) this.sampleLocationsInfo = data.sampleLocationsInfo;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineSampleLocationsStateCreateInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_SAMPLE_LOCATIONS_STATE_CREATE_INFO_EXT;
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

  get sampleLocationsEnable(): number {
    return this.#view.getUint32(16, LE);
  }

  set sampleLocationsEnable(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get sampleLocationsInfo(): SampleLocationsInfoEXT {
    return new SampleLocationsInfoEXT(this.#data.subarray(20, 20 + SampleLocationsInfoEXT.size));
  }

  set sampleLocationsInfo(value: SampleLocationsInfoEXT) {
    if (value[BUFFER].byteLength < SampleLocationsInfoEXT.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 20);
  }
}