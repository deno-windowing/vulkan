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
import {PipelineCreationFeedback} from "./PipelineCreationFeedback.ts";
import { StructureType } from "../enum.ts";

export interface InitPipelineCreationFeedbackCreateInfo {
  pNext?: AnyPointer;
  pPipelineCreationFeedback?: AnyPointer;
  pipelineStageCreationFeedbackCount?: number;
  pPipelineStageCreationFeedbacks?: AnyPointer;
}

export class PipelineCreationFeedbackCreateInfo implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineCreationFeedbackCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineCreationFeedbackCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineCreationFeedbackCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineCreationFeedbackCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineCreationFeedbackCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.pPipelineCreationFeedback !== undefined) this.pPipelineCreationFeedback = data.pPipelineCreationFeedback;
      if (data.pipelineStageCreationFeedbackCount !== undefined) this.pipelineStageCreationFeedbackCount = data.pipelineStageCreationFeedbackCount;
      if (data.pPipelineStageCreationFeedbacks !== undefined) this.pPipelineStageCreationFeedbacks = data.pPipelineStageCreationFeedbacks;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineCreationFeedbackCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_CREATION_FEEDBACK_CREATE_INFO;
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

  get pPipelineCreationFeedback(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set pPipelineCreationFeedback(value: AnyPointer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get pipelineStageCreationFeedbackCount(): number {
    return this.#view.getUint32(24, LE);
  }

  set pipelineStageCreationFeedbackCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pPipelineStageCreationFeedbacks(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pPipelineStageCreationFeedbacks(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}