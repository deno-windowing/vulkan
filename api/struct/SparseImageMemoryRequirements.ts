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
import {SparseImageFormatProperties} from "./SparseImageFormatProperties.ts";
import { DeviceSize } from "../def.ts";

export interface InitSparseImageMemoryRequirements {
  formatProperties?: SparseImageFormatProperties;
  imageMipTailFirstLod?: number;
  imageMipTailSize?: DeviceSize;
  imageMipTailOffset?: DeviceSize;
  imageMipTailStride?: DeviceSize;
}

export class SparseImageMemoryRequirements implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSparseImageMemoryRequirements);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSparseImageMemoryRequirements) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SparseImageMemoryRequirements.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SparseImageMemoryRequirements.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SparseImageMemoryRequirements.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.formatProperties !== undefined) this.formatProperties = data.formatProperties;
      if (data.imageMipTailFirstLod !== undefined) this.imageMipTailFirstLod = data.imageMipTailFirstLod;
      if (data.imageMipTailSize !== undefined) this.imageMipTailSize = data.imageMipTailSize;
      if (data.imageMipTailOffset !== undefined) this.imageMipTailOffset = data.imageMipTailOffset;
      if (data.imageMipTailStride !== undefined) this.imageMipTailStride = data.imageMipTailStride;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SparseImageMemoryRequirements.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get formatProperties(): SparseImageFormatProperties {
    return new SparseImageFormatProperties(this.#data.subarray(0, 0 + SparseImageFormatProperties.size));
  }

  set formatProperties(value: SparseImageFormatProperties) {
    if (value[BUFFER].byteLength < SparseImageFormatProperties.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get imageMipTailFirstLod(): number {
    return this.#view.getUint32(20, LE);
  }

  set imageMipTailFirstLod(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get imageMipTailSize(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set imageMipTailSize(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get imageMipTailOffset(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set imageMipTailOffset(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get imageMipTailStride(): bigint {
    return this.#view.getBigUint64(40, LE);
  }

  set imageMipTailStride(value: DeviceSize) {
    this.#view.setBigUint64(40, BigInt(value), LE);
  }
}