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
import {StdVideoH265ProfileTierLevelFlags} from "./StdVideoH265ProfileTierLevelFlags.ts";
import { StdVideoH265ProfileIdc, StdVideoH265LevelIdc } from "../enum.ts";

export interface InitStdVideoH265ProfileTierLevel {
  flags?: StdVideoH265ProfileTierLevelFlags;
  general_profile_idc?: StdVideoH265ProfileIdc;
  general_level_idc?: StdVideoH265LevelIdc;
}

/** profile_tier_level */
export class StdVideoH265ProfileTierLevel implements BaseStruct {
  static size = 28;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265ProfileTierLevel);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265ProfileTierLevel) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265ProfileTierLevel.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265ProfileTierLevel.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265ProfileTierLevel.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.general_profile_idc !== undefined) this.general_profile_idc = data.general_profile_idc;
      if (data.general_level_idc !== undefined) this.general_level_idc = data.general_level_idc;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265ProfileTierLevel.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags() {
    return new StdVideoH265ProfileTierLevelFlags(this.#data.subarray(0, 0 + StdVideoH265ProfileTierLevelFlags.size));
  }

  set flags(value: StdVideoH265ProfileTierLevelFlags) {
    if (value[BUFFER].byteLength < StdVideoH265ProfileTierLevelFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get general_profile_idc() {
    return this.#view.getUint32(20, LE);
  }

  set general_profile_idc(value: StdVideoH265ProfileIdc) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get general_level_idc() {
    return this.#view.getUint32(24, LE);
  }

  set general_level_idc(value: StdVideoH265LevelIdc) {
    this.#view.setUint32(24, Number(value), LE);
  }
}