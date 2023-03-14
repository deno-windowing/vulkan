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
import { DeviceSize } from "../def.ts";

export interface InitSubresourceLayout {
  offset?: DeviceSize;
  size?: DeviceSize;
  rowPitch?: DeviceSize;
  arrayPitch?: DeviceSize;
  depthPitch?: DeviceSize;
}

export class SubresourceLayout implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSubresourceLayout);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSubresourceLayout) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SubresourceLayout.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SubresourceLayout.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SubresourceLayout.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.offset !== undefined) this.offset = data.offset;
      if (data.size !== undefined) this.size = data.size;
      if (data.rowPitch !== undefined) this.rowPitch = data.rowPitch;
      if (data.arrayPitch !== undefined) this.arrayPitch = data.arrayPitch;
      if (data.depthPitch !== undefined) this.depthPitch = data.depthPitch;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SubresourceLayout.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get offset() {
    return this.#view.getBigUint64(0, LE);
  }

  set offset(value: DeviceSize) {
    this.#view.setBigUint64(0, BigInt(value), LE);
  }

  get size() {
    return this.#view.getBigUint64(8, LE);
  }

  set size(value: DeviceSize) {
    this.#view.setBigUint64(8, BigInt(value), LE);
  }

  get rowPitch() {
    return this.#view.getBigUint64(16, LE);
  }

  set rowPitch(value: DeviceSize) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get arrayPitch() {
    return this.#view.getBigUint64(24, LE);
  }

  set arrayPitch(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get depthPitch() {
    return this.#view.getBigUint64(32, LE);
  }

  set depthPitch(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }
}