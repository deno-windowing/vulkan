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
import {ImageSubresourceLayers} from "./ImageSubresourceLayers.ts";
import {Offset3D} from "./Offset3D.ts";
import {Extent3D} from "./Extent3D.ts";
import { DeviceAddress } from "../def.ts";

export interface InitCopyMemoryToImageIndirectCommandNV {
  srcAddress?: DeviceAddress;
  bufferRowLength?: number;
  bufferImageHeight?: number;
  imageSubresource?: ImageSubresourceLayers;
  imageOffset?: Offset3D;
  imageExtent?: Extent3D;
}

export class CopyMemoryToImageIndirectCommandNV implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCopyMemoryToImageIndirectCommandNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCopyMemoryToImageIndirectCommandNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CopyMemoryToImageIndirectCommandNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CopyMemoryToImageIndirectCommandNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CopyMemoryToImageIndirectCommandNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.srcAddress !== undefined) this.srcAddress = data.srcAddress;
      if (data.bufferRowLength !== undefined) this.bufferRowLength = data.bufferRowLength;
      if (data.bufferImageHeight !== undefined) this.bufferImageHeight = data.bufferImageHeight;
      if (data.imageSubresource !== undefined) this.imageSubresource = data.imageSubresource;
      if (data.imageOffset !== undefined) this.imageOffset = data.imageOffset;
      if (data.imageExtent !== undefined) this.imageExtent = data.imageExtent;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CopyMemoryToImageIndirectCommandNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get srcAddress() {
    return this.#view.getBigUint64(0, LE);
  }

  set srcAddress(value: DeviceAddress) {
    this.#view.setBigUint64(0, BigInt(value), LE);
  }

  get bufferRowLength() {
    return this.#view.getUint32(8, LE);
  }

  set bufferRowLength(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get bufferImageHeight() {
    return this.#view.getUint32(12, LE);
  }

  set bufferImageHeight(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get imageSubresource() {
    return new ImageSubresourceLayers(this.#data.subarray(16, 16 + ImageSubresourceLayers.size));
  }

  set imageSubresource(value: ImageSubresourceLayers) {
    if (value[BUFFER].byteLength < ImageSubresourceLayers.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get imageOffset() {
    return new Offset3D(this.#data.subarray(32, 32 + Offset3D.size));
  }

  set imageOffset(value: Offset3D) {
    if (value[BUFFER].byteLength < Offset3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 32);
  }

  get imageExtent() {
    return new Extent3D(this.#data.subarray(44, 44 + Extent3D.size));
  }

  set imageExtent(value: Extent3D) {
    if (value[BUFFER].byteLength < Extent3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 44);
  }
}