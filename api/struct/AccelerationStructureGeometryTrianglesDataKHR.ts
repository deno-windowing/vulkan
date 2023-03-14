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
import { DeviceSize } from "../def.ts";

export interface InitAccelerationStructureGeometryTrianglesDataKHR {
  pNext?: AnyPointer;
  vertexFormat?: Format;
  vertexData?: DeviceOrHostAddressConstKHR;
  vertexStride?: DeviceSize;
  maxVertex?: number;
  indexType?: IndexType;
  indexData?: DeviceOrHostAddressConstKHR;
  transformData?: DeviceOrHostAddressConstKHR;
}

export class AccelerationStructureGeometryTrianglesDataKHR implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAccelerationStructureGeometryTrianglesDataKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAccelerationStructureGeometryTrianglesDataKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AccelerationStructureGeometryTrianglesDataKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AccelerationStructureGeometryTrianglesDataKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AccelerationStructureGeometryTrianglesDataKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.vertexFormat !== undefined) this.vertexFormat = data.vertexFormat;
      if (data.vertexData !== undefined) this.vertexData = data.vertexData;
      if (data.vertexStride !== undefined) this.vertexStride = data.vertexStride;
      if (data.maxVertex !== undefined) this.maxVertex = data.maxVertex;
      if (data.indexType !== undefined) this.indexType = data.indexType;
      if (data.indexData !== undefined) this.indexData = data.indexData;
      if (data.transformData !== undefined) this.transformData = data.transformData;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AccelerationStructureGeometryTrianglesDataKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ACCELERATION_STRUCTURE_GEOMETRY_TRIANGLES_DATA_KHR;
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

  get vertexFormat() {
    return this.#view.getUint32(16, LE);
  }

  set vertexFormat(value: Format) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get vertexData() {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  set vertexData(value: DeviceOrHostAddressConstKHR) {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  get vertexStride() {
    return this.#view.getBigUint64(32, LE);
  }

  set vertexStride(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get maxVertex() {
    return this.#view.getUint32(40, LE);
  }

  set maxVertex(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get indexType() {
    return this.#view.getUint32(44, LE);
  }

  set indexType(value: IndexType) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get indexData() {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  set indexData(value: DeviceOrHostAddressConstKHR) {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  get transformData() {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  set transformData(value: DeviceOrHostAddressConstKHR) {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }
}