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
import {SparseMemoryBind} from "./SparseMemoryBind.ts";
import { Buffer } from "../def.ts";

export interface InitSparseBufferMemoryBindInfo {
  buffer?: Buffer;
  bindCount?: number;
  pBinds?: AnyPointer;
}

export class SparseBufferMemoryBindInfo implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSparseBufferMemoryBindInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSparseBufferMemoryBindInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SparseBufferMemoryBindInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SparseBufferMemoryBindInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SparseBufferMemoryBindInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.buffer !== undefined) this.buffer = data.buffer;
      if (data.bindCount !== undefined) this.bindCount = data.bindCount;
      if (data.pBinds !== undefined) this.pBinds = data.pBinds;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SparseBufferMemoryBindInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get buffer(): Deno.PointerValue {
    return pointerFromView(this.#view, 0, LE);
  }

  set buffer(value: Buffer) {
    this.#view.setBigUint64(0, BigInt(anyPointer(value)), LE);
  }

  get bindCount(): number {
    return this.#view.getUint32(8, LE);
  }

  set bindCount(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get pBinds(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set pBinds(value: AnyPointer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }
}