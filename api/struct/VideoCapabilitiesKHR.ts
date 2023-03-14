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
import {Extent2D} from "./Extent2D.ts";
import {ExtensionProperties} from "./ExtensionProperties.ts";
import { StructureType } from "../enum.ts";
import { VideoCapabilityFlagsKHR, DeviceSize } from "../def.ts";

export interface InitVideoCapabilitiesKHR {
  pNext?: AnyPointer;
  flags?: VideoCapabilityFlagsKHR;
  minBitstreamBufferOffsetAlignment?: DeviceSize;
  minBitstreamBufferSizeAlignment?: DeviceSize;
  pictureAccessGranularity?: Extent2D;
  minCodedExtent?: Extent2D;
  maxCodedExtent?: Extent2D;
  maxDpbSlots?: number;
  maxActiveReferencePictures?: number;
  stdHeaderVersion?: ExtensionProperties;
}

export class VideoCapabilitiesKHR implements BaseStruct {
  static size = 80;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoCapabilitiesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoCapabilitiesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoCapabilitiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoCapabilitiesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoCapabilitiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.minBitstreamBufferOffsetAlignment !== undefined) this.minBitstreamBufferOffsetAlignment = data.minBitstreamBufferOffsetAlignment;
      if (data.minBitstreamBufferSizeAlignment !== undefined) this.minBitstreamBufferSizeAlignment = data.minBitstreamBufferSizeAlignment;
      if (data.pictureAccessGranularity !== undefined) this.pictureAccessGranularity = data.pictureAccessGranularity;
      if (data.minCodedExtent !== undefined) this.minCodedExtent = data.minCodedExtent;
      if (data.maxCodedExtent !== undefined) this.maxCodedExtent = data.maxCodedExtent;
      if (data.maxDpbSlots !== undefined) this.maxDpbSlots = data.maxDpbSlots;
      if (data.maxActiveReferencePictures !== undefined) this.maxActiveReferencePictures = data.maxActiveReferencePictures;
      if (data.stdHeaderVersion !== undefined) this.stdHeaderVersion = data.stdHeaderVersion;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoCapabilitiesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_CAPABILITIES_KHR;
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

  get flags() {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: VideoCapabilityFlagsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get minBitstreamBufferOffsetAlignment() {
    return this.#view.getBigUint64(24, LE);
  }

  set minBitstreamBufferOffsetAlignment(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get minBitstreamBufferSizeAlignment() {
    return this.#view.getBigUint64(32, LE);
  }

  set minBitstreamBufferSizeAlignment(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get pictureAccessGranularity() {
    return new Extent2D(this.#data.subarray(40, 40 + Extent2D.size));
  }

  set pictureAccessGranularity(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 40);
  }

  get minCodedExtent() {
    return new Extent2D(this.#data.subarray(48, 48 + Extent2D.size));
  }

  set minCodedExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 48);
  }

  get maxCodedExtent() {
    return new Extent2D(this.#data.subarray(56, 56 + Extent2D.size));
  }

  set maxCodedExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 56);
  }

  get maxDpbSlots() {
    return this.#view.getUint32(64, LE);
  }

  set maxDpbSlots(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get maxActiveReferencePictures() {
    return this.#view.getUint32(68, LE);
  }

  set maxActiveReferencePictures(value: number) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get stdHeaderVersion() {
    return new ExtensionProperties(this.#data.subarray(72, 72 + ExtensionProperties.size));
  }

  set stdHeaderVersion(value: ExtensionProperties) {
    if (value[BUFFER].byteLength < ExtensionProperties.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 72);
  }
}