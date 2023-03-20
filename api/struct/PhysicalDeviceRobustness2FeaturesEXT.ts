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

export interface InitPhysicalDeviceRobustness2FeaturesEXT {
  pNext?: AnyPointer;
  robustBufferAccess2?: Bool32;
  robustImageAccess2?: Bool32;
  nullDescriptor?: Bool32;
}

export class PhysicalDeviceRobustness2FeaturesEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceRobustness2FeaturesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceRobustness2FeaturesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceRobustness2FeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceRobustness2FeaturesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceRobustness2FeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.robustBufferAccess2 !== undefined) this.robustBufferAccess2 = data.robustBufferAccess2;
      if (data.robustImageAccess2 !== undefined) this.robustImageAccess2 = data.robustImageAccess2;
      if (data.nullDescriptor !== undefined) this.nullDescriptor = data.nullDescriptor;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceRobustness2FeaturesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_ROBUSTNESS_2_FEATURES_EXT;
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

  get robustBufferAccess2(): number {
    return this.#view.getUint32(16, LE);
  }

  set robustBufferAccess2(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get robustImageAccess2(): number {
    return this.#view.getUint32(20, LE);
  }

  set robustImageAccess2(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get nullDescriptor(): number {
    return this.#view.getUint32(24, LE);
  }

  set nullDescriptor(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }
}