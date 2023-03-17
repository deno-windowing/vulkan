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
import { Bool32 } from "../def.ts";

export interface InitPhysicalDeviceVulkan13Features {
  pNext?: AnyPointer;
  robustImageAccess?: Bool32;
  inlineUniformBlock?: Bool32;
  descriptorBindingInlineUniformBlockUpdateAfterBind?: Bool32;
  pipelineCreationCacheControl?: Bool32;
  privateData?: Bool32;
  shaderDemoteToHelperInvocation?: Bool32;
  shaderTerminateInvocation?: Bool32;
  subgroupSizeControl?: Bool32;
  computeFullSubgroups?: Bool32;
  synchronization2?: Bool32;
  textureCompressionASTC_HDR?: Bool32;
  shaderZeroInitializeWorkgroupMemory?: Bool32;
  dynamicRendering?: Bool32;
  shaderIntegerDotProduct?: Bool32;
  maintenance4?: Bool32;
}

export class PhysicalDeviceVulkan13Features implements BaseStruct {
  static size = 80;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceVulkan13Features);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceVulkan13Features) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceVulkan13Features.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceVulkan13Features.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceVulkan13Features.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.robustImageAccess !== undefined) this.robustImageAccess = data.robustImageAccess;
      if (data.inlineUniformBlock !== undefined) this.inlineUniformBlock = data.inlineUniformBlock;
      if (data.descriptorBindingInlineUniformBlockUpdateAfterBind !== undefined) this.descriptorBindingInlineUniformBlockUpdateAfterBind = data.descriptorBindingInlineUniformBlockUpdateAfterBind;
      if (data.pipelineCreationCacheControl !== undefined) this.pipelineCreationCacheControl = data.pipelineCreationCacheControl;
      if (data.privateData !== undefined) this.privateData = data.privateData;
      if (data.shaderDemoteToHelperInvocation !== undefined) this.shaderDemoteToHelperInvocation = data.shaderDemoteToHelperInvocation;
      if (data.shaderTerminateInvocation !== undefined) this.shaderTerminateInvocation = data.shaderTerminateInvocation;
      if (data.subgroupSizeControl !== undefined) this.subgroupSizeControl = data.subgroupSizeControl;
      if (data.computeFullSubgroups !== undefined) this.computeFullSubgroups = data.computeFullSubgroups;
      if (data.synchronization2 !== undefined) this.synchronization2 = data.synchronization2;
      if (data.textureCompressionASTC_HDR !== undefined) this.textureCompressionASTC_HDR = data.textureCompressionASTC_HDR;
      if (data.shaderZeroInitializeWorkgroupMemory !== undefined) this.shaderZeroInitializeWorkgroupMemory = data.shaderZeroInitializeWorkgroupMemory;
      if (data.dynamicRendering !== undefined) this.dynamicRendering = data.dynamicRendering;
      if (data.shaderIntegerDotProduct !== undefined) this.shaderIntegerDotProduct = data.shaderIntegerDotProduct;
      if (data.maintenance4 !== undefined) this.maintenance4 = data.maintenance4;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceVulkan13Features.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_VULKAN_1_3_FEATURES;
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

  get robustImageAccess(): number {
    return this.#view.getUint32(16, LE);
  }

  set robustImageAccess(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get inlineUniformBlock(): number {
    return this.#view.getUint32(20, LE);
  }

  set inlineUniformBlock(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get descriptorBindingInlineUniformBlockUpdateAfterBind(): number {
    return this.#view.getUint32(24, LE);
  }

  set descriptorBindingInlineUniformBlockUpdateAfterBind(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pipelineCreationCacheControl(): number {
    return this.#view.getUint32(28, LE);
  }

  set pipelineCreationCacheControl(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get privateData(): number {
    return this.#view.getUint32(32, LE);
  }

  set privateData(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get shaderDemoteToHelperInvocation(): number {
    return this.#view.getUint32(36, LE);
  }

  set shaderDemoteToHelperInvocation(value: Bool32) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get shaderTerminateInvocation(): number {
    return this.#view.getUint32(40, LE);
  }

  set shaderTerminateInvocation(value: Bool32) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get subgroupSizeControl(): number {
    return this.#view.getUint32(44, LE);
  }

  set subgroupSizeControl(value: Bool32) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get computeFullSubgroups(): number {
    return this.#view.getUint32(48, LE);
  }

  set computeFullSubgroups(value: Bool32) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get synchronization2(): number {
    return this.#view.getUint32(52, LE);
  }

  set synchronization2(value: Bool32) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get textureCompressionASTC_HDR(): number {
    return this.#view.getUint32(56, LE);
  }

  set textureCompressionASTC_HDR(value: Bool32) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get shaderZeroInitializeWorkgroupMemory(): number {
    return this.#view.getUint32(60, LE);
  }

  set shaderZeroInitializeWorkgroupMemory(value: Bool32) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get dynamicRendering(): number {
    return this.#view.getUint32(64, LE);
  }

  set dynamicRendering(value: Bool32) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get shaderIntegerDotProduct(): number {
    return this.#view.getUint32(68, LE);
  }

  set shaderIntegerDotProduct(value: Bool32) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get maintenance4(): number {
    return this.#view.getUint32(72, LE);
  }

  set maintenance4(value: Bool32) {
    this.#view.setUint32(72, Number(value), LE);
  }
}