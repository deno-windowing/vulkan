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
import { StructureType, ImageLayout } from "../enum.ts";
import { ImageAspectFlags } from "../def.ts";

export interface InitAttachmentReference2 {
  pNext?: AnyPointer;
  attachment?: number;
  layout?: ImageLayout;
  aspectMask?: ImageAspectFlags;
}

export class AttachmentReference2 implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAttachmentReference2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAttachmentReference2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AttachmentReference2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AttachmentReference2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AttachmentReference2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.attachment !== undefined) this.attachment = data.attachment;
      if (data.layout !== undefined) this.layout = data.layout;
      if (data.aspectMask !== undefined) this.aspectMask = data.aspectMask;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AttachmentReference2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ATTACHMENT_REFERENCE_2;
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

  get attachment(): number {
    return this.#view.getUint32(16, LE);
  }

  set attachment(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get layout(): number {
    return this.#view.getUint32(20, LE);
  }

  set layout(value: ImageLayout) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get aspectMask(): number {
    return this.#view.getUint32(24, LE);
  }

  set aspectMask(value: ImageAspectFlags) {
    this.#view.setUint32(24, Number(value), LE);
  }
}