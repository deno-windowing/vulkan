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
import { StructureType, PrimitiveTopology } from "../enum.ts";
import { PipelineInputAssemblyStateCreateFlags, Bool32 } from "../def.ts";

export interface InitPipelineInputAssemblyStateCreateInfo {
  pNext?: AnyPointer;
  flags?: PipelineInputAssemblyStateCreateFlags;
  topology?: PrimitiveTopology;
  primitiveRestartEnable?: Bool32;
}

export class PipelineInputAssemblyStateCreateInfo implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineInputAssemblyStateCreateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineInputAssemblyStateCreateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineInputAssemblyStateCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineInputAssemblyStateCreateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineInputAssemblyStateCreateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.topology !== undefined) this.topology = data.topology;
      if (data.primitiveRestartEnable !== undefined) this.primitiveRestartEnable = data.primitiveRestartEnable;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineInputAssemblyStateCreateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_INPUT_ASSEMBLY_STATE_CREATE_INFO;
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

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: PipelineInputAssemblyStateCreateFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get topology(): number {
    return this.#view.getUint32(20, LE);
  }

  set topology(value: PrimitiveTopology) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get primitiveRestartEnable(): number {
    return this.#view.getUint32(24, LE);
  }

  set primitiveRestartEnable(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }
}