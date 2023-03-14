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
import { StructureType, ExternalFenceHandleTypeFlagBits } from "../enum.ts";
import { Fence } from "../def.ts";

export interface InitFenceGetFdInfoKHR {
  pNext?: AnyPointer;
  fence?: Fence;
  handleType?: ExternalFenceHandleTypeFlagBits;
}

export class FenceGetFdInfoKHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitFenceGetFdInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitFenceGetFdInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(FenceGetFdInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < FenceGetFdInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(FenceGetFdInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.fence !== undefined) this.fence = data.fence;
      if (data.handleType !== undefined) this.handleType = data.handleType;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, FenceGetFdInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.FENCE_GET_FD_INFO_KHR;
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

  get fence() {
    return pointerFromView(this.#view, 16, LE);
  }

  set fence(value: Fence) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get handleType() {
    return this.#view.getUint32(24, LE);
  }

  set handleType(value: ExternalFenceHandleTypeFlagBits) {
    this.#view.setUint32(24, Number(value), LE);
  }
}