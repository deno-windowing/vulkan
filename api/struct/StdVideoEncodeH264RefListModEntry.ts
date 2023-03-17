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
import { StdVideoH264ModificationOfPicNumsIdc } from "../enum.ts";

export interface InitStdVideoEncodeH264RefListModEntry {
  modification_of_pic_nums_idc?: StdVideoH264ModificationOfPicNumsIdc;
  abs_diff_pic_num_minus1?: number;
  long_term_pic_num?: number;
}

export class StdVideoEncodeH264RefListModEntry implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH264RefListModEntry);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH264RefListModEntry) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH264RefListModEntry.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH264RefListModEntry.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH264RefListModEntry.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.modification_of_pic_nums_idc !== undefined) this.modification_of_pic_nums_idc = data.modification_of_pic_nums_idc;
      if (data.abs_diff_pic_num_minus1 !== undefined) this.abs_diff_pic_num_minus1 = data.abs_diff_pic_num_minus1;
      if (data.long_term_pic_num !== undefined) this.long_term_pic_num = data.long_term_pic_num;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH264RefListModEntry.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get modification_of_pic_nums_idc(): number {
    return this.#view.getUint32(0, LE);
  }

  set modification_of_pic_nums_idc(value: StdVideoH264ModificationOfPicNumsIdc) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get abs_diff_pic_num_minus1(): number {
    return this.#view.getUint16(4, LE);
  }

  set abs_diff_pic_num_minus1(value: number) {
    this.#view.setUint16(4, Number(value), LE);
  }

  get long_term_pic_num(): number {
    return this.#view.getUint16(6, LE);
  }

  set long_term_pic_num(value: number) {
    this.#view.setUint16(6, Number(value), LE);
  }
}