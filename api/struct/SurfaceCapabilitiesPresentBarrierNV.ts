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
import { Bool32 } from "../def.ts";

export interface InitSurfaceCapabilitiesPresentBarrierNV {
  pNext?: AnyPointer;
  presentBarrierSupported?: Bool32;
}

export class SurfaceCapabilitiesPresentBarrierNV implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSurfaceCapabilitiesPresentBarrierNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSurfaceCapabilitiesPresentBarrierNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SurfaceCapabilitiesPresentBarrierNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SurfaceCapabilitiesPresentBarrierNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SurfaceCapabilitiesPresentBarrierNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.presentBarrierSupported !== undefined) this.presentBarrierSupported = data.presentBarrierSupported;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SurfaceCapabilitiesPresentBarrierNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SURFACE_CAPABILITIES_PRESENT_BARRIER_NV;
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

  get presentBarrierSupported() {
    return this.#view.getUint32(16, LE);
  }

  set presentBarrierSupported(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }
}