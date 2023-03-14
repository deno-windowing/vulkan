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
import { DeviceMemory } from "../def.ts";

export interface InitWin32KeyedMutexAcquireReleaseInfoNV {
  pNext?: AnyPointer;
  acquireCount?: number;
  pAcquireSyncs?: AnyPointer;
  pAcquireKeys?: AnyPointer;
  pAcquireTimeoutMilliseconds?: AnyPointer;
  releaseCount?: number;
  pReleaseSyncs?: AnyPointer;
  pReleaseKeys?: AnyPointer;
}

export class Win32KeyedMutexAcquireReleaseInfoNV implements BaseStruct {
  static size = 72;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitWin32KeyedMutexAcquireReleaseInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitWin32KeyedMutexAcquireReleaseInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(Win32KeyedMutexAcquireReleaseInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < Win32KeyedMutexAcquireReleaseInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(Win32KeyedMutexAcquireReleaseInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.acquireCount !== undefined) this.acquireCount = data.acquireCount;
      if (data.pAcquireSyncs !== undefined) this.pAcquireSyncs = data.pAcquireSyncs;
      if (data.pAcquireKeys !== undefined) this.pAcquireKeys = data.pAcquireKeys;
      if (data.pAcquireTimeoutMilliseconds !== undefined) this.pAcquireTimeoutMilliseconds = data.pAcquireTimeoutMilliseconds;
      if (data.releaseCount !== undefined) this.releaseCount = data.releaseCount;
      if (data.pReleaseSyncs !== undefined) this.pReleaseSyncs = data.pReleaseSyncs;
      if (data.pReleaseKeys !== undefined) this.pReleaseKeys = data.pReleaseKeys;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, Win32KeyedMutexAcquireReleaseInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.WIN32_KEYED_MUTEX_ACQUIRE_RELEASE_INFO_NV;
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

  get acquireCount() {
    return this.#view.getUint32(16, LE);
  }

  set acquireCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pAcquireSyncs() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pAcquireSyncs(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get pAcquireKeys() {
    return pointerFromView(this.#view, 32, LE);
  }

  set pAcquireKeys(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get pAcquireTimeoutMilliseconds() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pAcquireTimeoutMilliseconds(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get releaseCount() {
    return this.#view.getUint32(48, LE);
  }

  set releaseCount(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get pReleaseSyncs() {
    return pointerFromView(this.#view, 56, LE);
  }

  set pReleaseSyncs(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }

  get pReleaseKeys() {
    return pointerFromView(this.#view, 64, LE);
  }

  set pReleaseKeys(value: AnyPointer) {
    this.#view.setBigUint64(64, BigInt(anyPointer(value)), LE);
  }
}