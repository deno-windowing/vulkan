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

export interface InitPhysicalDeviceShaderIntegerFunctions2FeaturesINTEL {
  pNext?: AnyPointer;
  shaderIntegerFunctions2?: Bool32;
}

export class PhysicalDeviceShaderIntegerFunctions2FeaturesINTEL implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceShaderIntegerFunctions2FeaturesINTEL);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceShaderIntegerFunctions2FeaturesINTEL) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceShaderIntegerFunctions2FeaturesINTEL.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceShaderIntegerFunctions2FeaturesINTEL.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceShaderIntegerFunctions2FeaturesINTEL.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.shaderIntegerFunctions2 !== undefined) this.shaderIntegerFunctions2 = data.shaderIntegerFunctions2;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceShaderIntegerFunctions2FeaturesINTEL.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_SHADER_INTEGER_FUNCTIONS_2_FEATURES_INTEL;
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

  get shaderIntegerFunctions2(): number {
    return this.#view.getUint32(16, LE);
  }

  set shaderIntegerFunctions2(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }
}