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
import {GraphicsShaderGroupCreateInfoNV} from "./GraphicsShaderGroupCreateInfoNV.ts";
import { StructureType } from "../enum.ts";
import { Pipeline } from "../def.ts";

export interface InitGraphicsPipelineShaderGroupsCreateInfoNV {
  pNext?: AnyPointer;
  groupCount?: number;
  pGroups?: AnyPointer;
  pipelineCount?: number;
  pPipelines?: AnyPointer;
}

export class GraphicsPipelineShaderGroupsCreateInfoNV implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitGraphicsPipelineShaderGroupsCreateInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitGraphicsPipelineShaderGroupsCreateInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(GraphicsPipelineShaderGroupsCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < GraphicsPipelineShaderGroupsCreateInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(GraphicsPipelineShaderGroupsCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.groupCount !== undefined) this.groupCount = data.groupCount;
      if (data.pGroups !== undefined) this.pGroups = data.pGroups;
      if (data.pipelineCount !== undefined) this.pipelineCount = data.pipelineCount;
      if (data.pPipelines !== undefined) this.pPipelines = data.pPipelines;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, GraphicsPipelineShaderGroupsCreateInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.GRAPHICS_PIPELINE_SHADER_GROUPS_CREATE_INFO_NV;
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

  get groupCount() {
    return this.#view.getUint32(16, LE);
  }

  set groupCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pGroups() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pGroups(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get pipelineCount() {
    return this.#view.getUint32(32, LE);
  }

  set pipelineCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pPipelines() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pPipelines(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}