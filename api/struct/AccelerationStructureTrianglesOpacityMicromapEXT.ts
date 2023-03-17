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
import {MicromapUsageEXT} from "./MicromapUsageEXT.ts";
import { StructureType, IndexType } from "../enum.ts";
import { DeviceSize, MicromapEXT } from "../def.ts";
import { DeviceOrHostAddressConstKHR } from "../union.ts";

export interface InitAccelerationStructureTrianglesOpacityMicromapEXT {
  pNext?: AnyPointer;
  indexType?: IndexType;
  indexBuffer?: DeviceOrHostAddressConstKHR;
  indexStride?: DeviceSize;
  baseTriangle?: number;
  usageCountsCount?: number;
  pUsageCounts?: AnyPointer;
  ppUsageCounts?: AnyPointer;
  micromap?: MicromapEXT;
}

export class AccelerationStructureTrianglesOpacityMicromapEXT implements BaseStruct {
  static size = 72;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAccelerationStructureTrianglesOpacityMicromapEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAccelerationStructureTrianglesOpacityMicromapEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AccelerationStructureTrianglesOpacityMicromapEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AccelerationStructureTrianglesOpacityMicromapEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AccelerationStructureTrianglesOpacityMicromapEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.indexType !== undefined) this.indexType = data.indexType;
      if (data.indexBuffer !== undefined) this.indexBuffer = data.indexBuffer;
      if (data.indexStride !== undefined) this.indexStride = data.indexStride;
      if (data.baseTriangle !== undefined) this.baseTriangle = data.baseTriangle;
      if (data.usageCountsCount !== undefined) this.usageCountsCount = data.usageCountsCount;
      if (data.pUsageCounts !== undefined) this.pUsageCounts = data.pUsageCounts;
      if (data.ppUsageCounts !== undefined) this.ppUsageCounts = data.ppUsageCounts;
      if (data.micromap !== undefined) this.micromap = data.micromap;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AccelerationStructureTrianglesOpacityMicromapEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ACCELERATION_STRUCTURE_TRIANGLES_OPACITY_MICROMAP_EXT;
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

  get indexType(): number {
    return this.#view.getUint32(16, LE);
  }

  set indexType(value: IndexType) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get indexBuffer(): unknown {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  set indexBuffer(value: DeviceOrHostAddressConstKHR) {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  get indexStride(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set indexStride(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get baseTriangle(): number {
    return this.#view.getUint32(40, LE);
  }

  set baseTriangle(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get usageCountsCount(): number {
    return this.#view.getUint32(44, LE);
  }

  set usageCountsCount(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get pUsageCounts(): Deno.PointerValue {
    return pointerFromView(this.#view, 48, LE);
  }

  set pUsageCounts(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }

  get ppUsageCounts(): Deno.PointerValue {
    return pointerFromView(this.#view, 56, LE);
  }

  set ppUsageCounts(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }

  get micromap(): Deno.PointerValue {
    return pointerFromView(this.#view, 64, LE);
  }

  set micromap(value: MicromapEXT) {
    this.#view.setBigUint64(64, BigInt(anyPointer(value)), LE);
  }
}