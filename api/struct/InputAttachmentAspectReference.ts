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
import { ImageAspectFlags } from "../def.ts";

export interface InitInputAttachmentAspectReference {
  subpass?: number;
  inputAttachmentIndex?: number;
  aspectMask?: ImageAspectFlags;
}

export class InputAttachmentAspectReference implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitInputAttachmentAspectReference);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitInputAttachmentAspectReference) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(InputAttachmentAspectReference.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < InputAttachmentAspectReference.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(InputAttachmentAspectReference.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.subpass !== undefined) this.subpass = data.subpass;
      if (data.inputAttachmentIndex !== undefined) this.inputAttachmentIndex = data.inputAttachmentIndex;
      if (data.aspectMask !== undefined) this.aspectMask = data.aspectMask;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, InputAttachmentAspectReference.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get subpass(): number {
    return this.#view.getUint32(0, LE);
  }

  set subpass(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get inputAttachmentIndex(): number {
    return this.#view.getUint32(4, LE);
  }

  set inputAttachmentIndex(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get aspectMask(): number {
    return this.#view.getUint32(8, LE);
  }

  set aspectMask(value: ImageAspectFlags) {
    this.#view.setUint32(8, Number(value), LE);
  }
}