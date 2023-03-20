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
import { StructureType, VertexInputRate } from "../enum.ts";

export interface InitVertexInputBindingDescription2EXT {
  pNext?: AnyPointer;
  binding?: number;
  stride?: number;
  inputRate?: VertexInputRate;
  divisor?: number;
}

export class VertexInputBindingDescription2EXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVertexInputBindingDescription2EXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVertexInputBindingDescription2EXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VertexInputBindingDescription2EXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VertexInputBindingDescription2EXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VertexInputBindingDescription2EXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.binding !== undefined) this.binding = data.binding;
      if (data.stride !== undefined) this.stride = data.stride;
      if (data.inputRate !== undefined) this.inputRate = data.inputRate;
      if (data.divisor !== undefined) this.divisor = data.divisor;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VertexInputBindingDescription2EXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VERTEX_INPUT_BINDING_DESCRIPTION_2_EXT;
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

  get binding(): number {
    return this.#view.getUint32(16, LE);
  }

  set binding(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get stride(): number {
    return this.#view.getUint32(20, LE);
  }

  set stride(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get inputRate(): number {
    return this.#view.getUint32(24, LE);
  }

  set inputRate(value: VertexInputRate) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get divisor(): number {
    return this.#view.getUint32(28, LE);
  }

  set divisor(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }
}