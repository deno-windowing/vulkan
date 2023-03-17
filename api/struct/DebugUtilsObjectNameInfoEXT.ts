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

export interface InitDebugUtilsObjectNameInfoEXT {
  pNext?: AnyPointer;
  objectType?: ObjectType;
  objectHandle?: number | bigint;
  pObjectName?: AnyPointer;
}

export class DebugUtilsObjectNameInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDebugUtilsObjectNameInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDebugUtilsObjectNameInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DebugUtilsObjectNameInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DebugUtilsObjectNameInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DebugUtilsObjectNameInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.objectType !== undefined) this.objectType = data.objectType;
      if (data.objectHandle !== undefined) this.objectHandle = data.objectHandle;
      if (data.pObjectName !== undefined) this.pObjectName = data.pObjectName;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DebugUtilsObjectNameInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEBUG_UTILS_OBJECT_NAME_INFO_EXT;
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

  get pObjectName(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pObjectName(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}