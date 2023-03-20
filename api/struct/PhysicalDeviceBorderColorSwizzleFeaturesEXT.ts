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

export interface InitPhysicalDeviceBorderColorSwizzleFeaturesEXT {
  pNext?: AnyPointer;
  borderColorSwizzle?: Bool32;
  borderColorSwizzleFromImage?: Bool32;
}

export class PhysicalDeviceBorderColorSwizzleFeaturesEXT implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceBorderColorSwizzleFeaturesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceBorderColorSwizzleFeaturesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceBorderColorSwizzleFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceBorderColorSwizzleFeaturesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceBorderColorSwizzleFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.borderColorSwizzle !== undefined) this.borderColorSwizzle = data.borderColorSwizzle;
      if (data.borderColorSwizzleFromImage !== undefined) this.borderColorSwizzleFromImage = data.borderColorSwizzleFromImage;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceBorderColorSwizzleFeaturesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_BORDER_COLOR_SWIZZLE_FEATURES_EXT;
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

  get borderColorSwizzle(): number {
    return this.#view.getUint32(16, LE);
  }

  set borderColorSwizzle(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get borderColorSwizzleFromImage(): number {
    return this.#view.getUint32(20, LE);
  }

  set borderColorSwizzleFromImage(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }
}