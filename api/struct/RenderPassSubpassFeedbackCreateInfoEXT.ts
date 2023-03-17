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
import {RenderPassSubpassFeedbackInfoEXT} from "./RenderPassSubpassFeedbackInfoEXT.ts";
import { StructureType } from "../enum.ts";

export interface InitRenderPassSubpassFeedbackCreateInfoEXT {
  pNext?: AnyPointer;
  pSubpassFeedback?: AnyPointer;
}

export class RenderPassSubpassFeedbackCreateInfoEXT implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitRenderPassSubpassFeedbackCreateInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitRenderPassSubpassFeedbackCreateInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(RenderPassSubpassFeedbackCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < RenderPassSubpassFeedbackCreateInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(RenderPassSubpassFeedbackCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.pSubpassFeedback !== undefined) this.pSubpassFeedback = data.pSubpassFeedback;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, RenderPassSubpassFeedbackCreateInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.RENDER_PASS_SUBPASS_FEEDBACK_CREATE_INFO_EXT;
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

  get pSubpassFeedback(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set pSubpassFeedback(value: AnyPointer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }
}