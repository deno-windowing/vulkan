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
import { StructureType, ValidationFeatureEnableEXT, ValidationFeatureDisableEXT } from "../enum.ts";

export interface InitValidationFeaturesEXT {
  pNext?: AnyPointer;
  enabledValidationFeatureCount?: number;
  pEnabledValidationFeatures?: AnyPointer;
  disabledValidationFeatureCount?: number;
  pDisabledValidationFeatures?: AnyPointer;
}

export class ValidationFeaturesEXT implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitValidationFeaturesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitValidationFeaturesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ValidationFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ValidationFeaturesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ValidationFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.enabledValidationFeatureCount !== undefined) this.enabledValidationFeatureCount = data.enabledValidationFeatureCount;
      if (data.pEnabledValidationFeatures !== undefined) this.pEnabledValidationFeatures = data.pEnabledValidationFeatures;
      if (data.disabledValidationFeatureCount !== undefined) this.disabledValidationFeatureCount = data.disabledValidationFeatureCount;
      if (data.pDisabledValidationFeatures !== undefined) this.pDisabledValidationFeatures = data.pDisabledValidationFeatures;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ValidationFeaturesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VALIDATION_FEATURES_EXT;
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

  get enabledValidationFeatureCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set enabledValidationFeatureCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pEnabledValidationFeatures(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pEnabledValidationFeatures(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get disabledValidationFeatureCount(): number {
    return this.#view.getUint32(32, LE);
  }

  set disabledValidationFeatureCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pDisabledValidationFeatures(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set pDisabledValidationFeatures(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}