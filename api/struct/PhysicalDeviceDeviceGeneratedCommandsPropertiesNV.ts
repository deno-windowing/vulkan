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

export interface InitPhysicalDeviceDeviceGeneratedCommandsPropertiesNV {
  pNext?: AnyPointer;
  maxGraphicsShaderGroupCount?: number;
  maxIndirectSequenceCount?: number;
  maxIndirectCommandsTokenCount?: number;
  maxIndirectCommandsStreamCount?: number;
  maxIndirectCommandsTokenOffset?: number;
  maxIndirectCommandsStreamStride?: number;
  minSequencesCountBufferOffsetAlignment?: number;
  minSequencesIndexBufferOffsetAlignment?: number;
  minIndirectCommandsBufferOffsetAlignment?: number;
}

export class PhysicalDeviceDeviceGeneratedCommandsPropertiesNV implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceDeviceGeneratedCommandsPropertiesNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceDeviceGeneratedCommandsPropertiesNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceDeviceGeneratedCommandsPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceDeviceGeneratedCommandsPropertiesNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceDeviceGeneratedCommandsPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxGraphicsShaderGroupCount !== undefined) this.maxGraphicsShaderGroupCount = data.maxGraphicsShaderGroupCount;
      if (data.maxIndirectSequenceCount !== undefined) this.maxIndirectSequenceCount = data.maxIndirectSequenceCount;
      if (data.maxIndirectCommandsTokenCount !== undefined) this.maxIndirectCommandsTokenCount = data.maxIndirectCommandsTokenCount;
      if (data.maxIndirectCommandsStreamCount !== undefined) this.maxIndirectCommandsStreamCount = data.maxIndirectCommandsStreamCount;
      if (data.maxIndirectCommandsTokenOffset !== undefined) this.maxIndirectCommandsTokenOffset = data.maxIndirectCommandsTokenOffset;
      if (data.maxIndirectCommandsStreamStride !== undefined) this.maxIndirectCommandsStreamStride = data.maxIndirectCommandsStreamStride;
      if (data.minSequencesCountBufferOffsetAlignment !== undefined) this.minSequencesCountBufferOffsetAlignment = data.minSequencesCountBufferOffsetAlignment;
      if (data.minSequencesIndexBufferOffsetAlignment !== undefined) this.minSequencesIndexBufferOffsetAlignment = data.minSequencesIndexBufferOffsetAlignment;
      if (data.minIndirectCommandsBufferOffsetAlignment !== undefined) this.minIndirectCommandsBufferOffsetAlignment = data.minIndirectCommandsBufferOffsetAlignment;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceDeviceGeneratedCommandsPropertiesNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_DEVICE_GENERATED_COMMANDS_PROPERTIES_NV;
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

  get maxGraphicsShaderGroupCount() {
    return this.#view.getUint32(16, LE);
  }

  set maxGraphicsShaderGroupCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxIndirectSequenceCount() {
    return this.#view.getUint32(20, LE);
  }

  set maxIndirectSequenceCount(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get maxIndirectCommandsTokenCount() {
    return this.#view.getUint32(24, LE);
  }

  set maxIndirectCommandsTokenCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get maxIndirectCommandsStreamCount() {
    return this.#view.getUint32(28, LE);
  }

  set maxIndirectCommandsStreamCount(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get maxIndirectCommandsTokenOffset() {
    return this.#view.getUint32(32, LE);
  }

  set maxIndirectCommandsTokenOffset(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get maxIndirectCommandsStreamStride() {
    return this.#view.getUint32(36, LE);
  }

  set maxIndirectCommandsStreamStride(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get minSequencesCountBufferOffsetAlignment() {
    return this.#view.getUint32(40, LE);
  }

  set minSequencesCountBufferOffsetAlignment(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get minSequencesIndexBufferOffsetAlignment() {
    return this.#view.getUint32(44, LE);
  }

  set minSequencesIndexBufferOffsetAlignment(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get minIndirectCommandsBufferOffsetAlignment() {
    return this.#view.getUint32(48, LE);
  }

  set minIndirectCommandsBufferOffsetAlignment(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }
}