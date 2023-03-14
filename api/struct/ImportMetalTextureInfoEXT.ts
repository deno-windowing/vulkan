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
import { StructureType, ImageAspectFlagBits } from "../enum.ts";
import { MTLTexture_id } from "../def.ts";

export interface InitImportMetalTextureInfoEXT {
  pNext?: AnyPointer;
  plane?: ImageAspectFlagBits;
  mtlTexture?: MTLTexture_id;
}

export class ImportMetalTextureInfoEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImportMetalTextureInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImportMetalTextureInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImportMetalTextureInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImportMetalTextureInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImportMetalTextureInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.plane !== undefined) this.plane = data.plane;
      if (data.mtlTexture !== undefined) this.mtlTexture = data.mtlTexture;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImportMetalTextureInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IMPORT_METAL_TEXTURE_INFO_EXT;
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

  get plane() {
    return this.#view.getUint32(16, LE);
  }

  set plane(value: ImageAspectFlagBits) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get mtlTexture() {
    return pointerFromView(this.#view, 24, LE);
  }

  set mtlTexture(value: MTLTexture_id) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}