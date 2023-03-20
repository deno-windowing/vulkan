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
import {SparseImageMemoryBind} from "./SparseImageMemoryBind.ts";
import { Image } from "../def.ts";

export interface InitSparseImageMemoryBindInfo {
  image?: Image;
  bindCount?: number;
  pBinds?: AnyPointer;
}

export class SparseImageMemoryBindInfo implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSparseImageMemoryBindInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSparseImageMemoryBindInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SparseImageMemoryBindInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SparseImageMemoryBindInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SparseImageMemoryBindInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.image !== undefined) this.image = data.image;
      if (data.bindCount !== undefined) this.bindCount = data.bindCount;
      if (data.pBinds !== undefined) this.pBinds = data.pBinds;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SparseImageMemoryBindInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get image(): Deno.PointerValue {
    return pointerFromView(this.#view, 0, LE);
  }

  set image(value: Image) {
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