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
import { StructureType, StdVideoH264ProfileIdc, VideoDecodeH264PictureLayoutFlagBitsEXT } from "../enum.ts";

export interface InitVideoDecodeH264ProfileInfoEXT {
  pNext?: AnyPointer;
  stdProfileIdc?: StdVideoH264ProfileIdc;
  pictureLayout?: VideoDecodeH264PictureLayoutFlagBitsEXT;
}

export class VideoDecodeH264ProfileInfoEXT implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoDecodeH264ProfileInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoDecodeH264ProfileInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoDecodeH264ProfileInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoDecodeH264ProfileInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoDecodeH264ProfileInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.stdProfileIdc !== undefined) this.stdProfileIdc = data.stdProfileIdc;
      if (data.pictureLayout !== undefined) this.pictureLayout = data.pictureLayout;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoDecodeH264ProfileInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_DECODE_H264_PROFILE_INFO_EXT;
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

  get stdProfileIdc(): number {
    return this.#view.getUint32(16, LE);
  }

  set stdProfileIdc(value: StdVideoH264ProfileIdc) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pictureLayout(): number {
    return this.#view.getUint32(20, LE);
  }

  set pictureLayout(value: VideoDecodeH264PictureLayoutFlagBitsEXT) {
    this.#view.setUint32(20, Number(value), LE);
  }
}