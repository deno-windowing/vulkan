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
import { DescriptorType } from "../enum.ts";

export interface InitDescriptorPoolSize {
  type?: DescriptorType;
  descriptorCount?: number;
}

export class DescriptorPoolSize implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDescriptorPoolSize);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDescriptorPoolSize) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DescriptorPoolSize.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DescriptorPoolSize.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DescriptorPoolSize.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.type !== undefined) this.type = data.type;
      if (data.descriptorCount !== undefined) this.descriptorCount = data.descriptorCount;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DescriptorPoolSize.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get type(): number {
    return this.#view.getUint32(0, LE);
  }

  set type(value: DescriptorType) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get descriptorCount(): number {
    return this.#view.getUint32(4, LE);
  }

  set descriptorCount(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }
}