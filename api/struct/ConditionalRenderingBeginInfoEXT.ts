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
import { StructureType } from "../enum.ts";
import { Buffer, DeviceSize, ConditionalRenderingFlagsEXT } from "../def.ts";

export interface InitConditionalRenderingBeginInfoEXT {
  pNext?: AnyPointer;
  buffer?: Buffer;
  offset?: DeviceSize;
  flags?: ConditionalRenderingFlagsEXT;
}

export class ConditionalRenderingBeginInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitConditionalRenderingBeginInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitConditionalRenderingBeginInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ConditionalRenderingBeginInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ConditionalRenderingBeginInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ConditionalRenderingBeginInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.buffer !== undefined) this.buffer = data.buffer;
      if (data.offset !== undefined) this.offset = data.offset;
      if (data.flags !== undefined) this.flags = data.flags;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ConditionalRenderingBeginInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.CONDITIONAL_RENDERING_BEGIN_INFO_EXT;
  }

  get sType() {
    return this.#view.getUint32(0, LE);
  }

  set sType(value: StructureType) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pNext() {
    return pointerFromView(this.#view, 8, LE);
  }

  set pNext(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }

  get buffer() {
    return pointerFromView(this.#view, 16, LE);
  }

  set buffer(value: Buffer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get offset() {
    return this.#view.getBigUint64(24, LE);
  }

  set offset(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get flags() {
    return this.#view.getUint32(32, LE);
  }

  set flags(value: ConditionalRenderingFlagsEXT) {
    this.#view.setUint32(32, Number(value), LE);
  }
}