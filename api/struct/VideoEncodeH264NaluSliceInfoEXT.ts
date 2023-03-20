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
import {VideoEncodeH264ReferenceListsInfoEXT} from "./VideoEncodeH264ReferenceListsInfoEXT.ts";
import {StdVideoEncodeH264SliceHeader} from "./StdVideoEncodeH264SliceHeader.ts";
import { StructureType } from "../enum.ts";

export interface InitVideoEncodeH264NaluSliceInfoEXT {
  pNext?: AnyPointer;
  mbCount?: number;
  pReferenceFinalLists?: AnyPointer;
  pSliceHeaderStd?: AnyPointer;
}

export class VideoEncodeH264NaluSliceInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeH264NaluSliceInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeH264NaluSliceInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeH264NaluSliceInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeH264NaluSliceInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeH264NaluSliceInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.mbCount !== undefined) this.mbCount = data.mbCount;
      if (data.pReferenceFinalLists !== undefined) this.pReferenceFinalLists = data.pReferenceFinalLists;
      if (data.pSliceHeaderStd !== undefined) this.pSliceHeaderStd = data.pSliceHeaderStd;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeH264NaluSliceInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_H264_NALU_SLICE_INFO_EXT;
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

  get mbCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set mbCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pReferenceFinalLists(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pReferenceFinalLists(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get pSliceHeaderStd(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pSliceHeaderStd(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}