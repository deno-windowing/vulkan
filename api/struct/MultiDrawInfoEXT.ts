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

export interface InitMultiDrawInfoEXT {
  firstVertex?: number;
  vertexCount?: number;
}

export class MultiDrawInfoEXT implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMultiDrawInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMultiDrawInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MultiDrawInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MultiDrawInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MultiDrawInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.firstVertex !== undefined) this.firstVertex = data.firstVertex;
      if (data.vertexCount !== undefined) this.vertexCount = data.vertexCount;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MultiDrawInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get firstVertex() {
    return this.#view.getUint32(0, LE);
  }

  set firstVertex(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get vertexCount() {
    return this.#view.getUint32(4, LE);
  }

  set vertexCount(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }
}