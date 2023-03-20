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
import {Extent2D} from "./Extent2D.ts";
import { StructureType, SurfaceTransformFlagBitsKHR, DisplayPlaneAlphaFlagBitsKHR } from "../enum.ts";
import { DisplaySurfaceCreateFlagsKHR, DisplayModeKHR } from "../def.ts";

export interface InitDisplaySurfaceCreateInfoKHR {
  pNext?: AnyPointer;
  flags?: DisplaySurfaceCreateFlagsKHR;
  displayMode?: DisplayModeKHR;
  planeIndex?: number;
  planeStackIndex?: number;
  transform?: SurfaceTransformFlagBitsKHR;
  globalAlpha?: number;
  alphaMode?: DisplayPlaneAlphaFlagBitsKHR;
  imageExtent?: Extent2D;
}

export class DisplaySurfaceCreateInfoKHR implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDisplaySurfaceCreateInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDisplaySurfaceCreateInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DisplaySurfaceCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DisplaySurfaceCreateInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DisplaySurfaceCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.displayMode !== undefined) this.displayMode = data.displayMode;
      if (data.planeIndex !== undefined) this.planeIndex = data.planeIndex;
      if (data.planeStackIndex !== undefined) this.planeStackIndex = data.planeStackIndex;
      if (data.transform !== undefined) this.transform = data.transform;
      if (data.globalAlpha !== undefined) this.globalAlpha = data.globalAlpha;
      if (data.alphaMode !== undefined) this.alphaMode = data.alphaMode;
      if (data.imageExtent !== undefined) this.imageExtent = data.imageExtent;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DisplaySurfaceCreateInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DISPLAY_SURFACE_CREATE_INFO_KHR;
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

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: DisplaySurfaceCreateFlagsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get displayMode(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set displayMode(value: DisplayModeKHR) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get planeIndex(): number {
    return this.#view.getUint32(32, LE);
  }

  set planeIndex(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get planeStackIndex(): number {
    return this.#view.getUint32(36, LE);
  }

  set planeStackIndex(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get transform(): number {
    return this.#view.getUint32(40, LE);
  }

  set transform(value: SurfaceTransformFlagBitsKHR) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get globalAlpha(): number {
    return this.#view.getFloat32(44, LE);
  }

  set globalAlpha(value: number) {
    this.#view.setFloat32(44, Number(value), LE);
  }

  get alphaMode(): number {
    return this.#view.getUint32(48, LE);
  }

  set alphaMode(value: DisplayPlaneAlphaFlagBitsKHR) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get imageExtent(): Extent2D {
    return new Extent2D(this.#data.subarray(52, 52 + Extent2D.size));
  }

  set imageExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 52);
  }
}