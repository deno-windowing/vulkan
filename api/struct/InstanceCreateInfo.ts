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
import {ApplicationInfo} from "./ApplicationInfo.ts";
import { StructureType } from "../enum.ts";
import { InstanceCreateFlags } from "../def.ts";

export interface InitInstanceCreateInfo {
  pNext?: AnyPointer;
  flags?: InstanceCreateFlags;
  pApplicationInfo?: AnyPointer;
  enabledLayerCount?: number;
  ppEnabledLayerNames?: AnyPointer;
  enabledExtensionCount?: number;
  ppEnabledExtensionNames?: AnyPointer;
}

export class InstanceCreateInfo implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitInstanceCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitInstanceCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(InstanceCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < InstanceCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(InstanceCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.pApplicationInfo !== undefined) this.pApplicationInfo = data.pApplicationInfo;
      if (data.enabledLayerCount !== undefined) this.enabledLayerCount = data.enabledLayerCount;
      if (data.ppEnabledLayerNames !== undefined) this.ppEnabledLayerNames = data.ppEnabledLayerNames;
      if (data.enabledExtensionCount !== undefined) this.enabledExtensionCount = data.enabledExtensionCount;
      if (data.ppEnabledExtensionNames !== undefined) this.ppEnabledExtensionNames = data.ppEnabledExtensionNames;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, InstanceCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.INSTANCE_CREATE_INFO;
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

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: InstanceCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pApplicationInfo(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pApplicationInfo(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get enabledLayerCount(): number {
    return this.#view.getUint32(32, LE);
  }

  set enabledLayerCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get ppEnabledLayerNames(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set ppEnabledLayerNames(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get enabledExtensionCount(): number {
    return this.#view.getUint32(48, LE);
  }

  set enabledExtensionCount(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get ppEnabledExtensionNames(): Deno.PointerValue {
    return pointerFromView(this.#view, 56, LE);
  }

  set ppEnabledExtensionNames(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }
}