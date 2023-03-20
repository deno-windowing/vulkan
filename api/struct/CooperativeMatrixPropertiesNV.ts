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
import { StructureType, ComponentTypeNV, ScopeNV } from "../enum.ts";

export interface InitCooperativeMatrixPropertiesNV {
  pNext?: AnyPointer;
  MSize?: number;
  NSize?: number;
  KSize?: number;
  AType?: ComponentTypeNV;
  BType?: ComponentTypeNV;
  CType?: ComponentTypeNV;
  DType?: ComponentTypeNV;
  scope?: ScopeNV;
}

export class CooperativeMatrixPropertiesNV implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCooperativeMatrixPropertiesNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCooperativeMatrixPropertiesNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CooperativeMatrixPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CooperativeMatrixPropertiesNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CooperativeMatrixPropertiesNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.MSize !== undefined) this.MSize = data.MSize;
      if (data.NSize !== undefined) this.NSize = data.NSize;
      if (data.KSize !== undefined) this.KSize = data.KSize;
      if (data.AType !== undefined) this.AType = data.AType;
      if (data.BType !== undefined) this.BType = data.BType;
      if (data.CType !== undefined) this.CType = data.CType;
      if (data.DType !== undefined) this.DType = data.DType;
      if (data.scope !== undefined) this.scope = data.scope;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CooperativeMatrixPropertiesNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.COOPERATIVE_MATRIX_PROPERTIES_NV;
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

  get MSize(): number {
    return this.#view.getUint32(16, LE);
  }

  set MSize(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get NSize(): number {
    return this.#view.getUint32(20, LE);
  }

  set NSize(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get KSize(): number {
    return this.#view.getUint32(24, LE);
  }

  set KSize(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get AType(): number {
    return this.#view.getUint32(28, LE);
  }

  set AType(value: ComponentTypeNV) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get BType(): number {
    return this.#view.getUint32(32, LE);
  }

  set BType(value: ComponentTypeNV) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get CType(): number {
    return this.#view.getUint32(36, LE);
  }

  set CType(value: ComponentTypeNV) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get DType(): number {
    return this.#view.getUint32(40, LE);
  }

  set DType(value: ComponentTypeNV) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get scope(): number {
    return this.#view.getUint32(44, LE);
  }

  set scope(value: ScopeNV) {
    this.#view.setUint32(44, Number(value), LE);
  }
}