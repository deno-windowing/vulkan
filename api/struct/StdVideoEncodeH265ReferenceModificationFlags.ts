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

export interface InitStdVideoEncodeH265ReferenceModificationFlags {
  ref_pic_list_modification_flag_l0?: number;
  ref_pic_list_modification_flag_l1?: number;
}

export class StdVideoEncodeH265ReferenceModificationFlags implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH265ReferenceModificationFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH265ReferenceModificationFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH265ReferenceModificationFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH265ReferenceModificationFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH265ReferenceModificationFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.ref_pic_list_modification_flag_l0 !== undefined) this.ref_pic_list_modification_flag_l0 = data.ref_pic_list_modification_flag_l0;
      if (data.ref_pic_list_modification_flag_l1 !== undefined) this.ref_pic_list_modification_flag_l1 = data.ref_pic_list_modification_flag_l1;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH265ReferenceModificationFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get ref_pic_list_modification_flag_l0(): number {
    return this.#view.getUint32(0, LE);
  }

  set ref_pic_list_modification_flag_l0(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get ref_pic_list_modification_flag_l1(): number {
    return this.#view.getUint32(4, LE);
  }

  set ref_pic_list_modification_flag_l1(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }
}