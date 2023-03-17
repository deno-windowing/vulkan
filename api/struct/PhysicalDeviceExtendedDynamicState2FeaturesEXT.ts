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

export interface InitPhysicalDeviceExtendedDynamicState2FeaturesEXT {
  pNext?: AnyPointer;
  extendedDynamicState2?: Bool32;
  extendedDynamicState2LogicOp?: Bool32;
  extendedDynamicState2PatchControlPoints?: Bool32;
}

export class PhysicalDeviceExtendedDynamicState2FeaturesEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceExtendedDynamicState2FeaturesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceExtendedDynamicState2FeaturesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceExtendedDynamicState2FeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceExtendedDynamicState2FeaturesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceExtendedDynamicState2FeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.extendedDynamicState2 !== undefined) this.extendedDynamicState2 = data.extendedDynamicState2;
      if (data.extendedDynamicState2LogicOp !== undefined) this.extendedDynamicState2LogicOp = data.extendedDynamicState2LogicOp;
      if (data.extendedDynamicState2PatchControlPoints !== undefined) this.extendedDynamicState2PatchControlPoints = data.extendedDynamicState2PatchControlPoints;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceExtendedDynamicState2FeaturesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_EXTENDED_DYNAMIC_STATE_2_FEATURES_EXT;
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

  get extendedDynamicState2(): number {
    return this.#view.getUint32(16, LE);
  }

  set extendedDynamicState2(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get extendedDynamicState2LogicOp(): number {
    return this.#view.getUint32(20, LE);
  }

  set extendedDynamicState2LogicOp(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get extendedDynamicState2PatchControlPoints(): number {
    return this.#view.getUint32(24, LE);
  }

  set extendedDynamicState2PatchControlPoints(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }
}