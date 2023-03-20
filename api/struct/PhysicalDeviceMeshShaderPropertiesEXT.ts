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

export interface InitPhysicalDeviceMeshShaderPropertiesEXT {
  pNext?: AnyPointer;
  maxTaskWorkGroupTotalCount?: number;
  maxTaskWorkGroupCount?: Uint32Array;
  maxTaskWorkGroupInvocations?: number;
  maxTaskWorkGroupSize?: Uint32Array;
  maxTaskPayloadSize?: number;
  maxTaskSharedMemorySize?: number;
  maxTaskPayloadAndSharedMemorySize?: number;
  maxMeshWorkGroupTotalCount?: number;
  maxMeshWorkGroupCount?: Uint32Array;
  maxMeshWorkGroupInvocations?: number;
  maxMeshWorkGroupSize?: Uint32Array;
  maxMeshSharedMemorySize?: number;
  maxMeshPayloadAndSharedMemorySize?: number;
  maxMeshOutputMemorySize?: number;
  maxMeshPayloadAndOutputMemorySize?: number;
  maxMeshOutputComponents?: number;
  maxMeshOutputVertices?: number;
  maxMeshOutputPrimitives?: number;
  maxMeshOutputLayers?: number;
  maxMeshMultiviewViewCount?: number;
  meshOutputPerVertexGranularity?: number;
  meshOutputPerPrimitiveGranularity?: number;
  maxPreferredTaskWorkGroupInvocations?: number;
  maxPreferredMeshWorkGroupInvocations?: number;
  prefersLocalInvocationVertexOutput?: Bool32;
  prefersLocalInvocationPrimitiveOutput?: Bool32;
  prefersCompactVertexOutput?: Bool32;
  prefersCompactPrimitiveOutput?: Bool32;
}

