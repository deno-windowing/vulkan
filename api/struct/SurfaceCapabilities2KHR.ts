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
import {SurfaceCapabilitiesKHR} from "./SurfaceCapabilitiesKHR.ts";
import { StructureType } from "../enum.ts";

export interface InitSurfaceCapabilities2KHR {
  pNext?: AnyPointer;
  surfaceCapabilities?: SurfaceCapabilitiesKHR;
}

export class SurfaceCapabilities2KHR implements BaseStruct {
  static size = 72;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSurfaceCapabilities2KHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSurfaceCapabilities2KHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SurfaceCapabilities2KHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SurfaceCapabilities2KHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SurfaceCapabilities2KHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.surfaceCapabilities !== undefined) this.surfaceCapabilities = data.surfaceCapabilities;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SurfaceCapabilities2KHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SURFACE_CAPABILITIES_2_KHR;
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

  get surfaceCapabilities() {
    return new SurfaceCapabilitiesKHR(this.#data.subarray(16, 16 + SurfaceCapabilitiesKHR.size));
  }

  set surfaceCapabilities(value: SurfaceCapabilitiesKHR) {
    if (value[BUFFER].byteLength < SurfaceCapabilitiesKHR.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }
}