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

export interface InitPhysicalDeviceMeshShaderPropertiesNV {
  pNext?: AnyPointer;
  maxDrawMeshTasksCount?: number;
  maxTaskWorkGroupInvocations?: number;
  maxTaskWorkGroupSize?: Uint32Array;
  maxTaskTotalMemorySize?: number;
  maxTaskOutputCount?: number;
  maxMeshWorkGroupInvocations?: number;
  maxMeshWorkGroupSize?: Uint32Array;
  maxMeshTotalMemorySize?: number;
  maxMeshOutputVertices?: number;
  maxMeshOutputPrimitives?: number;
  maxMeshMultiviewViewCount?: number;
  meshOutputPerVertexGranularity?: number;
  meshOutputPerPrimitiveGranularity?: number;
}

export class PhysicalDeviceMeshShaderPropertiesNV implements BaseStruct {
  static size = 88;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceMeshShaderPropertiesNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceMeshShaderPropertiesNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceMeshShaderPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceMeshShaderPropertiesNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceMeshShaderPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxDrawMeshTasksCount !== undefined) this.maxDrawMeshTasksCount = data.maxDrawMeshTasksCount;
      if (data.maxTaskWorkGroupInvocations !== undefined) this.maxTaskWorkGroupInvocations = data.maxTaskWorkGroupInvocations;
      if (data.maxTaskWorkGroupSize !== undefined) this.maxTaskWorkGroupSize = data.maxTaskWorkGroupSize;
      if (data.maxTaskTotalMemorySize !== undefined) this.maxTaskTotalMemorySize = data.maxTaskTotalMemorySize;
      if (data.maxTaskOutputCount !== undefined) this.maxTaskOutputCount = data.maxTaskOutputCount;
      if (data.maxMeshWorkGroupInvocations !== undefined) this.maxMeshWorkGroupInvocations = data.maxMeshWorkGroupInvocations;
      if (data.maxMeshWorkGroupSize !== undefined) this.maxMeshWorkGroupSize = data.maxMeshWorkGroupSize;
      if (data.maxMeshTotalMemorySize !== undefined) this.maxMeshTotalMemorySize = data.maxMeshTotalMemorySize;
      if (data.maxMeshOutputVertices !== undefined) this.maxMeshOutputVertices = data.maxMeshOutputVertices;
      if (data.maxMeshOutputPrimitives !== undefined) this.maxMeshOutputPrimitives = data.maxMeshOutputPrimitives;
      if (data.maxMeshMultiviewViewCount !== undefined) this.maxMeshMultiviewViewCount = data.maxMeshMultiviewViewCount;
      if (data.meshOutputPerVertexGranularity !== undefined) this.meshOutputPerVertexGranularity = data.meshOutputPerVertexGranularity;
      if (data.meshOutputPerPrimitiveGranularity !== undefined) this.meshOutputPerPrimitiveGranularity = data.meshOutputPerPrimitiveGranularity;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceMeshShaderPropertiesNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_MESH_SHADER_PROPERTIES_NV;
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

  get maxDrawMeshTasksCount() {
    return this.#view.getUint32(16, LE);
  }

  set maxDrawMeshTasksCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxTaskWorkGroupInvocations() {
    return this.#view.getUint32(20, LE);
  }

  set maxTaskWorkGroupInvocations(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get maxTaskWorkGroupSize() {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 24, 3);
  }

  set maxTaskWorkGroupSize(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 24);
  }

  get maxTaskTotalMemorySize() {
    return this.#view.getUint32(36, LE);
  }

  set maxTaskTotalMemorySize(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get maxTaskOutputCount() {
    return this.#view.getUint32(40, LE);
  }

  set maxTaskOutputCount(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get maxMeshWorkGroupInvocations() {
    return this.#view.getUint32(44, LE);
  }

  set maxMeshWorkGroupInvocations(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get maxMeshWorkGroupSize() {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 48, 3);
  }

  set maxMeshWorkGroupSize(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 48);
  }

  get maxMeshTotalMemorySize() {
    return this.#view.getUint32(60, LE);
  }

  set maxMeshTotalMemorySize(value: number) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get maxMeshOutputVertices() {
    return this.#view.getUint32(64, LE);
  }

  set maxMeshOutputVertices(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get maxMeshOutputPrimitives() {
    return this.#view.getUint32(68, LE);
  }

  set maxMeshOutputPrimitives(value: number) {
    this.#view.setUint32(68, Number(value), LE);
  }

  get maxMeshMultiviewViewCount() {
    return this.#view.getUint32(72, LE);
  }

  set maxMeshMultiviewViewCount(value: number) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get meshOutputPerVertexGranularity() {
    return this.#view.getUint32(76, LE);
  }

  set meshOutputPerVertexGranularity(value: number) {
    this.#view.setUint32(76, Number(value), LE);
  }

  get meshOutputPerPrimitiveGranularity() {
    return this.#view.getUint32(80, LE);
  }

  set meshOutputPerPrimitiveGranularity(value: number) {
    this.#view.setUint32(80, Number(value), LE);
  }
}