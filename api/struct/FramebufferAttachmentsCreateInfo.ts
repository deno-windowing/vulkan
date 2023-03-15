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
import {FramebufferAttachmentImageInfo} from "./FramebufferAttachmentImageInfo.ts";
import { StructureType } from "../enum.ts";

export interface InitFramebufferAttachmentsCreateInfo {
  pNext?: AnyPointer;
  attachmentImageInfoCount?: number;
  pAttachmentImageInfos?: AnyPointer;
}

export class FramebufferAttachmentsCreateInfo implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitFramebufferAttachmentsCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitFramebufferAttachmentsCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(FramebufferAttachmentsCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < FramebufferAttachmentsCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(FramebufferAttachmentsCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.attachmentImageInfoCount !== undefined) this.attachmentImageInfoCount = data.attachmentImageInfoCount;
      if (data.pAttachmentImageInfos !== undefined) this.pAttachmentImageInfos = data.pAttachmentImageInfos;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, FramebufferAttachmentsCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.FRAMEBUFFER_ATTACHMENTS_CREATE_INFO;
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

  get attachmentImageInfoCount() {
    return this.#view.getUint32(16, LE);
  }

  set attachmentImageInfoCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pAttachmentImageInfos() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pAttachmentImageInfos(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}