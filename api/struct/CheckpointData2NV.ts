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
import { PipelineStageFlags2 } from "../def.ts";

export interface InitCheckpointData2NV {
  pNext?: AnyPointer;
  stage?: PipelineStageFlags2;
  pCheckpointMarker?: AnyPointer;
}

export class CheckpointData2NV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCheckpointData2NV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCheckpointData2NV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CheckpointData2NV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CheckpointData2NV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CheckpointData2NV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.stage !== undefined) this.stage = data.stage;
      if (data.pCheckpointMarker !== undefined) this.pCheckpointMarker = data.pCheckpointMarker;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CheckpointData2NV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.CHECKPOINT_DATA_2_NV;
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

  get stage() {
    return this.#view.getBigUint64(16, LE);
  }

  set stage(value: PipelineStageFlags2) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get pCheckpointMarker() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pCheckpointMarker(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}