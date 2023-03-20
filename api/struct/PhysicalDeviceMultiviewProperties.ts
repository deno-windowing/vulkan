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

export interface InitPhysicalDeviceMultiviewProperties {
  pNext?: AnyPointer;
  maxMultiviewViewCount?: number;
  maxMultiviewInstanceIndex?: number;
}

export class PhysicalDeviceMultiviewProperties implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceMultiviewProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceMultiviewProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceMultiviewProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceMultiviewProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceMultiviewProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxMultiviewViewCount !== undefined) this.maxMultiviewViewCount = data.maxMultiviewViewCount;
      if (data.maxMultiviewInstanceIndex !== undefined) this.maxMultiviewInstanceIndex = data.maxMultiviewInstanceIndex;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceMultiviewProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_MULTIVIEW_PROPERTIES;
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

  get maxMultiviewViewCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set maxMultiviewViewCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxMultiviewInstanceIndex(): number {
    return this.#view.getUint32(20, LE);
  }

  set maxMultiviewInstanceIndex(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }
}