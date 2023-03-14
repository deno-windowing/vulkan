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
import { StructureType, QueueGlobalPriorityKHR } from "../enum.ts";

export interface InitQueueFamilyGlobalPriorityPropertiesKHR {
  pNext?: AnyPointer;
  priorityCount?: number;
  priorities?: Uint32Array;
}

export class QueueFamilyGlobalPriorityPropertiesKHR implements BaseStruct {
  static size = 88;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitQueueFamilyGlobalPriorityPropertiesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitQueueFamilyGlobalPriorityPropertiesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(QueueFamilyGlobalPriorityPropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < QueueFamilyGlobalPriorityPropertiesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(QueueFamilyGlobalPriorityPropertiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.priorityCount !== undefined) this.priorityCount = data.priorityCount;
      if (data.priorities !== undefined) this.priorities = data.priorities;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, QueueFamilyGlobalPriorityPropertiesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.QUEUE_FAMILY_GLOBAL_PRIORITY_PROPERTIES_KHR;
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

  get priorityCount() {
    return this.#view.getUint32(16, LE);
  }

  set priorityCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get priorities() {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 20, 16);
  }

  set priorities(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 20);
  }
}