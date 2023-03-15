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
import { AccelerationStructureMotionInstanceTypeNV } from "../enum.ts";
import { AccelerationStructureMotionInstanceFlagsNV } from "../def.ts";
import { AccelerationStructureMotionInstanceDataNV } from "../union.ts";

export interface InitAccelerationStructureMotionInstanceNV {
  type?: AccelerationStructureMotionInstanceTypeNV;
  flags?: AccelerationStructureMotionInstanceFlagsNV;
  data?: AccelerationStructureMotionInstanceDataNV;
}

export class AccelerationStructureMotionInstanceNV implements BaseStruct {
  static size = 160;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAccelerationStructureMotionInstanceNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAccelerationStructureMotionInstanceNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AccelerationStructureMotionInstanceNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AccelerationStructureMotionInstanceNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AccelerationStructureMotionInstanceNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.type !== undefined) this.type = data.type;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.data !== undefined) this.data = data.data;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AccelerationStructureMotionInstanceNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get type() {
    return this.#view.getUint32(0, LE);
  }

  set type(value: AccelerationStructureMotionInstanceTypeNV) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get flags() {
    return this.#view.getUint32(4, LE);
  }

  set flags(value: AccelerationStructureMotionInstanceFlagsNV) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get data() {
    throw new Error(`Unknown type: {"union":[{"struct":[{"struct":["f32"]},"u32","u32","u32","u32","u64"]},{"struct":[{"struct":["f32"]},{"struct":["f32"]},"u32","u32","u32","u32","u64"]},{"struct":[{"struct":["f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32"]},{"struct":["f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32"]},"u32","u32","u32","u32","u64"]}]}`);
  }

  set data(value: AccelerationStructureMotionInstanceDataNV) {
    throw new Error(`Unknown type: {"union":[{"struct":[{"struct":["f32"]},"u32","u32","u32","u32","u64"]},{"struct":[{"struct":["f32"]},{"struct":["f32"]},"u32","u32","u32","u32","u64"]},{"struct":[{"struct":["f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32"]},{"struct":["f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32"]},"u32","u32","u32","u32","u64"]}]}`);
  }
}