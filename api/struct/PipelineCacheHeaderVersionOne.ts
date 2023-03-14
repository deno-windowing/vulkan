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
import { PipelineCacheHeaderVersion } from "../enum.ts";

export interface InitPipelineCacheHeaderVersionOne {
  headerSize?: number;
  headerVersion?: PipelineCacheHeaderVersion;
  vendorID?: number;
  deviceID?: number;
  pipelineCacheUUID?: Uint8Array;
}

export class PipelineCacheHeaderVersionOne implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineCacheHeaderVersionOne);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineCacheHeaderVersionOne) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineCacheHeaderVersionOne.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineCacheHeaderVersionOne.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineCacheHeaderVersionOne.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.headerSize !== undefined) this.headerSize = data.headerSize;
      if (data.headerVersion !== undefined) this.headerVersion = data.headerVersion;
      if (data.vendorID !== undefined) this.vendorID = data.vendorID;
      if (data.deviceID !== undefined) this.deviceID = data.deviceID;
      if (data.pipelineCacheUUID !== undefined) this.pipelineCacheUUID = data.pipelineCacheUUID;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineCacheHeaderVersionOne.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get headerSize() {
    return this.#view.getUint32(0, LE);
  }

  set headerSize(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get headerVersion() {
    return this.#view.getUint32(4, LE);
  }

  set headerVersion(value: PipelineCacheHeaderVersion) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get vendorID() {
    return this.#view.getUint32(8, LE);
  }

  set vendorID(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get deviceID() {
    return this.#view.getUint32(12, LE);
  }

  set deviceID(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get pipelineCacheUUID() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 16, 16);
  }

  set pipelineCacheUUID(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 16);
  }
}