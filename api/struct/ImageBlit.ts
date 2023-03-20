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
import {ImageSubresourceLayers} from "./ImageSubresourceLayers.ts";
import {Offset3D} from "./Offset3D.ts";

export interface InitImageBlit {
  srcSubresource?: ImageSubresourceLayers;
  srcOffsets?: Offset3D[];
  dstSubresource?: ImageSubresourceLayers;
  dstOffsets?: Offset3D[];
}

export class ImageBlit implements BaseStruct {
  static size = 80;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageBlit);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageBlit) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageBlit.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageBlit.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageBlit.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.srcSubresource !== undefined) this.srcSubresource = data.srcSubresource;
      if (data.srcOffsets !== undefined) this.srcOffsets = data.srcOffsets;
      if (data.dstSubresource !== undefined) this.dstSubresource = data.dstSubresource;
      if (data.dstOffsets !== undefined) this.dstOffsets = data.dstOffsets;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageBlit.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get srcSubresource(): ImageSubresourceLayers {
    return new ImageSubresourceLayers(this.#data.subarray(0, 0 + ImageSubresourceLayers.size));
  }

  set srcSubresource(value: ImageSubresourceLayers) {
    if (value[BUFFER].byteLength < ImageSubresourceLayers.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get srcOffsets(): Offset3D[] {
    const result: Offset3D[] = [];
    for (let i = 0; i < 2; i++) {
      result.push((() => {
        return new Offset3D(this.#data.subarray(16 + i * 12, 16 + i * 12 + Offset3D.size));
      })());
    }
    return result;
  }

  set srcOffsets(value: Offset3D[]) {
    for (let i = 0; i < value.length; i++) {
      if (value[i][BUFFER].byteLength < Offset3D.size) {
        throw new Error("Data buffer too small");
      }
      this.#data.set(value[i][BUFFER], 16 + i * 12);
    }
  }

  get dstSubresource(): ImageSubresourceLayers {
    return new ImageSubresourceLayers(this.#data.subarray(40, 40 + ImageSubresourceLayers.size));
  }

  set dstSubresource(value: ImageSubresourceLayers) {
    if (value[BUFFER].byteLength < ImageSubresourceLayers.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 40);
  }

  get dstOffsets(): Offset3D[] {
    const result: Offset3D[] = [];
    for (let i = 0; i < 2; i++) {
      result.push((() => {
        return new Offset3D(this.#data.subarray(56 + i * 12, 56 + i * 12 + Offset3D.size));
      })());
    }
    return result;
  }

  set dstOffsets(value: Offset3D[]) {
    for (let i = 0; i < value.length; i++) {
      if (value[i][BUFFER].byteLength < Offset3D.size) {
        throw new Error("Data buffer too small");
      }
      this.#data.set(value[i][BUFFER], 56 + i * 12);
    }
  }
}