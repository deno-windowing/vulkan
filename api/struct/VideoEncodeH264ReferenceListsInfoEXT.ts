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
import {VideoEncodeH264DpbSlotInfoEXT} from "./VideoEncodeH264DpbSlotInfoEXT.ts";
import {StdVideoEncodeH264RefMemMgmtCtrlOperations} from "./StdVideoEncodeH264RefMemMgmtCtrlOperations.ts";
import { StructureType } from "../enum.ts";

export interface InitVideoEncodeH264ReferenceListsInfoEXT {
  pNext?: AnyPointer;
  referenceList0EntryCount?: number;
  pReferenceList0Entries?: AnyPointer;
  referenceList1EntryCount?: number;
  pReferenceList1Entries?: AnyPointer;
  pMemMgmtCtrlOperations?: AnyPointer;
}

export class VideoEncodeH264ReferenceListsInfoEXT implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeH264ReferenceListsInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeH264ReferenceListsInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeH264ReferenceListsInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeH264ReferenceListsInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeH264ReferenceListsInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.referenceList0EntryCount !== undefined) this.referenceList0EntryCount = data.referenceList0EntryCount;
      if (data.pReferenceList0Entries !== undefined) this.pReferenceList0Entries = data.pReferenceList0Entries;
      if (data.referenceList1EntryCount !== undefined) this.referenceList1EntryCount = data.referenceList1EntryCount;
      if (data.pReferenceList1Entries !== undefined) this.pReferenceList1Entries = data.pReferenceList1Entries;
      if (data.pMemMgmtCtrlOperations !== undefined) this.pMemMgmtCtrlOperations = data.pMemMgmtCtrlOperations;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeH264ReferenceListsInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_H264_REFERENCE_LISTS_INFO_EXT;
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

  get referenceList0EntryCount() {
    return this.#view.getUint8(16);
  }

  set referenceList0EntryCount(value: number) {
    this.#view.setUint8(16, Number(value));
  }

  get pReferenceList0Entries() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pReferenceList0Entries(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get referenceList1EntryCount() {
    return this.#view.getUint8(32);
  }

  set referenceList1EntryCount(value: number) {
    this.#view.setUint8(32, Number(value));
  }

  get pReferenceList1Entries() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pReferenceList1Entries(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get pMemMgmtCtrlOperations() {
    return pointerFromView(this.#view, 48, LE);
  }

  set pMemMgmtCtrlOperations(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }
}