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
import { Semaphore, Event, MTLSharedEvent_id } from "../def.ts";

export interface InitExportMetalSharedEventInfoEXT {
  pNext?: AnyPointer;
  semaphore?: Semaphore;
  event?: Event;
  mtlSharedEvent?: MTLSharedEvent_id;
}

export class ExportMetalSharedEventInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitExportMetalSharedEventInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitExportMetalSharedEventInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ExportMetalSharedEventInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ExportMetalSharedEventInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ExportMetalSharedEventInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.semaphore !== undefined) this.semaphore = data.semaphore;
      if (data.event !== undefined) this.event = data.event;
      if (data.mtlSharedEvent !== undefined) this.mtlSharedEvent = data.mtlSharedEvent;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ExportMetalSharedEventInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.EXPORT_METAL_SHARED_EVENT_INFO_EXT;
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

  get semaphore() {
    return pointerFromView(this.#view, 16, LE);
  }

  set semaphore(value: Semaphore) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get event() {
    return pointerFromView(this.#view, 24, LE);
  }

  set event(value: Event) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get mtlSharedEvent() {
    return pointerFromView(this.#view, 32, LE);
  }

  set mtlSharedEvent(value: MTLSharedEvent_id) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}