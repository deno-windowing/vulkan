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
import { Format, SampleCountFlagBits, AttachmentLoadOp, AttachmentStoreOp, ImageLayout } from "../enum.ts";
import { AttachmentDescriptionFlags } from "../def.ts";

export interface InitAttachmentDescription {
  flags?: AttachmentDescriptionFlags;
  format?: Format;
  samples?: SampleCountFlagBits;
  loadOp?: AttachmentLoadOp;
  storeOp?: AttachmentStoreOp;
  stencilLoadOp?: AttachmentLoadOp;
  stencilStoreOp?: AttachmentStoreOp;
  initialLayout?: ImageLayout;
  finalLayout?: ImageLayout;
}

export class AttachmentDescription implements BaseStruct {
  static size = 36;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAttachmentDescription);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAttachmentDescription) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AttachmentDescription.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AttachmentDescription.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AttachmentDescription.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.format !== undefined) this.format = data.format;
      if (data.samples !== undefined) this.samples = data.samples;
      if (data.loadOp !== undefined) this.loadOp = data.loadOp;
      if (data.storeOp !== undefined) this.storeOp = data.storeOp;
      if (data.stencilLoadOp !== undefined) this.stencilLoadOp = data.stencilLoadOp;
      if (data.stencilStoreOp !== undefined) this.stencilStoreOp = data.stencilStoreOp;
      if (data.initialLayout !== undefined) this.initialLayout = data.initialLayout;
      if (data.finalLayout !== undefined) this.finalLayout = data.finalLayout;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AttachmentDescription.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags() {
    return this.#view.getUint32(0, LE);
  }

  set flags(value: AttachmentDescriptionFlags) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get format() {
    return this.#view.getUint32(4, LE);
  }

  set format(value: Format) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get samples() {
    return this.#view.getUint32(8, LE);
  }

  set samples(value: SampleCountFlagBits) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get loadOp() {
    return this.#view.getUint32(12, LE);
  }

  set loadOp(value: AttachmentLoadOp) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get storeOp() {
    return this.#view.getUint32(16, LE);
  }

  set storeOp(value: AttachmentStoreOp) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get stencilLoadOp() {
    return this.#view.getUint32(20, LE);
  }

  set stencilLoadOp(value: AttachmentLoadOp) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get stencilStoreOp() {
    return this.#view.getUint32(24, LE);
  }

  set stencilStoreOp(value: AttachmentStoreOp) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get initialLayout() {
    return this.#view.getUint32(28, LE);
  }

  set initialLayout(value: ImageLayout) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get finalLayout() {
    return this.#view.getUint32(32, LE);
  }

  set finalLayout(value: ImageLayout) {
    this.#view.setUint32(32, Number(value), LE);
  }
}