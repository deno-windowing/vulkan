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
import {StdVideoEncodeH265WeightTableFlags} from "./StdVideoEncodeH265WeightTableFlags.ts";

export interface InitStdVideoEncodeH265WeightTable {
  flags?: StdVideoEncodeH265WeightTableFlags;
  luma_log2_weight_denom?: number;
  delta_chroma_log2_weight_denom?: number;
  delta_luma_weight_l0?: Int8Array;
  luma_offset_l0?: Int8Array;
  delta_chroma_weight_l0?: Int8Array;
  delta_chroma_offset_l0?: Int8Array;
  delta_luma_weight_l1?: Int8Array;
  luma_offset_l1?: Int8Array;
  delta_chroma_weight_l1?: Int8Array;
  delta_chroma_offset_l1?: Int8Array;
}

export class StdVideoEncodeH265WeightTable implements BaseStruct {
  static size = 190;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH265WeightTable);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH265WeightTable) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH265WeightTable.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH265WeightTable.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH265WeightTable.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.luma_log2_weight_denom !== undefined) this.luma_log2_weight_denom = data.luma_log2_weight_denom;
      if (data.delta_chroma_log2_weight_denom !== undefined) this.delta_chroma_log2_weight_denom = data.delta_chroma_log2_weight_denom;
      if (data.delta_luma_weight_l0 !== undefined) this.delta_luma_weight_l0 = data.delta_luma_weight_l0;
      if (data.luma_offset_l0 !== undefined) this.luma_offset_l0 = data.luma_offset_l0;
      if (data.delta_chroma_weight_l0 !== undefined) this.delta_chroma_weight_l0 = data.delta_chroma_weight_l0;
      if (data.delta_chroma_offset_l0 !== undefined) this.delta_chroma_offset_l0 = data.delta_chroma_offset_l0;
      if (data.delta_luma_weight_l1 !== undefined) this.delta_luma_weight_l1 = data.delta_luma_weight_l1;
      if (data.luma_offset_l1 !== undefined) this.luma_offset_l1 = data.luma_offset_l1;
      if (data.delta_chroma_weight_l1 !== undefined) this.delta_chroma_weight_l1 = data.delta_chroma_weight_l1;
      if (data.delta_chroma_offset_l1 !== undefined) this.delta_chroma_offset_l1 = data.delta_chroma_offset_l1;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH265WeightTable.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags(): StdVideoEncodeH265WeightTableFlags {
    return new StdVideoEncodeH265WeightTableFlags(this.#data.subarray(0, 0 + StdVideoEncodeH265WeightTableFlags.size));
  }

  set flags(value: StdVideoEncodeH265WeightTableFlags) {
    if (value[BUFFER].byteLength < StdVideoEncodeH265WeightTableFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get luma_log2_weight_denom(): number {
    return this.#view.getUint8(8);
  }

  set luma_log2_weight_denom(value: number) {
    this.#view.setUint8(8, Number(value));
  }

  get delta_chroma_log2_weight_denom(): number {
    return this.#view.getInt8(9);
  }

  set delta_chroma_log2_weight_denom(value: number) {
    this.#view.setInt8(9, Number(value));
  }

  get delta_luma_weight_l0(): Int8Array {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 10, 15);
  }

  set delta_luma_weight_l0(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 10);
  }

  get luma_offset_l0(): Int8Array {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 25, 15);
  }

  set luma_offset_l0(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 25);
  }

  get delta_chroma_weight_l0(): Int8Array {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 40, 30);
  }

  set delta_chroma_weight_l0(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 40);
  }

  get delta_chroma_offset_l0(): Int8Array {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 70, 30);
  }

  set delta_chroma_offset_l0(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 70);
  }

  get delta_luma_weight_l1(): Int8Array {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 100, 15);
  }

  set delta_luma_weight_l1(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 100);
  }

  get luma_offset_l1(): Int8Array {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 115, 15);
  }

  set luma_offset_l1(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 115);
  }

  get delta_chroma_weight_l1(): Int8Array {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 130, 30);
  }

  set delta_chroma_weight_l1(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 130);
  }

  get delta_chroma_offset_l1(): Int8Array {
    return new Int8Array(this.#data.buffer, this.#data.byteOffset + 160, 30);
  }

  set delta_chroma_offset_l1(value: Int8Array) {
    this.#data.set(new Uint8Array(value.buffer), 160);
  }
}