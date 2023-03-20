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
import { MemoryDecompressionMethodFlagsNV } from "../def.ts";

export interface InitPhysicalDeviceMemoryDecompressionPropertiesNV {
  pNext?: AnyPointer;
  decompressionMethods?: MemoryDecompressionMethodFlagsNV;
  maxDecompressionIndirectCount?: number | bigint;
}

export class PhysicalDeviceMemoryDecompressionPropertiesNV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceMemoryDecompressionPropertiesNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceMemoryDecompressionPropertiesNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceMemoryDecompressionPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceMemoryDecompressionPropertiesNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceMemoryDecompressionPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.decompressionMethods !== undefined) this.decompressionMethods = data.decompressionMethods;
      if (data.maxDecompressionIndirectCount !== undefined) this.maxDecompressionIndirectCount = data.maxDecompressionIndirectCount;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceMemoryDecompressionPropertiesNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_MEMORY_DECOMPRESSION_PROPERTIES_NV;
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

  get decompressionMethods(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set decompressionMethods(value: MemoryDecompressionMethodFlagsNV) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get maxDecompressionIndirectCount(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set maxDecompressionIndirectCount(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }
}