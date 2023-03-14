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
import { DeviceAddress, DeviceSize, MemoryDecompressionMethodFlagsNV } from "../def.ts";

export interface InitDecompressMemoryRegionNV {
  srcAddress?: DeviceAddress;
  dstAddress?: DeviceAddress;
  compressedSize?: DeviceSize;
  decompressedSize?: DeviceSize;
  decompressionMethod?: MemoryDecompressionMethodFlagsNV;
}

export class DecompressMemoryRegionNV implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDecompressMemoryRegionNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDecompressMemoryRegionNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DecompressMemoryRegionNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DecompressMemoryRegionNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DecompressMemoryRegionNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.srcAddress !== undefined) this.srcAddress = data.srcAddress;
      if (data.dstAddress !== undefined) this.dstAddress = data.dstAddress;
      if (data.compressedSize !== undefined) this.compressedSize = data.compressedSize;
      if (data.decompressedSize !== undefined) this.decompressedSize = data.decompressedSize;
      if (data.decompressionMethod !== undefined) this.decompressionMethod = data.decompressionMethod;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DecompressMemoryRegionNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get srcAddress() {
    return this.#view.getBigUint64(0, LE);
  }

  set srcAddress(value: DeviceAddress) {
    this.#view.setBigUint64(0, BigInt(value), LE);
  }

  get dstAddress() {
    return this.#view.getBigUint64(8, LE);
  }

  set dstAddress(value: DeviceAddress) {
    this.#view.setBigUint64(8, BigInt(value), LE);
  }

  get compressedSize() {
    return this.#view.getBigUint64(16, LE);
  }

  set compressedSize(value: DeviceSize) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get decompressedSize() {
    return this.#view.getBigUint64(24, LE);
  }

  set decompressedSize(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get decompressionMethod() {
    return this.#view.getBigUint64(32, LE);
  }

  set decompressionMethod(value: MemoryDecompressionMethodFlagsNV) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }
}