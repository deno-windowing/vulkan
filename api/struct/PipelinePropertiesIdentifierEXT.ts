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

export interface InitPipelinePropertiesIdentifierEXT {
  pNext?: AnyPointer;
  pipelineIdentifier?: Uint8Array;
}

export class PipelinePropertiesIdentifierEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPipelinePropertiesIdentifierEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPipelinePropertiesIdentifierEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PipelinePropertiesIdentifierEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PipelinePropertiesIdentifierEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PipelinePropertiesIdentifierEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.pipelineIdentifier !== undefined) this.pipelineIdentifier = data.pipelineIdentifier;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PipelinePropertiesIdentifierEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PIPELINE_PROPERTIES_IDENTIFIER_EXT;
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

  get pipelineIdentifier(): Uint8Array {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 16, 16);
  }

  set pipelineIdentifier(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 16);
  }
}