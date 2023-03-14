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
import { StructureType, Format, ImageType, ImageTiling } from "../enum.ts";
import { ImageUsageFlags, ImageCreateFlags } from "../def.ts";

export interface InitPhysicalDeviceImageFormatInfo2 {
  pNext?: AnyPointer;
  format?: Format;
  type?: ImageType;
  tiling?: ImageTiling;
  usage?: ImageUsageFlags;
  flags?: ImageCreateFlags;
}

export class PhysicalDeviceImageFormatInfo2 implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceImageFormatInfo2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceImageFormatInfo2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceImageFormatInfo2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceImageFormatInfo2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceImageFormatInfo2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.format !== undefined) this.format = data.format;
      if (data.type !== undefined) this.type = data.type;
      if (data.tiling !== undefined) this.tiling = data.tiling;
      if (data.usage !== undefined) this.usage = data.usage;
      if (data.flags !== undefined) this.flags = data.flags;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceImageFormatInfo2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_IMAGE_FORMAT_INFO_2;
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

  get format() {
    return this.#view.getUint32(16, LE);
  }

  set format(value: Format) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get type() {
    return this.#view.getUint32(20, LE);
  }

  set type(value: ImageType) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get tiling() {
    return this.#view.getUint32(24, LE);
  }

  set tiling(value: ImageTiling) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get usage() {
    return this.#view.getUint32(28, LE);
  }

  set usage(value: ImageUsageFlags) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get flags() {
    return this.#view.getUint32(32, LE);
  }

  set flags(value: ImageCreateFlags) {
    this.#view.setUint32(32, Number(value), LE);
  }
}