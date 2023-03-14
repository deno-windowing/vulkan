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
import {StdVideoEncodeH264WeightTableFlags} from "./StdVideoEncodeH264WeightTableFlags.ts";

export interface InitStdVideoEncodeH264WeightTable {
  flags?: StdVideoEncodeH264WeightTableFlags;
  luma_log2_weight_denom?: number;
  chroma_log2_weight_denom?: number;
  luma_weight_l0?: Int8Array;
  luma_offset_l0?: Int8Array;
  chroma_weight_l0?: Int8Array;
  chroma_offset_l0?: Int8Array;
  luma_weight_l1?: Int8Array;
  luma_offset_l1?: Int8Array;
  chroma_weight_l1?: Int8Array;
  chroma_offset_l1?: Int8Array;
}

export class StdVideoEncodeH264WeightTable implements BaseStruct {
  static size = 404;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH264WeightTable);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH264WeightTable) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH264WeightTable.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH264WeightTable.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH264WeightTable.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.luma_log2_weight_denom !== undefined) this.luma_log2_weight_denom = data.luma_log2_weight_denom;
      if (data.chroma_log2_weight_denom !== undefined) this.chroma_log2_weight_denom = data.chroma_log2_weight_denom;
      if (data.luma_weight_l0 !== undefined) this.luma_weight_l0 = data.luma_weight_l0;
      if (data.luma_offset_l0 !== undefined) this.luma_offset_l0 = data.luma_offset_l0;
      if (data.chroma_weight_l0 !== undefined) this.chroma_weight_l0 = data.chroma_weight_l0;
      if (data.chroma_offset_l0 !== undefined) this.chroma_offset_l0 = data.chroma_offset_l0;
      if (data.luma_weight_l1 !== undefined) this.luma_weight_l1 = data.luma_weight_l1;
      if (data.luma_offset_l1 !== undefined) this.luma_offset_l1 = data.luma_offset_l1;
      if (data.chroma_weight_l1 !== undefined) this.chroma_weight_l1 = data.chroma_weight_l1;
      if (data.chroma_offset_l1 !== undefined) this.chroma_offset_l1 = data.chroma_offset_l1;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH264WeightTable.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags() {
    return new StdVideoEncodeH264WeightTableFlags(this.#data.subarray(0, 0 + StdVideoEncodeH264WeightTableFlags.size));
  }

  set flags(value: StdVideoEncodeH264WeightTableFlags) {
    if (value[BUFFER].byteLength < StdVideoEncodeH264WeightTableFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get luma_log2_weight_denom() {
    return this.#view.getUint8(16);
  }

  set luma_log2_weight_denom(value: number) {
    this.#view.setUint8(16, Number(value));
  }

  get chroma_log2_weight_denom() {
    return this.#view.getUint8(17);
  }

  set chroma_log2_weight_denom(value: number) {
    this.#view.setUint8(17, Number(value));
  }

  get luma_weight_l0() {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 18, 32);
  }

  set luma_weight_l0(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 18);
  }

  get luma_offset_l0() {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 50, 32);
  }

  set luma_offset_l0(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 50);
  }

  get chroma_weight_l0() {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 82, 64);
  }

  set chroma_weight_l0(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 82);
  }

  get chroma_offset_l0() {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 146, 64);
  }

  set chroma_offset_l0(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 146);
  }

  get luma_weight_l1() {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 210, 32);
  }

  set luma_weight_l1(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 210);
  }

  get luma_offset_l1() {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 242, 32);
  }

  set luma_offset_l1(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 242);
  }

  get chroma_weight_l1() {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 274, 64);
  }

  set chroma_weight_l1(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 274);
  }

  get chroma_offset_l1() {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 338, 64);
  }

  set chroma_offset_l1(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 338);
  }
}