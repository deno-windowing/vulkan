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

export interface InitPhysicalDeviceLineRasterizationFeaturesEXT {
  pNext?: AnyPointer;
  rectangularLines?: Bool32;
  bresenhamLines?: Bool32;
  smoothLines?: Bool32;
  stippledRectangularLines?: Bool32;
  stippledBresenhamLines?: Bool32;
  stippledSmoothLines?: Bool32;
}

export class PhysicalDeviceLineRasterizationFeaturesEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceLineRasterizationFeaturesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceLineRasterizationFeaturesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceLineRasterizationFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceLineRasterizationFeaturesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceLineRasterizationFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.rectangularLines !== undefined) this.rectangularLines = data.rectangularLines;
      if (data.bresenhamLines !== undefined) this.bresenhamLines = data.bresenhamLines;
      if (data.smoothLines !== undefined) this.smoothLines = data.smoothLines;
      if (data.stippledRectangularLines !== undefined) this.stippledRectangularLines = data.stippledRectangularLines;
      if (data.stippledBresenhamLines !== undefined) this.stippledBresenhamLines = data.stippledBresenhamLines;
      if (data.stippledSmoothLines !== undefined) this.stippledSmoothLines = data.stippledSmoothLines;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceLineRasterizationFeaturesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_LINE_RASTERIZATION_FEATURES_EXT;
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

  get rectangularLines(): number {
    return this.#view.getUint32(16, LE);
  }

  set rectangularLines(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get bresenhamLines(): number {
    return this.#view.getUint32(20, LE);
  }

  set bresenhamLines(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get smoothLines(): number {
    return this.#view.getUint32(24, LE);
  }

  set smoothLines(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get stippledRectangularLines(): number {
    return this.#view.getUint32(28, LE);
  }

  set stippledRectangularLines(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get stippledBresenhamLines(): number {
    return this.#view.getUint32(32, LE);
  }

  set stippledBresenhamLines(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get stippledSmoothLines(): number {
    return this.#view.getUint32(36, LE);
  }

  set stippledSmoothLines(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }
}