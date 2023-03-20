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
import { DeviceMemory } from "../def.ts";

export interface InitMemoryGetFdInfoKHR {
  pNext?: AnyPointer;
  memory?: DeviceMemory;
  handleType?: ExternalMemoryHandleTypeFlagBits;
}

export class MemoryGetFdInfoKHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMemoryGetFdInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMemoryGetFdInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MemoryGetFdInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MemoryGetFdInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MemoryGetFdInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.memory !== undefined) this.memory = data.memory;
      if (data.handleType !== undefined) this.handleType = data.handleType;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MemoryGetFdInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.MEMORY_GET_FD_INFO_KHR;
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

  get memory(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set memory(value: DeviceMemory) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get handleType(): number {
    return this.#view.getUint32(24, LE);
  }

  set handleType(value: ExternalMemoryHandleTypeFlagBits) {
    this.#view.setUint32(24, Number(value), LE);
  }
}