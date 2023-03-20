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
import { StructureType, CopyAccelerationStructureModeKHR } from "../enum.ts";
import { AccelerationStructureKHR } from "../def.ts";

export interface InitCopyAccelerationStructureInfoKHR {
  pNext?: AnyPointer;
  src?: AccelerationStructureKHR;
  dst?: AccelerationStructureKHR;
  mode?: CopyAccelerationStructureModeKHR;
}

export class CopyAccelerationStructureInfoKHR implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCopyAccelerationStructureInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCopyAccelerationStructureInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CopyAccelerationStructureInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CopyAccelerationStructureInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CopyAccelerationStructureInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.src !== undefined) this.src = data.src;
      if (data.dst !== undefined) this.dst = data.dst;
      if (data.mode !== undefined) this.mode = data.mode;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CopyAccelerationStructureInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.COPY_ACCELERATION_STRUCTURE_INFO_KHR;
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

  get src(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set src(value: AccelerationStructureKHR) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get dst(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set dst(value: AccelerationStructureKHR) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get mode(): number {
    return this.#view.getUint32(32, LE);
  }

  set mode(value: CopyAccelerationStructureModeKHR) {
    this.#view.setUint32(32, Number(value), LE);
  }
}