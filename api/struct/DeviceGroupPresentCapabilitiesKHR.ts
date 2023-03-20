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
import { DeviceGroupPresentModeFlagsKHR } from "../def.ts";

export interface InitDeviceGroupPresentCapabilitiesKHR {
  pNext?: AnyPointer;
  presentMask?: Uint32Array;
  modes?: DeviceGroupPresentModeFlagsKHR;
}

export class DeviceGroupPresentCapabilitiesKHR implements BaseStruct {
  static size = 152;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDeviceGroupPresentCapabilitiesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDeviceGroupPresentCapabilitiesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DeviceGroupPresentCapabilitiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DeviceGroupPresentCapabilitiesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DeviceGroupPresentCapabilitiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.presentMask !== undefined) this.presentMask = data.presentMask;
      if (data.modes !== undefined) this.modes = data.modes;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DeviceGroupPresentCapabilitiesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEVICE_GROUP_PRESENT_CAPABILITIES_KHR;
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

  get presentMask(): Uint32Array {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 16, 32);
  }

  set presentMask(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 16);
  }

  get modes(): number {
    return this.#view.getUint32(144, LE);
  }

  set modes(value: DeviceGroupPresentModeFlagsKHR) {
    this.#view.setUint32(144, Number(value), LE);
  }
}