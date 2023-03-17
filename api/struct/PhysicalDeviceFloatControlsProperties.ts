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
import { StructureType, ShaderFloatControlsIndependence } from "../enum.ts";
import { Bool32 } from "../def.ts";

export interface InitPhysicalDeviceFloatControlsProperties {
  pNext?: AnyPointer;
  denormBehaviorIndependence?: ShaderFloatControlsIndependence;
  roundingModeIndependence?: ShaderFloatControlsIndependence;
  shaderSignedZeroInfNanPreserveFloat16?: Bool32;
  shaderSignedZeroInfNanPreserveFloat32?: Bool32;
  shaderSignedZeroInfNanPreserveFloat64?: Bool32;
  shaderDenormPreserveFloat16?: Bool32;
  shaderDenormPreserveFloat32?: Bool32;
  shaderDenormPreserveFloat64?: Bool32;
  shaderDenormFlushToZeroFloat16?: Bool32;
  shaderDenormFlushToZeroFloat32?: Bool32;
  shaderDenormFlushToZeroFloat64?: Bool32;
  shaderRoundingModeRTEFloat16?: Bool32;
  shaderRoundingModeRTEFloat32?: Bool32;
  shaderRoundingModeRTEFloat64?: Bool32;
  shaderRoundingModeRTZFloat16?: Bool32;
  shaderRoundingModeRTZFloat32?: Bool32;
  shaderRoundingModeRTZFloat64?: Bool32;
}

export class PhysicalDeviceFloatControlsProperties implements BaseStruct {
  static size = 88;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceFloatControlsProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceFloatControlsProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceFloatControlsProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceFloatControlsProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceFloatControlsProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.denormBehaviorIndependence !== undefined) this.denormBehaviorIndependence = data.denormBehaviorIndependence;
      if (data.roundingModeIndependence !== undefined) this.roundingModeIndependence = data.roundingModeIndependence;
      if (data.shaderSignedZeroInfNanPreserveFloat16 !== undefined) this.shaderSignedZeroInfNanPreserveFloat16 = data.shaderSignedZeroInfNanPreserveFloat16;
      if (data.shaderSignedZeroInfNanPreserveFloat32 !== undefined) this.shaderSignedZeroInfNanPreserveFloat32 = data.shaderSignedZeroInfNanPreserveFloat32;
      if (data.shaderSignedZeroInfNanPreserveFloat64 !== undefined) this.shaderSignedZeroInfNanPreserveFloat64 = data.shaderSignedZeroInfNanPreserveFloat64;
      if (data.shaderDenormPreserveFloat16 !== undefined) this.shaderDenormPreserveFloat16 = data.shaderDenormPreserveFloat16;
      if (data.shaderDenormPreserveFloat32 !== undefined) this.shaderDenormPreserveFloat32 = data.shaderDenormPreserveFloat32;
      if (data.shaderDenormPreserveFloat64 !== undefined) this.shaderDenormPreserveFloat64 = data.shaderDenormPreserveFloat64;
      if (data.shaderDenormFlushToZeroFloat16 !== undefined) this.shaderDenormFlushToZeroFloat16 = data.shaderDenormFlushToZeroFloat16;
      if (data.shaderDenormFlushToZeroFloat32 !== undefined) this.shaderDenormFlushToZeroFloat32 = data.shaderDenormFlushToZeroFloat32;
      if (data.shaderDenormFlushToZeroFloat64 !== undefined) this.shaderDenormFlushToZeroFloat64 = data.shaderDenormFlushToZeroFloat64;
      if (data.shaderRoundingModeRTEFloat16 !== undefined) this.shaderRoundingModeRTEFloat16 = data.shaderRoundingModeRTEFloat16;
      if (data.shaderRoundingModeRTEFloat32 !== undefined) this.shaderRoundingModeRTEFloat32 = data.shaderRoundingModeRTEFloat32;
      if (data.shaderRoundingModeRTEFloat64 !== undefined) this.shaderRoundingModeRTEFloat64 = data.shaderRoundingModeRTEFloat64;
      if (data.shaderRoundingModeRTZFloat16 !== undefined) this.shaderRoundingModeRTZFloat16 = data.shaderRoundingModeRTZFloat16;
      if (data.shaderRoundingModeRTZFloat32 !== undefined) this.shaderRoundingModeRTZFloat32 = data.shaderRoundingModeRTZFloat32;
      if (data.shaderRoundingModeRTZFloat64 !== undefined) this.shaderRoundingModeRTZFloat64 = data.shaderRoundingModeRTZFloat64;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceFloatControlsProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_FLOAT_CONTROLS_PROPERTIES;
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

  get denormBehaviorIndependence(): number {
    return this.#view.getUint32(16, LE);
  }

  set denormBehaviorIndependence(value: ShaderFloatControlsIndependence) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get roundingModeIndependence(): number {
    return this.#view.getUint32(20, LE);
  }

  set roundingModeIndependence(value: ShaderFloatControlsIndependence) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get shaderSignedZeroInfNanPreserveFloat16(): number {
    return this.#view.getUint32(24, LE);
  }

  set shaderSignedZeroInfNanPreserveFloat16(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get shaderSignedZeroInfNanPreserveFloat32(): number {
    return this.#view.getUint32(28, LE);
  }

  set shaderSignedZeroInfNanPreserveFloat32(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get shaderSignedZeroInfNanPreserveFloat64(): number {
    return this.#view.getUint32(32, LE);
  }

  set shaderSignedZeroInfNanPreserveFloat64(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get shaderDenormPreserveFloat16(): number {
    return this.#view.getUint32(36, LE);
  }

  set shaderDenormPreserveFloat16(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get shaderDenormPreserveFloat32(): number {
    return this.#view.getUint32(40, LE);
  }

  set shaderDenormPreserveFloat32(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get shaderDenormPreserveFloat64(): number {
    return this.#view.getUint32(44, LE);
  }

  set shaderDenormPreserveFloat64(value: Bool32) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get shaderDenormFlushToZeroFloat16(): number {
    return this.#view.getUint32(48, LE);
  }

  set shaderDenormFlushToZeroFloat16(value: Bool32) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get shaderDenormFlushToZeroFloat32(): number {
    return this.#view.getUint32(52, LE);
  }

  set shaderDenormFlushToZeroFloat32(value: Bool32) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get shaderDenormFlushToZeroFloat64(): number {
    return this.#view.getUint32(56, LE);
  }

  set shaderDenormFlushToZeroFloat64(value: Bool32) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get shaderRoundingModeRTEFloat16(): number {
    return this.#view.getUint32(60, LE);
  }

  set shaderRoundingModeRTEFloat16(value: Bool32) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get shaderRoundingModeRTEFloat32(): number {
    return this.#view.getUint32(64, LE);
  }

  set shaderRoundingModeRTEFloat32(value: Bool32) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get shaderRoundingModeRTEFloat64(): number {
    return this.#view.getUint32(68, LE);
  }

  set shaderRoundingModeRTEFloat64(value: Bool32) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get shaderRoundingModeRTZFloat16(): number {
    return this.#view.getUint32(72, LE);
  }

  set shaderRoundingModeRTZFloat16(value: Bool32) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get shaderRoundingModeRTZFloat32(): number {
    return this.#view.getUint32(76, LE);
  }

  set shaderRoundingModeRTZFloat32(value: Bool32) {
    this.#view.setUint32(76, Number(value), LE);
  }

  get shaderRoundingModeRTZFloat64(): number {
    return this.#view.getUint32(80, LE);
  }

  set shaderRoundingModeRTZFloat64(value: Bool32) {
    this.#view.setUint32(80, Number(value), LE);
  }
}