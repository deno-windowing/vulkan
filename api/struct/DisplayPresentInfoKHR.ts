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
import {Rect2D} from "./Rect2D.ts";
import { StructureType } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitDisplayPresentInfoKHR {
  pNext?: AnyPointer;
  srcRect?: Rect2D;
  dstRect?: Rect2D;
  persistent?: Bool32;
}

export class DisplayPresentInfoKHR implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDisplayPresentInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDisplayPresentInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DisplayPresentInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DisplayPresentInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DisplayPresentInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.srcRect !== undefined) this.srcRect = data.srcRect;
      if (data.dstRect !== undefined) this.dstRect = data.dstRect;
      if (data.persistent !== undefined) this.persistent = data.persistent;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DisplayPresentInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DISPLAY_PRESENT_INFO_KHR;
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

  get srcRect(): Rect2D {
    return new Rect2D(this.#data.subarray(16, 16 + Rect2D.size));
  }

  set srcRect(value: Rect2D) {
    if (value[BUFFER].byteLength < Rect2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get dstRect(): Rect2D {
    return new Rect2D(this.#data.subarray(32, 32 + Rect2D.size));
  }

  set dstRect(value: Rect2D) {
    if (value[BUFFER].byteLength < Rect2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 32);
  }

  get persistent(): number {
    return this.#view.getUint32(48, LE);
  }

  set persistent(value: Bool32) {
    this.#view.setUint32(48, Number(value), LE);
  }
}