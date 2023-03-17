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
import { DeviceAddress, BufferUsageFlags } from "../def.ts";

export interface InitDescriptorBufferBindingInfoEXT {
  pNext?: AnyPointer;
  address?: DeviceAddress;
  usage?: BufferUsageFlags;
}

export class DescriptorBufferBindingInfoEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDescriptorBufferBindingInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDescriptorBufferBindingInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DescriptorBufferBindingInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DescriptorBufferBindingInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DescriptorBufferBindingInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.address !== undefined) this.address = data.address;
      if (data.usage !== undefined) this.usage = data.usage;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DescriptorBufferBindingInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DESCRIPTOR_BUFFER_BINDING_INFO_EXT;
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

  get address(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set address(value: DeviceAddress) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get usage(): number {
    return this.#view.getUint32(24, LE);
  }

  set usage(value: BufferUsageFlags) {
    this.#view.setUint32(24, Number(value), LE);
  }
}