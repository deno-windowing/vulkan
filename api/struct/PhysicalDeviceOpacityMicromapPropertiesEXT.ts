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

export interface InitPhysicalDeviceOpacityMicromapPropertiesEXT {
  pNext?: AnyPointer;
  maxOpacity2StateSubdivisionLevel?: number;
  maxOpacity4StateSubdivisionLevel?: number;
}

export class PhysicalDeviceOpacityMicromapPropertiesEXT implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceOpacityMicromapPropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceOpacityMicromapPropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceOpacityMicromapPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceOpacityMicromapPropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceOpacityMicromapPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxOpacity2StateSubdivisionLevel !== undefined) this.maxOpacity2StateSubdivisionLevel = data.maxOpacity2StateSubdivisionLevel;
      if (data.maxOpacity4StateSubdivisionLevel !== undefined) this.maxOpacity4StateSubdivisionLevel = data.maxOpacity4StateSubdivisionLevel;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceOpacityMicromapPropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_OPACITY_MICROMAP_PROPERTIES_EXT;
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

  get maxOpacity2StateSubdivisionLevel(): number {
    return this.#view.getUint32(16, LE);
  }

  set maxOpacity2StateSubdivisionLevel(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxOpacity4StateSubdivisionLevel(): number {
    return this.#view.getUint32(20, LE);
  }

  set maxOpacity4StateSubdivisionLevel(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }
}