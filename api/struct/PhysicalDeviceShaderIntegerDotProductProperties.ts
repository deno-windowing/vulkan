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

export interface InitPhysicalDeviceShaderIntegerDotProductProperties {
  pNext?: AnyPointer;
  integerDotProduct8BitUnsignedAccelerated?: Bool32;
  integerDotProduct8BitSignedAccelerated?: Bool32;
  integerDotProduct8BitMixedSignednessAccelerated?: Bool32;
  integerDotProduct4x8BitPackedUnsignedAccelerated?: Bool32;
  integerDotProduct4x8BitPackedSignedAccelerated?: Bool32;
  integerDotProduct4x8BitPackedMixedSignednessAccelerated?: Bool32;
  integerDotProduct16BitUnsignedAccelerated?: Bool32;
  integerDotProduct16BitSignedAccelerated?: Bool32;
  integerDotProduct16BitMixedSignednessAccelerated?: Bool32;
  integerDotProduct32BitUnsignedAccelerated?: Bool32;
  integerDotProduct32BitSignedAccelerated?: Bool32;
  integerDotProduct32BitMixedSignednessAccelerated?: Bool32;
  integerDotProduct64BitUnsignedAccelerated?: Bool32;
  integerDotProduct64BitSignedAccelerated?: Bool32;
  integerDotProduct64BitMixedSignednessAccelerated?: Bool32;
  integerDotProductAccumulatingSaturating8BitUnsignedAccelerated?: Bool32;
  integerDotProductAccumulatingSaturating8BitSignedAccelerated?: Bool32;
  integerDotProductAccumulatingSaturating8BitMixedSignednessAccelerated?: Bool32;
  integerDotProductAccumulatingSaturating4x8BitPackedUnsignedAccelerated?: Bool32;
  integerDotProductAccumulatingSaturating4x8BitPackedSignedAccelerated?: Bool32;
  integerDotProductAccumulatingSaturating4x8BitPackedMixedSignednessAccelerated?: Bool32;
  integerDotProductAccumulatingSaturating16BitUnsignedAccelerated?: Bool32;
  integerDotProductAccumulatingSaturating16BitSignedAccelerated?: Bool32;
  integerDotProductAccumulatingSaturating16BitMixedSignednessAccelerated?: Bool32;
  integerDotProductAccumulatingSaturating32BitUnsignedAccelerated?: Bool32;
  integerDotProductAccumulatingSaturating32BitSignedAccelerated?: Bool32;
  integerDotProductAccumulatingSaturating32BitMixedSignednessAccelerated?: Bool32;
  integerDotProductAccumulatingSaturating64BitUnsignedAccelerated?: Bool32;
  integerDotProductAccumulatingSaturating64BitSignedAccelerated?: Bool32;
  integerDotProductAccumulatingSaturating64BitMixedSignednessAccelerated?: Bool32;
}

