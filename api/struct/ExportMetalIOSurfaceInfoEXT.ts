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
import { Image, IOSurfaceRef } from "../def.ts";

export interface InitExportMetalIOSurfaceInfoEXT {
  pNext?: AnyPointer;
  image?: Image;
  ioSurface?: IOSurfaceRef;
}

export class ExportMetalIOSurfaceInfoEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitExportMetalIOSurfaceInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitExportMetalIOSurfaceInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ExportMetalIOSurfaceInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ExportMetalIOSurfaceInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ExportMetalIOSurfaceInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.image !== undefined) this.image = data.image;
      if (data.ioSurface !== undefined) this.ioSurface = data.ioSurface;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ExportMetalIOSurfaceInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.EXPORT_METAL_IO_SURFACE_INFO_EXT;
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

  get image() {
    return pointerFromView(this.#view, 16, LE);
  }

  set image(value: Image) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get ioSurface() {
    return pointerFromView(this.#view, 24, LE);
  }

  set ioSurface(value: IOSurfaceRef) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}