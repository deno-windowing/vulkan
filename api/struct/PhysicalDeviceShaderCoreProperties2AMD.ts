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
import { ShaderCorePropertiesFlagsAMD } from "../def.ts";

export interface InitPhysicalDeviceShaderCoreProperties2AMD {
  pNext?: AnyPointer;
  shaderCoreFeatures?: ShaderCorePropertiesFlagsAMD;
  activeComputeUnitCount?: number;
}

export class PhysicalDeviceShaderCoreProperties2AMD implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceShaderCoreProperties2AMD);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceShaderCoreProperties2AMD) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceShaderCoreProperties2AMD.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceShaderCoreProperties2AMD.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceShaderCoreProperties2AMD.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shaderCoreFeatures !== undefined) this.shaderCoreFeatures = data.shaderCoreFeatures;
      if (data.activeComputeUnitCount !== undefined) this.activeComputeUnitCount = data.activeComputeUnitCount;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceShaderCoreProperties2AMD.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SHADER_CORE_PROPERTIES_2_AMD;
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

  get shaderCoreFeatures(): number {
    return this.#view.getUint32(16, LE);
  }

  set shaderCoreFeatures(value: ShaderCorePropertiesFlagsAMD) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get activeComputeUnitCount(): number {
    return this.#view.getUint32(20, LE);
  }

  set activeComputeUnitCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }
}