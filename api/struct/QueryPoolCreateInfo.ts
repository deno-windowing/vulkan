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
import { StructureType, QueryType } from "../enum.ts";
import { QueryPoolCreateFlags, QueryPipelineStatisticFlags } from "../def.ts";

export interface InitQueryPoolCreateInfo {
  pNext?: AnyPointer;
  flags?: QueryPoolCreateFlags;
  queryType?: QueryType;
  queryCount?: number;
  pipelineStatistics?: QueryPipelineStatisticFlags;
}

export class QueryPoolCreateInfo implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitQueryPoolCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitQueryPoolCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(QueryPoolCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < QueryPoolCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(QueryPoolCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.queryType !== undefined) this.queryType = data.queryType;
      if (data.queryCount !== undefined) this.queryCount = data.queryCount;
      if (data.pipelineStatistics !== undefined) this.pipelineStatistics = data.pipelineStatistics;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, QueryPoolCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.QUERY_POOL_CREATE_INFO;
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

  set flags(value: QueryPoolCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get queryType(): number {
    return this.#view.getUint32(20, LE);
  }

  set queryType(value: QueryType) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get queryCount(): number {
    return this.#view.getUint32(24, LE);
  }

  set queryCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pipelineStatistics(): number {
    return this.#view.getUint32(28, LE);
  }

  set pipelineStatistics(value: QueryPipelineStatisticFlags) {
    this.#view.setUint32(28, Number(value), LE);
  }
}