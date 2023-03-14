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
import { DescriptorType } from "../enum.ts";
import { ShaderStageFlags, Sampler } from "../def.ts";

export interface InitDescriptorSetLayoutBinding {
  binding?: number;
  descriptorType?: DescriptorType;
  descriptorCount?: number;
  stageFlags?: ShaderStageFlags;
  pImmutableSamplers?: AnyPointer;
}

export class DescriptorSetLayoutBinding implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDescriptorSetLayoutBinding);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDescriptorSetLayoutBinding) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DescriptorSetLayoutBinding.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DescriptorSetLayoutBinding.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DescriptorSetLayoutBinding.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.binding !== undefined) this.binding = data.binding;
      if (data.descriptorType !== undefined) this.descriptorType = data.descriptorType;
      if (data.descriptorCount !== undefined) this.descriptorCount = data.descriptorCount;
      if (data.stageFlags !== undefined) this.stageFlags = data.stageFlags;
      if (data.pImmutableSamplers !== undefined) this.pImmutableSamplers = data.pImmutableSamplers;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DescriptorSetLayoutBinding.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get binding() {
    return this.#view.getUint32(0, LE);
  }

  set binding(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get descriptorType() {
    return this.#view.getUint32(4, LE);
  }

  set descriptorType(value: DescriptorType) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get descriptorCount() {
    return this.#view.getUint32(8, LE);
  }

  set descriptorCount(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get stageFlags() {
    return this.#view.getUint32(12, LE);
  }

  set stageFlags(value: ShaderStageFlags) {
    this.#view.setUint32(12, Number(value), LE);
  }

  get pImmutableSamplers() {
    return pointerFromView(this.#view, 16, LE);
  }

  set pImmutableSamplers(value: AnyPointer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }
}