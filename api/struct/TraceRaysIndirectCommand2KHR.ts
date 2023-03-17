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
import { DeviceAddress, DeviceSize } from "../def.ts";

export interface InitTraceRaysIndirectCommand2KHR {
  raygenShaderRecordAddress?: DeviceAddress;
  raygenShaderRecordSize?: DeviceSize;
  missShaderBindingTableAddress?: DeviceAddress;
  missShaderBindingTableSize?: DeviceSize;
  missShaderBindingTableStride?: DeviceSize;
  hitShaderBindingTableAddress?: DeviceAddress;
  hitShaderBindingTableSize?: DeviceSize;
  hitShaderBindingTableStride?: DeviceSize;
  callableShaderBindingTableAddress?: DeviceAddress;
  callableShaderBindingTableSize?: DeviceSize;
  callableShaderBindingTableStride?: DeviceSize;
  width?: number;
  height?: number;
  depth?: number;
}

export class TraceRaysIndirectCommand2KHR implements BaseStruct {
  static size = 104;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitTraceRaysIndirectCommand2KHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitTraceRaysIndirectCommand2KHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(TraceRaysIndirectCommand2KHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < TraceRaysIndirectCommand2KHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(TraceRaysIndirectCommand2KHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.raygenShaderRecordAddress !== undefined) this.raygenShaderRecordAddress = data.raygenShaderRecordAddress;
      if (data.raygenShaderRecordSize !== undefined) this.raygenShaderRecordSize = data.raygenShaderRecordSize;
      if (data.missShaderBindingTableAddress !== undefined) this.missShaderBindingTableAddress = data.missShaderBindingTableAddress;
      if (data.missShaderBindingTableSize !== undefined) this.missShaderBindingTableSize = data.missShaderBindingTableSize;
      if (data.missShaderBindingTableStride !== undefined) this.missShaderBindingTableStride = data.missShaderBindingTableStride;
      if (data.hitShaderBindingTableAddress !== undefined) this.hitShaderBindingTableAddress = data.hitShaderBindingTableAddress;
      if (data.hitShaderBindingTableSize !== undefined) this.hitShaderBindingTableSize = data.hitShaderBindingTableSize;
      if (data.hitShaderBindingTableStride !== undefined) this.hitShaderBindingTableStride = data.hitShaderBindingTableStride;
      if (data.callableShaderBindingTableAddress !== undefined) this.callableShaderBindingTableAddress = data.callableShaderBindingTableAddress;
      if (data.callableShaderBindingTableSize !== undefined) this.callableShaderBindingTableSize = data.callableShaderBindingTableSize;
      if (data.callableShaderBindingTableStride !== undefined) this.callableShaderBindingTableStride = data.callableShaderBindingTableStride;
      if (data.width !== undefined) this.width = data.width;
      if (data.height !== undefined) this.height = data.height;
      if (data.depth !== undefined) this.depth = data.depth;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, TraceRaysIndirectCommand2KHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get raygenShaderRecordAddress(): bigint {
    return this.#view.getBigUint64(0, LE);
  }

  set raygenShaderRecordAddress(value: DeviceAddress) {
    this.#view.setBigUint64(0, BigInt(value), LE);
  }

  get raygenShaderRecordSize(): bigint {
    return this.#view.getBigUint64(8, LE);
  }

  set raygenShaderRecordSize(value: DeviceSize) {
    this.#view.setBigUint64(8, BigInt(value), LE);
  }

  get missShaderBindingTableAddress(): bigint {
    return this.#view.getBigUint64(16, LE);
  }

  set missShaderBindingTableAddress(value: DeviceAddress) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get missShaderBindingTableSize(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set missShaderBindingTableSize(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get missShaderBindingTableStride(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set missShaderBindingTableStride(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get hitShaderBindingTableAddress(): bigint {
    return this.#view.getBigUint64(40, LE);
  }

  set hitShaderBindingTableAddress(value: DeviceAddress) {
    this.#view.setBigUint64(40, BigInt(value), LE);
  }

  get hitShaderBindingTableSize(): bigint {
    return this.#view.getBigUint64(48, LE);
  }

  set hitShaderBindingTableSize(value: DeviceSize) {
    this.#view.setBigUint64(48, BigInt(value), LE);
  }

  get hitShaderBindingTableStride(): bigint {
    return this.#view.getBigUint64(56, LE);
  }

  set hitShaderBindingTableStride(value: DeviceSize) {
    this.#view.setBigUint64(56, BigInt(value), LE);
  }

  get callableShaderBindingTableAddress(): bigint {
    return this.#view.getBigUint64(64, LE);
  }

  set callableShaderBindingTableAddress(value: DeviceAddress) {
    this.#view.setBigUint64(64, BigInt(value), LE);
  }

  get callableShaderBindingTableSize(): bigint {
    return this.#view.getBigUint64(72, LE);
  }

  set callableShaderBindingTableSize(value: DeviceSize) {
    this.#view.setBigUint64(72, BigInt(value), LE);
  }

  get callableShaderBindingTableStride(): bigint {
    return this.#view.getBigUint64(80, LE);
  }

  set callableShaderBindingTableStride(value: DeviceSize) {
    this.#view.setBigUint64(80, BigInt(value), LE);
  }

  get width(): number {
    return this.#view.getUint32(88, LE);
  }

  set width(value: number) {
    this.#view.setUint32(88, Number(value), LE);
  }

  get height(): number {
    return this.#view.getUint32(92, LE);
  }

  set height(value: number) {
    this.#view.setUint32(92, Number(value), LE);
  }

  get depth(): number {
    return this.#view.getUint32(96, LE);
  }

  set depth(value: number) {
    this.#view.setUint32(96, Number(value), LE);
  }
}