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
import { DeviceMemory } from "../def.ts";

export interface InitMemoryGetAndroidHardwareBufferInfoANDROID {
  pNext?: AnyPointer;
  memory?: DeviceMemory;
}

export class MemoryGetAndroidHardwareBufferInfoANDROID implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMemoryGetAndroidHardwareBufferInfoANDROID);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMemoryGetAndroidHardwareBufferInfoANDROID) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MemoryGetAndroidHardwareBufferInfoANDROID.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MemoryGetAndroidHardwareBufferInfoANDROID.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MemoryGetAndroidHardwareBufferInfoANDROID.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.memory !== undefined) this.memory = data.memory;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MemoryGetAndroidHardwareBufferInfoANDROID.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.MEMORY_GET_ANDROID_HARDWARE_BUFFER_INFO_ANDROID;
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

  get memory(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set memory(value: DeviceMemory) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }
}