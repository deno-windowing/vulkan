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

export interface InitStdVideoH265ShortTermRefPicSetFlags {
  inter_ref_pic_set_prediction_flag?: number;
  delta_rps_sign?: number;
}

export class StdVideoH265ShortTermRefPicSetFlags implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265ShortTermRefPicSetFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265ShortTermRefPicSetFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265ShortTermRefPicSetFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265ShortTermRefPicSetFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265ShortTermRefPicSetFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.inter_ref_pic_set_prediction_flag !== undefined) this.inter_ref_pic_set_prediction_flag = data.inter_ref_pic_set_prediction_flag;
      if (data.delta_rps_sign !== undefined) this.delta_rps_sign = data.delta_rps_sign;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265ShortTermRefPicSetFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get inter_ref_pic_set_prediction_flag() {
    return this.#view.getUint32(0, LE);
  }

  set inter_ref_pic_set_prediction_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get delta_rps_sign() {
    return this.#view.getUint32(4, LE);
  }

  set delta_rps_sign(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }
}