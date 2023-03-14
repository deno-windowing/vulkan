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
import { ExternalMemoryHandleTypeFlagsNV } from "../def.ts";

export interface InitImportMemoryWin32HandleInfoNV {
  pNext?: AnyPointer;
  handleType?: ExternalMemoryHandleTypeFlagsNV;
  handle?: Deno.PointerValue;
}

export class ImportMemoryWin32HandleInfoNV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImportMemoryWin32HandleInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImportMemoryWin32HandleInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImportMemoryWin32HandleInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImportMemoryWin32HandleInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImportMemoryWin32HandleInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.handleType !== undefined) this.handleType = data.handleType;
      if (data.handle !== undefined) this.handle = data.handle;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImportMemoryWin32HandleInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IMPORT_MEMORY_WIN32_HANDLE_INFO_NV;
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

  get handleType() {
    return this.#view.getUint32(16, LE);
  }

  set handleType(value: ExternalMemoryHandleTypeFlagsNV) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get handle() {
    return pointerFromView(this.#view, 24, LE);
  }

  set handle(value: Deno.PointerValue) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}