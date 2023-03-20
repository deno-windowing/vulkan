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
import { StructureType, SampleCountFlagBits } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitMultisampledRenderToSingleSampledInfoEXT {
  pNext?: AnyPointer;
  multisampledRenderToSingleSampledEnable?: Bool32;
  rasterizationSamples?: SampleCountFlagBits;
}

export class MultisampledRenderToSingleSampledInfoEXT implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMultisampledRenderToSingleSampledInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMultisampledRenderToSingleSampledInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MultisampledRenderToSingleSampledInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MultisampledRenderToSingleSampledInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MultisampledRenderToSingleSampledInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.multisampledRenderToSingleSampledEnable !== undefined) this.multisampledRenderToSingleSampledEnable = data.multisampledRenderToSingleSampledEnable;
      if (data.rasterizationSamples !== undefined) this.rasterizationSamples = data.rasterizationSamples;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MultisampledRenderToSingleSampledInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.MULTISAMPLED_RENDER_TO_SINGLE_SAMPLED_INFO_EXT;
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

  get multisampledRenderToSingleSampledEnable(): number {
    return this.#view.getUint32(16, LE);
  }

  set multisampledRenderToSingleSampledEnable(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get rasterizationSamples(): number {
    return this.#view.getUint32(20, LE);
  }

  set rasterizationSamples(value: SampleCountFlagBits) {
    this.#view.setUint32(20, Number(value), LE);
  }
}