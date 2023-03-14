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
import { StructureType, DeviceMemoryReportEventTypeEXT, ObjectType } from "../enum.ts";
import { DeviceMemoryReportFlagsEXT, DeviceSize } from "../def.ts";

export interface InitDeviceMemoryReportCallbackDataEXT {
  pNext?: AnyPointer;
  flags?: DeviceMemoryReportFlagsEXT;
  type?: DeviceMemoryReportEventTypeEXT;
  memoryObjectId?: number | bigint;
  size?: DeviceSize;
  objectType?: ObjectType;
  objectHandle?: number | bigint;
  heapIndex?: number;
}

export class DeviceMemoryReportCallbackDataEXT implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDeviceMemoryReportCallbackDataEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDeviceMemoryReportCallbackDataEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DeviceMemoryReportCallbackDataEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DeviceMemoryReportCallbackDataEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DeviceMemoryReportCallbackDataEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.type !== undefined) this.type = data.type;
      if (data.memoryObjectId !== undefined) this.memoryObjectId = data.memoryObjectId;
      if (data.size !== undefined) this.size = data.size;
      if (data.objectType !== undefined) this.objectType = data.objectType;
      if (data.objectHandle !== undefined) this.objectHandle = data.objectHandle;
      if (data.heapIndex !== undefined) this.heapIndex = data.heapIndex;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DeviceMemoryReportCallbackDataEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEVICE_MEMORY_REPORT_CALLBACK_DATA_EXT;
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

  get flags() {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: DeviceMemoryReportFlagsEXT) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get type() {
    return this.#view.getUint32(20, LE);
  }

  set type(value: DeviceMemoryReportEventTypeEXT) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get memoryObjectId() {
    return this.#view.getBigUint64(24, LE);
  }

  set memoryObjectId(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get size() {
    return this.#view.getBigUint64(32, LE);
  }

  set size(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get objectType() {
    return this.#view.getUint32(40, LE);
  }

  set objectType(value: ObjectType) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get objectHandle() {
    return this.#view.getBigUint64(48, LE);
  }

  set objectHandle(value: number | bigint) {
    this.#view.setBigUint64(48, BigInt(value), LE);
  }

  get heapIndex() {
    return this.#view.getUint32(56, LE);
  }

  set heapIndex(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }
}