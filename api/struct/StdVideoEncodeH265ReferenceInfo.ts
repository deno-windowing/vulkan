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
import {StdVideoEncodeH265ReferenceInfoFlags} from "./StdVideoEncodeH265ReferenceInfoFlags.ts";

export interface InitStdVideoEncodeH265ReferenceInfo {
  flags?: StdVideoEncodeH265ReferenceInfoFlags;
  PicOrderCntVal?: number;
  TemporalId?: number;
}

export class StdVideoEncodeH265ReferenceInfo implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH265ReferenceInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH265ReferenceInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH265ReferenceInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH265ReferenceInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH265ReferenceInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.PicOrderCntVal !== undefined) this.PicOrderCntVal = data.PicOrderCntVal;
      if (data.TemporalId !== undefined) this.TemporalId = data.TemporalId;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH265ReferenceInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags() {
    return new StdVideoEncodeH265ReferenceInfoFlags(this.#data.subarray(0, 0 + StdVideoEncodeH265ReferenceInfoFlags.size));
  }

  set flags(value: StdVideoEncodeH265ReferenceInfoFlags) {
    if (value[BUFFER].byteLength < StdVideoEncodeH265ReferenceInfoFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get PicOrderCntVal() {
    return this.#view.getInt32(8, LE);
  }

  set PicOrderCntVal(value: number) {
    this.#view.setInt32(8, Number(value), LE);
  }

  get TemporalId() {
    return this.#view.getUint8(12);
  }

  set TemporalId(value: number) {
    this.#view.setUint8(12, Number(value));
  }
}