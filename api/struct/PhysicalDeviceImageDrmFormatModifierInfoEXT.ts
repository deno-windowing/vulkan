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
import { StructureType, SharingMode } from "../enum.ts";

export interface InitPhysicalDeviceImageDrmFormatModifierInfoEXT {
  pNext?: AnyPointer;
  drmFormatModifier?: number | bigint;
  sharingMode?: SharingMode;
  queueFamilyIndexCount?: number;
  pQueueFamilyIndices?: AnyPointer;
}

export class PhysicalDeviceImageDrmFormatModifierInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceImageDrmFormatModifierInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceImageDrmFormatModifierInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceImageDrmFormatModifierInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceImageDrmFormatModifierInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceImageDrmFormatModifierInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.drmFormatModifier !== undefined) this.drmFormatModifier = data.drmFormatModifier;
      if (data.sharingMode !== undefined) this.sharingMode = data.sharingMode;
      if (data.queueFamilyIndexCount !== undefined) this.queueFamilyIndexCount = data.queueFamilyIndexCount;
      if (data.pQueueFamilyIndices !== undefined) this.pQueueFamilyIndices = data.pQueueFamilyIndices;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceImageDrmFormatModifierInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_IMAGE_DRM_FORMAT_MODIFIER_INFO_EXT;
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

  get drmFormatModifier() {
    return this.#view.getBigUint64(16, LE);
  }

  set drmFormatModifier(value: number | bigint) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get sharingMode() {
    return this.#view.getUint32(24, LE);
  }

  set sharingMode(value: SharingMode) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get queueFamilyIndexCount() {
    return this.#view.getUint32(28, LE);
  }

  set queueFamilyIndexCount(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get pQueueFamilyIndices() {
    return pointerFromView(this.#view, 32, LE);
  }

  set pQueueFamilyIndices(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}