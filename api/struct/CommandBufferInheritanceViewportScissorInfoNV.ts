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
import {Viewport} from "./Viewport.ts";
import { StructureType } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitCommandBufferInheritanceViewportScissorInfoNV {
  pNext?: AnyPointer;
  viewportScissor2D?: Bool32;
  viewportDepthCount?: number;
  pViewportDepths?: AnyPointer;
}

export class CommandBufferInheritanceViewportScissorInfoNV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCommandBufferInheritanceViewportScissorInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCommandBufferInheritanceViewportScissorInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CommandBufferInheritanceViewportScissorInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CommandBufferInheritanceViewportScissorInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CommandBufferInheritanceViewportScissorInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.viewportScissor2D !== undefined) this.viewportScissor2D = data.viewportScissor2D;
      if (data.viewportDepthCount !== undefined) this.viewportDepthCount = data.viewportDepthCount;
      if (data.pViewportDepths !== undefined) this.pViewportDepths = data.pViewportDepths;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CommandBufferInheritanceViewportScissorInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.COMMAND_BUFFER_INHERITANCE_VIEWPORT_SCISSOR_INFO_NV;
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

  get viewportScissor2D() {
    return this.#view.getUint32(16, LE);
  }

  set viewportScissor2D(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get viewportDepthCount() {
    return this.#view.getUint32(20, LE);
  }

  set viewportDepthCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pViewportDepths() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pViewportDepths(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}