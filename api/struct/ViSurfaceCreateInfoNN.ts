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
import { ViSurfaceCreateFlagsNN } from "../def.ts";

export interface InitViSurfaceCreateInfoNN {
  pNext?: AnyPointer;
  flags?: ViSurfaceCreateFlagsNN;
  window?: AnyPointer;
}

export class ViSurfaceCreateInfoNN implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitViSurfaceCreateInfoNN);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitViSurfaceCreateInfoNN) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ViSurfaceCreateInfoNN.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ViSurfaceCreateInfoNN.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ViSurfaceCreateInfoNN.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.window !== undefined) this.window = data.window;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ViSurfaceCreateInfoNN.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VI_SURFACE_CREATE_INFO_NN;
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

  set flags(value: ViSurfaceCreateFlagsNN) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get window(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set window(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}