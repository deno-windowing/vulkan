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

export interface InitPhysicalDeviceShaderEarlyAndLateFragmentTestsFeaturesAMD {
  pNext?: AnyPointer;
  shaderEarlyAndLateFragmentTests?: Bool32;
}

export class PhysicalDeviceShaderEarlyAndLateFragmentTestsFeaturesAMD implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceShaderEarlyAndLateFragmentTestsFeaturesAMD);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceShaderEarlyAndLateFragmentTestsFeaturesAMD) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceShaderEarlyAndLateFragmentTestsFeaturesAMD.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceShaderEarlyAndLateFragmentTestsFeaturesAMD.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceShaderEarlyAndLateFragmentTestsFeaturesAMD.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shaderEarlyAndLateFragmentTests !== undefined) this.shaderEarlyAndLateFragmentTests = data.shaderEarlyAndLateFragmentTests;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceShaderEarlyAndLateFragmentTestsFeaturesAMD.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SHADER_EARLY_AND_LATE_FRAGMENT_TESTS_FEATURES_AMD;
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

  get shaderEarlyAndLateFragmentTests(): number {
    return this.#view.getUint32(16, LE);
  }

  set shaderEarlyAndLateFragmentTests(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }
}