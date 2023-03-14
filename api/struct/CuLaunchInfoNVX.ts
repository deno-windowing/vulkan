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
import { CuFunctionNVX } from "../def.ts";

export interface InitCuLaunchInfoNVX {
  pNext?: AnyPointer;
  vk_function?: CuFunctionNVX;
  gridDimX?: number;
  gridDimY?: number;
  gridDimZ?: number;
  blockDimX?: number;
  blockDimY?: number;
  blockDimZ?: number;
  sharedMemBytes?: number;
  paramCount?: number | bigint;
  pParams?: AnyPointer;
  extraCount?: number | bigint;
  pExtras?: AnyPointer;
}

export class CuLaunchInfoNVX implements BaseStruct {
  static size = 88;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCuLaunchInfoNVX);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCuLaunchInfoNVX) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CuLaunchInfoNVX.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CuLaunchInfoNVX.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CuLaunchInfoNVX.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.vk_function !== undefined) this.vk_function = data.vk_function;
      if (data.gridDimX !== undefined) this.gridDimX = data.gridDimX;
      if (data.gridDimY !== undefined) this.gridDimY = data.gridDimY;
      if (data.gridDimZ !== undefined) this.gridDimZ = data.gridDimZ;
      if (data.blockDimX !== undefined) this.blockDimX = data.blockDimX;
      if (data.blockDimY !== undefined) this.blockDimY = data.blockDimY;
      if (data.blockDimZ !== undefined) this.blockDimZ = data.blockDimZ;
      if (data.sharedMemBytes !== undefined) this.sharedMemBytes = data.sharedMemBytes;
      if (data.paramCount !== undefined) this.paramCount = data.paramCount;
      if (data.pParams !== undefined) this.pParams = data.pParams;
      if (data.extraCount !== undefined) this.extraCount = data.extraCount;
      if (data.pExtras !== undefined) this.pExtras = data.pExtras;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CuLaunchInfoNVX.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.CU_LAUNCH_INFO_NVX;
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

  get vk_function() {
    return pointerFromView(this.#view, 16, LE);
  }

  set vk_function(value: CuFunctionNVX) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get gridDimX() {
    return this.#view.getUint32(24, LE);
  }

  set gridDimX(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get gridDimY() {
    return this.#view.getUint32(28, LE);
  }

  set gridDimY(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get gridDimZ() {
    return this.#view.getUint32(32, LE);
  }

  set gridDimZ(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get blockDimX() {
    return this.#view.getUint32(36, LE);
  }

  set blockDimX(value: number) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get blockDimY() {
    return this.#view.getUint32(40, LE);
  }

  set blockDimY(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get blockDimZ() {
    return this.#view.getUint32(44, LE);
  }

  set blockDimZ(value: number) {
    this.#view.setUint32(44, Number(value), LE);
  }

  get sharedMemBytes() {
    return this.#view.getUint32(48, LE);
  }

  set sharedMemBytes(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get paramCount() {
    return this.#view.getBigUint64(56, LE);
  }

  set paramCount(value: number | bigint) {
    this.#view.setBigUint64(56, BigInt(value), LE);
  }

  get pParams() {
    return pointerFromView(this.#view, 64, LE);
  }

  set pParams(value: AnyPointer) {
    this.#view.setBigUint64(64, BigInt(anyPointer(value)), LE);
  }

  get extraCount() {
    return this.#view.getBigUint64(72, LE);
  }

  set extraCount(value: number | bigint) {
    this.#view.setBigUint64(72, BigInt(value), LE);
  }

  get pExtras() {
    return pointerFromView(this.#view, 80, LE);
  }

  set pExtras(value: AnyPointer) {
    this.#view.setBigUint64(80, BigInt(anyPointer(value)), LE);
  }
}