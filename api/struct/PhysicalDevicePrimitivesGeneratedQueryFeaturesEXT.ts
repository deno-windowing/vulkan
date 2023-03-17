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
import { Bool32 } from "../def.ts";

export interface InitPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT {
  pNext?: AnyPointer;
  primitivesGeneratedQuery?: Bool32;
  primitivesGeneratedQueryWithRasterizerDiscard?: Bool32;
  primitivesGeneratedQueryWithNonZeroStreams?: Bool32;
}

export class PhysicalDevicePrimitivesGeneratedQueryFeaturesEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDevicePrimitivesGeneratedQueryFeaturesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDevicePrimitivesGeneratedQueryFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDevicePrimitivesGeneratedQueryFeaturesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDevicePrimitivesGeneratedQueryFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.primitivesGeneratedQuery !== undefined) this.primitivesGeneratedQuery = data.primitivesGeneratedQuery;
      if (data.primitivesGeneratedQueryWithRasterizerDiscard !== undefined) this.primitivesGeneratedQueryWithRasterizerDiscard = data.primitivesGeneratedQueryWithRasterizerDiscard;
      if (data.primitivesGeneratedQueryWithNonZeroStreams !== undefined) this.primitivesGeneratedQueryWithNonZeroStreams = data.primitivesGeneratedQueryWithNonZeroStreams;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDevicePrimitivesGeneratedQueryFeaturesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_PRIMITIVES_GENERATED_QUERY_FEATURES_EXT;
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

  get primitivesGeneratedQuery(): number {
    return this.#view.getUint32(16, LE);
  }

  set primitivesGeneratedQuery(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get primitivesGeneratedQueryWithRasterizerDiscard(): number {
    return this.#view.getUint32(20, LE);
  }

  set primitivesGeneratedQueryWithRasterizerDiscard(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get primitivesGeneratedQueryWithNonZeroStreams(): number {
    return this.#view.getUint32(24, LE);
  }

  set primitivesGeneratedQueryWithNonZeroStreams(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }
}