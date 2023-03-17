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
import { FramebufferCreateFlags, RenderPass, ImageView } from "../def.ts";

export interface InitFramebufferCreateInfo {
  pNext?: AnyPointer;
  flags?: FramebufferCreateFlags;
  renderPass?: RenderPass;
  attachmentCount?: number;
  pAttachments?: AnyPointer;
  width?: number;
  height?: number;
  layers?: number;
}

export class FramebufferCreateInfo implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitFramebufferCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitFramebufferCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(FramebufferCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < FramebufferCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(FramebufferCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.renderPass !== undefined) this.renderPass = data.renderPass;
      if (data.attachmentCount !== undefined) this.attachmentCount = data.attachmentCount;
      if (data.pAttachments !== undefined) this.pAttachments = data.pAttachments;
      if (data.width !== undefined) this.width = data.width;
      if (data.height !== undefined) this.height = data.height;
      if (data.layers !== undefined) this.layers = data.layers;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, FramebufferCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.FRAMEBUFFER_CREATE_INFO;
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

  set flags(value: FramebufferCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get renderPass(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set renderPass(value: RenderPass) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get attachmentCount(): number {
    return this.#view.getUint32(32, LE);
  }

  set attachmentCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pAttachments(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set pAttachments(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get width(): number {
    return this.#view.getUint32(48, LE);
  }

  set width(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get height(): number {
    return this.#view.getUint32(52, LE);
  }

  set height(value: number) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get layers(): number {
    return this.#view.getUint32(56, LE);
  }

  set layers(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }
}