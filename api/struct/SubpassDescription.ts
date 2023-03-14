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
import {AttachmentReference} from "./AttachmentReference.ts";
import { PipelineBindPoint } from "../enum.ts";
import { SubpassDescriptionFlags } from "../def.ts";

export interface InitSubpassDescription {
  flags?: SubpassDescriptionFlags;
  pipelineBindPoint?: PipelineBindPoint;
  inputAttachmentCount?: number;
  pInputAttachments?: AnyPointer;
  colorAttachmentCount?: number;
  pColorAttachments?: AnyPointer;
  pResolveAttachments?: AnyPointer;
  pDepthStencilAttachment?: AnyPointer;
  preserveAttachmentCount?: number;
  pPreserveAttachments?: AnyPointer;
}

export class SubpassDescription implements BaseStruct {
  static size = 72;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSubpassDescription);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSubpassDescription) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SubpassDescription.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SubpassDescription.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SubpassDescription.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.pipelineBindPoint !== undefined) this.pipelineBindPoint = data.pipelineBindPoint;
      if (data.inputAttachmentCount !== undefined) this.inputAttachmentCount = data.inputAttachmentCount;
      if (data.pInputAttachments !== undefined) this.pInputAttachments = data.pInputAttachments;
      if (data.colorAttachmentCount !== undefined) this.colorAttachmentCount = data.colorAttachmentCount;
      if (data.pColorAttachments !== undefined) this.pColorAttachments = data.pColorAttachments;
      if (data.pResolveAttachments !== undefined) this.pResolveAttachments = data.pResolveAttachments;
      if (data.pDepthStencilAttachment !== undefined) this.pDepthStencilAttachment = data.pDepthStencilAttachment;
      if (data.preserveAttachmentCount !== undefined) this.preserveAttachmentCount = data.preserveAttachmentCount;
      if (data.pPreserveAttachments !== undefined) this.pPreserveAttachments = data.pPreserveAttachments;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SubpassDescription.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags() {
    return this.#view.getUint32(0, LE);
  }

  set flags(value: SubpassDescriptionFlags) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pipelineBindPoint() {
    return this.#view.getUint32(4, LE);
  }

  set pipelineBindPoint(value: PipelineBindPoint) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get inputAttachmentCount() {
    return this.#view.getUint32(8, LE);
  }

  set inputAttachmentCount(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get pInputAttachments() {
    return pointerFromView(this.#view, 16, LE);
  }

  set pInputAttachments(value: AnyPointer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get colorAttachmentCount() {
    return this.#view.getUint32(24, LE);
  }

  set colorAttachmentCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pColorAttachments() {
    return pointerFromView(this.#view, 32, LE);
  }

  set pColorAttachments(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get pResolveAttachments() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pResolveAttachments(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get pDepthStencilAttachment() {
    return pointerFromView(this.#view, 48, LE);
  }

  set pDepthStencilAttachment(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }

  get preserveAttachmentCount() {
    return this.#view.getUint32(56, LE);
  }

  set preserveAttachmentCount(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get pPreserveAttachments() {
    return pointerFromView(this.#view, 64, LE);
  }

  set pPreserveAttachments(value: AnyPointer) {
    this.#view.setBigUint64(64, BigInt(anyPointer(value)), LE);
  }
}