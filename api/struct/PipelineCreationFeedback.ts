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
import { PipelineCreationFeedbackFlags } from "../def.ts";

export interface InitPipelineCreationFeedback {
  flags?: PipelineCreationFeedbackFlags;
  duration?: number | bigint;
}

export class PipelineCreationFeedback implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineCreationFeedback);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineCreationFeedback) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineCreationFeedback.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineCreationFeedback.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineCreationFeedback.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.duration !== undefined) this.duration = data.duration;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineCreationFeedback.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags() {
    return this.#view.getUint32(0, LE);
  }

  set flags(value: PipelineCreationFeedbackFlags) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get duration() {
    return this.#view.getBigUint64(8, LE);
  }

  set duration(value: number | bigint) {
    this.#view.setBigUint64(8, BigInt(value), LE);
  }
}