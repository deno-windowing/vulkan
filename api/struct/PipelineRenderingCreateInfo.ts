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
import { StructureType, Format } from "../enum.ts";

export interface InitPipelineRenderingCreateInfo {
  pNext?: AnyPointer;
  viewMask?: number;
  colorAttachmentCount?: number;
  pColorAttachmentFormats?: AnyPointer;
  depthAttachmentFormat?: Format;
  stencilAttachmentFormat?: Format;
}

export class PipelineRenderingCreateInfo implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineRenderingCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineRenderingCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineRenderingCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineRenderingCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineRenderingCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.viewMask !== undefined) this.viewMask = data.viewMask;
      if (data.colorAttachmentCount !== undefined) this.colorAttachmentCount = data.colorAttachmentCount;
      if (data.pColorAttachmentFormats !== undefined) this.pColorAttachmentFormats = data.pColorAttachmentFormats;
      if (data.depthAttachmentFormat !== undefined) this.depthAttachmentFormat = data.depthAttachmentFormat;
      if (data.stencilAttachmentFormat !== undefined) this.stencilAttachmentFormat = data.stencilAttachmentFormat;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineRenderingCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_RENDERING_CREATE_INFO;
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

  get viewMask() {
    return this.#view.getUint32(16, LE);
  }

  set viewMask(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get colorAttachmentCount() {
    return this.#view.getUint32(20, LE);
  }

  set colorAttachmentCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pColorAttachmentFormats() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pColorAttachmentFormats(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get depthAttachmentFormat() {
    return this.#view.getUint32(32, LE);
  }

  set depthAttachmentFormat(value: Format) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get stencilAttachmentFormat() {
    return this.#view.getUint32(36, LE);
  }

  set stencilAttachmentFormat(value: Format) {
    this.#view.setUint32(36, Number(value), LE);
  }
}