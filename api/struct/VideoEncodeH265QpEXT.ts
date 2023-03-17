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

export interface InitVideoEncodeH265QpEXT {
  qpI?: number;
  qpP?: number;
  qpB?: number;
}

export class VideoEncodeH265QpEXT implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeH265QpEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeH265QpEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeH265QpEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeH265QpEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeH265QpEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.qpI !== undefined) this.qpI = data.qpI;
      if (data.qpP !== undefined) this.qpP = data.qpP;
      if (data.qpB !== undefined) this.qpB = data.qpB;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeH265QpEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get qpI(): number {
    return this.#view.getInt32(0, LE);
  }

  set qpI(value: number) {
    this.#view.setInt32(0, Number(value), LE);
  }

  get qpP(): number {
    return this.#view.getInt32(4, LE);
  }

  set qpP(value: number) {
    this.#view.setInt32(4, Number(value), LE);
  }

  get qpB(): number {
    return this.#view.getInt32(8, LE);
  }

  set qpB(value: number) {
    this.#view.setInt32(8, Number(value), LE);
  }
}