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

export interface InitExportMemoryWin32HandleInfoKHR {
  pNext?: AnyPointer;
  pAttributes?: AnyPointer;
  dwAccess?: number;
  name?: Deno.PointerValue;
}

export class ExportMemoryWin32HandleInfoKHR implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitExportMemoryWin32HandleInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitExportMemoryWin32HandleInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ExportMemoryWin32HandleInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ExportMemoryWin32HandleInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ExportMemoryWin32HandleInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.pAttributes !== undefined) this.pAttributes = data.pAttributes;
      if (data.dwAccess !== undefined) this.dwAccess = data.dwAccess;
      if (data.name !== undefined) this.name = data.name;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ExportMemoryWin32HandleInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.EXPORT_MEMORY_WIN32_HANDLE_INFO_KHR;
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

  get pAttributes(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set pAttributes(value: AnyPointer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get dwAccess(): number {
    return this.#view.getUint32(24, LE);
  }

  set dwAccess(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get name(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set name(value: Deno.PointerValue) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}