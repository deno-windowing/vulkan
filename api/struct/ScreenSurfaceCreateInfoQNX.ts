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
import { ScreenSurfaceCreateFlagsQNX } from "../def.ts";

export interface InitScreenSurfaceCreateInfoQNX {
  pNext?: AnyPointer;
  flags?: ScreenSurfaceCreateFlagsQNX;
  context?: AnyPointer;
  window?: AnyPointer;
}

export class ScreenSurfaceCreateInfoQNX implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitScreenSurfaceCreateInfoQNX);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitScreenSurfaceCreateInfoQNX) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ScreenSurfaceCreateInfoQNX.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ScreenSurfaceCreateInfoQNX.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ScreenSurfaceCreateInfoQNX.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.context !== undefined) this.context = data.context;
      if (data.window !== undefined) this.window = data.window;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ScreenSurfaceCreateInfoQNX.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SCREEN_SURFACE_CREATE_INFO_QNX;
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

  set flags(value: ScreenSurfaceCreateFlagsQNX) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get context() {
    return pointerFromView(this.#view, 24, LE);
  }

  set context(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get window() {
    return pointerFromView(this.#view, 32, LE);
  }

  set window(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}