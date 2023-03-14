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

export interface InitWriteDescriptorSetInlineUniformBlock {
  pNext?: AnyPointer;
  dataSize?: number;
  pData?: AnyPointer;
}

export class WriteDescriptorSetInlineUniformBlock implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitWriteDescriptorSetInlineUniformBlock);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitWriteDescriptorSetInlineUniformBlock) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(WriteDescriptorSetInlineUniformBlock.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < WriteDescriptorSetInlineUniformBlock.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(WriteDescriptorSetInlineUniformBlock.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.dataSize !== undefined) this.dataSize = data.dataSize;
      if (data.pData !== undefined) this.pData = data.pData;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, WriteDescriptorSetInlineUniformBlock.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.WRITE_DESCRIPTOR_SET_INLINE_UNIFORM_BLOCK;
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

  get dataSize() {
    return this.#view.getUint32(16, LE);
  }

  set dataSize(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pData() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pData(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}