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
import {ImageSubresource} from "./ImageSubresource.ts";
import {Offset3D} from "./Offset3D.ts";
import {Extent3D} from "./Extent3D.ts";
import { DeviceMemory, DeviceSize, SparseMemoryBindFlags } from "../def.ts";

export interface InitSparseImageMemoryBind {
  subresource?: ImageSubresource;
  offset?: Offset3D;
  extent?: Extent3D;
  memory?: DeviceMemory;
  memoryOffset?: DeviceSize;
  flags?: SparseMemoryBindFlags;
}

export class SparseImageMemoryBind implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSparseImageMemoryBind);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSparseImageMemoryBind) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SparseImageMemoryBind.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SparseImageMemoryBind.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SparseImageMemoryBind.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.subresource !== undefined) this.subresource = data.subresource;
      if (data.offset !== undefined) this.offset = data.offset;
      if (data.extent !== undefined) this.extent = data.extent;
      if (data.memory !== undefined) this.memory = data.memory;
      if (data.memoryOffset !== undefined) this.memoryOffset = data.memoryOffset;
      if (data.flags !== undefined) this.flags = data.flags;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SparseImageMemoryBind.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get subresource() {
    return new ImageSubresource(this.#data.subarray(0, 0 + ImageSubresource.size));
  }

  set subresource(value: ImageSubresource) {
    if (value[BUFFER].byteLength < ImageSubresource.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get offset() {
    return new Offset3D(this.#data.subarray(12, 12 + Offset3D.size));
  }

  set offset(value: Offset3D) {
    if (value[BUFFER].byteLength < Offset3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 12);
  }

  get extent() {
    return new Extent3D(this.#data.subarray(24, 24 + Extent3D.size));
  }

  set extent(value: Extent3D) {
    if (value[BUFFER].byteLength < Extent3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 24);
  }

  get memory() {
    return pointerFromView(this.#view, 40, LE);
  }

  set memory(value: DeviceMemory) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get memoryOffset() {
    return this.#view.getBigUint64(48, LE);
  }

  set memoryOffset(value: DeviceSize) {
    this.#view.setBigUint64(48, BigInt(value), LE);
  }

  get flags() {
    return this.#view.getUint32(56, LE);
  }

  set flags(value: SparseMemoryBindFlags) {
    this.#view.setUint32(56, Number(value), LE);
  }
}