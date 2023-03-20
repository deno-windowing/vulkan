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

export interface InitStdVideoEncodeH264RefMgmtFlags {
  ref_pic_list_modification_l0_flag?: number;
  ref_pic_list_modification_l1_flag?: number;
}

export class StdVideoEncodeH264RefMgmtFlags implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH264RefMgmtFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH264RefMgmtFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH264RefMgmtFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH264RefMgmtFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH264RefMgmtFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.ref_pic_list_modification_l0_flag !== undefined) this.ref_pic_list_modification_l0_flag = data.ref_pic_list_modification_l0_flag;
      if (data.ref_pic_list_modification_l1_flag !== undefined) this.ref_pic_list_modification_l1_flag = data.ref_pic_list_modification_l1_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH264RefMgmtFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get ref_pic_list_modification_l0_flag(): number {
    return this.#view.getUint32(0, LE);
  }

  set ref_pic_list_modification_l0_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get ref_pic_list_modification_l1_flag(): number {
    return this.#view.getUint32(4, LE);
  }

  set ref_pic_list_modification_l1_flag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }
}