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
import { Buffer, DeviceSize } from "../def.ts";

export interface InitDescriptorBufferInfo {
  buffer?: Buffer;
  offset?: DeviceSize;
  range?: DeviceSize;
}

export class DescriptorBufferInfo implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDescriptorBufferInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDescriptorBufferInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DescriptorBufferInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DescriptorBufferInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DescriptorBufferInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.buffer !== undefined) this.buffer = data.buffer;
      if (data.offset !== undefined) this.offset = data.offset;
      if (data.range !== undefined) this.range = data.range;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DescriptorBufferInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get buffer(): Deno.PointerValue {
    return pointerFromView(this.#view, 0, LE);
  }

  set buffer(value: Buffer) {
    this.#view.setBigUint64(0, BigInt(anyPointer(value)), LE);
  }

  get offset(): bigint {
    return this.#view.getBigUint64(8, LE);
  }

  set offset(value: DeviceSize) {
    this.#view.setBigUint64(8, BigInt(value), LE);
  }

  get range(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set range(value: DeviceSize) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }
}