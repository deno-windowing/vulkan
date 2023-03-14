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

export interface InitDebugMarkerObjectNameInfoEXT {
  pNext?: AnyPointer;
  objectType?: DebugReportObjectTypeEXT;
  object?: number | bigint;
  pObjectName?: AnyPointer;
}

export class DebugMarkerObjectNameInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDebugMarkerObjectNameInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDebugMarkerObjectNameInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DebugMarkerObjectNameInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DebugMarkerObjectNameInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DebugMarkerObjectNameInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.objectType !== undefined) this.objectType = data.objectType;
      if (data.object !== undefined) this.object = data.object;
      if (data.pObjectName !== undefined) this.pObjectName = data.pObjectName;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DebugMarkerObjectNameInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEBUG_MARKER_OBJECT_NAME_INFO_EXT;
  }

  get sType() {
    return this.#view.getUint32(0, LE);
  }

  set sType(value: StructureType) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pNext() {
    return pointerFromView(this.#view, 8, LE);
  }

  set pNext(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }

  get objectType() {
    return this.#view.getUint32(16, LE);
  }

  set objectType(value: DebugReportObjectTypeEXT) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get object() {
    return this.#view.getBigUint64(24, LE);
  }

  set object(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get pObjectName() {
    return pointerFromView(this.#view, 32, LE);
  }

  set pObjectName(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}