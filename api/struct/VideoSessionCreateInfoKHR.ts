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
import {VideoProfileInfoKHR} from "./VideoProfileInfoKHR.ts";
import {Extent2D} from "./Extent2D.ts";
import {ExtensionProperties} from "./ExtensionProperties.ts";
import { StructureType, Format } from "../enum.ts";
import { VideoSessionCreateFlagsKHR } from "../def.ts";

export interface InitVideoSessionCreateInfoKHR {
  pNext?: AnyPointer;
  queueFamilyIndex?: number;
  flags?: VideoSessionCreateFlagsKHR;
  pVideoProfile?: AnyPointer;
  pictureFormat?: Format;
  maxCodedExtent?: Extent2D;
  referencePictureFormat?: Format;
  maxDpbSlots?: number;
  maxActiveReferencePictures?: number;
  pStdHeaderVersion?: AnyPointer;
}

export class VideoSessionCreateInfoKHR implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoSessionCreateInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoSessionCreateInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoSessionCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoSessionCreateInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoSessionCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.queueFamilyIndex !== undefined) this.queueFamilyIndex = data.queueFamilyIndex;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.pVideoProfile !== undefined) this.pVideoProfile = data.pVideoProfile;
      if (data.pictureFormat !== undefined) this.pictureFormat = data.pictureFormat;
      if (data.maxCodedExtent !== undefined) this.maxCodedExtent = data.maxCodedExtent;
      if (data.referencePictureFormat !== undefined) this.referencePictureFormat = data.referencePictureFormat;
      if (data.maxDpbSlots !== undefined) this.maxDpbSlots = data.maxDpbSlots;
      if (data.maxActiveReferencePictures !== undefined) this.maxActiveReferencePictures = data.maxActiveReferencePictures;
      if (data.pStdHeaderVersion !== undefined) this.pStdHeaderVersion = data.pStdHeaderVersion;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoSessionCreateInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_SESSION_CREATE_INFO_KHR;
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

  get queueFamilyIndex() {
    return this.#view.getUint32(16, LE);
  }

  set queueFamilyIndex(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get flags() {
    return this.#view.getUint32(20, LE);
  }

  set flags(value: VideoSessionCreateFlagsKHR) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pVideoProfile() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pVideoProfile(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get pictureFormat() {
    return this.#view.getUint32(32, LE);
  }

  set pictureFormat(value: Format) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get maxCodedExtent() {
    return new Extent2D(this.#data.subarray(36, 36 + Extent2D.size));
  }

  set maxCodedExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 36);
  }

  get referencePictureFormat() {
    return this.#view.getUint32(44, LE);
  }

  set referencePictureFormat(value: Format) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get maxDpbSlots() {
    return this.#view.getUint32(48, LE);
  }

  set maxDpbSlots(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get maxActiveReferencePictures() {
    return this.#view.getUint32(52, LE);
  }

  set maxActiveReferencePictures(value: number) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get pStdHeaderVersion() {
    return pointerFromView(this.#view, 56, LE);
  }

  set pStdHeaderVersion(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }
}