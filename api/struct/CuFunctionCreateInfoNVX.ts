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
import { CuModuleNVX } from "../def.ts";

export interface InitCuFunctionCreateInfoNVX {
  pNext?: AnyPointer;
  module?: CuModuleNVX;
  pName?: AnyPointer;
}

export class CuFunctionCreateInfoNVX implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCuFunctionCreateInfoNVX);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCuFunctionCreateInfoNVX) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CuFunctionCreateInfoNVX.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CuFunctionCreateInfoNVX.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CuFunctionCreateInfoNVX.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.module !== undefined) this.module = data.module;
      if (data.pName !== undefined) this.pName = data.pName;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CuFunctionCreateInfoNVX.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.CU_FUNCTION_CREATE_INFO_NVX;
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

  get module(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set module(value: CuModuleNVX) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get pName(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pName(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}