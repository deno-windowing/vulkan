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
import {MutableDescriptorTypeListEXT} from "./MutableDescriptorTypeListEXT.ts";
import { StructureType } from "../enum.ts";

export interface InitMutableDescriptorTypeCreateInfoEXT {
  pNext?: AnyPointer;
  mutableDescriptorTypeListCount?: number;
  pMutableDescriptorTypeLists?: AnyPointer;
}

export class MutableDescriptorTypeCreateInfoEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMutableDescriptorTypeCreateInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMutableDescriptorTypeCreateInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MutableDescriptorTypeCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MutableDescriptorTypeCreateInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MutableDescriptorTypeCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.mutableDescriptorTypeListCount !== undefined) this.mutableDescriptorTypeListCount = data.mutableDescriptorTypeListCount;
      if (data.pMutableDescriptorTypeLists !== undefined) this.pMutableDescriptorTypeLists = data.pMutableDescriptorTypeLists;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MutableDescriptorTypeCreateInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.MUTABLE_DESCRIPTOR_TYPE_CREATE_INFO_EXT;
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

  get mutableDescriptorTypeListCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set mutableDescriptorTypeListCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pMutableDescriptorTypeLists(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pMutableDescriptorTypeLists(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}