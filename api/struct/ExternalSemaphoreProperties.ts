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
import { ExternalSemaphoreHandleTypeFlags, ExternalSemaphoreFeatureFlags } from "../def.ts";

export interface InitExternalSemaphoreProperties {
  pNext?: AnyPointer;
  exportFromImportedHandleTypes?: ExternalSemaphoreHandleTypeFlags;
  compatibleHandleTypes?: ExternalSemaphoreHandleTypeFlags;
  externalSemaphoreFeatures?: ExternalSemaphoreFeatureFlags;
}

export class ExternalSemaphoreProperties implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitExternalSemaphoreProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitExternalSemaphoreProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ExternalSemaphoreProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ExternalSemaphoreProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ExternalSemaphoreProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.exportFromImportedHandleTypes !== undefined) this.exportFromImportedHandleTypes = data.exportFromImportedHandleTypes;
      if (data.compatibleHandleTypes !== undefined) this.compatibleHandleTypes = data.compatibleHandleTypes;
      if (data.externalSemaphoreFeatures !== undefined) this.externalSemaphoreFeatures = data.externalSemaphoreFeatures;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ExternalSemaphoreProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.EXTERNAL_SEMAPHORE_PROPERTIES;
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

  get exportFromImportedHandleTypes(): number {
    return this.#view.getUint32(16, LE);
  }

  set exportFromImportedHandleTypes(value: ExternalSemaphoreHandleTypeFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get compatibleHandleTypes(): number {
    return this.#view.getUint32(20, LE);
  }

  set compatibleHandleTypes(value: ExternalSemaphoreHandleTypeFlags) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get externalSemaphoreFeatures(): number {
    return this.#view.getUint32(24, LE);
  }

  set externalSemaphoreFeatures(value: ExternalSemaphoreFeatureFlags) {
    this.#view.setUint32(24, Number(value), LE);
  }
}