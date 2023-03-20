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
import { Image, DeviceMemory, DeviceSize } from "../def.ts";

export interface InitBindImageMemoryInfo {
  pNext?: AnyPointer;
  image?: Image;
  memory?: DeviceMemory;
  memoryOffset?: DeviceSize;
}

export class BindImageMemoryInfo implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBindImageMemoryInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBindImageMemoryInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BindImageMemoryInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BindImageMemoryInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BindImageMemoryInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.image !== undefined) this.image = data.image;
      if (data.memory !== undefined) this.memory = data.memory;
      if (data.memoryOffset !== undefined) this.memoryOffset = data.memoryOffset;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BindImageMemoryInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.BIND_IMAGE_MEMORY_INFO;
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

  get image(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set image(value: Image) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get memory(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set memory(value: DeviceMemory) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get memoryOffset(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set memoryOffset(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }
}