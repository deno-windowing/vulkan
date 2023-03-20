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
import { MemoryPropertyFlags } from "../def.ts";

export interface InitMemoryType {
  propertyFlags?: MemoryPropertyFlags;
  heapIndex?: number;
}

export class MemoryType implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMemoryType);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMemoryType) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MemoryType.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MemoryType.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MemoryType.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.propertyFlags !== undefined) this.propertyFlags = data.propertyFlags;
      if (data.heapIndex !== undefined) this.heapIndex = data.heapIndex;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MemoryType.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get propertyFlags(): number {
    return this.#view.getUint32(0, LE);
  }

  set propertyFlags(value: MemoryPropertyFlags) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get heapIndex(): number {
    return this.#view.getUint32(4, LE);
  }

  set heapIndex(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }
}