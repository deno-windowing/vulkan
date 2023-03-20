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
import { StructureType, ObjectType } from "../enum.ts";

export interface InitDebugUtilsObjectTagInfoEXT {
  pNext?: AnyPointer;
  objectType?: ObjectType;
  objectHandle?: number | bigint;
  tagName?: number | bigint;
  tagSize?: number | bigint;
  pTag?: AnyPointer;
}

export class DebugUtilsObjectTagInfoEXT implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDebugUtilsObjectTagInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDebugUtilsObjectTagInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DebugUtilsObjectTagInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DebugUtilsObjectTagInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DebugUtilsObjectTagInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.objectType !== undefined) this.objectType = data.objectType;
      if (data.objectHandle !== undefined) this.objectHandle = data.objectHandle;
      if (data.tagName !== undefined) this.tagName = data.tagName;
      if (data.tagSize !== undefined) this.tagSize = data.tagSize;
      if (data.pTag !== undefined) this.pTag = data.pTag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DebugUtilsObjectTagInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEBUG_UTILS_OBJECT_TAG_INFO_EXT;
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

  get objectType(): number {
    return this.#view.getUint32(16, LE);
  }

  set objectType(value: ObjectType) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get objectHandle(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set objectHandle(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get tagName(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set tagName(value: number | bigint) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get tagSize(): bigint {
    return this.#view.getBigUint64(40, LE);
  }

  set tagSize(value: number | bigint) {
    this.#view.setBigUint64(40, BigInt(value), LE);
  }

  get pTag(): Deno.PointerValue {
    return pointerFromView(this.#view, 48, LE);
  }

  set pTag(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }
}