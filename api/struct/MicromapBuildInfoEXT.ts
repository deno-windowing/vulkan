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
import { StructureType, MicromapTypeEXT, BuildMicromapModeEXT } from "../enum.ts";
import { BuildMicromapFlagsEXT, MicromapEXT, DeviceSize } from "../def.ts";
import { DeviceOrHostAddressConstKHR, DeviceOrHostAddressKHR } from "../union.ts";

export interface InitMicromapBuildInfoEXT {
  pNext?: AnyPointer;
  type?: MicromapTypeEXT;
  flags?: BuildMicromapFlagsEXT;
  mode?: BuildMicromapModeEXT;
  dstMicromap?: MicromapEXT;
  usageCountsCount?: number;
  pUsageCounts?: AnyPointer;
  ppUsageCounts?: AnyPointer;
  data?: DeviceOrHostAddressConstKHR;
  scratchData?: DeviceOrHostAddressKHR;
  triangleArray?: DeviceOrHostAddressConstKHR;
  triangleArrayStride?: DeviceSize;
}

export class MicromapBuildInfoEXT implements BaseStruct {
  static size = 96;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMicromapBuildInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMicromapBuildInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MicromapBuildInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MicromapBuildInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MicromapBuildInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.type !== undefined) this.type = data.type;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.mode !== undefined) this.mode = data.mode;
      if (data.dstMicromap !== undefined) this.dstMicromap = data.dstMicromap;
      if (data.usageCountsCount !== undefined) this.usageCountsCount = data.usageCountsCount;
      if (data.pUsageCounts !== undefined) this.pUsageCounts = data.pUsageCounts;
      if (data.ppUsageCounts !== undefined) this.ppUsageCounts = data.ppUsageCounts;
      if (data.data !== undefined) this.data = data.data;
      if (data.scratchData !== undefined) this.scratchData = data.scratchData;
      if (data.triangleArray !== undefined) this.triangleArray = data.triangleArray;
      if (data.triangleArrayStride !== undefined) this.triangleArrayStride = data.triangleArrayStride;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MicromapBuildInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.MICROMAP_BUILD_INFO_EXT;
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

  get type() {
    return this.#view.getUint32(16, LE);
  }

  set type(value: MicromapTypeEXT) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get flags() {
    return this.#view.getUint32(20, LE);
  }

  set flags(value: BuildMicromapFlagsEXT) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get mode() {
    return this.#view.getUint32(24, LE);
  }

  set mode(value: BuildMicromapModeEXT) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get dstMicromap() {
    return pointerFromView(this.#view, 32, LE);
  }

  set dstMicromap(value: MicromapEXT) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get usageCountsCount() {
    return this.#view.getUint32(40, LE);
  }

  set usageCountsCount(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get pUsageCounts() {
    return pointerFromView(this.#view, 48, LE);
  }

  set pUsageCounts(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }

  get ppUsageCounts() {
    return pointerFromView(this.#view, 56, LE);
  }

  set ppUsageCounts(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }

  get data() {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  set data(value: DeviceOrHostAddressConstKHR) {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  get scratchData() {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  set scratchData(value: DeviceOrHostAddressKHR) {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  get triangleArray() {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  set triangleArray(value: DeviceOrHostAddressConstKHR) {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  get triangleArrayStride() {
    return this.#view.getBigUint64(88, LE);
  }

  set triangleArrayStride(value: DeviceSize) {
    this.#view.setBigUint64(88, BigInt(value), LE);
  }
}