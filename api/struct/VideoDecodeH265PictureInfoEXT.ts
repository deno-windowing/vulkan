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
import {StdVideoDecodeH265PictureInfo} from "./StdVideoDecodeH265PictureInfo.ts";
import { StructureType } from "../enum.ts";

export interface InitVideoDecodeH265PictureInfoEXT {
  pNext?: AnyPointer;
  pStdPictureInfo?: AnyPointer;
  sliceCount?: number;
  pSliceOffsets?: AnyPointer;
}

export class VideoDecodeH265PictureInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoDecodeH265PictureInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoDecodeH265PictureInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoDecodeH265PictureInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoDecodeH265PictureInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoDecodeH265PictureInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.pStdPictureInfo !== undefined) this.pStdPictureInfo = data.pStdPictureInfo;
      if (data.sliceCount !== undefined) this.sliceCount = data.sliceCount;
      if (data.pSliceOffsets !== undefined) this.pSliceOffsets = data.pSliceOffsets;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoDecodeH265PictureInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_DECODE_H265_PICTURE_INFO_EXT;
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

  get pStdPictureInfo() {
    return pointerFromView(this.#view, 16, LE);
  }

  set pStdPictureInfo(value: AnyPointer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get sliceCount() {
    return this.#view.getUint32(24, LE);
  }

  set sliceCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pSliceOffsets() {
    return pointerFromView(this.#view, 32, LE);
  }

  set pSliceOffsets(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}