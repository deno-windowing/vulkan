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
import {AttachmentReference2} from "./AttachmentReference2.ts";
import { StructureType, PipelineBindPoint } from "../enum.ts";
import { SubpassDescriptionFlags } from "../def.ts";

export interface InitSubpassDescription2 {
  pNext?: AnyPointer;
  flags?: SubpassDescriptionFlags;
  pipelineBindPoint?: PipelineBindPoint;
  viewMask?: number;
  inputAttachmentCount?: number;
  pInputAttachments?: AnyPointer;
  colorAttachmentCount?: number;
  pColorAttachments?: AnyPointer;
  pResolveAttachments?: AnyPointer;
  pDepthStencilAttachment?: AnyPointer;
  preserveAttachmentCount?: number;
  pPreserveAttachments?: AnyPointer;
}

export class SubpassDescription2 implements BaseStruct {
  static size = 88;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSubpassDescription2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSubpassDescription2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SubpassDescription2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SubpassDescription2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SubpassDescription2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.pipelineBindPoint !== undefined) this.pipelineBindPoint = data.pipelineBindPoint;
      if (data.viewMask !== undefined) this.viewMask = data.viewMask;
      if (data.inputAttachmentCount !== undefined) this.inputAttachmentCount = data.inputAttachmentCount;
      if (data.pInputAttachments !== undefined) this.pInputAttachments = data.pInputAttachments;
      if (data.colorAttachmentCount !== undefined) this.colorAttachmentCount = data.colorAttachmentCount;
      if (data.pColorAttachments !== undefined) this.pColorAttachments = data.pColorAttachments;
      if (data.pResolveAttachments !== undefined) this.pResolveAttachments = data.pResolveAttachments;
      if (data.pDepthStencilAttachment !== undefined) this.pDepthStencilAttachment = data.pDepthStencilAttachment;
      if (data.preserveAttachmentCount !== undefined) this.preserveAttachmentCount = data.preserveAttachmentCount;
      if (data.pPreserveAttachments !== undefined) this.pPreserveAttachments = data.pPreserveAttachments;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SubpassDescription2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SUBPASS_DESCRIPTION_2;
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

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: SubpassDescriptionFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pipelineBindPoint(): number {
    return this.#view.getUint32(20, LE);
  }

  set pipelineBindPoint(value: PipelineBindPoint) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get viewMask(): number {
    return this.#view.getUint32(24, LE);
  }

  set viewMask(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get inputAttachmentCount(): number {
    return this.#view.getUint32(28, LE);
  }

  set inputAttachmentCount(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get pInputAttachments(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pInputAttachments(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get colorAttachmentCount(): number {
    return this.#view.getUint32(40, LE);
  }

  set colorAttachmentCount(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get pColorAttachments(): Deno.PointerValue {
    return pointerFromView(this.#view, 48, LE);
  }

  set pColorAttachments(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }

  get pResolveAttachments(): Deno.PointerValue {
    return pointerFromView(this.#view, 56, LE);
  }

  set pResolveAttachments(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }

  get pDepthStencilAttachment(): Deno.PointerValue {
    return pointerFromView(this.#view, 64, LE);
  }

  set pDepthStencilAttachment(value: AnyPointer) {
    this.#view.setBigUint64(64, BigInt(anyPointer(value)), LE);
  }

  get preserveAttachmentCount(): number {
    return this.#view.getUint32(72, LE);
  }

  set preserveAttachmentCount(value: number) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get pPreserveAttachments(): Deno.PointerValue {
    return pointerFromView(this.#view, 80, LE);
  }

  set pPreserveAttachments(value: AnyPointer) {
    this.#view.setBigUint64(80, BigInt(anyPointer(value)), LE);
  }
}