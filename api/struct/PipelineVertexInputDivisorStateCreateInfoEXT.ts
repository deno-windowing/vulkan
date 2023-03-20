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
import {VertexInputBindingDivisorDescriptionEXT} from "./VertexInputBindingDivisorDescriptionEXT.ts";
import { StructureType } from "../enum.ts";

export interface InitPipelineVertexInputDivisorStateCreateInfoEXT {
  pNext?: AnyPointer;
  vertexBindingDivisorCount?: number;
  pVertexBindingDivisors?: AnyPointer;
}

export class PipelineVertexInputDivisorStateCreateInfoEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineVertexInputDivisorStateCreateInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineVertexInputDivisorStateCreateInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineVertexInputDivisorStateCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineVertexInputDivisorStateCreateInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineVertexInputDivisorStateCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.vertexBindingDivisorCount !== undefined) this.vertexBindingDivisorCount = data.vertexBindingDivisorCount;
      if (data.pVertexBindingDivisors !== undefined) this.pVertexBindingDivisors = data.pVertexBindingDivisors;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineVertexInputDivisorStateCreateInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_VERTEX_INPUT_DIVISOR_STATE_CREATE_INFO_EXT;
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

  get vertexBindingDivisorCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set vertexBindingDivisorCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pVertexBindingDivisors(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pVertexBindingDivisors(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}