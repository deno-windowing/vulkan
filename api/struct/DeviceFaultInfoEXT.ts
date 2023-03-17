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
import {DeviceFaultAddressInfoEXT} from "./DeviceFaultAddressInfoEXT.ts";
import {DeviceFaultVendorInfoEXT} from "./DeviceFaultVendorInfoEXT.ts";
import { StructureType } from "../enum.ts";

export interface InitDeviceFaultInfoEXT {
  pNext?: AnyPointer;
  description?: Uint8Array;
  pAddressInfos?: AnyPointer;
  pVendorInfos?: AnyPointer;
  pVendorBinaryData?: AnyPointer;
}

export class DeviceFaultInfoEXT implements BaseStruct {
  static size = 296;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDeviceFaultInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDeviceFaultInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DeviceFaultInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DeviceFaultInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DeviceFaultInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.description !== undefined) this.description = data.description;
      if (data.pAddressInfos !== undefined) this.pAddressInfos = data.pAddressInfos;
      if (data.pVendorInfos !== undefined) this.pVendorInfos = data.pVendorInfos;
      if (data.pVendorBinaryData !== undefined) this.pVendorBinaryData = data.pVendorBinaryData;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DeviceFaultInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEVICE_FAULT_INFO_EXT;
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

  get description(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 16, 256);
  }

  set description(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 16);
  }

  get pAddressInfos(): Deno.PointerValue {
    return pointerFromView(this.#view, 272, LE);
  }

  set pAddressInfos(value: AnyPointer) {
    this.#view.setBigUint64(272, BigInt(anyPointer(value)), LE);
  }

  get pVendorInfos(): Deno.PointerValue {
    return pointerFromView(this.#view, 280, LE);
  }

  set pVendorInfos(value: AnyPointer) {
    this.#view.setBigUint64(280, BigInt(anyPointer(value)), LE);
  }

  get pVendorBinaryData(): Deno.PointerValue {
    return pointerFromView(this.#view, 288, LE);
  }

  set pVendorBinaryData(value: AnyPointer) {
    this.#view.setBigUint64(288, BigInt(anyPointer(value)), LE);
  }
}