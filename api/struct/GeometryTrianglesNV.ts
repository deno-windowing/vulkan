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
import { StructureType, Format, IndexType } from "../enum.ts";
import { Buffer, DeviceSize } from "../def.ts";

export interface InitGeometryTrianglesNV {
  pNext?: AnyPointer;
  vertexData?: Buffer;
  vertexOffset?: DeviceSize;
  vertexCount?: number;
  vertexStride?: DeviceSize;
  vertexFormat?: Format;
  indexData?: Buffer;
  indexOffset?: DeviceSize;
  indexCount?: number;
  indexType?: IndexType;
  transformData?: Buffer;
  transformOffset?: DeviceSize;
}

export class GeometryTrianglesNV implements BaseStruct {
  static size = 96;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitGeometryTrianglesNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitGeometryTrianglesNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(GeometryTrianglesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < GeometryTrianglesNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(GeometryTrianglesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.vertexData !== undefined) this.vertexData = data.vertexData;
      if (data.vertexOffset !== undefined) this.vertexOffset = data.vertexOffset;
      if (data.vertexCount !== undefined) this.vertexCount = data.vertexCount;
      if (data.vertexStride !== undefined) this.vertexStride = data.vertexStride;
      if (data.vertexFormat !== undefined) this.vertexFormat = data.vertexFormat;
      if (data.indexData !== undefined) this.indexData = data.indexData;
      if (data.indexOffset !== undefined) this.indexOffset = data.indexOffset;
      if (data.indexCount !== undefined) this.indexCount = data.indexCount;
      if (data.indexType !== undefined) this.indexType = data.indexType;
      if (data.transformData !== undefined) this.transformData = data.transformData;
      if (data.transformOffset !== undefined) this.transformOffset = data.transformOffset;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, GeometryTrianglesNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.GEOMETRY_TRIANGLES_NV;
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

  get vertexData(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set vertexData(value: Buffer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get vertexOffset(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set vertexOffset(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get vertexCount(): number {
    return this.#view.getUint32(32, LE);
  }

  set vertexCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get vertexStride(): bigint {
    return this.#view.getBigUint64(40, LE);
  }

  set vertexStride(value: DeviceSize) {
    this.#view.setBigUint64(40, BigInt(value), LE);
  }

  get vertexFormat(): number {
    return this.#view.getUint32(48, LE);
  }

  set vertexFormat(value: Format) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get indexData(): Deno.PointerValue {
    return pointerFromView(this.#view, 56, LE);
  }

  set indexData(value: Buffer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }

  get indexOffset(): bigint {
    return this.#view.getBigUint64(64, LE);
  }

  set indexOffset(value: DeviceSize) {
    this.#view.setBigUint64(64, BigInt(value), LE);
  }

  get indexCount(): number {
    return this.#view.getUint32(72, LE);
  }

  set indexCount(value: number) {
    this.#view.setUint32(72, Number(value), LE);
  }

  get indexType(): number {
    return this.#view.getUint32(76, LE);
  }

  set indexType(value: IndexType) {
    this.#view.setUint32(76, Number(value), LE);
  }

  get transformData(): Deno.PointerValue {
    return pointerFromView(this.#view, 80, LE);
  }

  set transformData(value: Buffer) {
    this.#view.setBigUint64(80, BigInt(anyPointer(value)), LE);
  }

  get transformOffset(): bigint {
    return this.#view.getBigUint64(88, LE);
  }

  set transformOffset(value: DeviceSize) {
    this.#view.setBigUint64(88, BigInt(value), LE);
  }
}