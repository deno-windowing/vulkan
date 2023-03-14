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
import {PhysicalDeviceMemoryProperties} from "./PhysicalDeviceMemoryProperties.ts";
import { StructureType } from "../enum.ts";

export interface InitPhysicalDeviceMemoryProperties2 {
  pNext?: AnyPointer;
  memoryProperties?: PhysicalDeviceMemoryProperties;
}

export class PhysicalDeviceMemoryProperties2 implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceMemoryProperties2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceMemoryProperties2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceMemoryProperties2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceMemoryProperties2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceMemoryProperties2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.memoryProperties !== undefined) this.memoryProperties = data.memoryProperties;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceMemoryProperties2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_MEMORY_PROPERTIES_2;
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

  get memoryProperties() {
    return new PhysicalDeviceMemoryProperties(this.#data.subarray(16, 16 + PhysicalDeviceMemoryProperties.size));
  }

  set memoryProperties(value: PhysicalDeviceMemoryProperties) {
    if (value[BUFFER].byteLength < PhysicalDeviceMemoryProperties.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }
}