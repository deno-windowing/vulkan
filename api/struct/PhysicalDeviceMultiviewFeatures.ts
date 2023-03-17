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

export interface InitPhysicalDeviceMultiviewFeatures {
  pNext?: AnyPointer;
  multiview?: Bool32;
  multiviewGeometryShader?: Bool32;
  multiviewTessellationShader?: Bool32;
}

export class PhysicalDeviceMultiviewFeatures implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceMultiviewFeatures);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceMultiviewFeatures) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceMultiviewFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceMultiviewFeatures.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceMultiviewFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.multiview !== undefined) this.multiview = data.multiview;
      if (data.multiviewGeometryShader !== undefined) this.multiviewGeometryShader = data.multiviewGeometryShader;
      if (data.multiviewTessellationShader !== undefined) this.multiviewTessellationShader = data.multiviewTessellationShader;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceMultiviewFeatures.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_MULTIVIEW_FEATURES;
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

  get multiview(): number {
    return this.#view.getUint32(16, LE);
  }

  set multiview(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get multiviewGeometryShader(): number {
    return this.#view.getUint32(20, LE);
  }

  set multiviewGeometryShader(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get multiviewTessellationShader(): number {
    return this.#view.getUint32(24, LE);
  }

  set multiviewTessellationShader(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }
}