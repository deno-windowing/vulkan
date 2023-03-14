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
import { StructureType, ExternalMemoryHandleTypeFlagBits } from "../enum.ts";

export interface InitImportMemoryHostPointerInfoEXT {
  pNext?: AnyPointer;
  handleType?: ExternalMemoryHandleTypeFlagBits;
  pHostPointer?: AnyPointer;
}

export class ImportMemoryHostPointerInfoEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImportMemoryHostPointerInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImportMemoryHostPointerInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImportMemoryHostPointerInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImportMemoryHostPointerInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImportMemoryHostPointerInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.handleType !== undefined) this.handleType = data.handleType;
      if (data.pHostPointer !== undefined) this.pHostPointer = data.pHostPointer;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImportMemoryHostPointerInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IMPORT_MEMORY_HOST_POINTER_INFO_EXT;
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

  set handleType(value: ExternalMemoryHandleTypeFlagBits) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pHostPointer() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pHostPointer(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}