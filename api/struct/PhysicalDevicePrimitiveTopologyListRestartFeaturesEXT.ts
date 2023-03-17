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

export interface InitPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT {
  pNext?: AnyPointer;
  primitiveTopologyListRestart?: Bool32;
  primitiveTopologyPatchListRestart?: Bool32;
}

export class PhysicalDevicePrimitiveTopologyListRestartFeaturesEXT implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDevicePrimitiveTopologyListRestartFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDevicePrimitiveTopologyListRestartFeaturesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDevicePrimitiveTopologyListRestartFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.primitiveTopologyListRestart !== undefined) this.primitiveTopologyListRestart = data.primitiveTopologyListRestart;
      if (data.primitiveTopologyPatchListRestart !== undefined) this.primitiveTopologyPatchListRestart = data.primitiveTopologyPatchListRestart;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDevicePrimitiveTopologyListRestartFeaturesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_PRIMITIVE_TOPOLOGY_LIST_RESTART_FEATURES_EXT;
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

  get primitiveTopologyListRestart(): number {
    return this.#view.getUint32(16, LE);
  }

  set primitiveTopologyListRestart(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get primitiveTopologyPatchListRestart(): number {
    return this.#view.getUint32(20, LE);
  }

  set primitiveTopologyPatchListRestart(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }
}