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
import {Extent3D} from "./Extent3D.ts";
import { QueueFlags } from "../def.ts";

export interface InitQueueFamilyProperties {
  queueFlags?: QueueFlags;
  queueCount?: number;
  timestampValidBits?: number;
  minImageTransferGranularity?: Extent3D;
}

export class QueueFamilyProperties implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitQueueFamilyProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitQueueFamilyProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(QueueFamilyProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < QueueFamilyProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(QueueFamilyProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.queueFlags !== undefined) this.queueFlags = data.queueFlags;
      if (data.queueCount !== undefined) this.queueCount = data.queueCount;
      if (data.timestampValidBits !== undefined) this.timestampValidBits = data.timestampValidBits;
      if (data.minImageTransferGranularity !== undefined) this.minImageTransferGranularity = data.minImageTransferGranularity;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, QueueFamilyProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get queueFlags() {
    return this.#view.getUint32(0, LE);
  }

  set queueFlags(value: QueueFlags) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get queueCount() {
    return this.#view.getUint32(4, LE);
  }

  set queueCount(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get timestampValidBits() {
    return this.#view.getUint32(8, LE);
  }

  set timestampValidBits(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get minImageTransferGranularity() {
    return new Extent3D(this.#data.subarray(12, 12 + Extent3D.size));
  }

  set minImageTransferGranularity(value: Extent3D) {
    if (value[BUFFER].byteLength < Extent3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 12);
  }
}