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

export interface InitDescriptorSetLayoutHostMappingInfoVALVE {
  pNext?: AnyPointer;
  descriptorOffset?: number | bigint;
  descriptorSize?: number;
}

export class DescriptorSetLayoutHostMappingInfoVALVE implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDescriptorSetLayoutHostMappingInfoVALVE);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDescriptorSetLayoutHostMappingInfoVALVE) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DescriptorSetLayoutHostMappingInfoVALVE.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DescriptorSetLayoutHostMappingInfoVALVE.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DescriptorSetLayoutHostMappingInfoVALVE.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.descriptorOffset !== undefined) this.descriptorOffset = data.descriptorOffset;
      if (data.descriptorSize !== undefined) this.descriptorSize = data.descriptorSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DescriptorSetLayoutHostMappingInfoVALVE.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DESCRIPTOR_SET_LAYOUT_HOST_MAPPING_INFO_VALVE;
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

  get descriptorOffset(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set descriptorOffset(value: number | bigint) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get descriptorSize(): number {
    return this.#view.getUint32(24, LE);
  }

  set descriptorSize(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }
}