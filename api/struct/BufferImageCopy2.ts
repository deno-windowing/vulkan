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
import { StructureType } from "../enum.ts";
import { DeviceSize } from "../def.ts";

export interface InitBufferImageCopy2 {
  pNext?: AnyPointer;
  bufferOffset?: DeviceSize;
  bufferRowLength?: number;
  bufferImageHeight?: number;
  imageSubresource?: ImageSubresourceLayers;
  imageOffset?: Offset3D;
  imageExtent?: Extent3D;
}

export class BufferImageCopy2 implements BaseStruct {
  static size = 72;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBufferImageCopy2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBufferImageCopy2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BufferImageCopy2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BufferImageCopy2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BufferImageCopy2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.bufferOffset !== undefined) this.bufferOffset = data.bufferOffset;
      if (data.bufferRowLength !== undefined) this.bufferRowLength = data.bufferRowLength;
      if (data.bufferImageHeight !== undefined) this.bufferImageHeight = data.bufferImageHeight;
      if (data.imageSubresource !== undefined) this.imageSubresource = data.imageSubresource;
      if (data.imageOffset !== undefined) this.imageOffset = data.imageOffset;
      if (data.imageExtent !== undefined) this.imageExtent = data.imageExtent;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BufferImageCopy2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.BUFFER_IMAGE_COPY_2;
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

  get bufferOffset(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set bufferOffset(value: DeviceSize) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get bufferRowLength(): number {
    return this.#view.getUint32(24, LE);
  }

  set bufferRowLength(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get bufferImageHeight(): number {
    return this.#view.getUint32(28, LE);
  }

  set bufferImageHeight(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get imageSubresource(): ImageSubresourceLayers {
    return new ImageSubresourceLayers(this.#data.subarray(32, 32 + ImageSubresourceLayers.size));
  }

  set imageSubresource(value: ImageSubresourceLayers) {
    if (value[BUFFER].byteLength < ImageSubresourceLayers.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 32);
  }

  get imageOffset(): Offset3D {
    return new Offset3D(this.#data.subarray(48, 48 + Offset3D.size));
  }

  set imageOffset(value: Offset3D) {
    if (value[BUFFER].byteLength < Offset3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 48);
  }

  get imageExtent(): Extent3D {
    return new Extent3D(this.#data.subarray(60, 60 + Extent3D.size));
  }

  set imageExtent(value: Extent3D) {
    if (value[BUFFER].byteLength < Extent3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 60);
  }
}