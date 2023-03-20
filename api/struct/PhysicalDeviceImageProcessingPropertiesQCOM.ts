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
import {Extent2D} from "./Extent2D.ts";
import { StructureType } from "../enum.ts";

export interface InitPhysicalDeviceImageProcessingPropertiesQCOM {
  pNext?: AnyPointer;
  maxWeightFilterPhases?: number;
  maxWeightFilterDimension?: Extent2D;
  maxBlockMatchRegion?: Extent2D;
  maxBoxFilterBlockSize?: Extent2D;
}

export class PhysicalDeviceImageProcessingPropertiesQCOM implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceImageProcessingPropertiesQCOM);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceImageProcessingPropertiesQCOM) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceImageProcessingPropertiesQCOM.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceImageProcessingPropertiesQCOM.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceImageProcessingPropertiesQCOM.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxWeightFilterPhases !== undefined) this.maxWeightFilterPhases = data.maxWeightFilterPhases;
      if (data.maxWeightFilterDimension !== undefined) this.maxWeightFilterDimension = data.maxWeightFilterDimension;
      if (data.maxBlockMatchRegion !== undefined) this.maxBlockMatchRegion = data.maxBlockMatchRegion;
      if (data.maxBoxFilterBlockSize !== undefined) this.maxBoxFilterBlockSize = data.maxBoxFilterBlockSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceImageProcessingPropertiesQCOM.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_IMAGE_PROCESSING_PROPERTIES_QCOM;
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

  get maxWeightFilterPhases(): number {
    return this.#view.getUint32(16, LE);
  }

  set maxWeightFilterPhases(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxWeightFilterDimension(): Extent2D {
    return new Extent2D(this.#data.subarray(20, 20 + Extent2D.size));
  }

  set maxWeightFilterDimension(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 20);
  }

  get maxBlockMatchRegion(): Extent2D {
    return new Extent2D(this.#data.subarray(28, 28 + Extent2D.size));
  }

  set maxBlockMatchRegion(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 28);
  }

  get maxBoxFilterBlockSize(): Extent2D {
    return new Extent2D(this.#data.subarray(36, 36 + Extent2D.size));
  }

  set maxBoxFilterBlockSize(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 36);
  }
}