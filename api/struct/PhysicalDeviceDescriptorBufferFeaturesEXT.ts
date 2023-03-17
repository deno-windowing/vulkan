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
import { Bool32 } from "../def.ts";

export interface InitPhysicalDeviceDescriptorBufferFeaturesEXT {
  pNext?: AnyPointer;
  descriptorBuffer?: Bool32;
  descriptorBufferCaptureReplay?: Bool32;
  descriptorBufferImageLayoutIgnored?: Bool32;
  descriptorBufferPushDescriptors?: Bool32;
}

export class PhysicalDeviceDescriptorBufferFeaturesEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceDescriptorBufferFeaturesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceDescriptorBufferFeaturesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceDescriptorBufferFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceDescriptorBufferFeaturesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceDescriptorBufferFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.descriptorBuffer !== undefined) this.descriptorBuffer = data.descriptorBuffer;
      if (data.descriptorBufferCaptureReplay !== undefined) this.descriptorBufferCaptureReplay = data.descriptorBufferCaptureReplay;
      if (data.descriptorBufferImageLayoutIgnored !== undefined) this.descriptorBufferImageLayoutIgnored = data.descriptorBufferImageLayoutIgnored;
      if (data.descriptorBufferPushDescriptors !== undefined) this.descriptorBufferPushDescriptors = data.descriptorBufferPushDescriptors;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceDescriptorBufferFeaturesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_DESCRIPTOR_BUFFER_FEATURES_EXT;
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

  get descriptorBuffer(): number {
    return this.#view.getUint32(16, LE);
  }

  set descriptorBuffer(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get descriptorBufferCaptureReplay(): number {
    return this.#view.getUint32(20, LE);
  }

  set descriptorBufferCaptureReplay(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get descriptorBufferImageLayoutIgnored(): number {
    return this.#view.getUint32(24, LE);
  }

  set descriptorBufferImageLayoutIgnored(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get descriptorBufferPushDescriptors(): number {
    return this.#view.getUint32(28, LE);
  }

  set descriptorBufferPushDescriptors(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }
}