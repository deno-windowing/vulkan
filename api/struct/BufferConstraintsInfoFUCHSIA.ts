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
import {BufferCreateInfo} from "./BufferCreateInfo.ts";
import {BufferCollectionConstraintsInfoFUCHSIA} from "./BufferCollectionConstraintsInfoFUCHSIA.ts";
import { StructureType } from "../enum.ts";
import { FormatFeatureFlags } from "../def.ts";

export interface InitBufferConstraintsInfoFUCHSIA {
  pNext?: AnyPointer;
  createInfo?: BufferCreateInfo;
  requiredFormatFeatures?: FormatFeatureFlags;
  bufferCollectionConstraints?: BufferCollectionConstraintsInfoFUCHSIA;
}

export class BufferConstraintsInfoFUCHSIA implements BaseStruct {
  static size = 120;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBufferConstraintsInfoFUCHSIA);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBufferConstraintsInfoFUCHSIA) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BufferConstraintsInfoFUCHSIA.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BufferConstraintsInfoFUCHSIA.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BufferConstraintsInfoFUCHSIA.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.createInfo !== undefined) this.createInfo = data.createInfo;
      if (data.requiredFormatFeatures !== undefined) this.requiredFormatFeatures = data.requiredFormatFeatures;
      if (data.bufferCollectionConstraints !== undefined) this.bufferCollectionConstraints = data.bufferCollectionConstraints;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BufferConstraintsInfoFUCHSIA.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.BUFFER_CONSTRAINTS_INFO_FUCHSIA;
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

  get createInfo() {
    return new BufferCreateInfo(this.#data.subarray(16, 16 + BufferCreateInfo.size));
  }

  set createInfo(value: BufferCreateInfo) {
    if (value[BUFFER].byteLength < BufferCreateInfo.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get requiredFormatFeatures() {
    return this.#view.getUint32(72, LE);
  }

  set requiredFormatFeatures(value: FormatFeatureFlags) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get bufferCollectionConstraints() {
    return new BufferCollectionConstraintsInfoFUCHSIA(this.#data.subarray(76, 76 + BufferCollectionConstraintsInfoFUCHSIA.size));
  }

  set bufferCollectionConstraints(value: BufferCollectionConstraintsInfoFUCHSIA) {
    if (value[BUFFER].byteLength < BufferCollectionConstraintsInfoFUCHSIA.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 76);
  }
}