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
import { Pipeline } from "../def.ts";

export interface InitPipelineExecutableInfoKHR {
  pNext?: AnyPointer;
  pipeline?: Pipeline;
  executableIndex?: number;
}

export class PipelineExecutableInfoKHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineExecutableInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineExecutableInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineExecutableInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineExecutableInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineExecutableInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.pipeline !== undefined) this.pipeline = data.pipeline;
      if (data.executableIndex !== undefined) this.executableIndex = data.executableIndex;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineExecutableInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_EXECUTABLE_INFO_KHR;
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

  get pipeline(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set pipeline(value: Pipeline) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get executableIndex(): number {
    return this.#view.getUint32(24, LE);
  }

  set executableIndex(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }
}