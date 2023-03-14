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
import {PhysicalDeviceLimits} from "./PhysicalDeviceLimits.ts";
import {PhysicalDeviceSparseProperties} from "./PhysicalDeviceSparseProperties.ts";
import { PhysicalDeviceType } from "../enum.ts";

export interface InitPhysicalDeviceProperties {
  apiVersion?: number;
  driverVersion?: number;
  vendorID?: number;
  deviceID?: number;
  deviceType?: PhysicalDeviceType;
  deviceName?: Uint8Array;
  pipelineCacheUUID?: Uint8Array;
  limits?: PhysicalDeviceLimits;
  sparseProperties?: PhysicalDeviceSparseProperties;
}

export class PhysicalDeviceProperties implements BaseStruct {
  static size = 784;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.apiVersion !== undefined) this.apiVersion = data.apiVersion;
      if (data.driverVersion !== undefined) this.driverVersion = data.driverVersion;
      if (data.vendorID !== undefined) this.vendorID = data.vendorID;
      if (data.deviceID !== undefined) this.deviceID = data.deviceID;
      if (data.deviceType !== undefined) this.deviceType = data.deviceType;
      if (data.deviceName !== undefined) this.deviceName = data.deviceName;
      if (data.pipelineCacheUUID !== undefined) this.pipelineCacheUUID = data.pipelineCacheUUID;
      if (data.limits !== undefined) this.limits = data.limits;
      if (data.sparseProperties !== undefined) this.sparseProperties = data.sparseProperties;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get apiVersion() {
    return this.#view.getUint32(0, LE);
  }

  set apiVersion(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get driverVersion() {
    return this.#view.getUint32(4, LE);
  }

  set driverVersion(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get vendorID() {
    return this.#view.getUint32(8, LE);
  }

  set vendorID(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get deviceID() {
    return this.#view.getUint32(12, LE);
  }

  set deviceID(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get deviceType() {
    return this.#view.getUint32(16, LE);
  }

  set deviceType(value: PhysicalDeviceType) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get deviceName() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 20, 256);
  }

  set deviceName(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 20);
  }

  get pipelineCacheUUID() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 276, 16);
  }

  set pipelineCacheUUID(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 276);
  }

  get limits() {
    return new PhysicalDeviceLimits(this.#data.subarray(292, 292 + PhysicalDeviceLimits.size));
  }

  set limits(value: PhysicalDeviceLimits) {
    if (value[BUFFER].byteLength < PhysicalDeviceLimits.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 292);
  }

  get sparseProperties() {
    return new PhysicalDeviceSparseProperties(this.#data.subarray(764, 764 + PhysicalDeviceSparseProperties.size));
  }

  set sparseProperties(value: PhysicalDeviceSparseProperties) {
    if (value[BUFFER].byteLength < PhysicalDeviceSparseProperties.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 764);
  }
}