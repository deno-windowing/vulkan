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

export interface InitStdVideoDecodeH265PictureInfoFlags {
  IrapPicFlag?: number;
  IdrPicFlag?: number;
  IsReference?: number;
  short_term_ref_pic_set_sps_flag?: number;
}

export class StdVideoDecodeH265PictureInfoFlags implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoDecodeH265PictureInfoFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoDecodeH265PictureInfoFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoDecodeH265PictureInfoFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoDecodeH265PictureInfoFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoDecodeH265PictureInfoFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.IrapPicFlag !== undefined) this.IrapPicFlag = data.IrapPicFlag;
      if (data.IdrPicFlag !== undefined) this.IdrPicFlag = data.IdrPicFlag;
      if (data.IsReference !== undefined) this.IsReference = data.IsReference;
      if (data.short_term_ref_pic_set_sps_flag !== undefined) this.short_term_ref_pic_set_sps_flag = data.short_term_ref_pic_set_sps_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoDecodeH265PictureInfoFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get IrapPicFlag(): number {
    return this.#view.getUint32(0, LE);
  }

  set IrapPicFlag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get IdrPicFlag(): number {
    return this.#view.getUint32(4, LE);
  }

  set IdrPicFlag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get IsReference(): number {
    return this.#view.getUint32(8, LE);
  }

  set IsReference(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get short_term_ref_pic_set_sps_flag(): number {
    return this.#view.getUint32(12, LE);
  }

  set short_term_ref_pic_set_sps_flag(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }
}