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
import { MacOSSurfaceCreateFlagsMVK } from "../def.ts";

export interface InitMacOSSurfaceCreateInfoMVK {
  pNext?: AnyPointer;
  flags?: MacOSSurfaceCreateFlagsMVK;
  pView?: AnyPointer;
}

export class MacOSSurfaceCreateInfoMVK implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMacOSSurfaceCreateInfoMVK);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMacOSSurfaceCreateInfoMVK) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MacOSSurfaceCreateInfoMVK.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MacOSSurfaceCreateInfoMVK.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MacOSSurfaceCreateInfoMVK.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.pView !== undefined) this.pView = data.pView;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MacOSSurfaceCreateInfoMVK.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.MACOS_SURFACE_CREATE_INFO_MVK;
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

  get flags() {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: MacOSSurfaceCreateFlagsMVK) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pView() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pView(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}