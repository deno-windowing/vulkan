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
import { ImageLayout } from "../enum.ts";

export interface InitAttachmentReference {
  attachment?: number;
  layout?: ImageLayout;
}

export class AttachmentReference implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAttachmentReference);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAttachmentReference) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AttachmentReference.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AttachmentReference.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AttachmentReference.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.attachment !== undefined) this.attachment = data.attachment;
      if (data.layout !== undefined) this.layout = data.layout;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AttachmentReference.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get attachment() {
    return this.#view.getUint32(0, LE);
  }

  set attachment(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get layout() {
    return this.#view.getUint32(4, LE);
  }

  set layout(value: ImageLayout) {
    this.#view.setUint32(4, Number(value), LE);
  }
}