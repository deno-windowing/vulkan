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

export interface InitIndirectCommandsStreamNV {
  buffer?: Buffer;
  offset?: DeviceSize;
}

export class IndirectCommandsStreamNV implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitIndirectCommandsStreamNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitIndirectCommandsStreamNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(IndirectCommandsStreamNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < IndirectCommandsStreamNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(IndirectCommandsStreamNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.buffer !== undefined) this.buffer = data.buffer;
      if (data.offset !== undefined) this.offset = data.offset;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, IndirectCommandsStreamNV.size));
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
}