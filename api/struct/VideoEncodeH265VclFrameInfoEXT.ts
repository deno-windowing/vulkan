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
import {VideoEncodeH265ReferenceListsInfoEXT} from "./VideoEncodeH265ReferenceListsInfoEXT.ts";
import {VideoEncodeH265NaluSliceSegmentInfoEXT} from "./VideoEncodeH265NaluSliceSegmentInfoEXT.ts";
import {StdVideoEncodeH265PictureInfo} from "./StdVideoEncodeH265PictureInfo.ts";
import { StructureType } from "../enum.ts";

export interface InitVideoEncodeH265VclFrameInfoEXT {
  pNext?: AnyPointer;
  pReferenceFinalLists?: AnyPointer;
  naluSliceSegmentEntryCount?: number;
  pNaluSliceSegmentEntries?: AnyPointer;
  pCurrentPictureInfo?: AnyPointer;
}

export class VideoEncodeH265VclFrameInfoEXT implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeH265VclFrameInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeH265VclFrameInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeH265VclFrameInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeH265VclFrameInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeH265VclFrameInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.pReferenceFinalLists !== undefined) this.pReferenceFinalLists = data.pReferenceFinalLists;
      if (data.naluSliceSegmentEntryCount !== undefined) this.naluSliceSegmentEntryCount = data.naluSliceSegmentEntryCount;
      if (data.pNaluSliceSegmentEntries !== undefined) this.pNaluSliceSegmentEntries = data.pNaluSliceSegmentEntries;
      if (data.pCurrentPictureInfo !== undefined) this.pCurrentPictureInfo = data.pCurrentPictureInfo;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeH265VclFrameInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_H265_VCL_FRAME_INFO_EXT;
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

  get pReferenceFinalLists(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set pReferenceFinalLists(value: AnyPointer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get naluSliceSegmentEntryCount(): number {
    return this.#view.getUint32(24, LE);
  }

  set naluSliceSegmentEntryCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pNaluSliceSegmentEntries(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pNaluSliceSegmentEntries(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get pCurrentPictureInfo(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set pCurrentPictureInfo(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}