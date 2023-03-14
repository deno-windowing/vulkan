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
import {ImageCreateInfo} from "./ImageCreateInfo.ts";
import { StructureType, ImageAspectFlagBits } from "../enum.ts";

export interface InitDeviceImageMemoryRequirements {
  pNext?: AnyPointer;
  pCreateInfo?: AnyPointer;
  planeAspect?: ImageAspectFlagBits;
}

export class DeviceImageMemoryRequirements implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDeviceImageMemoryRequirements);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDeviceImageMemoryRequirements) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DeviceImageMemoryRequirements.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DeviceImageMemoryRequirements.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DeviceImageMemoryRequirements.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.pCreateInfo !== undefined) this.pCreateInfo = data.pCreateInfo;
      if (data.planeAspect !== undefined) this.planeAspect = data.planeAspect;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DeviceImageMemoryRequirements.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEVICE_IMAGE_MEMORY_REQUIREMENTS;
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

  get pCreateInfo() {
    return pointerFromView(this.#view, 16, LE);
  }

  set pCreateInfo(value: AnyPointer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get planeAspect() {
    return this.#view.getUint32(24, LE);
  }

  set planeAspect(value: ImageAspectFlagBits) {
    this.#view.setUint32(24, Number(value), LE);
  }
}