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
import {DeviceQueueCreateInfo} from "./DeviceQueueCreateInfo.ts";
import {PhysicalDeviceFeatures} from "./PhysicalDeviceFeatures.ts";
import { StructureType } from "../enum.ts";
import { DeviceCreateFlags } from "../def.ts";

export interface InitDeviceCreateInfo {
  pNext?: AnyPointer;
  flags?: DeviceCreateFlags;
  queueCreateInfoCount?: number;
  pQueueCreateInfos?: AnyPointer;
  enabledLayerCount?: number;
  ppEnabledLayerNames?: AnyPointer;
  enabledExtensionCount?: number;
  ppEnabledExtensionNames?: AnyPointer;
  pEnabledFeatures?: AnyPointer;
}

export class DeviceCreateInfo implements BaseStruct {
  static size = 72;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDeviceCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDeviceCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DeviceCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DeviceCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DeviceCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.queueCreateInfoCount !== undefined) this.queueCreateInfoCount = data.queueCreateInfoCount;
      if (data.pQueueCreateInfos !== undefined) this.pQueueCreateInfos = data.pQueueCreateInfos;
      if (data.enabledLayerCount !== undefined) this.enabledLayerCount = data.enabledLayerCount;
      if (data.ppEnabledLayerNames !== undefined) this.ppEnabledLayerNames = data.ppEnabledLayerNames;
      if (data.enabledExtensionCount !== undefined) this.enabledExtensionCount = data.enabledExtensionCount;
      if (data.ppEnabledExtensionNames !== undefined) this.ppEnabledExtensionNames = data.ppEnabledExtensionNames;
      if (data.pEnabledFeatures !== undefined) this.pEnabledFeatures = data.pEnabledFeatures;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DeviceCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEVICE_CREATE_INFO;
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

  set flags(value: DeviceCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get queueCreateInfoCount() {
    return this.#view.getUint32(20, LE);
  }

  set queueCreateInfoCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pQueueCreateInfos() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pQueueCreateInfos(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get enabledLayerCount() {
    return this.#view.getUint32(32, LE);
  }

  set enabledLayerCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get ppEnabledLayerNames() {
    return pointerFromView(this.#view, 40, LE);
  }

  set ppEnabledLayerNames(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get enabledExtensionCount() {
    return this.#view.getUint32(48, LE);
  }

  set enabledExtensionCount(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get ppEnabledExtensionNames() {
    return pointerFromView(this.#view, 56, LE);
  }

  set ppEnabledExtensionNames(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }

  get pEnabledFeatures() {
    return pointerFromView(this.#view, 64, LE);
  }

  set pEnabledFeatures(value: AnyPointer) {
    this.#view.setBigUint64(64, BigInt(anyPointer(value)), LE);
  }
}