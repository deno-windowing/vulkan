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
import { PipelineCompilerControlFlagsAMD } from "../def.ts";

export interface InitPipelineCompilerControlCreateInfoAMD {
  pNext?: AnyPointer;
  compilerControlFlags?: PipelineCompilerControlFlagsAMD;
}

export class PipelineCompilerControlCreateInfoAMD implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelineCompilerControlCreateInfoAMD);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelineCompilerControlCreateInfoAMD) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelineCompilerControlCreateInfoAMD.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelineCompilerControlCreateInfoAMD.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelineCompilerControlCreateInfoAMD.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.compilerControlFlags !== undefined) this.compilerControlFlags = data.compilerControlFlags;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelineCompilerControlCreateInfoAMD.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_COMPILER_CONTROL_CREATE_INFO_AMD;
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

  get compilerControlFlags(): number {
    return this.#view.getUint32(16, LE);
  }

  set compilerControlFlags(value: PipelineCompilerControlFlagsAMD) {
    this.#view.setUint32(16, Number(value), LE);
  }
}