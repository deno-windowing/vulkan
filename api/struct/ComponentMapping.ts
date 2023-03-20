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
import { ComponentSwizzle } from "../enum.ts";

export interface InitComponentMapping {
  r?: ComponentSwizzle;
  g?: ComponentSwizzle;
  b?: ComponentSwizzle;
  a?: ComponentSwizzle;
}

export class ComponentMapping implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitComponentMapping);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitComponentMapping) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ComponentMapping.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ComponentMapping.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ComponentMapping.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.r !== undefined) this.r = data.r;
      if (data.g !== undefined) this.g = data.g;
      if (data.b !== undefined) this.b = data.b;
      if (data.a !== undefined) this.a = data.a;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ComponentMapping.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get r(): number {
    return this.#view.getUint32(0, LE);
  }

  set r(value: ComponentSwizzle) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get g(): number {
    return this.#view.getUint32(4, LE);
  }

  set g(value: ComponentSwizzle) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get b(): number {
    return this.#view.getUint32(8, LE);
  }

  set b(value: ComponentSwizzle) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get a(): number {
    return this.#view.getUint32(12, LE);
  }

  set a(value: ComponentSwizzle) {
    this.#view.setUint32(12, Number(value), LE);
  }
}