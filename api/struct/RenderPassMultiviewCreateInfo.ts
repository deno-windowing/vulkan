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
import { StructureType } from "../enum.ts";

export interface InitRenderPassMultiviewCreateInfo {
  pNext?: AnyPointer;
  subpassCount?: number;
  pViewMasks?: AnyPointer;
  dependencyCount?: number;
  pViewOffsets?: AnyPointer;
  correlationMaskCount?: number;
  pCorrelationMasks?: AnyPointer;
}

export class RenderPassMultiviewCreateInfo implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitRenderPassMultiviewCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitRenderPassMultiviewCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(RenderPassMultiviewCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < RenderPassMultiviewCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(RenderPassMultiviewCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.subpassCount !== undefined) this.subpassCount = data.subpassCount;
      if (data.pViewMasks !== undefined) this.pViewMasks = data.pViewMasks;
      if (data.dependencyCount !== undefined) this.dependencyCount = data.dependencyCount;
      if (data.pViewOffsets !== undefined) this.pViewOffsets = data.pViewOffsets;
      if (data.correlationMaskCount !== undefined) this.correlationMaskCount = data.correlationMaskCount;
      if (data.pCorrelationMasks !== undefined) this.pCorrelationMasks = data.pCorrelationMasks;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, RenderPassMultiviewCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.RENDER_PASS_MULTIVIEW_CREATE_INFO;
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

  get subpassCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set subpassCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pViewMasks(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pViewMasks(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get dependencyCount(): number {
    return this.#view.getUint32(32, LE);
  }

  set dependencyCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pViewOffsets(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set pViewOffsets(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get correlationMaskCount(): number {
    return this.#view.getUint32(48, LE);
  }

  set correlationMaskCount(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get pCorrelationMasks(): Deno.PointerValue {
    return pointerFromView(this.#view, 56, LE);
  }

  set pCorrelationMasks(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }
}