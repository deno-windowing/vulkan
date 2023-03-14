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
import { StructureType, PipelineStageFlagBits } from "../enum.ts";

export interface InitCheckpointDataNV {
  pNext?: AnyPointer;
  stage?: PipelineStageFlagBits;
  pCheckpointMarker?: AnyPointer;
}

export class CheckpointDataNV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCheckpointDataNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCheckpointDataNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CheckpointDataNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CheckpointDataNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CheckpointDataNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.stage !== undefined) this.stage = data.stage;
      if (data.pCheckpointMarker !== undefined) this.pCheckpointMarker = data.pCheckpointMarker;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CheckpointDataNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.CHECKPOINT_DATA_NV;
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
    return this.#view.getUint32(16, LE);
  }

  set stage(value: PipelineStageFlagBits) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pCheckpointMarker() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pCheckpointMarker(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}