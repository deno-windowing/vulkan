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
import { DisplayKHR, SurfaceTransformFlagsKHR, Bool32 } from "../def.ts";

export interface InitDisplayPropertiesKHR {
  display?: DisplayKHR;
  displayName?: AnyPointer;
  physicalDimensions?: Extent2D;
  physicalResolution?: Extent2D;
  supportedTransforms?: SurfaceTransformFlagsKHR;
  planeReorderPossible?: Bool32;
  persistentContent?: Bool32;
}

export class DisplayPropertiesKHR implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDisplayPropertiesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDisplayPropertiesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DisplayPropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DisplayPropertiesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DisplayPropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.display !== undefined) this.display = data.display;
      if (data.displayName !== undefined) this.displayName = data.displayName;
      if (data.physicalDimensions !== undefined) this.physicalDimensions = data.physicalDimensions;
      if (data.physicalResolution !== undefined) this.physicalResolution = data.physicalResolution;
      if (data.supportedTransforms !== undefined) this.supportedTransforms = data.supportedTransforms;
      if (data.planeReorderPossible !== undefined) this.planeReorderPossible = data.planeReorderPossible;
      if (data.persistentContent !== undefined) this.persistentContent = data.persistentContent;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DisplayPropertiesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get display(): Deno.PointerValue {
    return pointerFromView(this.#view, 0, LE);
  }

  set display(value: DisplayKHR) {
    this.#view.setBigUint64(0, BigInt(anyPointer(value)), LE);
  }

  get displayName(): Deno.PointerValue {
    return pointerFromView(this.#view, 8, LE);
  }

  set displayName(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }

  get physicalDimensions(): Extent2D {
    return new Extent2D(this.#data.subarray(16, 16 + Extent2D.size));
  }

  set physicalDimensions(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get physicalResolution(): Extent2D {
    return new Extent2D(this.#data.subarray(24, 24 + Extent2D.size));
  }

  set physicalResolution(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 24);
  }

  get supportedTransforms(): number {
    return this.#view.getUint32(32, LE);
  }

  set supportedTransforms(value: SurfaceTransformFlagsKHR) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get planeReorderPossible(): number {
    return this.#view.getUint32(36, LE);
  }

  set planeReorderPossible(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get persistentContent(): number {
    return this.#view.getUint32(40, LE);
  }

  set persistentContent(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }
}