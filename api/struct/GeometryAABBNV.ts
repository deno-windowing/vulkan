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
import { Buffer, DeviceSize } from "../def.ts";

export interface InitGeometryAABBNV {
  pNext?: AnyPointer;
  aabbData?: Buffer;
  numAABBs?: number;
  stride?: number;
  offset?: DeviceSize;
}

export class GeometryAABBNV implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitGeometryAABBNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitGeometryAABBNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(GeometryAABBNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < GeometryAABBNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(GeometryAABBNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.aabbData !== undefined) this.aabbData = data.aabbData;
      if (data.numAABBs !== undefined) this.numAABBs = data.numAABBs;
      if (data.stride !== undefined) this.stride = data.stride;
      if (data.offset !== undefined) this.offset = data.offset;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, GeometryAABBNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.GEOMETRY_AABB_NV;
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

  get aabbData(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set aabbData(value: Buffer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get numAABBs(): number {
    return this.#view.getUint32(24, LE);
  }

  set numAABBs(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get stride(): number {
    return this.#view.getUint32(28, LE);
  }

  set stride(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get offset(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set offset(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }
}