export class PhysicalDeviceShaderIntegerDotProductProperties implements BaseStruct {
  static size = 136;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceShaderIntegerDotProductProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceShaderIntegerDotProductProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceShaderIntegerDotProductProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceShaderIntegerDotProductProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceShaderIntegerDotProductProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.integerDotProduct8BitUnsignedAccelerated !== undefined) this.integerDotProduct8BitUnsignedAccelerated = data.integerDotProduct8BitUnsignedAccelerated;
      if (data.integerDotProduct8BitSignedAccelerated !== undefined) this.integerDotProduct8BitSignedAccelerated = data.integerDotProduct8BitSignedAccelerated;
      if (data.integerDotProduct8BitMixedSignednessAccelerated !== undefined) this.integerDotProduct8BitMixedSignednessAccelerated = data.integerDotProduct8BitMixedSignednessAccelerated;
      if (data.integerDotProduct4x8BitPackedUnsignedAccelerated !== undefined) this.integerDotProduct4x8BitPackedUnsignedAccelerated = data.integerDotProduct4x8BitPackedUnsignedAccelerated;
      if (data.integerDotProduct4x8BitPackedSignedAccelerated !== undefined) this.integerDotProduct4x8BitPackedSignedAccelerated = data.integerDotProduct4x8BitPackedSignedAccelerated;
      if (data.integerDotProduct4x8BitPackedMixedSignednessAccelerated !== undefined) this.integerDotProduct4x8BitPackedMixedSignednessAccelerated = data.integerDotProduct4x8BitPackedMixedSignednessAccelerated;
      if (data.integerDotProduct16BitUnsignedAccelerated !== undefined) this.integerDotProduct16BitUnsignedAccelerated = data.integerDotProduct16BitUnsignedAccelerated;
      if (data.integerDotProduct16BitSignedAccelerated !== undefined) this.integerDotProduct16BitSignedAccelerated = data.integerDotProduct16BitSignedAccelerated;
      if (data.integerDotProduct16BitMixedSignednessAccelerated !== undefined) this.integerDotProduct16BitMixedSignednessAccelerated = data.integerDotProduct16BitMixedSignednessAccelerated;
      if (data.integerDotProduct32BitUnsignedAccelerated !== undefined) this.integerDotProduct32BitUnsignedAccelerated = data.integerDotProduct32BitUnsignedAccelerated;
      if (data.integerDotProduct32BitSignedAccelerated !== undefined) this.integerDotProduct32BitSignedAccelerated = data.integerDotProduct32BitSignedAccelerated;
      if (data.integerDotProduct32BitMixedSignednessAccelerated !== undefined) this.integerDotProduct32BitMixedSignednessAccelerated = data.integerDotProduct32BitMixedSignednessAccelerated;
      if (data.integerDotProduct64BitUnsignedAccelerated !== undefined) this.integerDotProduct64BitUnsignedAccelerated = data.integerDotProduct64BitUnsignedAccelerated;
      if (data.integerDotProduct64BitSignedAccelerated !== undefined) this.integerDotProduct64BitSignedAccelerated = data.integerDotProduct64BitSignedAccelerated;
      if (data.integerDotProduct64BitMixedSignednessAccelerated !== undefined) this.integerDotProduct64BitMixedSignednessAccelerated = data.integerDotProduct64BitMixedSignednessAccelerated;
      if (data.integerDotProductAccumulatingSaturating8BitUnsignedAccelerated !== undefined) this.integerDotProductAccumulatingSaturating8BitUnsignedAccelerated = data.integerDotProductAccumulatingSaturating8BitUnsignedAccelerated;
      if (data.integerDotProductAccumulatingSaturating8BitSignedAccelerated !== undefined) this.integerDotProductAccumulatingSaturating8BitSignedAccelerated = data.integerDotProductAccumulatingSaturating8BitSignedAccelerated;
      if (data.integerDotProductAccumulatingSaturating8BitMixedSignednessAccelerated !== undefined) this.integerDotProductAccumulatingSaturating8BitMixedSignednessAccelerated = data.integerDotProductAccumulatingSaturating8BitMixedSignednessAccelerated;
      if (data.integerDotProductAccumulatingSaturating4x8BitPackedUnsignedAccelerated !== undefined) this.integerDotProductAccumulatingSaturating4x8BitPackedUnsignedAccelerated = data.integerDotProductAccumulatingSaturating4x8BitPackedUnsignedAccelerated;
      if (data.integerDotProductAccumulatingSaturating4x8BitPackedSignedAccelerated !== undefined) this.integerDotProductAccumulatingSaturating4x8BitPackedSignedAccelerated = data.integerDotProductAccumulatingSaturating4x8BitPackedSignedAccelerated;
      if (data.integerDotProductAccumulatingSaturating4x8BitPackedMixedSignednessAccelerated !== undefined) this.integerDotProductAccumulatingSaturating4x8BitPackedMixedSignednessAccelerated = data.integerDotProductAccumulatingSaturating4x8BitPackedMixedSignednessAccelerated;
      if (data.integerDotProductAccumulatingSaturating16BitUnsignedAccelerated !== undefined) this.integerDotProductAccumulatingSaturating16BitUnsignedAccelerated = data.integerDotProductAccumulatingSaturating16BitUnsignedAccelerated;
      if (data.integerDotProductAccumulatingSaturating16BitSignedAccelerated !== undefined) this.integerDotProductAccumulatingSaturating16BitSignedAccelerated = data.integerDotProductAccumulatingSaturating16BitSignedAccelerated;
      if (data.integerDotProductAccumulatingSaturating16BitMixedSignednessAccelerated !== undefined) this.integerDotProductAccumulatingSaturating16BitMixedSignednessAccelerated = data.integerDotProductAccumulatingSaturating16BitMixedSignednessAccelerated;
      if (data.integerDotProductAccumulatingSaturating32BitUnsignedAccelerated !== undefined) this.integerDotProductAccumulatingSaturating32BitUnsignedAccelerated = data.integerDotProductAccumulatingSaturating32BitUnsignedAccelerated;
      if (data.integerDotProductAccumulatingSaturating32BitSignedAccelerated !== undefined) this.integerDotProductAccumulatingSaturating32BitSignedAccelerated = data.integerDotProductAccumulatingSaturating32BitSignedAccelerated;
      if (data.integerDotProductAccumulatingSaturating32BitMixedSignednessAccelerated !== undefined) this.integerDotProductAccumulatingSaturating32BitMixedSignednessAccelerated = data.integerDotProductAccumulatingSaturating32BitMixedSignednessAccelerated;
      if (data.integerDotProductAccumulatingSaturating64BitUnsignedAccelerated !== undefined) this.integerDotProductAccumulatingSaturating64BitUnsignedAccelerated = data.integerDotProductAccumulatingSaturating64BitUnsignedAccelerated;
      if (data.integerDotProductAccumulatingSaturating64BitSignedAccelerated !== undefined) this.integerDotProductAccumulatingSaturating64BitSignedAccelerated = data.integerDotProductAccumulatingSaturating64BitSignedAccelerated;
      if (data.integerDotProductAccumulatingSaturating64BitMixedSignednessAccelerated !== undefined) this.integerDotProductAccumulatingSaturating64BitMixedSignednessAccelerated = data.integerDotProductAccumulatingSaturating64BitMixedSignednessAccelerated;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceShaderIntegerDotProductProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SHADER_INTEGER_DOT_PRODUCT_PROPERTIES;
  }

  get sType() {
    return this.#view.getUint32(0, LE);
  }

  set sType(value: StructureType) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pNext() {
    return pointerFromView(this.#view, 8, LE);
  }

  set pNext(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }

  get integerDotProduct8BitUnsignedAccelerated() {
    return this.#view.getUint32(16, LE);
  }

  set integerDotProduct8BitUnsignedAccelerated(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get integerDotProduct8BitSignedAccelerated() {
    return this.#view.getUint32(20, LE);
  }

  set integerDotProduct8BitSignedAccelerated(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get integerDotProduct8BitMixedSignednessAccelerated() {
    return this.#view.getUint32(24, LE);
  }

  set integerDotProduct8BitMixedSignednessAccelerated(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get integerDotProduct4x8BitPackedUnsignedAccelerated() {
    return this.#view.getUint32(28, LE);
  }

  set integerDotProduct4x8BitPackedUnsignedAccelerated(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get integerDotProduct4x8BitPackedSignedAccelerated() {
    return this.#view.getUint32(32, LE);
  }

  set integerDotProduct4x8BitPackedSignedAccelerated(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get integerDotProduct4x8BitPackedMixedSignednessAccelerated() {
    return this.#view.getUint32(36, LE);
  }

  set integerDotProduct4x8BitPackedMixedSignednessAccelerated(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get integerDotProduct16BitUnsignedAccelerated() {
    return this.#view.getUint32(40, LE);
  }

  set integerDotProduct16BitUnsignedAccelerated(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get integerDotProduct16BitSignedAccelerated() {
    return this.#view.getUint32(44, LE);
  }

  set integerDotProduct16BitSignedAccelerated(value: Bool32) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get integerDotProduct16BitMixedSignednessAccelerated() {
    return this.#view.getUint32(48, LE);
  }

  set integerDotProduct16BitMixedSignednessAccelerated(value: Bool32) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get integerDotProduct32BitUnsignedAccelerated() {
    return this.#view.getUint32(52, LE);
  }

  set integerDotProduct32BitUnsignedAccelerated(value: Bool32) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get integerDotProduct32BitSignedAccelerated() {
    return this.#view.getUint32(56, LE);
  }

  set integerDotProduct32BitSignedAccelerated(value: Bool32) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get integerDotProduct32BitMixedSignednessAccelerated() {
    return this.#view.getUint32(60, LE);
  }

  set integerDotProduct32BitMixedSignednessAccelerated(value: Bool32) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get integerDotProduct64BitUnsignedAccelerated() {
    return this.#view.getUint32(64, LE);
  }

  set integerDotProduct64BitUnsignedAccelerated(value: Bool32) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get integerDotProduct64BitSignedAccelerated() {
    return this.#view.getUint32(68, LE);
  }

  set integerDotProduct64BitSignedAccelerated(value: Bool32) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get integerDotProduct64BitMixedSignednessAccelerated() {
    return this.#view.getUint32(72, LE);
  }

  set integerDotProduct64BitMixedSignednessAccelerated(value: Bool32) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get integerDotProductAccumulatingSaturating8BitUnsignedAccelerated() {
    return this.#view.getUint32(76, LE);
  }

  set integerDotProductAccumulatingSaturating8BitUnsignedAccelerated(value: Bool32) {
    this.#view.setUint32(76, Number(value), LE);
  }

  get integerDotProductAccumulatingSaturating8BitSignedAccelerated() {
    return this.#view.getUint32(80, LE);
  }

  set integerDotProductAccumulatingSaturating8BitSignedAccelerated(value: Bool32) {
    this.#view.setUint32(80, Number(value), LE);
  }

  get integerDotProductAccumulatingSaturating8BitMixedSignednessAccelerated() {
    return this.#view.getUint32(84, LE);
  }

  set integerDotProductAccumulatingSaturating8BitMixedSignednessAccelerated(value: Bool32) {
    this.#view.setUint32(84, Number(value), LE);
  }

  get integerDotProductAccumulatingSaturating4x8BitPackedUnsignedAccelerated() {
    return this.#view.getUint32(88, LE);
  }

  set integerDotProductAccumulatingSaturating4x8BitPackedUnsignedAccelerated(value: Bool32) {
    this.#view.setUint32(88, Number(value), LE);
  }

  get integerDotProductAccumulatingSaturating4x8BitPackedSignedAccelerated() {
    return this.#view.getUint32(92, LE);
  }

  set integerDotProductAccumulatingSaturating4x8BitPackedSignedAccelerated(value: Bool32) {
    this.#view.setUint32(92, Number(value), LE);
  }

  get integerDotProductAccumulatingSaturating4x8BitPackedMixedSignednessAccelerated() {
    return this.#view.getUint32(96, LE);
  }

  set integerDotProductAccumulatingSaturating4x8BitPackedMixedSignednessAccelerated(value: Bool32) {
    this.#view.setUint32(96, Number(value), LE);
  }

  get integerDotProductAccumulatingSaturating16BitUnsignedAccelerated() {
    return this.#view.getUint32(100, LE);
  }

  set integerDotProductAccumulatingSaturating16BitUnsignedAccelerated(value: Bool32) {
    this.#view.setUint32(100, Number(value), LE);
  }

  get integerDotProductAccumulatingSaturating16BitSignedAccelerated() {
    return this.#view.getUint32(104, LE);
  }

  set integerDotProductAccumulatingSaturating16BitSignedAccelerated(value: Bool32) {
    this.#view.setUint32(104, Number(value), LE);
  }

  get integerDotProductAccumulatingSaturating16BitMixedSignednessAccelerated() {
    return this.#view.getUint32(108, LE);
  }

  set integerDotProductAccumulatingSaturating16BitMixedSignednessAccelerated(value: Bool32) {
    this.#view.setUint32(108, Number(value), LE);
  }

  get integerDotProductAccumulatingSaturating32BitUnsignedAccelerated() {
    return this.#view.getUint32(112, LE);
  }

  set integerDotProductAccumulatingSaturating32BitUnsignedAccelerated(value: Bool32) {
    this.#view.setUint32(112, Number(value), LE);
  }

  get integerDotProductAccumulatingSaturating32BitSignedAccelerated() {
    return this.#view.getUint32(116, LE);
  }

  set integerDotProductAccumulatingSaturating32BitSignedAccelerated(value: Bool32) {
    this.#view.setUint32(116, Number(value), LE);
  }

  get integerDotProductAccumulatingSaturating32BitMixedSignednessAccelerated() {
    return this.#view.getUint32(120, LE);
  }

  set integerDotProductAccumulatingSaturating32BitMixedSignednessAccelerated(value: Bool32) {
    this.#view.setUint32(120, Number(value), LE);
  }

  get integerDotProductAccumulatingSaturating64BitUnsignedAccelerated() {
    return this.#view.getUint32(124, LE);
  }

  set integerDotProductAccumulatingSaturating64BitUnsignedAccelerated(value: Bool32) {
    this.#view.setUint32(124, Number(value), LE);
  }

  get integerDotProductAccumulatingSaturating64BitSignedAccelerated() {
    return this.#view.getUint32(128, LE);
  }

  set integerDotProductAccumulatingSaturating64BitSignedAccelerated(value: Bool32) {
    this.#view.setUint32(128, Number(value), LE);
  }

  get integerDotProductAccumulatingSaturating64BitMixedSignednessAccelerated() {
    return this.#view.getUint32(132, LE);
  }

  set integerDotProductAccumulatingSaturating64BitMixedSignednessAccelerated(value: Bool32) {
    this.#view.setUint32(132, Number(value), LE);
  }
}