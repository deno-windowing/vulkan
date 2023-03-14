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

export interface InitAttachmentDescriptionStencilLayout {
  pNext?: AnyPointer;
  stencilInitialLayout?: ImageLayout;
  stencilFinalLayout?: ImageLayout;
}

export class AttachmentDescriptionStencilLayout implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAttachmentDescriptionStencilLayout);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAttachmentDescriptionStencilLayout) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AttachmentDescriptionStencilLayout.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AttachmentDescriptionStencilLayout.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AttachmentDescriptionStencilLayout.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.stencilInitialLayout !== undefined) this.stencilInitialLayout = data.stencilInitialLayout;
      if (data.stencilFinalLayout !== undefined) this.stencilFinalLayout = data.stencilFinalLayout;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AttachmentDescriptionStencilLayout.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ATTACHMENT_DESCRIPTION_STENCIL_LAYOUT;
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

  get stencilInitialLayout() {
    return this.#view.getUint32(16, LE);
  }

  set stencilInitialLayout(value: ImageLayout) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get stencilFinalLayout() {
    return this.#view.getUint32(20, LE);
  }

  set stencilFinalLayout(value: ImageLayout) {
    this.#view.setUint32(20, Number(value), LE);
  }
}