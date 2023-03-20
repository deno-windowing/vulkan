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
import {Rect2D} from "./Rect2D.ts";
import {RenderingAttachmentInfo} from "./RenderingAttachmentInfo.ts";
import { StructureType } from "../enum.ts";
import { RenderingFlags } from "../def.ts";

export interface InitRenderingInfo {
  pNext?: AnyPointer;
  flags?: RenderingFlags;
  renderArea?: Rect2D;
  layerCount?: number;
  viewMask?: number;
  colorAttachmentCount?: number;
  pColorAttachments?: AnyPointer;
  pDepthAttachment?: AnyPointer;
  pStencilAttachment?: AnyPointer;
}

export class RenderingInfo implements BaseStruct {
  static size = 72;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitRenderingInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitRenderingInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(RenderingInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < RenderingInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(RenderingInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.renderArea !== undefined) this.renderArea = data.renderArea;
      if (data.layerCount !== undefined) this.layerCount = data.layerCount;
      if (data.viewMask !== undefined) this.viewMask = data.viewMask;
      if (data.colorAttachmentCount !== undefined) this.colorAttachmentCount = data.colorAttachmentCount;
      if (data.pColorAttachments !== undefined) this.pColorAttachments = data.pColorAttachments;
      if (data.pDepthAttachment !== undefined) this.pDepthAttachment = data.pDepthAttachment;
      if (data.pStencilAttachment !== undefined) this.pStencilAttachment = data.pStencilAttachment;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, RenderingInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.RENDERING_INFO;
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

  set flags(value: RenderingFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get renderArea(): Rect2D {
    return new Rect2D(this.#data.subarray(20, 20 + Rect2D.size));
  }

  set renderArea(value: Rect2D) {
    if (value[BUFFER].byteLength < Rect2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 20);
  }

  get layerCount(): number {
    return this.#view.getUint32(36, LE);
  }

  set layerCount(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get viewMask(): number {
    return this.#view.getUint32(40, LE);
  }

  set viewMask(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get colorAttachmentCount(): number {
    return this.#view.getUint32(44, LE);
  }

  set colorAttachmentCount(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get pColorAttachments(): Deno.PointerValue {
    return pointerFromView(this.#view, 48, LE);
  }

  set pColorAttachments(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }

  get pDepthAttachment(): Deno.PointerValue {
    return pointerFromView(this.#view, 56, LE);
  }

  set pDepthAttachment(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }

  get pStencilAttachment(): Deno.PointerValue {
    return pointerFromView(this.#view, 64, LE);
  }

  set pStencilAttachment(value: AnyPointer) {
    this.#view.setBigUint64(64, BigInt(anyPointer(value)), LE);
  }
}