export class PhysicalDeviceMeshShaderPropertiesEXT implements BaseStruct {
  static size = 160;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceMeshShaderPropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceMeshShaderPropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceMeshShaderPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceMeshShaderPropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceMeshShaderPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.maxTaskWorkGroupTotalCount !== undefined) this.maxTaskWorkGroupTotalCount = data.maxTaskWorkGroupTotalCount;
      if (data.maxTaskWorkGroupCount !== undefined) this.maxTaskWorkGroupCount = data.maxTaskWorkGroupCount;
      if (data.maxTaskWorkGroupInvocations !== undefined) this.maxTaskWorkGroupInvocations = data.maxTaskWorkGroupInvocations;
      if (data.maxTaskWorkGroupSize !== undefined) this.maxTaskWorkGroupSize = data.maxTaskWorkGroupSize;
      if (data.maxTaskPayloadSize !== undefined) this.maxTaskPayloadSize = data.maxTaskPayloadSize;
      if (data.maxTaskSharedMemorySize !== undefined) this.maxTaskSharedMemorySize = data.maxTaskSharedMemorySize;
      if (data.maxTaskPayloadAndSharedMemorySize !== undefined) this.maxTaskPayloadAndSharedMemorySize = data.maxTaskPayloadAndSharedMemorySize;
      if (data.maxMeshWorkGroupTotalCount !== undefined) this.maxMeshWorkGroupTotalCount = data.maxMeshWorkGroupTotalCount;
      if (data.maxMeshWorkGroupCount !== undefined) this.maxMeshWorkGroupCount = data.maxMeshWorkGroupCount;
      if (data.maxMeshWorkGroupInvocations !== undefined) this.maxMeshWorkGroupInvocations = data.maxMeshWorkGroupInvocations;
      if (data.maxMeshWorkGroupSize !== undefined) this.maxMeshWorkGroupSize = data.maxMeshWorkGroupSize;
      if (data.maxMeshSharedMemorySize !== undefined) this.maxMeshSharedMemorySize = data.maxMeshSharedMemorySize;
      if (data.maxMeshPayloadAndSharedMemorySize !== undefined) this.maxMeshPayloadAndSharedMemorySize = data.maxMeshPayloadAndSharedMemorySize;
      if (data.maxMeshOutputMemorySize !== undefined) this.maxMeshOutputMemorySize = data.maxMeshOutputMemorySize;
      if (data.maxMeshPayloadAndOutputMemorySize !== undefined) this.maxMeshPayloadAndOutputMemorySize = data.maxMeshPayloadAndOutputMemorySize;
      if (data.maxMeshOutputComponents !== undefined) this.maxMeshOutputComponents = data.maxMeshOutputComponents;
      if (data.maxMeshOutputVertices !== undefined) this.maxMeshOutputVertices = data.maxMeshOutputVertices;
      if (data.maxMeshOutputPrimitives !== undefined) this.maxMeshOutputPrimitives = data.maxMeshOutputPrimitives;
      if (data.maxMeshOutputLayers !== undefined) this.maxMeshOutputLayers = data.maxMeshOutputLayers;
      if (data.maxMeshMultiviewViewCount !== undefined) this.maxMeshMultiviewViewCount = data.maxMeshMultiviewViewCount;
      if (data.meshOutputPerVertexGranularity !== undefined) this.meshOutputPerVertexGranularity = data.meshOutputPerVertexGranularity;
      if (data.meshOutputPerPrimitiveGranularity !== undefined) this.meshOutputPerPrimitiveGranularity = data.meshOutputPerPrimitiveGranularity;
      if (data.maxPreferredTaskWorkGroupInvocations !== undefined) this.maxPreferredTaskWorkGroupInvocations = data.maxPreferredTaskWorkGroupInvocations;
      if (data.maxPreferredMeshWorkGroupInvocations !== undefined) this.maxPreferredMeshWorkGroupInvocations = data.maxPreferredMeshWorkGroupInvocations;
      if (data.prefersLocalInvocationVertexOutput !== undefined) this.prefersLocalInvocationVertexOutput = data.prefersLocalInvocationVertexOutput;
      if (data.prefersLocalInvocationPrimitiveOutput !== undefined) this.prefersLocalInvocationPrimitiveOutput = data.prefersLocalInvocationPrimitiveOutput;
      if (data.prefersCompactVertexOutput !== undefined) this.prefersCompactVertexOutput = data.prefersCompactVertexOutput;
      if (data.prefersCompactPrimitiveOutput !== undefined) this.prefersCompactPrimitiveOutput = data.prefersCompactPrimitiveOutput;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceMeshShaderPropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_MESH_SHADER_PROPERTIES_EXT;
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

  get maxTaskWorkGroupTotalCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set maxTaskWorkGroupTotalCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get maxTaskWorkGroupCount(): Uint32Array {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 20, 3);
  }

  set maxTaskWorkGroupCount(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 20);
  }

  get maxTaskWorkGroupInvocations(): number {
    return this.#view.getUint32(32, LE);
  }

  set maxTaskWorkGroupInvocations(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get maxTaskWorkGroupSize(): Uint32Array {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 36, 3);
  }

  set maxTaskWorkGroupSize(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 36);
  }

  get maxTaskPayloadSize(): number {
    return this.#view.getUint32(48, LE);
  }

  set maxTaskPayloadSize(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get maxTaskSharedMemorySize(): number {
    return this.#view.getUint32(52, LE);
  }

  set maxTaskSharedMemorySize(value: number) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get maxTaskPayloadAndSharedMemorySize(): number {
    return this.#view.getUint32(56, LE);
  }

  set maxTaskPayloadAndSharedMemorySize(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get maxMeshWorkGroupTotalCount(): number {
    return this.#view.getUint32(60, LE);
  }

  set maxMeshWorkGroupTotalCount(value: number) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get maxMeshWorkGroupCount(): Uint32Array {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 64, 3);
  }

  set maxMeshWorkGroupCount(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 64);
  }

  get maxMeshWorkGroupInvocations(): number {
    return this.#view.getUint32(76, LE);
  }

  set maxMeshWorkGroupInvocations(value: number) {
    this.#view.setUint32(76, Number(value), LE);
  }

  get maxMeshWorkGroupSize(): Uint32Array {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 80, 3);
  }

  set maxMeshWorkGroupSize(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 80);
  }

  get maxMeshSharedMemorySize(): number {
    return this.#view.getUint32(92, LE);
  }

  set maxMeshSharedMemorySize(value: number) {
    this.#view.setUint32(92, Number(value), LE);
  }

  get maxMeshPayloadAndSharedMemorySize(): number {
    return this.#view.getUint32(96, LE);
  }

  set maxMeshPayloadAndSharedMemorySize(value: number) {
    this.#view.setUint32(96, Number(value), LE);
  }

  get maxMeshOutputMemorySize(): number {
    return this.#view.getUint32(100, LE);
  }

  set maxMeshOutputMemorySize(value: number) {
    this.#view.setUint32(100, Number(value), LE);
  }

  get maxMeshPayloadAndOutputMemorySize(): number {
    return this.#view.getUint32(104, LE);
  }

  set maxMeshPayloadAndOutputMemorySize(value: number) {
    this.#view.setUint32(104, Number(value), LE);
  }

  get maxMeshOutputComponents(): number {
    return this.#view.getUint32(108, LE);
  }

  set maxMeshOutputComponents(value: number) {
    this.#view.setUint32(108, Number(value), LE);
  }

  get maxMeshOutputVertices(): number {
    return this.#view.getUint32(112, LE);
  }

  set maxMeshOutputVertices(value: number) {
    this.#view.setUint32(112, Number(value), LE);
  }

  get maxMeshOutputPrimitives(): number {
    return this.#view.getUint32(116, LE);
  }

  set maxMeshOutputPrimitives(value: number) {
    this.#view.setUint32(116, Number(value), LE);
  }

  get maxMeshOutputLayers(): number {
    return this.#view.getUint32(120, LE);
  }

  set maxMeshOutputLayers(value: number) {
    this.#view.setUint32(120, Number(value), LE);
  }

  get maxMeshMultiviewViewCount(): number {
    return this.#view.getUint32(124, LE);
  }

  set maxMeshMultiviewViewCount(value: number) {
    this.#view.setUint32(124, Number(value), LE);
  }

  get meshOutputPerVertexGranularity(): number {
    return this.#view.getUint32(128, LE);
  }

  set meshOutputPerVertexGranularity(value: number) {
    this.#view.setUint32(128, Number(value), LE);
  }

  get meshOutputPerPrimitiveGranularity(): number {
    return this.#view.getUint32(132, LE);
  }

  set meshOutputPerPrimitiveGranularity(value: number) {
    this.#view.setUint32(132, Number(value), LE);
  }

  get maxPreferredTaskWorkGroupInvocations(): number {
    return this.#view.getUint32(136, LE);
  }

  set maxPreferredTaskWorkGroupInvocations(value: number) {
    this.#view.setUint32(136, Number(value), LE);
  }

  get maxPreferredMeshWorkGroupInvocations(): number {
    return this.#view.getUint32(140, LE);
  }

  set maxPreferredMeshWorkGroupInvocations(value: number) {
    this.#view.setUint32(140, Number(value), LE);
  }

  get prefersLocalInvocationVertexOutput(): number {
    return this.#view.getUint32(144, LE);
  }

  set prefersLocalInvocationVertexOutput(value: Bool32) {
    this.#view.setUint32(144, Number(value), LE);
  }

  get prefersLocalInvocationPrimitiveOutput(): number {
    return this.#view.getUint32(148, LE);
  }

  set prefersLocalInvocationPrimitiveOutput(value: Bool32) {
    this.#view.setUint32(148, Number(value), LE);
  }

  get prefersCompactVertexOutput(): number {
    return this.#view.getUint32(152, LE);
  }

  set prefersCompactVertexOutput(value: Bool32) {
    this.#view.setUint32(152, Number(value), LE);
  }

  get prefersCompactPrimitiveOutput(): number {
    return this.#view.getUint32(156, LE);
  }

  set prefersCompactPrimitiveOutput(value: Bool32) {
    this.#view.setUint32(156, Number(value), LE);
  }
}