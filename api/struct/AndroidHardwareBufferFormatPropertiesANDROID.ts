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
import {ComponentMapping} from "./ComponentMapping.ts";
import { StructureType, Format, SamplerYcbcrModelConversion, SamplerYcbcrRange, ChromaLocation } from "../enum.ts";
import { FormatFeatureFlags } from "../def.ts";

export interface InitAndroidHardwareBufferFormatPropertiesANDROID {
  pNext?: AnyPointer;
  format?: Format;
  externalFormat?: number | bigint;
  formatFeatures?: FormatFeatureFlags;
  samplerYcbcrConversionComponents?: ComponentMapping;
  suggestedYcbcrModel?: SamplerYcbcrModelConversion;
  suggestedYcbcrRange?: SamplerYcbcrRange;
  suggestedXChromaOffset?: ChromaLocation;
  suggestedYChromaOffset?: ChromaLocation;
}

export class AndroidHardwareBufferFormatPropertiesANDROID implements BaseStruct {
  static size = 72;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAndroidHardwareBufferFormatPropertiesANDROID);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAndroidHardwareBufferFormatPropertiesANDROID) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AndroidHardwareBufferFormatPropertiesANDROID.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AndroidHardwareBufferFormatPropertiesANDROID.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AndroidHardwareBufferFormatPropertiesANDROID.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.format !== undefined) this.format = data.format;
      if (data.externalFormat !== undefined) this.externalFormat = data.externalFormat;
      if (data.formatFeatures !== undefined) this.formatFeatures = data.formatFeatures;
      if (data.samplerYcbcrConversionComponents !== undefined) this.samplerYcbcrConversionComponents = data.samplerYcbcrConversionComponents;
      if (data.suggestedYcbcrModel !== undefined) this.suggestedYcbcrModel = data.suggestedYcbcrModel;
      if (data.suggestedYcbcrRange !== undefined) this.suggestedYcbcrRange = data.suggestedYcbcrRange;
      if (data.suggestedXChromaOffset !== undefined) this.suggestedXChromaOffset = data.suggestedXChromaOffset;
      if (data.suggestedYChromaOffset !== undefined) this.suggestedYChromaOffset = data.suggestedYChromaOffset;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AndroidHardwareBufferFormatPropertiesANDROID.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ANDROID_HARDWARE_BUFFER_FORMAT_PROPERTIES_ANDROID;
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

  get format(): number {
    return this.#view.getUint32(16, LE);
  }

  set format(value: Format) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get externalFormat(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set externalFormat(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get formatFeatures(): number {
    return this.#view.getUint32(32, LE);
  }

  set formatFeatures(value: FormatFeatureFlags) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get samplerYcbcrConversionComponents(): ComponentMapping {
    return new ComponentMapping(this.#data.subarray(36, 36 + ComponentMapping.size));
  }

  set samplerYcbcrConversionComponents(value: ComponentMapping) {
    if (value[BUFFER].byteLength < ComponentMapping.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 36);
  }

  get suggestedYcbcrModel(): number {
    return this.#view.getUint32(52, LE);
  }

  set suggestedYcbcrModel(value: SamplerYcbcrModelConversion) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get suggestedYcbcrRange(): number {
    return this.#view.getUint32(56, LE);
  }

  set suggestedYcbcrRange(value: SamplerYcbcrRange) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get suggestedXChromaOffset(): number {
    return this.#view.getUint32(60, LE);
  }

  set suggestedXChromaOffset(value: ChromaLocation) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get suggestedYChromaOffset(): number {
    return this.#view.getUint32(64, LE);
  }

  set suggestedYChromaOffset(value: ChromaLocation) {
    this.#view.setUint32(64, Number(value), LE);
  }
}