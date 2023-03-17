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

export interface InitPhysicalDeviceShaderSMBuiltinsPropertiesNV {
  pNext?: AnyPointer;
  shaderSMCount?: number;
  shaderWarpsPerSM?: number;
}

export class PhysicalDeviceShaderSMBuiltinsPropertiesNV implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceShaderSMBuiltinsPropertiesNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceShaderSMBuiltinsPropertiesNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceShaderSMBuiltinsPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceShaderSMBuiltinsPropertiesNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceShaderSMBuiltinsPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shaderSMCount !== undefined) this.shaderSMCount = data.shaderSMCount;
      if (data.shaderWarpsPerSM !== undefined) this.shaderWarpsPerSM = data.shaderWarpsPerSM;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceShaderSMBuiltinsPropertiesNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SHADER_SM_BUILTINS_PROPERTIES_NV;
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

  get shaderSMCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set shaderSMCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get shaderWarpsPerSM(): number {
    return this.#view.getUint32(20, LE);
  }

  set shaderWarpsPerSM(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }
}