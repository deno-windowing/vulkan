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

export interface InitAccelerationStructureBuildRangeInfoKHR {
  primitiveCount?: number;
  primitiveOffset?: number;
  firstVertex?: number;
  transformOffset?: number;
}

export class AccelerationStructureBuildRangeInfoKHR implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAccelerationStructureBuildRangeInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAccelerationStructureBuildRangeInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AccelerationStructureBuildRangeInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AccelerationStructureBuildRangeInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AccelerationStructureBuildRangeInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.primitiveCount !== undefined) this.primitiveCount = data.primitiveCount;
      if (data.primitiveOffset !== undefined) this.primitiveOffset = data.primitiveOffset;
      if (data.firstVertex !== undefined) this.firstVertex = data.firstVertex;
      if (data.transformOffset !== undefined) this.transformOffset = data.transformOffset;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AccelerationStructureBuildRangeInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get primitiveCount(): number {
    return this.#view.getUint32(0, LE);
  }

  set primitiveCount(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get primitiveOffset(): number {
    return this.#view.getUint32(4, LE);
  }

  set primitiveOffset(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get firstVertex(): number {
    return this.#view.getUint32(8, LE);
  }

  set firstVertex(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get transformOffset(): number {
    return this.#view.getUint32(12, LE);
  }

  set transformOffset(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }
}