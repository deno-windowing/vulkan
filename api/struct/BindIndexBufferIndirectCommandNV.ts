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
import { IndexType } from "../enum.ts";
import { DeviceAddress } from "../def.ts";

export interface InitBindIndexBufferIndirectCommandNV {
  bufferAddress?: DeviceAddress;
  size?: number;
  indexType?: IndexType;
}

export class BindIndexBufferIndirectCommandNV implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBindIndexBufferIndirectCommandNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBindIndexBufferIndirectCommandNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BindIndexBufferIndirectCommandNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BindIndexBufferIndirectCommandNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BindIndexBufferIndirectCommandNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.bufferAddress !== undefined) this.bufferAddress = data.bufferAddress;
      if (data.size !== undefined) this.size = data.size;
      if (data.indexType !== undefined) this.indexType = data.indexType;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BindIndexBufferIndirectCommandNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get bufferAddress() {
    return this.#view.getBigUint64(0, LE);
  }

  set bufferAddress(value: DeviceAddress) {
    this.#view.setBigUint64(0, BigInt(value), LE);
  }

  get size() {
    return this.#view.getUint32(8, LE);
  }

  set size(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get indexType() {
    return this.#view.getUint32(12, LE);
  }

  set indexType(value: IndexType) {
    this.#view.setUint32(12, Number(value), LE);
  }
}