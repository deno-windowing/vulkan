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
import { StructureType, Format } from "../enum.ts";

export interface InitVertexInputAttributeDescription2EXT {
  pNext?: AnyPointer;
  location?: number;
  binding?: number;
  format?: Format;
  offset?: number;
}

export class VertexInputAttributeDescription2EXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVertexInputAttributeDescription2EXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVertexInputAttributeDescription2EXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VertexInputAttributeDescription2EXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VertexInputAttributeDescription2EXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VertexInputAttributeDescription2EXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.location !== undefined) this.location = data.location;
      if (data.binding !== undefined) this.binding = data.binding;
      if (data.format !== undefined) this.format = data.format;
      if (data.offset !== undefined) this.offset = data.offset;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VertexInputAttributeDescription2EXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VERTEX_INPUT_ATTRIBUTE_DESCRIPTION_2_EXT;
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

  get location(): number {
    return this.#view.getUint32(16, LE);
  }

  set location(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get binding(): number {
    return this.#view.getUint32(20, LE);
  }

  set binding(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get format(): number {
    return this.#view.getUint32(24, LE);
  }

  set format(value: Format) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get offset(): number {
    return this.#view.getUint32(28, LE);
  }

  set offset(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }
}