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
import { Win32SurfaceCreateFlagsKHR } from "../def.ts";

export interface InitWin32SurfaceCreateInfoKHR {
  pNext?: AnyPointer;
  flags?: Win32SurfaceCreateFlagsKHR;
  hinstance?: Deno.PointerValue;
  hwnd?: Deno.PointerValue;
}

export class Win32SurfaceCreateInfoKHR implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitWin32SurfaceCreateInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitWin32SurfaceCreateInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(Win32SurfaceCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < Win32SurfaceCreateInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(Win32SurfaceCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.hinstance !== undefined) this.hinstance = data.hinstance;
      if (data.hwnd !== undefined) this.hwnd = data.hwnd;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, Win32SurfaceCreateInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.WIN32_SURFACE_CREATE_INFO_KHR;
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

  set flags(value: Win32SurfaceCreateFlagsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get hinstance() {
    return pointerFromView(this.#view, 24, LE);
  }

  set hinstance(value: Deno.PointerValue) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get hwnd() {
    return pointerFromView(this.#view, 32, LE);
  }

  set hwnd(value: Deno.PointerValue) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}