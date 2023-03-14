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

export interface InitPhysicalDeviceConservativeRasterizationPropertiesEXT {
  pNext?: AnyPointer;
  primitiveOverestimationSize?: number;
  maxExtraPrimitiveOverestimationSize?: number;
  extraPrimitiveOverestimationSizeGranularity?: number;
  primitiveUnderestimation?: Bool32;
  conservativePointAndLineRasterization?: Bool32;
  degenerateTrianglesRasterized?: Bool32;
  degenerateLinesRasterized?: Bool32;
  fullyCoveredFragmentShaderInputVariable?: Bool32;
  conservativeRasterizationPostDepthCoverage?: Bool32;
}

export class PhysicalDeviceConservativeRasterizationPropertiesEXT implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceConservativeRasterizationPropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceConservativeRasterizationPropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceConservativeRasterizationPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceConservativeRasterizationPropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceConservativeRasterizationPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.primitiveOverestimationSize !== undefined) this.primitiveOverestimationSize = data.primitiveOverestimationSize;
      if (data.maxExtraPrimitiveOverestimationSize !== undefined) this.maxExtraPrimitiveOverestimationSize = data.maxExtraPrimitiveOverestimationSize;
      if (data.extraPrimitiveOverestimationSizeGranularity !== undefined) this.extraPrimitiveOverestimationSizeGranularity = data.extraPrimitiveOverestimationSizeGranularity;
      if (data.primitiveUnderestimation !== undefined) this.primitiveUnderestimation = data.primitiveUnderestimation;
      if (data.conservativePointAndLineRasterization !== undefined) this.conservativePointAndLineRasterization = data.conservativePointAndLineRasterization;
      if (data.degenerateTrianglesRasterized !== undefined) this.degenerateTrianglesRasterized = data.degenerateTrianglesRasterized;
      if (data.degenerateLinesRasterized !== undefined) this.degenerateLinesRasterized = data.degenerateLinesRasterized;
      if (data.fullyCoveredFragmentShaderInputVariable !== undefined) this.fullyCoveredFragmentShaderInputVariable = data.fullyCoveredFragmentShaderInputVariable;
      if (data.conservativeRasterizationPostDepthCoverage !== undefined) this.conservativeRasterizationPostDepthCoverage = data.conservativeRasterizationPostDepthCoverage;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceConservativeRasterizationPropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_CONSERVATIVE_RASTERIZATION_PROPERTIES_EXT;
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

  get primitiveOverestimationSize() {
    return this.#view.getFloat32(16, LE);
  }

  set primitiveOverestimationSize(value: number) {
    this.#view.setFloat32(16, Number(value), LE);
  }

  get maxExtraPrimitiveOverestimationSize() {
    return this.#view.getFloat32(20, LE);
  }

  set maxExtraPrimitiveOverestimationSize(value: number) {
    this.#view.setFloat32(20, Number(value), LE);
  }

  get extraPrimitiveOverestimationSizeGranularity() {
    return this.#view.getFloat32(24, LE);
  }

  set extraPrimitiveOverestimationSizeGranularity(value: number) {
    this.#view.setFloat32(24, Number(value), LE);
  }

  get primitiveUnderestimation() {
    return this.#view.getUint32(28, LE);
  }

  set primitiveUnderestimation(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get conservativePointAndLineRasterization() {
    return this.#view.getUint32(32, LE);
  }

  set conservativePointAndLineRasterization(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get degenerateTrianglesRasterized() {
    return this.#view.getUint32(36, LE);
  }

  set degenerateTrianglesRasterized(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get degenerateLinesRasterized() {
    return this.#view.getUint32(40, LE);
  }

  set degenerateLinesRasterized(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get fullyCoveredFragmentShaderInputVariable() {
    return this.#view.getUint32(44, LE);
  }

  set fullyCoveredFragmentShaderInputVariable(value: Bool32) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get conservativeRasterizationPostDepthCoverage() {
    return this.#view.getUint32(48, LE);
  }

  set conservativeRasterizationPostDepthCoverage(value: Bool32) {
    this.#view.setUint32(48, Number(value), LE);
  }
}