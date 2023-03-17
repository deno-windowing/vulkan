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
import { ExternalFenceHandleTypeFlags, ExternalFenceFeatureFlags } from "../def.ts";

export interface InitExternalFenceProperties {
  pNext?: AnyPointer;
  exportFromImportedHandleTypes?: ExternalFenceHandleTypeFlags;
  compatibleHandleTypes?: ExternalFenceHandleTypeFlags;
  externalFenceFeatures?: ExternalFenceFeatureFlags;
}

export class ExternalFenceProperties implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitExternalFenceProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitExternalFenceProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ExternalFenceProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ExternalFenceProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ExternalFenceProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.exportFromImportedHandleTypes !== undefined) this.exportFromImportedHandleTypes = data.exportFromImportedHandleTypes;
      if (data.compatibleHandleTypes !== undefined) this.compatibleHandleTypes = data.compatibleHandleTypes;
      if (data.externalFenceFeatures !== undefined) this.externalFenceFeatures = data.externalFenceFeatures;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ExternalFenceProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.EXTERNAL_FENCE_PROPERTIES;
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

  set exportFromImportedHandleTypes(value: ExternalFenceHandleTypeFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get compatibleHandleTypes(): number {
    return this.#view.getUint32(20, LE);
  }

  set compatibleHandleTypes(value: ExternalFenceHandleTypeFlags) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get externalFenceFeatures(): number {
    return this.#view.getUint32(24, LE);
  }

  set externalFenceFeatures(value: ExternalFenceFeatureFlags) {
    this.#view.setUint32(24, Number(value), LE);
  }
}