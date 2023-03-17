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
import {PipelineVertexInputStateCreateInfo} from "./PipelineVertexInputStateCreateInfo.ts";
import {PipelineTessellationStateCreateInfo} from "./PipelineTessellationStateCreateInfo.ts";
import { StructureType } from "../enum.ts";

export interface InitGraphicsShaderGroupCreateInfoNV {
  pNext?: AnyPointer;
  stageCount?: number;
  pStages?: AnyPointer;
  pVertexInputState?: AnyPointer;
  pTessellationState?: AnyPointer;
}

export class GraphicsShaderGroupCreateInfoNV implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitGraphicsShaderGroupCreateInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitGraphicsShaderGroupCreateInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(GraphicsShaderGroupCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < GraphicsShaderGroupCreateInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(GraphicsShaderGroupCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.stageCount !== undefined) this.stageCount = data.stageCount;
      if (data.pStages !== undefined) this.pStages = data.pStages;
      if (data.pVertexInputState !== undefined) this.pVertexInputState = data.pVertexInputState;
      if (data.pTessellationState !== undefined) this.pTessellationState = data.pTessellationState;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, GraphicsShaderGroupCreateInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.GRAPHICS_SHADER_GROUP_CREATE_INFO_NV;
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

  get stageCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set stageCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pStages(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pStages(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get pVertexInputState(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pVertexInputState(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get pTessellationState(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set pTessellationState(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}