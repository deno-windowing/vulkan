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
import { StructureType, Format, SampleCountFlagBits, AttachmentLoadOp, AttachmentStoreOp, ImageLayout } from "../enum.ts";
import { AttachmentDescriptionFlags } from "../def.ts";

export interface InitAttachmentDescription2 {
  pNext?: AnyPointer;
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

export class AttachmentDescription2 implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAttachmentDescription2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAttachmentDescription2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AttachmentDescription2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AttachmentDescription2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AttachmentDescription2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
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
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AttachmentDescription2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ATTACHMENT_DESCRIPTION_2;
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

  get flags() {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: AttachmentDescriptionFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get format() {
    return this.#view.getUint32(20, LE);
  }

  set format(value: Format) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get samples() {
    return this.#view.getUint32(24, LE);
  }

  set samples(value: SampleCountFlagBits) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get loadOp() {
    return this.#view.getUint32(28, LE);
  }

  set loadOp(value: AttachmentLoadOp) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get storeOp() {
    return this.#view.getUint32(32, LE);
  }

  set storeOp(value: AttachmentStoreOp) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get stencilLoadOp() {
    return this.#view.getUint32(36, LE);
  }

  set stencilLoadOp(value: AttachmentLoadOp) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get stencilStoreOp() {
    return this.#view.getUint32(40, LE);
  }

  set stencilStoreOp(value: AttachmentStoreOp) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get initialLayout() {
    return this.#view.getUint32(44, LE);
  }

  set initialLayout(value: ImageLayout) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get finalLayout() {
    return this.#view.getUint32(48, LE);
  }

  set finalLayout(value: ImageLayout) {
    this.#view.setUint32(48, Number(value), LE);
  }
}