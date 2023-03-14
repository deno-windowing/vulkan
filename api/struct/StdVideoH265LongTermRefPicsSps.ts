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

export interface InitStdVideoH265LongTermRefPicsSps {
  used_by_curr_pic_lt_sps_flag?: number;
  lt_ref_pic_poc_lsb_sps?: Uint32Array;
}

export class StdVideoH265LongTermRefPicsSps implements BaseStruct {
  static size = 132;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265LongTermRefPicsSps);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265LongTermRefPicsSps) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265LongTermRefPicsSps.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265LongTermRefPicsSps.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265LongTermRefPicsSps.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.used_by_curr_pic_lt_sps_flag !== undefined) this.used_by_curr_pic_lt_sps_flag = data.used_by_curr_pic_lt_sps_flag;
      if (data.lt_ref_pic_poc_lsb_sps !== undefined) this.lt_ref_pic_poc_lsb_sps = data.lt_ref_pic_poc_lsb_sps;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265LongTermRefPicsSps.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get used_by_curr_pic_lt_sps_flag() {
    return this.#view.getUint32(0, LE);
  }

  set used_by_curr_pic_lt_sps_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get lt_ref_pic_poc_lsb_sps() {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 4, 32);
  }

  set lt_ref_pic_poc_lsb_sps(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 4);
  }
}