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
import { PipelineCacheCreateFlags } from "../def.ts";

export interface InitPipelineCacheCreateInfo {
  pNext?: AnyPointer;
  flags?: PipelineCacheCreateFlags;
  initialDataSize?: number | bigint;
  pInitialData?: AnyPointer;
}

export class PipelineCacheCreateInfo implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineCacheCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineCacheCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineCacheCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineCacheCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineCacheCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.initialDataSize !== undefined) this.initialDataSize = data.initialDataSize;
      if (data.pInitialData !== undefined) this.pInitialData = data.pInitialData;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineCacheCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_CACHE_CREATE_INFO;
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

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: PipelineCacheCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get initialDataSize(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set initialDataSize(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get pInitialData(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pInitialData(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}