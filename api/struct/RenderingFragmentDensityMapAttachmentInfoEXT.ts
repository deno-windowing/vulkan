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
import { StructureType, ImageLayout } from "../enum.ts";
import { ImageView } from "../def.ts";

export interface InitRenderingFragmentDensityMapAttachmentInfoEXT {
  pNext?: AnyPointer;
  imageView?: ImageView;
  imageLayout?: ImageLayout;
}

export class RenderingFragmentDensityMapAttachmentInfoEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitRenderingFragmentDensityMapAttachmentInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitRenderingFragmentDensityMapAttachmentInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(RenderingFragmentDensityMapAttachmentInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < RenderingFragmentDensityMapAttachmentInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(RenderingFragmentDensityMapAttachmentInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.imageView !== undefined) this.imageView = data.imageView;
      if (data.imageLayout !== undefined) this.imageLayout = data.imageLayout;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, RenderingFragmentDensityMapAttachmentInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.RENDERING_FRAGMENT_DENSITY_MAP_ATTACHMENT_INFO_EXT;
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

  get imageView(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set imageView(value: ImageView) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get imageLayout(): number {
    return this.#view.getUint32(24, LE);
  }

  set imageLayout(value: ImageLayout) {
    this.#view.setUint32(24, Number(value), LE);
  }
}