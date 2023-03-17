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
import { StructureType, Format } from "../enum.ts";
import { BufferViewCreateFlags, Buffer, DeviceSize } from "../def.ts";

export interface InitBufferViewCreateInfo {
  pNext?: AnyPointer;
  flags?: BufferViewCreateFlags;
  buffer?: Buffer;
  format?: Format;
  offset?: DeviceSize;
  range?: DeviceSize;
}

export class BufferViewCreateInfo implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBufferViewCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBufferViewCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BufferViewCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BufferViewCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BufferViewCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.buffer !== undefined) this.buffer = data.buffer;
      if (data.format !== undefined) this.format = data.format;
      if (data.offset !== undefined) this.offset = data.offset;
      if (data.range !== undefined) this.range = data.range;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BufferViewCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.BUFFER_VIEW_CREATE_INFO;
  }

  get sType(): number {
    return this.#view.getUint32(0, LE);
  }

  set sType(value: StructureType) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pNext(): Deno.PointerValue {
    return pointerFromView(this.#view, 8, LE);
  }

  set pNext(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: BufferViewCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get buffer(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set buffer(value: Buffer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get format(): number {
    return this.#view.getUint32(32, LE);
  }

  set format(value: Format) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get offset(): bigint {
    return this.#view.getBigUint64(40, LE);
  }

  set offset(value: DeviceSize) {
    this.#view.setBigUint64(40, BigInt(value), LE);
  }

  get range(): bigint {
    return this.#view.getBigUint64(48, LE);
  }

  set range(value: DeviceSize) {
    this.#view.setBigUint64(48, BigInt(value), LE);
  }
}