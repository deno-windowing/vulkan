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
import { DeviceSize } from "../def.ts";

export interface InitAccelerationStructureBuildSizesInfoKHR {
  pNext?: AnyPointer;
  accelerationStructureSize?: DeviceSize;
  updateScratchSize?: DeviceSize;
  buildScratchSize?: DeviceSize;
}

export class AccelerationStructureBuildSizesInfoKHR implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAccelerationStructureBuildSizesInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAccelerationStructureBuildSizesInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AccelerationStructureBuildSizesInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AccelerationStructureBuildSizesInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AccelerationStructureBuildSizesInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.accelerationStructureSize !== undefined) this.accelerationStructureSize = data.accelerationStructureSize;
      if (data.updateScratchSize !== undefined) this.updateScratchSize = data.updateScratchSize;
      if (data.buildScratchSize !== undefined) this.buildScratchSize = data.buildScratchSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AccelerationStructureBuildSizesInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ACCELERATION_STRUCTURE_BUILD_SIZES_INFO_KHR;
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

  get accelerationStructureSize(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set accelerationStructureSize(value: DeviceSize) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get updateScratchSize(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set updateScratchSize(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get buildScratchSize(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set buildScratchSize(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }
}