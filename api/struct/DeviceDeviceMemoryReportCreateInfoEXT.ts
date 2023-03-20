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
import { DeviceMemoryReportFlagsEXT } from "../def.ts";

export interface InitDeviceDeviceMemoryReportCreateInfoEXT {
  pNext?: AnyPointer;
  flags?: DeviceMemoryReportFlagsEXT;
  pfnUserCallback?: Deno.PointerValue;
  pUserData?: AnyPointer;
}

export class DeviceDeviceMemoryReportCreateInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDeviceDeviceMemoryReportCreateInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDeviceDeviceMemoryReportCreateInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DeviceDeviceMemoryReportCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DeviceDeviceMemoryReportCreateInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DeviceDeviceMemoryReportCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.pfnUserCallback !== undefined) this.pfnUserCallback = data.pfnUserCallback;
      if (data.pUserData !== undefined) this.pUserData = data.pUserData;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DeviceDeviceMemoryReportCreateInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEVICE_DEVICE_MEMORY_REPORT_CREATE_INFO_EXT;
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

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: DeviceMemoryReportFlagsEXT) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pfnUserCallback(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pfnUserCallback(value: Deno.PointerValue) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get pUserData(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pUserData(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}