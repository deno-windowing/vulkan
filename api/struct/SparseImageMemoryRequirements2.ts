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
import {SparseImageMemoryRequirements} from "./SparseImageMemoryRequirements.ts";
import { StructureType } from "../enum.ts";

export interface InitSparseImageMemoryRequirements2 {
  pNext?: AnyPointer;
  memoryRequirements?: SparseImageMemoryRequirements;
}

export class SparseImageMemoryRequirements2 implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSparseImageMemoryRequirements2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSparseImageMemoryRequirements2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SparseImageMemoryRequirements2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SparseImageMemoryRequirements2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SparseImageMemoryRequirements2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.memoryRequirements !== undefined) this.memoryRequirements = data.memoryRequirements;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SparseImageMemoryRequirements2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SPARSE_IMAGE_MEMORY_REQUIREMENTS_2;
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

  get memoryRequirements(): SparseImageMemoryRequirements {
    return new SparseImageMemoryRequirements(this.#data.subarray(16, 16 + SparseImageMemoryRequirements.size));
  }

  set memoryRequirements(value: SparseImageMemoryRequirements) {
    if (value[BUFFER].byteLength < SparseImageMemoryRequirements.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }
}