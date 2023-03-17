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
import {StdVideoDecodeH265ReferenceInfoFlags} from "./StdVideoDecodeH265ReferenceInfoFlags.ts";

export interface InitStdVideoDecodeH265ReferenceInfo {
  flags?: StdVideoDecodeH265ReferenceInfoFlags;
  PicOrderCntVal?: number;
}

export class StdVideoDecodeH265ReferenceInfo implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoDecodeH265ReferenceInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoDecodeH265ReferenceInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoDecodeH265ReferenceInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoDecodeH265ReferenceInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoDecodeH265ReferenceInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.PicOrderCntVal !== undefined) this.PicOrderCntVal = data.PicOrderCntVal;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoDecodeH265ReferenceInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags(): StdVideoDecodeH265ReferenceInfoFlags {
    return new StdVideoDecodeH265ReferenceInfoFlags(this.#data.subarray(0, 0 + StdVideoDecodeH265ReferenceInfoFlags.size));
  }

  set flags(value: StdVideoDecodeH265ReferenceInfoFlags) {
    if (value[BUFFER].byteLength < StdVideoDecodeH265ReferenceInfoFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get PicOrderCntVal(): number {
    return this.#view.getInt32(8, LE);
  }

  set PicOrderCntVal(value: number) {
    this.#view.setInt32(8, Number(value), LE);
  }
}