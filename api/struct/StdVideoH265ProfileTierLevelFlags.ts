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

export interface InitStdVideoH265ProfileTierLevelFlags {
  general_tier_flag?: number;
  general_progressive_source_flag?: number;
  general_interlaced_source_flag?: number;
  general_non_packed_constraint_flag?: number;
  general_frame_only_constraint_flag?: number;
}

export class StdVideoH265ProfileTierLevelFlags implements BaseStruct {
  static size = 20;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265ProfileTierLevelFlags);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265ProfileTierLevelFlags) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265ProfileTierLevelFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265ProfileTierLevelFlags.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265ProfileTierLevelFlags.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.general_tier_flag !== undefined) this.general_tier_flag = data.general_tier_flag;
      if (data.general_progressive_source_flag !== undefined) this.general_progressive_source_flag = data.general_progressive_source_flag;
      if (data.general_interlaced_source_flag !== undefined) this.general_interlaced_source_flag = data.general_interlaced_source_flag;
      if (data.general_non_packed_constraint_flag !== undefined) this.general_non_packed_constraint_flag = data.general_non_packed_constraint_flag;
      if (data.general_frame_only_constraint_flag !== undefined) this.general_frame_only_constraint_flag = data.general_frame_only_constraint_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265ProfileTierLevelFlags.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get general_tier_flag(): number {
    return this.#view.getUint32(0, LE);
  }

  set general_tier_flag(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get general_progressive_source_flag(): number {
    return this.#view.getUint32(4, LE);
  }

  set general_progressive_source_flag(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get general_interlaced_source_flag(): number {
    return this.#view.getUint32(8, LE);
  }

  set general_interlaced_source_flag(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get general_non_packed_constraint_flag(): number {
    return this.#view.getUint32(12, LE);
  }

  set general_non_packed_constraint_flag(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get general_frame_only_constraint_flag(): number {
    return this.#view.getUint32(16, LE);
  }

  set general_frame_only_constraint_flag(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }
}