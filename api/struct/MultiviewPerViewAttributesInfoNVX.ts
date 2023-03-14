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
import { Bool32 } from "../def.ts";

export interface InitMultiviewPerViewAttributesInfoNVX {
  pNext?: AnyPointer;
  perViewAttributes?: Bool32;
  perViewAttributesPositionXOnly?: Bool32;
}

export class MultiviewPerViewAttributesInfoNVX implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMultiviewPerViewAttributesInfoNVX);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMultiviewPerViewAttributesInfoNVX) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MultiviewPerViewAttributesInfoNVX.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MultiviewPerViewAttributesInfoNVX.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MultiviewPerViewAttributesInfoNVX.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.perViewAttributes !== undefined) this.perViewAttributes = data.perViewAttributes;
      if (data.perViewAttributesPositionXOnly !== undefined) this.perViewAttributesPositionXOnly = data.perViewAttributesPositionXOnly;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MultiviewPerViewAttributesInfoNVX.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.MULTIVIEW_PER_VIEW_ATTRIBUTES_INFO_NVX;
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

  get perViewAttributes() {
    return this.#view.getUint32(16, LE);
  }

  set perViewAttributes(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get perViewAttributesPositionXOnly() {
    return this.#view.getUint32(20, LE);
  }

  set perViewAttributesPositionXOnly(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }
}