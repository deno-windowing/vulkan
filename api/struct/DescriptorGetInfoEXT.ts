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
import { StructureType, DescriptorType } from "../enum.ts";
import { DescriptorDataEXT } from "../union.ts";

export interface InitDescriptorGetInfoEXT {
  pNext?: AnyPointer;
  type?: DescriptorType;
  data?: DescriptorDataEXT;
}

export class DescriptorGetInfoEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDescriptorGetInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDescriptorGetInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DescriptorGetInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DescriptorGetInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DescriptorGetInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.type !== undefined) this.type = data.type;
      if (data.data !== undefined) this.data = data.data;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DescriptorGetInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DESCRIPTOR_GET_INFO_EXT;
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

  get type(): number {
    return this.#view.getUint32(16, LE);
  }

  set type(value: DescriptorType) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get data(): unknown {
    throw new Error(`Unknown type: {"union":["buffer","buffer","buffer","buffer","buffer","buffer","buffer","buffer","buffer","u64"]}`);
  }

  set data(value: DescriptorDataEXT) {
    throw new Error(`Unknown type: {"union":["buffer","buffer","buffer","buffer","buffer","buffer","buffer","buffer","buffer","u64"]}`);
  }
}