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
import { StructureType, ResolveModeFlagBits } from "../enum.ts";

export interface InitSubpassDescriptionDepthStencilResolve {
  pNext?: AnyPointer;
  depthResolveMode?: ResolveModeFlagBits;
  stencilResolveMode?: ResolveModeFlagBits;
  pDepthStencilResolveAttachment?: AnyPointer;
}

export class SubpassDescriptionDepthStencilResolve implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSubpassDescriptionDepthStencilResolve);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSubpassDescriptionDepthStencilResolve) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SubpassDescriptionDepthStencilResolve.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SubpassDescriptionDepthStencilResolve.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SubpassDescriptionDepthStencilResolve.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.depthResolveMode !== undefined) this.depthResolveMode = data.depthResolveMode;
      if (data.stencilResolveMode !== undefined) this.stencilResolveMode = data.stencilResolveMode;
      if (data.pDepthStencilResolveAttachment !== undefined) this.pDepthStencilResolveAttachment = data.pDepthStencilResolveAttachment;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SubpassDescriptionDepthStencilResolve.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SUBPASS_DESCRIPTION_DEPTH_STENCIL_RESOLVE;
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

  get depthResolveMode(): number {
    return this.#view.getUint32(16, LE);
  }

  set depthResolveMode(value: ResolveModeFlagBits) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get stencilResolveMode(): number {
    return this.#view.getUint32(20, LE);
  }

  set stencilResolveMode(value: ResolveModeFlagBits) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pDepthStencilResolveAttachment(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pDepthStencilResolveAttachment(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}