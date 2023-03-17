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

export interface InitPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR {
  pNext?: AnyPointer;
  workgroupMemoryExplicitLayout?: Bool32;
  workgroupMemoryExplicitLayoutScalarBlockLayout?: Bool32;
  workgroupMemoryExplicitLayout8BitAccess?: Bool32;
  workgroupMemoryExplicitLayout16BitAccess?: Bool32;
}

export class PhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.workgroupMemoryExplicitLayout !== undefined) this.workgroupMemoryExplicitLayout = data.workgroupMemoryExplicitLayout;
      if (data.workgroupMemoryExplicitLayoutScalarBlockLayout !== undefined) this.workgroupMemoryExplicitLayoutScalarBlockLayout = data.workgroupMemoryExplicitLayoutScalarBlockLayout;
      if (data.workgroupMemoryExplicitLayout8BitAccess !== undefined) this.workgroupMemoryExplicitLayout8BitAccess = data.workgroupMemoryExplicitLayout8BitAccess;
      if (data.workgroupMemoryExplicitLayout16BitAccess !== undefined) this.workgroupMemoryExplicitLayout16BitAccess = data.workgroupMemoryExplicitLayout16BitAccess;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_WORKGROUP_MEMORY_EXPLICIT_LAYOUT_FEATURES_KHR;
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

  get workgroupMemoryExplicitLayout(): number {
    return this.#view.getUint32(16, LE);
  }

  set workgroupMemoryExplicitLayout(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get workgroupMemoryExplicitLayoutScalarBlockLayout(): number {
    return this.#view.getUint32(20, LE);
  }

  set workgroupMemoryExplicitLayoutScalarBlockLayout(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get workgroupMemoryExplicitLayout8BitAccess(): number {
    return this.#view.getUint32(24, LE);
  }

  set workgroupMemoryExplicitLayout8BitAccess(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get workgroupMemoryExplicitLayout16BitAccess(): number {
    return this.#view.getUint32(28, LE);
  }

  set workgroupMemoryExplicitLayout16BitAccess(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }
}