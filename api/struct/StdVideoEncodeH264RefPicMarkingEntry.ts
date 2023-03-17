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
import { StdVideoH264MemMgmtControlOp } from "../enum.ts";

export interface InitStdVideoEncodeH264RefPicMarkingEntry {
  operation?: StdVideoH264MemMgmtControlOp;
  difference_of_pic_nums_minus1?: number;
  long_term_pic_num?: number;
  long_term_frame_idx?: number;
  max_long_term_frame_idx_plus1?: number;
}

export class StdVideoEncodeH264RefPicMarkingEntry implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH264RefPicMarkingEntry);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH264RefPicMarkingEntry) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH264RefPicMarkingEntry.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH264RefPicMarkingEntry.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH264RefPicMarkingEntry.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.operation !== undefined) this.operation = data.operation;
      if (data.difference_of_pic_nums_minus1 !== undefined) this.difference_of_pic_nums_minus1 = data.difference_of_pic_nums_minus1;
      if (data.long_term_pic_num !== undefined) this.long_term_pic_num = data.long_term_pic_num;
      if (data.long_term_frame_idx !== undefined) this.long_term_frame_idx = data.long_term_frame_idx;
      if (data.max_long_term_frame_idx_plus1 !== undefined) this.max_long_term_frame_idx_plus1 = data.max_long_term_frame_idx_plus1;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH264RefPicMarkingEntry.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get operation(): number {
    return this.#view.getUint32(0, LE);
  }

  set operation(value: StdVideoH264MemMgmtControlOp) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get difference_of_pic_nums_minus1(): number {
    return this.#view.getUint16(4, LE);
  }

  set difference_of_pic_nums_minus1(value: number) {
    this.#view.setUint16(4, Number(value), LE);
  }

  get long_term_pic_num(): number {
    return this.#view.getUint16(6, LE);
  }

  set long_term_pic_num(value: number) {
    this.#view.setUint16(6, Number(value), LE);
  }

  get long_term_frame_idx(): number {
    return this.#view.getUint16(8, LE);
  }

  set long_term_frame_idx(value: number) {
    this.#view.setUint16(8, Number(value), LE);
  }

  get max_long_term_frame_idx_plus1(): number {
    return this.#view.getUint16(10, LE);
  }

  set max_long_term_frame_idx_plus1(value: number) {
    this.#view.setUint16(10, Number(value), LE);
  }
}