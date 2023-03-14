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

export interface InitPhysicalDeviceBufferDeviceAddressFeatures {
  pNext?: AnyPointer;
  bufferDeviceAddress?: Bool32;
  bufferDeviceAddressCaptureReplay?: Bool32;
  bufferDeviceAddressMultiDevice?: Bool32;
}

export class PhysicalDeviceBufferDeviceAddressFeatures implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceBufferDeviceAddressFeatures);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceBufferDeviceAddressFeatures) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceBufferDeviceAddressFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceBufferDeviceAddressFeatures.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceBufferDeviceAddressFeatures.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.bufferDeviceAddress !== undefined) this.bufferDeviceAddress = data.bufferDeviceAddress;
      if (data.bufferDeviceAddressCaptureReplay !== undefined) this.bufferDeviceAddressCaptureReplay = data.bufferDeviceAddressCaptureReplay;
      if (data.bufferDeviceAddressMultiDevice !== undefined) this.bufferDeviceAddressMultiDevice = data.bufferDeviceAddressMultiDevice;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceBufferDeviceAddressFeatures.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_BUFFER_DEVICE_ADDRESS_FEATURES;
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

  get bufferDeviceAddress() {
    return this.#view.getUint32(16, LE);
  }

  set bufferDeviceAddress(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get bufferDeviceAddressCaptureReplay() {
    return this.#view.getUint32(20, LE);
  }

  set bufferDeviceAddressCaptureReplay(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get bufferDeviceAddressMultiDevice() {
    return this.#view.getUint32(24, LE);
  }

  set bufferDeviceAddressMultiDevice(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }
}