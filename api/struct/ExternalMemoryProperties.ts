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
import { ExternalMemoryFeatureFlags, ExternalMemoryHandleTypeFlags } from "../def.ts";

export interface InitExternalMemoryProperties {
  externalMemoryFeatures?: ExternalMemoryFeatureFlags;
  exportFromImportedHandleTypes?: ExternalMemoryHandleTypeFlags;
  compatibleHandleTypes?: ExternalMemoryHandleTypeFlags;
}

export class ExternalMemoryProperties implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitExternalMemoryProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitExternalMemoryProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ExternalMemoryProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ExternalMemoryProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ExternalMemoryProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.externalMemoryFeatures !== undefined) this.externalMemoryFeatures = data.externalMemoryFeatures;
      if (data.exportFromImportedHandleTypes !== undefined) this.exportFromImportedHandleTypes = data.exportFromImportedHandleTypes;
      if (data.compatibleHandleTypes !== undefined) this.compatibleHandleTypes = data.compatibleHandleTypes;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ExternalMemoryProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get externalMemoryFeatures() {
    return this.#view.getUint32(0, LE);
  }

  set externalMemoryFeatures(value: ExternalMemoryFeatureFlags) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get exportFromImportedHandleTypes() {
    return this.#view.getUint32(4, LE);
  }

  set exportFromImportedHandleTypes(value: ExternalMemoryHandleTypeFlags) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get compatibleHandleTypes() {
    return this.#view.getUint32(8, LE);
  }

  set compatibleHandleTypes(value: ExternalMemoryHandleTypeFlags) {
    this.#view.setUint32(8, Number(value), LE);
  }
}