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
import {Rect2D} from "./Rect2D.ts";
import { StructureType } from "../enum.ts";

export interface InitDeviceGroupRenderPassBeginInfo {
  pNext?: AnyPointer;
  deviceMask?: number;
  deviceRenderAreaCount?: number;
  pDeviceRenderAreas?: AnyPointer;
}

export class DeviceGroupRenderPassBeginInfo implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDeviceGroupRenderPassBeginInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDeviceGroupRenderPassBeginInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DeviceGroupRenderPassBeginInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DeviceGroupRenderPassBeginInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DeviceGroupRenderPassBeginInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.deviceMask !== undefined) this.deviceMask = data.deviceMask;
      if (data.deviceRenderAreaCount !== undefined) this.deviceRenderAreaCount = data.deviceRenderAreaCount;
      if (data.pDeviceRenderAreas !== undefined) this.pDeviceRenderAreas = data.pDeviceRenderAreas;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DeviceGroupRenderPassBeginInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEVICE_GROUP_RENDER_PASS_BEGIN_INFO;
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

  get deviceMask() {
    return this.#view.getUint32(16, LE);
  }

  set deviceMask(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get deviceRenderAreaCount() {
    return this.#view.getUint32(20, LE);
  }

  set deviceRenderAreaCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pDeviceRenderAreas() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pDeviceRenderAreas(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}