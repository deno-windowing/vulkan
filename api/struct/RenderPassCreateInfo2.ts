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
import {AttachmentDescription2} from "./AttachmentDescription2.ts";
import {SubpassDescription2} from "./SubpassDescription2.ts";
import {SubpassDependency2} from "./SubpassDependency2.ts";
import { StructureType } from "../enum.ts";
import { RenderPassCreateFlags } from "../def.ts";

export interface InitRenderPassCreateInfo2 {
  pNext?: AnyPointer;
  flags?: RenderPassCreateFlags;
  attachmentCount?: number;
  pAttachments?: AnyPointer;
  subpassCount?: number;
  pSubpasses?: AnyPointer;
  dependencyCount?: number;
  pDependencies?: AnyPointer;
  correlatedViewMaskCount?: number;
  pCorrelatedViewMasks?: AnyPointer;
}

export class RenderPassCreateInfo2 implements BaseStruct {
  static size = 80;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitRenderPassCreateInfo2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitRenderPassCreateInfo2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(RenderPassCreateInfo2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < RenderPassCreateInfo2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(RenderPassCreateInfo2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.attachmentCount !== undefined) this.attachmentCount = data.attachmentCount;
      if (data.pAttachments !== undefined) this.pAttachments = data.pAttachments;
      if (data.subpassCount !== undefined) this.subpassCount = data.subpassCount;
      if (data.pSubpasses !== undefined) this.pSubpasses = data.pSubpasses;
      if (data.dependencyCount !== undefined) this.dependencyCount = data.dependencyCount;
      if (data.pDependencies !== undefined) this.pDependencies = data.pDependencies;
      if (data.correlatedViewMaskCount !== undefined) this.correlatedViewMaskCount = data.correlatedViewMaskCount;
      if (data.pCorrelatedViewMasks !== undefined) this.pCorrelatedViewMasks = data.pCorrelatedViewMasks;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, RenderPassCreateInfo2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.RENDER_PASS_CREATE_INFO_2;
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

  set flags(value: RenderPassCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get attachmentCount(): number {
    return this.#view.getUint32(20, LE);
  }

  set attachmentCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pAttachments(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pAttachments(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get subpassCount(): number {
    return this.#view.getUint32(32, LE);
  }

  set subpassCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pSubpasses(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set pSubpasses(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get dependencyCount(): number {
    return this.#view.getUint32(48, LE);
  }

  set dependencyCount(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get pDependencies(): Deno.PointerValue {
    return pointerFromView(this.#view, 56, LE);
  }

  set pDependencies(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }

  get correlatedViewMaskCount(): number {
    return this.#view.getUint32(64, LE);
  }

  set correlatedViewMaskCount(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get pCorrelatedViewMasks(): Deno.PointerValue {
    return pointerFromView(this.#view, 72, LE);
  }

  set pCorrelatedViewMasks(value: AnyPointer) {
    this.#view.setBigUint64(72, BigInt(anyPointer(value)), LE);
  }
}