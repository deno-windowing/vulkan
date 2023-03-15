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
import { StructureType } from "../enum.ts";
import { RenderPass, Framebuffer } from "../def.ts";
import { ClearValue } from "../union.ts";

export interface InitRenderPassBeginInfo {
  pNext?: AnyPointer;
  renderPass?: RenderPass;
  framebuffer?: Framebuffer;
  renderArea?: Rect2D;
  clearValueCount?: number;
  pClearValues?: AnyPointer;
}

export class RenderPassBeginInfo implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitRenderPassBeginInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitRenderPassBeginInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(RenderPassBeginInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < RenderPassBeginInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(RenderPassBeginInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.renderPass !== undefined) this.renderPass = data.renderPass;
      if (data.framebuffer !== undefined) this.framebuffer = data.framebuffer;
      if (data.renderArea !== undefined) this.renderArea = data.renderArea;
      if (data.clearValueCount !== undefined) this.clearValueCount = data.clearValueCount;
      if (data.pClearValues !== undefined) this.pClearValues = data.pClearValues;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, RenderPassBeginInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.RENDER_PASS_BEGIN_INFO;
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

  get renderPass() {
    return pointerFromView(this.#view, 16, LE);
  }

  set renderPass(value: RenderPass) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get framebuffer() {
    return pointerFromView(this.#view, 24, LE);
  }

  set framebuffer(value: Framebuffer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get renderArea() {
    return new Rect2D(this.#data.subarray(32, 32 + Rect2D.size));
  }

  set renderArea(value: Rect2D) {
    if (value[BUFFER].byteLength < Rect2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 32);
  }

  get clearValueCount() {
    return this.#view.getUint32(48, LE);
  }

  set clearValueCount(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get pClearValues() {
    return pointerFromView(this.#view, 56, LE);
  }

  set pClearValues(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }
}