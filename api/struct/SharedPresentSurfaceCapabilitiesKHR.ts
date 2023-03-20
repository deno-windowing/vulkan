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
import { ImageUsageFlags } from "../def.ts";

export interface InitSharedPresentSurfaceCapabilitiesKHR {
  pNext?: AnyPointer;
  sharedPresentSupportedUsageFlags?: ImageUsageFlags;
}

export class SharedPresentSurfaceCapabilitiesKHR implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSharedPresentSurfaceCapabilitiesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSharedPresentSurfaceCapabilitiesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SharedPresentSurfaceCapabilitiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SharedPresentSurfaceCapabilitiesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SharedPresentSurfaceCapabilitiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.sharedPresentSupportedUsageFlags !== undefined) this.sharedPresentSupportedUsageFlags = data.sharedPresentSupportedUsageFlags;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SharedPresentSurfaceCapabilitiesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SHARED_PRESENT_SURFACE_CAPABILITIES_KHR;
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

  get sharedPresentSupportedUsageFlags(): number {
    return this.#view.getUint32(16, LE);
  }

  set sharedPresentSupportedUsageFlags(value: ImageUsageFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }
}