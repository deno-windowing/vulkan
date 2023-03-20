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
import {Offset2D} from "./Offset2D.ts";
import {Extent2D} from "./Extent2D.ts";
import { StructureType } from "../enum.ts";
import { ImageView } from "../def.ts";

export interface InitVideoPictureResourceInfoKHR {
  pNext?: AnyPointer;
  codedOffset?: Offset2D;
  codedExtent?: Extent2D;
  baseArrayLayer?: number;
  imageViewBinding?: ImageView;
}

export class VideoPictureResourceInfoKHR implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoPictureResourceInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoPictureResourceInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoPictureResourceInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoPictureResourceInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoPictureResourceInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.codedOffset !== undefined) this.codedOffset = data.codedOffset;
      if (data.codedExtent !== undefined) this.codedExtent = data.codedExtent;
      if (data.baseArrayLayer !== undefined) this.baseArrayLayer = data.baseArrayLayer;
      if (data.imageViewBinding !== undefined) this.imageViewBinding = data.imageViewBinding;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoPictureResourceInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_PICTURE_RESOURCE_INFO_KHR;
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

  get codedOffset(): Offset2D {
    return new Offset2D(this.#data.subarray(16, 16 + Offset2D.size));
  }

  set codedOffset(value: Offset2D) {
    if (value[BUFFER].byteLength < Offset2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get codedExtent(): Extent2D {
    return new Extent2D(this.#data.subarray(24, 24 + Extent2D.size));
  }

  set codedExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 24);
  }

  get baseArrayLayer(): number {
    return this.#view.getUint32(32, LE);
  }

  set baseArrayLayer(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get imageViewBinding(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set imageViewBinding(value: ImageView) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}