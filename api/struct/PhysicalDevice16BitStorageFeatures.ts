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

export interface InitPhysicalDevice16BitStorageFeatures {
  pNext?: AnyPointer;
  storageBuffer16BitAccess?: Bool32;
  uniformAndStorageBuffer16BitAccess?: Bool32;
  storagePushConstant16?: Bool32;
  storageInputOutput16?: Bool32;
}

export class PhysicalDevice16BitStorageFeatures implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDevice16BitStorageFeatures);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDevice16BitStorageFeatures) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDevice16BitStorageFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDevice16BitStorageFeatures.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDevice16BitStorageFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.storageBuffer16BitAccess !== undefined) this.storageBuffer16BitAccess = data.storageBuffer16BitAccess;
      if (data.uniformAndStorageBuffer16BitAccess !== undefined) this.uniformAndStorageBuffer16BitAccess = data.uniformAndStorageBuffer16BitAccess;
      if (data.storagePushConstant16 !== undefined) this.storagePushConstant16 = data.storagePushConstant16;
      if (data.storageInputOutput16 !== undefined) this.storageInputOutput16 = data.storageInputOutput16;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDevice16BitStorageFeatures.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_16BIT_STORAGE_FEATURES;
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

  get storageBuffer16BitAccess(): number {
    return this.#view.getUint32(16, LE);
  }

  set storageBuffer16BitAccess(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get uniformAndStorageBuffer16BitAccess(): number {
    return this.#view.getUint32(20, LE);
  }

  set uniformAndStorageBuffer16BitAccess(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get storagePushConstant16(): number {
    return this.#view.getUint32(24, LE);
  }

  set storagePushConstant16(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get storageInputOutput16(): number {
    return this.#view.getUint32(28, LE);
  }

  set storageInputOutput16(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }
}