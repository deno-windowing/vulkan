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
import { ShaderStageFlags } from "../def.ts";

export interface InitPipelineExecutablePropertiesKHR {
  pNext?: AnyPointer;
  stages?: ShaderStageFlags;
  name?: Uint8Array;
  description?: Uint8Array;
  subgroupSize?: number;
}

export class PipelineExecutablePropertiesKHR implements BaseStruct {
  static size = 536;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineExecutablePropertiesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineExecutablePropertiesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineExecutablePropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineExecutablePropertiesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineExecutablePropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.stages !== undefined) this.stages = data.stages;
      if (data.name !== undefined) this.name = data.name;
      if (data.description !== undefined) this.description = data.description;
      if (data.subgroupSize !== undefined) this.subgroupSize = data.subgroupSize;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineExecutablePropertiesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_EXECUTABLE_PROPERTIES_KHR;
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

  get stages(): number {
    return this.#view.getUint32(16, LE);
  }

  set stages(value: ShaderStageFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get name(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 20, 256);
  }

  set name(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 20);
  }

  get description(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 276, 256);
  }

  set description(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 276);
  }

  get subgroupSize(): number {
    return this.#view.getUint32(532, LE);
  }

  set subgroupSize(value: number) {
    this.#view.setUint32(532, Number(value), LE);
  }
}