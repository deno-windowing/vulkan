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
import {GeometryTrianglesNV} from "./GeometryTrianglesNV.ts";
import {GeometryAABBNV} from "./GeometryAABBNV.ts";

export interface InitGeometryDataNV {
  triangles?: GeometryTrianglesNV;
  aabbs?: GeometryAABBNV;
}

export class GeometryDataNV implements BaseStruct {
  static size = 136;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitGeometryDataNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitGeometryDataNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(GeometryDataNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < GeometryDataNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(GeometryDataNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.triangles !== undefined) this.triangles = data.triangles;
      if (data.aabbs !== undefined) this.aabbs = data.aabbs;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, GeometryDataNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get triangles(): GeometryTrianglesNV {
    return new GeometryTrianglesNV(this.#data.subarray(0, 0 + GeometryTrianglesNV.size));
  }

  set triangles(value: GeometryTrianglesNV) {
    if (value[BUFFER].byteLength < GeometryTrianglesNV.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get aabbs(): GeometryAABBNV {
    return new GeometryAABBNV(this.#data.subarray(96, 96 + GeometryAABBNV.size));
  }

  set aabbs(value: GeometryAABBNV) {
    if (value[BUFFER].byteLength < GeometryAABBNV.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 96);
  }
}