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

export interface InitPhysicalDeviceAccelerationStructureFeaturesKHR {
  pNext?: AnyPointer;
  accelerationStructure?: Bool32;
  accelerationStructureCaptureReplay?: Bool32;
  accelerationStructureIndirectBuild?: Bool32;
  accelerationStructureHostCommands?: Bool32;
  descriptorBindingAccelerationStructureUpdateAfterBind?: Bool32;
}

export class PhysicalDeviceAccelerationStructureFeaturesKHR implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceAccelerationStructureFeaturesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceAccelerationStructureFeaturesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceAccelerationStructureFeaturesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceAccelerationStructureFeaturesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceAccelerationStructureFeaturesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.accelerationStructure !== undefined) this.accelerationStructure = data.accelerationStructure;
      if (data.accelerationStructureCaptureReplay !== undefined) this.accelerationStructureCaptureReplay = data.accelerationStructureCaptureReplay;
      if (data.accelerationStructureIndirectBuild !== undefined) this.accelerationStructureIndirectBuild = data.accelerationStructureIndirectBuild;
      if (data.accelerationStructureHostCommands !== undefined) this.accelerationStructureHostCommands = data.accelerationStructureHostCommands;
      if (data.descriptorBindingAccelerationStructureUpdateAfterBind !== undefined) this.descriptorBindingAccelerationStructureUpdateAfterBind = data.descriptorBindingAccelerationStructureUpdateAfterBind;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceAccelerationStructureFeaturesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_ACCELERATION_STRUCTURE_FEATURES_KHR;
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

  get accelerationStructure(): number {
    return this.#view.getUint32(16, LE);
  }

  set accelerationStructure(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get accelerationStructureCaptureReplay(): number {
    return this.#view.getUint32(20, LE);
  }

  set accelerationStructureCaptureReplay(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get accelerationStructureIndirectBuild(): number {
    return this.#view.getUint32(24, LE);
  }

  set accelerationStructureIndirectBuild(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get accelerationStructureHostCommands(): number {
    return this.#view.getUint32(28, LE);
  }

  set accelerationStructureHostCommands(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get descriptorBindingAccelerationStructureUpdateAfterBind(): number {
    return this.#view.getUint32(32, LE);
  }

  set descriptorBindingAccelerationStructureUpdateAfterBind(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }
}