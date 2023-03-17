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
import {StdVideoEncodeH265SliceSegmentHeader} from "./StdVideoEncodeH265SliceSegmentHeader.ts";
import { StructureType } from "../enum.ts";

export interface InitVideoEncodeH265NaluSliceSegmentInfoEXT {
  pNext?: AnyPointer;
  ctbCount?: number;
  pReferenceFinalLists?: AnyPointer;
  pSliceSegmentHeaderStd?: AnyPointer;
}

export class VideoEncodeH265NaluSliceSegmentInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeH265NaluSliceSegmentInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeH265NaluSliceSegmentInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeH265NaluSliceSegmentInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeH265NaluSliceSegmentInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeH265NaluSliceSegmentInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.ctbCount !== undefined) this.ctbCount = data.ctbCount;
      if (data.pReferenceFinalLists !== undefined) this.pReferenceFinalLists = data.pReferenceFinalLists;
      if (data.pSliceSegmentHeaderStd !== undefined) this.pSliceSegmentHeaderStd = data.pSliceSegmentHeaderStd;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeH265NaluSliceSegmentInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_H265_NALU_SLICE_SEGMENT_INFO_EXT;
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

  get ctbCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set ctbCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pReferenceFinalLists(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pReferenceFinalLists(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get pSliceSegmentHeaderStd(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pSliceSegmentHeaderStd(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}