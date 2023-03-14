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
import { ImageAspectFlags } from "../def.ts";

export interface InitClearAttachment {
  aspectMask?: ImageAspectFlags;
  colorAttachment?: number;
  clearValue?: ClearValue;
}

export class ClearAttachment implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitClearAttachment);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitClearAttachment) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ClearAttachment.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ClearAttachment.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ClearAttachment.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.aspectMask !== undefined) this.aspectMask = data.aspectMask;
      if (data.colorAttachment !== undefined) this.colorAttachment = data.colorAttachment;
      if (data.clearValue !== undefined) this.clearValue = data.clearValue;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ClearAttachment.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get aspectMask() {
    return this.#view.getUint32(0, LE);
  }

  set aspectMask(value: ImageAspectFlags) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get colorAttachment() {
    return this.#view.getUint32(4, LE);
  }

  set colorAttachment(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get clearValue() {
    throw new Error(`Unknown type: {"union":[{"union":["f32","i32","u32"]},{"struct":["f32","u32"]}]}`);
  }

  set clearValue(value: ClearValue) {
    throw new Error(`Unknown type: {"union":[{"union":["f32","i32","u32"]},{"struct":["f32","u32"]}]}`);
  }
}