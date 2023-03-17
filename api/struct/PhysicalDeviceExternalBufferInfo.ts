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
import { StructureType, ExternalMemoryHandleTypeFlagBits } from "../enum.ts";
import { BufferCreateFlags, BufferUsageFlags } from "../def.ts";

export interface InitPhysicalDeviceExternalBufferInfo {
  pNext?: AnyPointer;
  flags?: BufferCreateFlags;
  usage?: BufferUsageFlags;
  handleType?: ExternalMemoryHandleTypeFlagBits;
}

export class PhysicalDeviceExternalBufferInfo implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceExternalBufferInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceExternalBufferInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceExternalBufferInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceExternalBufferInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceExternalBufferInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.usage !== undefined) this.usage = data.usage;
      if (data.handleType !== undefined) this.handleType = data.handleType;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceExternalBufferInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_EXTERNAL_BUFFER_INFO;
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

  set flags(value: BufferCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get usage(): number {
    return this.#view.getUint32(20, LE);
  }

  set usage(value: BufferUsageFlags) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get handleType(): number {
    return this.#view.getUint32(24, LE);
  }

  set handleType(value: ExternalMemoryHandleTypeFlagBits) {
    this.#view.setUint32(24, Number(value), LE);
  }
}