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
import { IOSSurfaceCreateFlagsMVK } from "../def.ts";

export interface InitIOSSurfaceCreateInfoMVK {
  pNext?: AnyPointer;
  flags?: IOSSurfaceCreateFlagsMVK;
  pView?: AnyPointer;
}

export class IOSSurfaceCreateInfoMVK implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitIOSSurfaceCreateInfoMVK);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitIOSSurfaceCreateInfoMVK) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(IOSSurfaceCreateInfoMVK.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < IOSSurfaceCreateInfoMVK.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(IOSSurfaceCreateInfoMVK.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.pView !== undefined) this.pView = data.pView;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, IOSSurfaceCreateInfoMVK.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IOS_SURFACE_CREATE_INFO_MVK;
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

  set flags(value: IOSSurfaceCreateFlagsMVK) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pView(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pView(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}