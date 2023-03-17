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

export interface InitPhysicalDevice8BitStorageFeatures {
  pNext?: AnyPointer;
  storageBuffer8BitAccess?: Bool32;
  uniformAndStorageBuffer8BitAccess?: Bool32;
  storagePushConstant8?: Bool32;
}

export class PhysicalDevice8BitStorageFeatures implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDevice8BitStorageFeatures);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDevice8BitStorageFeatures) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDevice8BitStorageFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDevice8BitStorageFeatures.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDevice8BitStorageFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.storageBuffer8BitAccess !== undefined) this.storageBuffer8BitAccess = data.storageBuffer8BitAccess;
      if (data.uniformAndStorageBuffer8BitAccess !== undefined) this.uniformAndStorageBuffer8BitAccess = data.uniformAndStorageBuffer8BitAccess;
      if (data.storagePushConstant8 !== undefined) this.storagePushConstant8 = data.storagePushConstant8;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDevice8BitStorageFeatures.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_8BIT_STORAGE_FEATURES;
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

  get storageBuffer8BitAccess(): number {
    return this.#view.getUint32(16, LE);
  }

  set storageBuffer8BitAccess(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get uniformAndStorageBuffer8BitAccess(): number {
    return this.#view.getUint32(20, LE);
  }

  set uniformAndStorageBuffer8BitAccess(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get storagePushConstant8(): number {
    return this.#view.getUint32(24, LE);
  }

  set storagePushConstant8(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }
}