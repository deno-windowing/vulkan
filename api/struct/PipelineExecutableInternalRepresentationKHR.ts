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
import { Bool32 } from "../def.ts";

export interface InitPipelineExecutableInternalRepresentationKHR {
  pNext?: AnyPointer;
  name?: Uint8Array;
  description?: Uint8Array;
  isText?: Bool32;
  dataSize?: number | bigint;
  pData?: AnyPointer;
}

export class PipelineExecutableInternalRepresentationKHR implements BaseStruct {
  static size = 552;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineExecutableInternalRepresentationKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineExecutableInternalRepresentationKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineExecutableInternalRepresentationKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineExecutableInternalRepresentationKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineExecutableInternalRepresentationKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.name !== undefined) this.name = data.name;
      if (data.description !== undefined) this.description = data.description;
      if (data.isText !== undefined) this.isText = data.isText;
      if (data.dataSize !== undefined) this.dataSize = data.dataSize;
      if (data.pData !== undefined) this.pData = data.pData;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineExecutableInternalRepresentationKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_EXECUTABLE_INTERNAL_REPRESENTATION_KHR;
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

  get isText() {
    return this.#view.getUint32(528, LE);
  }

  set isText(value: Bool32) {
    this.#view.setUint32(528, Number(value), LE);
  }

  get dataSize() {
    return this.#view.getBigUint64(536, LE);
  }

  set dataSize(value: number | bigint) {
    this.#view.setBigUint64(536, BigInt(value), LE);
  }

  get pData() {
    return pointerFromView(this.#view, 544, LE);
  }

  set pData(value: AnyPointer) {
    this.#view.setBigUint64(544, BigInt(anyPointer(value)), LE);
  }
}