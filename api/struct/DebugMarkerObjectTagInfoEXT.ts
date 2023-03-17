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
import { StructureType, DebugReportObjectTypeEXT } from "../enum.ts";

export interface InitDebugMarkerObjectTagInfoEXT {
  pNext?: AnyPointer;
  objectType?: DebugReportObjectTypeEXT;
  object?: number | bigint;
  tagName?: number | bigint;
  tagSize?: number | bigint;
  pTag?: AnyPointer;
}

export class DebugMarkerObjectTagInfoEXT implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDebugMarkerObjectTagInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDebugMarkerObjectTagInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DebugMarkerObjectTagInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DebugMarkerObjectTagInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DebugMarkerObjectTagInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.objectType !== undefined) this.objectType = data.objectType;
      if (data.object !== undefined) this.object = data.object;
      if (data.tagName !== undefined) this.tagName = data.tagName;
      if (data.tagSize !== undefined) this.tagSize = data.tagSize;
      if (data.pTag !== undefined) this.pTag = data.pTag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DebugMarkerObjectTagInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEBUG_MARKER_OBJECT_TAG_INFO_EXT;
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

  set objectType(value: DebugReportObjectTypeEXT) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get object(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set object(value: number | bigint) {
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