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
import { StructureType, PipelineRobustnessBufferBehaviorEXT, PipelineRobustnessImageBehaviorEXT } from "../enum.ts";

export interface InitPhysicalDevicePipelineRobustnessPropertiesEXT {
  pNext?: AnyPointer;
  defaultRobustnessStorageBuffers?: PipelineRobustnessBufferBehaviorEXT;
  defaultRobustnessUniformBuffers?: PipelineRobustnessBufferBehaviorEXT;
  defaultRobustnessVertexInputs?: PipelineRobustnessBufferBehaviorEXT;
  defaultRobustnessImages?: PipelineRobustnessImageBehaviorEXT;
}

export class PhysicalDevicePipelineRobustnessPropertiesEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDevicePipelineRobustnessPropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDevicePipelineRobustnessPropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDevicePipelineRobustnessPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDevicePipelineRobustnessPropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDevicePipelineRobustnessPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.defaultRobustnessStorageBuffers !== undefined) this.defaultRobustnessStorageBuffers = data.defaultRobustnessStorageBuffers;
      if (data.defaultRobustnessUniformBuffers !== undefined) this.defaultRobustnessUniformBuffers = data.defaultRobustnessUniformBuffers;
      if (data.defaultRobustnessVertexInputs !== undefined) this.defaultRobustnessVertexInputs = data.defaultRobustnessVertexInputs;
      if (data.defaultRobustnessImages !== undefined) this.defaultRobustnessImages = data.defaultRobustnessImages;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDevicePipelineRobustnessPropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_PIPELINE_ROBUSTNESS_PROPERTIES_EXT;
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

  get defaultRobustnessStorageBuffers(): number {
    return this.#view.getUint32(16, LE);
  }

  set defaultRobustnessStorageBuffers(value: PipelineRobustnessBufferBehaviorEXT) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get defaultRobustnessUniformBuffers(): number {
    return this.#view.getUint32(20, LE);
  }

  set defaultRobustnessUniformBuffers(value: PipelineRobustnessBufferBehaviorEXT) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get defaultRobustnessVertexInputs(): number {
    return this.#view.getUint32(24, LE);
  }

  set defaultRobustnessVertexInputs(value: PipelineRobustnessBufferBehaviorEXT) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get defaultRobustnessImages(): number {
    return this.#view.getUint32(28, LE);
  }

  set defaultRobustnessImages(value: PipelineRobustnessImageBehaviorEXT) {
    this.#view.setUint32(28, Number(value), LE);
  }
}