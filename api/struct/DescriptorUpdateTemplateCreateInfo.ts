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
import {DescriptorUpdateTemplateEntry} from "./DescriptorUpdateTemplateEntry.ts";
import { StructureType, DescriptorUpdateTemplateType, PipelineBindPoint } from "../enum.ts";
import { DescriptorUpdateTemplateCreateFlags, DescriptorSetLayout, PipelineLayout } from "../def.ts";

export interface InitDescriptorUpdateTemplateCreateInfo {
  pNext?: AnyPointer;
  flags?: DescriptorUpdateTemplateCreateFlags;
  descriptorUpdateEntryCount?: number;
  pDescriptorUpdateEntries?: AnyPointer;
  templateType?: DescriptorUpdateTemplateType;
  descriptorSetLayout?: DescriptorSetLayout;
  pipelineBindPoint?: PipelineBindPoint;
  pipelineLayout?: PipelineLayout;
  set?: number;
}

export class DescriptorUpdateTemplateCreateInfo implements BaseStruct {
  static size = 72;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDescriptorUpdateTemplateCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDescriptorUpdateTemplateCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DescriptorUpdateTemplateCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DescriptorUpdateTemplateCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DescriptorUpdateTemplateCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.descriptorUpdateEntryCount !== undefined) this.descriptorUpdateEntryCount = data.descriptorUpdateEntryCount;
      if (data.pDescriptorUpdateEntries !== undefined) this.pDescriptorUpdateEntries = data.pDescriptorUpdateEntries;
      if (data.templateType !== undefined) this.templateType = data.templateType;
      if (data.descriptorSetLayout !== undefined) this.descriptorSetLayout = data.descriptorSetLayout;
      if (data.pipelineBindPoint !== undefined) this.pipelineBindPoint = data.pipelineBindPoint;
      if (data.pipelineLayout !== undefined) this.pipelineLayout = data.pipelineLayout;
      if (data.set !== undefined) this.set = data.set;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DescriptorUpdateTemplateCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DESCRIPTOR_UPDATE_TEMPLATE_CREATE_INFO;
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

  get flags() {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: DescriptorUpdateTemplateCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get descriptorUpdateEntryCount() {
    return this.#view.getUint32(20, LE);
  }

  set descriptorUpdateEntryCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pDescriptorUpdateEntries() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pDescriptorUpdateEntries(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get templateType() {
    return this.#view.getUint32(32, LE);
  }

  set templateType(value: DescriptorUpdateTemplateType) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get descriptorSetLayout() {
    return pointerFromView(this.#view, 40, LE);
  }

  set descriptorSetLayout(value: DescriptorSetLayout) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get pipelineBindPoint() {
    return this.#view.getUint32(48, LE);
  }

  set pipelineBindPoint(value: PipelineBindPoint) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get pipelineLayout() {
    return pointerFromView(this.#view, 56, LE);
  }

  set pipelineLayout(value: PipelineLayout) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }

  get set() {
    return this.#view.getUint32(64, LE);
  }

  set set(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }
}