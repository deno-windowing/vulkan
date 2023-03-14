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
import { SubpassMergeStatusEXT } from "../enum.ts";

export interface InitRenderPassSubpassFeedbackInfoEXT {
  subpassMergeStatus?: SubpassMergeStatusEXT;
  description?: Uint8Array;
  postMergeIndex?: number;
}

export class RenderPassSubpassFeedbackInfoEXT implements BaseStruct {
  static size = 264;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitRenderPassSubpassFeedbackInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitRenderPassSubpassFeedbackInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(RenderPassSubpassFeedbackInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < RenderPassSubpassFeedbackInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(RenderPassSubpassFeedbackInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.subpassMergeStatus !== undefined) this.subpassMergeStatus = data.subpassMergeStatus;
      if (data.description !== undefined) this.description = data.description;
      if (data.postMergeIndex !== undefined) this.postMergeIndex = data.postMergeIndex;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, RenderPassSubpassFeedbackInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get subpassMergeStatus() {
    return this.#view.getUint32(0, LE);
  }

  set subpassMergeStatus(value: SubpassMergeStatusEXT) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get description() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 4, 256);
  }

  set description(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 4);
  }

  get postMergeIndex() {
    return this.#view.getUint32(260, LE);
  }

  set postMergeIndex(value: number) {
    this.#view.setUint32(260, Number(value), LE);
  }
}