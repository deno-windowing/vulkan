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
import { DeviceMemory, DeviceSize } from "../def.ts";

export interface InitBindVideoSessionMemoryInfoKHR {
  pNext?: AnyPointer;
  memoryBindIndex?: number;
  memory?: DeviceMemory;
  memoryOffset?: DeviceSize;
  memorySize?: DeviceSize;
}

export class BindVideoSessionMemoryInfoKHR implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBindVideoSessionMemoryInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBindVideoSessionMemoryInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BindVideoSessionMemoryInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BindVideoSessionMemoryInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BindVideoSessionMemoryInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.memoryBindIndex !== undefined) this.memoryBindIndex = data.memoryBindIndex;
      if (data.memory !== undefined) this.memory = data.memory;
      if (data.memoryOffset !== undefined) this.memoryOffset = data.memoryOffset;
      if (data.memorySize !== undefined) this.memorySize = data.memorySize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BindVideoSessionMemoryInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.BIND_VIDEO_SESSION_MEMORY_INFO_KHR;
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

  get memoryBindIndex() {
    return this.#view.getUint32(16, LE);
  }

  set memoryBindIndex(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get memory() {
    return pointerFromView(this.#view, 24, LE);
  }

  set memory(value: DeviceMemory) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get memoryOffset() {
    return this.#view.getBigUint64(32, LE);
  }

  set memoryOffset(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get memorySize() {
    return this.#view.getBigUint64(40, LE);
  }

  set memorySize(value: DeviceSize) {
    this.#view.setBigUint64(40, BigInt(value), LE);
  }
}