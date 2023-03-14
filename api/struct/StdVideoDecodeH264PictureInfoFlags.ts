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

export interface InitStdVideoDecodeH264PictureInfoFlags {
  field_pic_flag?: number;
  is_intra?: number;
  IdrPicFlag?: number;
  bottom_field_flag?: number;
  is_reference?: number;
  complementary_field_pair?: number;
}

export class StdVideoDecodeH264PictureInfoFlags implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoDecodeH264PictureInfoFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoDecodeH264PictureInfoFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoDecodeH264PictureInfoFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoDecodeH264PictureInfoFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoDecodeH264PictureInfoFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.field_pic_flag !== undefined) this.field_pic_flag = data.field_pic_flag;
      if (data.is_intra !== undefined) this.is_intra = data.is_intra;
      if (data.IdrPicFlag !== undefined) this.IdrPicFlag = data.IdrPicFlag;
      if (data.bottom_field_flag !== undefined) this.bottom_field_flag = data.bottom_field_flag;
      if (data.is_reference !== undefined) this.is_reference = data.is_reference;
      if (data.complementary_field_pair !== undefined) this.complementary_field_pair = data.complementary_field_pair;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoDecodeH264PictureInfoFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get field_pic_flag() {
    return this.#view.getUint32(0, LE);
  }

  set field_pic_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get is_intra() {
    return this.#view.getUint32(4, LE);
  }

  set is_intra(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get IdrPicFlag() {
    return this.#view.getUint32(8, LE);
  }

  set IdrPicFlag(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get bottom_field_flag() {
    return this.#view.getUint32(12, LE);
  }

  set bottom_field_flag(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get is_reference() {
    return this.#view.getUint32(16, LE);
  }

  set is_reference(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get complementary_field_pair() {
    return this.#view.getUint32(20, LE);
  }

  set complementary_field_pair(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }
}