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

export interface InitStdVideoH265ScalingLists {
  ScalingList4x4?: Uint8Array;
  ScalingList8x8?: Uint8Array;
  ScalingList16x16?: Uint8Array;
  ScalingList32x32?: Uint8Array;
  ScalingListDCCoef16x16?: Uint8Array;
  ScalingListDCCoef32x32?: Uint8Array;
}

export class StdVideoH265ScalingLists implements BaseStruct {
  static size = 1000;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265ScalingLists);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265ScalingLists) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265ScalingLists.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265ScalingLists.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265ScalingLists.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.ScalingList4x4 !== undefined) this.ScalingList4x4 = data.ScalingList4x4;
      if (data.ScalingList8x8 !== undefined) this.ScalingList8x8 = data.ScalingList8x8;
      if (data.ScalingList16x16 !== undefined) this.ScalingList16x16 = data.ScalingList16x16;
      if (data.ScalingList32x32 !== undefined) this.ScalingList32x32 = data.ScalingList32x32;
      if (data.ScalingListDCCoef16x16 !== undefined) this.ScalingListDCCoef16x16 = data.ScalingListDCCoef16x16;
      if (data.ScalingListDCCoef32x32 !== undefined) this.ScalingListDCCoef32x32 = data.ScalingListDCCoef32x32;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265ScalingLists.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get ScalingList4x4() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 0, 96);
  }

  set ScalingList4x4(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 0);
  }

  get ScalingList8x8() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 96, 384);
  }

  set ScalingList8x8(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 96);
  }

  get ScalingList16x16() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 480, 384);
  }

  set ScalingList16x16(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 480);
  }

  get ScalingList32x32() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 864, 128);
  }

  set ScalingList32x32(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 864);
  }

  get ScalingListDCCoef16x16() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 992, 6);
  }

  set ScalingListDCCoef16x16(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 992);
  }

  get ScalingListDCCoef32x32() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 998, 2);
  }

  set ScalingListDCCoef32x32(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 998);
  }
}