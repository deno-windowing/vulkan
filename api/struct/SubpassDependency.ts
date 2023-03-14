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
import { PipelineStageFlags, AccessFlags, DependencyFlags } from "../def.ts";

export interface InitSubpassDependency {
  srcSubpass?: number;
  dstSubpass?: number;
  srcStageMask?: PipelineStageFlags;
  dstStageMask?: PipelineStageFlags;
  srcAccessMask?: AccessFlags;
  dstAccessMask?: AccessFlags;
  dependencyFlags?: DependencyFlags;
}

export class SubpassDependency implements BaseStruct {
  static size = 28;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSubpassDependency);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSubpassDependency) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SubpassDependency.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SubpassDependency.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SubpassDependency.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.srcSubpass !== undefined) this.srcSubpass = data.srcSubpass;
      if (data.dstSubpass !== undefined) this.dstSubpass = data.dstSubpass;
      if (data.srcStageMask !== undefined) this.srcStageMask = data.srcStageMask;
      if (data.dstStageMask !== undefined) this.dstStageMask = data.dstStageMask;
      if (data.srcAccessMask !== undefined) this.srcAccessMask = data.srcAccessMask;
      if (data.dstAccessMask !== undefined) this.dstAccessMask = data.dstAccessMask;
      if (data.dependencyFlags !== undefined) this.dependencyFlags = data.dependencyFlags;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SubpassDependency.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get srcSubpass() {
    return this.#view.getUint32(0, LE);
  }

  set srcSubpass(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get dstSubpass() {
    return this.#view.getUint32(4, LE);
  }

  set dstSubpass(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get srcStageMask() {
    return this.#view.getUint32(8, LE);
  }

  set srcStageMask(value: PipelineStageFlags) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get dstStageMask() {
    return this.#view.getUint32(12, LE);
  }

  set dstStageMask(value: PipelineStageFlags) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get srcAccessMask() {
    return this.#view.getUint32(16, LE);
  }

  set srcAccessMask(value: AccessFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get dstAccessMask() {
    return this.#view.getUint32(20, LE);
  }

  set dstAccessMask(value: AccessFlags) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get dependencyFlags() {
    return this.#view.getUint32(24, LE);
  }

  set dependencyFlags(value: DependencyFlags) {
    this.#view.setUint32(24, Number(value), LE);
  }
}