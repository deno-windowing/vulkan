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

export interface InitPhysicalDeviceCustomBorderColorPropertiesEXT {
  pNext?: AnyPointer;
  maxCustomBorderColorSamplers?: number;
}

export class PhysicalDeviceCustomBorderColorPropertiesEXT implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceCustomBorderColorPropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceCustomBorderColorPropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceCustomBorderColorPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceCustomBorderColorPropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceCustomBorderColorPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxCustomBorderColorSamplers !== undefined) this.maxCustomBorderColorSamplers = data.maxCustomBorderColorSamplers;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceCustomBorderColorPropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_CUSTOM_BORDER_COLOR_PROPERTIES_EXT;
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

  get maxCustomBorderColorSamplers(): number {
    return this.#view.getUint32(16, LE);
  }

  set maxCustomBorderColorSamplers(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }
}