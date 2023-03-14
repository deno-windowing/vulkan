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
import {MemoryType} from "./MemoryType.ts";
import {MemoryHeap} from "./MemoryHeap.ts";

export interface InitPhysicalDeviceMemoryProperties {
  memoryTypeCount?: number;
  memoryTypes?: MemoryType[];
  memoryHeapCount?: number;
  memoryHeaps?: MemoryHeap[];
}

export class PhysicalDeviceMemoryProperties implements BaseStruct {
  static size = 520;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceMemoryProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceMemoryProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceMemoryProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceMemoryProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceMemoryProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.memoryTypeCount !== undefined) this.memoryTypeCount = data.memoryTypeCount;
      if (data.memoryTypes !== undefined) this.memoryTypes = data.memoryTypes;
      if (data.memoryHeapCount !== undefined) this.memoryHeapCount = data.memoryHeapCount;
      if (data.memoryHeaps !== undefined) this.memoryHeaps = data.memoryHeaps;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceMemoryProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get memoryTypeCount() {
    return this.#view.getUint32(0, LE);
  }

  set memoryTypeCount(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get memoryTypes() {
    const result: MemoryType[] = [];
    for (let i = 0; i < 32; i++) {
      result.push((() => {
        return new MemoryType(this.#data.subarray(4 + i * 8, 4 + i * 8 + MemoryType.size));
      })());
    }
    return result;
  }

  set memoryTypes(value: MemoryType[]) {
    for (let i = 0; i < value.length; i++) {
      if (value[i][BUFFER].byteLength < MemoryType.size) {
        throw new Error("Data buffer too small");
      }
      this.#data.set(value[i][BUFFER], 4 + i * 8);
    }
  }

  get memoryHeapCount() {
    return this.#view.getUint32(260, LE);
  }

  set memoryHeapCount(value: number) {
    this.#view.setUint32(260, Number(value), LE);
  }

  get memoryHeaps() {
    const result: MemoryHeap[] = [];
    for (let i = 0; i < 16; i++) {
      result.push((() => {
        return new MemoryHeap(this.#data.subarray(264 + i * 16, 264 + i * 16 + MemoryHeap.size));
      })());
    }
    return result;
  }

  set memoryHeaps(value: MemoryHeap[]) {
    for (let i = 0; i < value.length; i++) {
      if (value[i][BUFFER].byteLength < MemoryHeap.size) {
        throw new Error("Data buffer too small");
      }
      this.#data.set(value[i][BUFFER], 264 + i * 16);
    }
  }
}