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
import { ShadingRatePaletteEntryNV } from "../enum.ts";

export interface InitShadingRatePaletteNV {
  shadingRatePaletteEntryCount?: number;
  pShadingRatePaletteEntries?: AnyPointer;
}

export class ShadingRatePaletteNV implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitShadingRatePaletteNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitShadingRatePaletteNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ShadingRatePaletteNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ShadingRatePaletteNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ShadingRatePaletteNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.shadingRatePaletteEntryCount !== undefined) this.shadingRatePaletteEntryCount = data.shadingRatePaletteEntryCount;
      if (data.pShadingRatePaletteEntries !== undefined) this.pShadingRatePaletteEntries = data.pShadingRatePaletteEntries;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ShadingRatePaletteNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get shadingRatePaletteEntryCount() {
    return this.#view.getUint32(0, LE);
  }

  set shadingRatePaletteEntryCount(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pShadingRatePaletteEntries() {
    return pointerFromView(this.#view, 8, LE);
  }

  set pShadingRatePaletteEntries(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }
}