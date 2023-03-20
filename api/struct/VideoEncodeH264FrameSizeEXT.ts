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

export interface InitVideoEncodeH264FrameSizeEXT {
  frameISize?: number;
  framePSize?: number;
  frameBSize?: number;
}

export class VideoEncodeH264FrameSizeEXT implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeH264FrameSizeEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeH264FrameSizeEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeH264FrameSizeEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeH264FrameSizeEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeH264FrameSizeEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.frameISize !== undefined) this.frameISize = data.frameISize;
      if (data.framePSize !== undefined) this.framePSize = data.framePSize;
      if (data.frameBSize !== undefined) this.frameBSize = data.frameBSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeH264FrameSizeEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get frameISize(): number {
    return this.#view.getUint32(0, LE);
  }

  set frameISize(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get framePSize(): number {
    return this.#view.getUint32(4, LE);
  }

  set framePSize(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get frameBSize(): number {
    return this.#view.getUint32(8, LE);
  }

  set frameBSize(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }
}