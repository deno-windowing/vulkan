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
import {ConformanceVersion} from "./ConformanceVersion.ts";
import { StructureType, DriverId } from "../enum.ts";

export interface InitPhysicalDeviceDriverProperties {
  pNext?: AnyPointer;
  driverID?: DriverId;
  driverName?: Uint8Array;
  driverInfo?: Uint8Array;
  conformanceVersion?: ConformanceVersion;
}

export class PhysicalDeviceDriverProperties implements BaseStruct {
  static size = 536;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceDriverProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceDriverProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceDriverProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceDriverProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceDriverProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.driverID !== undefined) this.driverID = data.driverID;
      if (data.driverName !== undefined) this.driverName = data.driverName;
      if (data.driverInfo !== undefined) this.driverInfo = data.driverInfo;
      if (data.conformanceVersion !== undefined) this.conformanceVersion = data.conformanceVersion;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceDriverProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_DRIVER_PROPERTIES;
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

  get driverID() {
    return this.#view.getUint32(16, LE);
  }

  set driverID(value: DriverId) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get driverName() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 20, 256);
  }

  set driverName(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 20);
  }

  get driverInfo() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 276, 256);
  }

  set driverInfo(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 276);
  }

  get conformanceVersion() {
    return new ConformanceVersion(this.#data.subarray(532, 532 + ConformanceVersion.size));
  }

  set conformanceVersion(value: ConformanceVersion) {
    if (value[BUFFER].byteLength < ConformanceVersion.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 532);
  }
}