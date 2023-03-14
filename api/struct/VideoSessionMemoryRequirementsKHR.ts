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
import {MemoryRequirements} from "./MemoryRequirements.ts";
import { StructureType } from "../enum.ts";

export interface InitVideoSessionMemoryRequirementsKHR {
  pNext?: AnyPointer;
  memoryBindIndex?: number;
  memoryRequirements?: MemoryRequirements;
}

export class VideoSessionMemoryRequirementsKHR implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoSessionMemoryRequirementsKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoSessionMemoryRequirementsKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoSessionMemoryRequirementsKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoSessionMemoryRequirementsKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoSessionMemoryRequirementsKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.memoryBindIndex !== undefined) this.memoryBindIndex = data.memoryBindIndex;
      if (data.memoryRequirements !== undefined) this.memoryRequirements = data.memoryRequirements;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoSessionMemoryRequirementsKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_SESSION_MEMORY_REQUIREMENTS_KHR;
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

  get memoryBindIndex() {
    return this.#view.getUint32(16, LE);
  }

  set memoryBindIndex(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get memoryRequirements() {
    return new MemoryRequirements(this.#data.subarray(24, 24 + MemoryRequirements.size));
  }

  set memoryRequirements(value: MemoryRequirements) {
    if (value[BUFFER].byteLength < MemoryRequirements.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 24);
  }
}