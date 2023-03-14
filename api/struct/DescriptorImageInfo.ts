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
import { ImageLayout } from "../enum.ts";
import { Sampler, ImageView } from "../def.ts";

export interface InitDescriptorImageInfo {
  sampler?: Sampler;
  imageView?: ImageView;
  imageLayout?: ImageLayout;
}

export class DescriptorImageInfo implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDescriptorImageInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDescriptorImageInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DescriptorImageInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DescriptorImageInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DescriptorImageInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.sampler !== undefined) this.sampler = data.sampler;
      if (data.imageView !== undefined) this.imageView = data.imageView;
      if (data.imageLayout !== undefined) this.imageLayout = data.imageLayout;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DescriptorImageInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get sampler() {
    return pointerFromView(this.#view, 0, LE);
  }

  set sampler(value: Sampler) {
    this.#view.setBigUint64(0, BigInt(anyPointer(value)), LE);
  }

  get imageView() {
    return pointerFromView(this.#view, 8, LE);
  }

  set imageView(value: ImageView) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }

  get imageLayout() {
    return this.#view.getUint32(16, LE);
  }

  set imageLayout(value: ImageLayout) {
    this.#view.setUint32(16, Number(value), LE);
  }
}