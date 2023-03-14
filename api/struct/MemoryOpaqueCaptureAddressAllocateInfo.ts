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

export interface InitMemoryOpaqueCaptureAddressAllocateInfo {
  pNext?: AnyPointer;
  opaqueCaptureAddress?: number | bigint;
}

export class MemoryOpaqueCaptureAddressAllocateInfo implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMemoryOpaqueCaptureAddressAllocateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMemoryOpaqueCaptureAddressAllocateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MemoryOpaqueCaptureAddressAllocateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MemoryOpaqueCaptureAddressAllocateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MemoryOpaqueCaptureAddressAllocateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.opaqueCaptureAddress !== undefined) this.opaqueCaptureAddress = data.opaqueCaptureAddress;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MemoryOpaqueCaptureAddressAllocateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.MEMORY_OPAQUE_CAPTURE_ADDRESS_ALLOCATE_INFO;
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

  get opaqueCaptureAddress() {
    return this.#view.getBigUint64(16, LE);
  }

  set opaqueCaptureAddress(value: number | bigint) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }
}