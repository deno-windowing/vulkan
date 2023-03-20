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

export interface InitPhysicalDevicePCIBusInfoPropertiesEXT {
  pNext?: AnyPointer;
  pciDomain?: number;
  pciBus?: number;
  pciDevice?: number;
  pciFunction?: number;
}

export class PhysicalDevicePCIBusInfoPropertiesEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDevicePCIBusInfoPropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDevicePCIBusInfoPropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDevicePCIBusInfoPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDevicePCIBusInfoPropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDevicePCIBusInfoPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.pciDomain !== undefined) this.pciDomain = data.pciDomain;
      if (data.pciBus !== undefined) this.pciBus = data.pciBus;
      if (data.pciDevice !== undefined) this.pciDevice = data.pciDevice;
      if (data.pciFunction !== undefined) this.pciFunction = data.pciFunction;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDevicePCIBusInfoPropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_PCI_BUS_INFO_PROPERTIES_EXT;
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

  get pciDomain(): number {
    return this.#view.getUint32(16, LE);
  }

  set pciDomain(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pciBus(): number {
    return this.#view.getUint32(20, LE);
  }

  set pciBus(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pciDevice(): number {
    return this.#view.getUint32(24, LE);
  }

  set pciDevice(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pciFunction(): number {
    return this.#view.getUint32(28, LE);
  }

  set pciFunction(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }
}