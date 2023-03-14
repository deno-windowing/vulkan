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

export interface InitMultiDrawIndexedInfoEXT {
  firstIndex?: number;
  indexCount?: number;
  vertexOffset?: number;
}

export class MultiDrawIndexedInfoEXT implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMultiDrawIndexedInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMultiDrawIndexedInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MultiDrawIndexedInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MultiDrawIndexedInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MultiDrawIndexedInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.firstIndex !== undefined) this.firstIndex = data.firstIndex;
      if (data.indexCount !== undefined) this.indexCount = data.indexCount;
      if (data.vertexOffset !== undefined) this.vertexOffset = data.vertexOffset;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MultiDrawIndexedInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get firstIndex() {
    return this.#view.getUint32(0, LE);
  }

  set firstIndex(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get indexCount() {
    return this.#view.getUint32(4, LE);
  }

  set indexCount(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get vertexOffset() {
    return this.#view.getInt32(8, LE);
  }

  set vertexOffset(value: number) {
    this.#view.setInt32(8, Number(value), LE);
  }
}