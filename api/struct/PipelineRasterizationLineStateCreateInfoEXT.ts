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
import { StructureType, LineRasterizationModeEXT } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitPipelineRasterizationLineStateCreateInfoEXT {
  pNext?: AnyPointer;
  lineRasterizationMode?: LineRasterizationModeEXT;
  stippledLineEnable?: Bool32;
  lineStippleFactor?: number;
  lineStipplePattern?: number;
}

export class PipelineRasterizationLineStateCreateInfoEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineRasterizationLineStateCreateInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineRasterizationLineStateCreateInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineRasterizationLineStateCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineRasterizationLineStateCreateInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineRasterizationLineStateCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.lineRasterizationMode !== undefined) this.lineRasterizationMode = data.lineRasterizationMode;
      if (data.stippledLineEnable !== undefined) this.stippledLineEnable = data.stippledLineEnable;
      if (data.lineStippleFactor !== undefined) this.lineStippleFactor = data.lineStippleFactor;
      if (data.lineStipplePattern !== undefined) this.lineStipplePattern = data.lineStipplePattern;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineRasterizationLineStateCreateInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_RASTERIZATION_LINE_STATE_CREATE_INFO_EXT;
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

  get lineRasterizationMode() {
    return this.#view.getUint32(16, LE);
  }

  set lineRasterizationMode(value: LineRasterizationModeEXT) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get stippledLineEnable() {
    return this.#view.getUint32(20, LE);
  }

  set stippledLineEnable(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get lineStippleFactor() {
    return this.#view.getUint32(24, LE);
  }

  set lineStippleFactor(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get lineStipplePattern() {
    return this.#view.getUint16(28, LE);
  }

  set lineStipplePattern(value: number) {
    this.#view.setUint16(28, Number(value), LE);
  }
}