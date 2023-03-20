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
import { StructureType, Format, SampleCountFlagBits } from "../enum.ts";
import { RenderingFlags } from "../def.ts";

export interface InitCommandBufferInheritanceRenderingInfo {
  pNext?: AnyPointer;
  flags?: RenderingFlags;
  viewMask?: number;
  colorAttachmentCount?: number;
  pColorAttachmentFormats?: AnyPointer;
  depthAttachmentFormat?: Format;
  stencilAttachmentFormat?: Format;
  rasterizationSamples?: SampleCountFlagBits;
}

export class CommandBufferInheritanceRenderingInfo implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCommandBufferInheritanceRenderingInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCommandBufferInheritanceRenderingInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CommandBufferInheritanceRenderingInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CommandBufferInheritanceRenderingInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CommandBufferInheritanceRenderingInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.viewMask !== undefined) this.viewMask = data.viewMask;
      if (data.colorAttachmentCount !== undefined) this.colorAttachmentCount = data.colorAttachmentCount;
      if (data.pColorAttachmentFormats !== undefined) this.pColorAttachmentFormats = data.pColorAttachmentFormats;
      if (data.depthAttachmentFormat !== undefined) this.depthAttachmentFormat = data.depthAttachmentFormat;
      if (data.stencilAttachmentFormat !== undefined) this.stencilAttachmentFormat = data.stencilAttachmentFormat;
      if (data.rasterizationSamples !== undefined) this.rasterizationSamples = data.rasterizationSamples;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CommandBufferInheritanceRenderingInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.COMMAND_BUFFER_INHERITANCE_RENDERING_INFO;
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

  get viewMask(): number {
    return this.#view.getUint32(20, LE);
  }

  set viewMask(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get colorAttachmentCount(): number {
    return this.#view.getUint32(24, LE);
  }

  set colorAttachmentCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pColorAttachmentFormats(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pColorAttachmentFormats(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get depthAttachmentFormat(): number {
    return this.#view.getUint32(40, LE);
  }

  set depthAttachmentFormat(value: Format) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get stencilAttachmentFormat(): number {
    return this.#view.getUint32(44, LE);
  }

  set stencilAttachmentFormat(value: Format) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get rasterizationSamples(): number {
    return this.#view.getUint32(48, LE);
  }

  set rasterizationSamples(value: SampleCountFlagBits) {
    this.#view.setUint32(48, Number(value), LE);
  }
}