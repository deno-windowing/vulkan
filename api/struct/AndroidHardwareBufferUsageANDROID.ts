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

export interface InitAndroidHardwareBufferUsageANDROID {
  pNext?: AnyPointer;
  androidHardwareBufferUsage?: number | bigint;
}

export class AndroidHardwareBufferUsageANDROID implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAndroidHardwareBufferUsageANDROID);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAndroidHardwareBufferUsageANDROID) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AndroidHardwareBufferUsageANDROID.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AndroidHardwareBufferUsageANDROID.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AndroidHardwareBufferUsageANDROID.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.androidHardwareBufferUsage !== undefined) this.androidHardwareBufferUsage = data.androidHardwareBufferUsage;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AndroidHardwareBufferUsageANDROID.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ANDROID_HARDWARE_BUFFER_USAGE_ANDROID;
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

  get androidHardwareBufferUsage(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set androidHardwareBufferUsage(value: number | bigint) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }
}