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
import { PipelineStageFlags, AccessFlags, DependencyFlags } from "../def.ts";

export interface InitSubpassDependency2 {
  pNext?: AnyPointer;
  srcSubpass?: number;
  dstSubpass?: number;
  srcStageMask?: PipelineStageFlags;
  dstStageMask?: PipelineStageFlags;
  srcAccessMask?: AccessFlags;
  dstAccessMask?: AccessFlags;
  dependencyFlags?: DependencyFlags;
  viewOffset?: number;
}

export class SubpassDependency2 implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSubpassDependency2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSubpassDependency2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SubpassDependency2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SubpassDependency2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SubpassDependency2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.srcSubpass !== undefined) this.srcSubpass = data.srcSubpass;
      if (data.dstSubpass !== undefined) this.dstSubpass = data.dstSubpass;
      if (data.srcStageMask !== undefined) this.srcStageMask = data.srcStageMask;
      if (data.dstStageMask !== undefined) this.dstStageMask = data.dstStageMask;
      if (data.srcAccessMask !== undefined) this.srcAccessMask = data.srcAccessMask;
      if (data.dstAccessMask !== undefined) this.dstAccessMask = data.dstAccessMask;
      if (data.dependencyFlags !== undefined) this.dependencyFlags = data.dependencyFlags;
      if (data.viewOffset !== undefined) this.viewOffset = data.viewOffset;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SubpassDependency2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SUBPASS_DEPENDENCY_2;
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

  get srcSubpass() {
    return this.#view.getUint32(16, LE);
  }

  set srcSubpass(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get dstSubpass() {
    return this.#view.getUint32(20, LE);
  }

  set dstSubpass(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get srcStageMask() {
    return this.#view.getUint32(24, LE);
  }

  set srcStageMask(value: PipelineStageFlags) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get dstStageMask() {
    return this.#view.getUint32(28, LE);
  }

  set dstStageMask(value: PipelineStageFlags) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get srcAccessMask() {
    return this.#view.getUint32(32, LE);
  }

  set srcAccessMask(value: AccessFlags) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get dstAccessMask() {
    return this.#view.getUint32(36, LE);
  }

  set dstAccessMask(value: AccessFlags) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get dependencyFlags() {
    return this.#view.getUint32(40, LE);
  }

  set dependencyFlags(value: DependencyFlags) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get viewOffset() {
    return this.#view.getInt32(44, LE);
  }

  set viewOffset(value: number) {
    this.#view.setInt32(44, Number(value), LE);
  }
}