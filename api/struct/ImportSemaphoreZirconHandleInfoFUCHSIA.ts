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
import { StructureType, ExternalSemaphoreHandleTypeFlagBits } from "../enum.ts";
import { Semaphore, SemaphoreImportFlags } from "../def.ts";

export interface InitImportSemaphoreZirconHandleInfoFUCHSIA {
  pNext?: AnyPointer;
  semaphore?: Semaphore;
  flags?: SemaphoreImportFlags;
  handleType?: ExternalSemaphoreHandleTypeFlagBits;
  zirconHandle?: Deno.PointerValue;
}

export class ImportSemaphoreZirconHandleInfoFUCHSIA implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImportSemaphoreZirconHandleInfoFUCHSIA);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImportSemaphoreZirconHandleInfoFUCHSIA) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImportSemaphoreZirconHandleInfoFUCHSIA.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImportSemaphoreZirconHandleInfoFUCHSIA.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImportSemaphoreZirconHandleInfoFUCHSIA.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.semaphore !== undefined) this.semaphore = data.semaphore;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.handleType !== undefined) this.handleType = data.handleType;
      if (data.zirconHandle !== undefined) this.zirconHandle = data.zirconHandle;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImportSemaphoreZirconHandleInfoFUCHSIA.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IMPORT_SEMAPHORE_ZIRCON_HANDLE_INFO_FUCHSIA;
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

  get semaphore(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set semaphore(value: Semaphore) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get flags(): number {
    return this.#view.getUint32(24, LE);
  }

  set flags(value: SemaphoreImportFlags) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get handleType(): number {
    return this.#view.getUint32(28, LE);
  }

  set handleType(value: ExternalSemaphoreHandleTypeFlagBits) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get zirconHandle(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set zirconHandle(value: Deno.PointerValue) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}