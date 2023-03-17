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
import {VideoPictureResourceInfoKHR} from "./VideoPictureResourceInfoKHR.ts";
import { StructureType } from "../enum.ts";

export interface InitVideoReferenceSlotInfoKHR {
  pNext?: AnyPointer;
  slotIndex?: number;
  pPictureResource?: AnyPointer;
}

export class VideoReferenceSlotInfoKHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoReferenceSlotInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoReferenceSlotInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoReferenceSlotInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoReferenceSlotInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoReferenceSlotInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.slotIndex !== undefined) this.slotIndex = data.slotIndex;
      if (data.pPictureResource !== undefined) this.pPictureResource = data.pPictureResource;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoReferenceSlotInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_REFERENCE_SLOT_INFO_KHR;
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

  get slotIndex(): number {
    return this.#view.getInt32(16, LE);
  }

  set slotIndex(value: number) {
    this.#view.setInt32(16, Number(value), LE);
  }

  get pPictureResource(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pPictureResource(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}