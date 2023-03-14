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
import { StructureType, PipelineExecutableStatisticFormatKHR } from "../enum.ts";

export interface InitPipelineExecutableStatisticKHR {
  pNext?: AnyPointer;
  name?: Uint8Array;
  description?: Uint8Array;
  format?: PipelineExecutableStatisticFormatKHR;
  value?: PipelineExecutableStatisticValueKHR;
}

export class PipelineExecutableStatisticKHR implements BaseStruct {
  static size = 544;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineExecutableStatisticKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineExecutableStatisticKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineExecutableStatisticKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineExecutableStatisticKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineExecutableStatisticKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.name !== undefined) this.name = data.name;
      if (data.description !== undefined) this.description = data.description;
      if (data.format !== undefined) this.format = data.format;
      if (data.value !== undefined) this.value = data.value;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineExecutableStatisticKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_EXECUTABLE_STATISTIC_KHR;
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

  get name() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 16, 256);
  }

  set name(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 16);
  }

  get description() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 272, 256);
  }

  set description(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 272);
  }

  get format() {
    return this.#view.getUint32(528, LE);
  }

  set format(value: PipelineExecutableStatisticFormatKHR) {
    this.#view.setUint32(528, Number(value), LE);
  }

  get value() {
    throw new Error(`Unknown type: {"union":["u32","i64","u64","f64"]}`);
  }

  set value(value: PipelineExecutableStatisticValueKHR) {
    throw new Error(`Unknown type: {"union":["u32","i64","u64","f64"]}`);
  }
}