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

export interface InitWin32KeyedMutexAcquireReleaseInfoKHR {
  pNext?: AnyPointer;
  acquireCount?: number;
  pAcquireSyncs?: AnyPointer;
  pAcquireKeys?: AnyPointer;
  pAcquireTimeouts?: AnyPointer;
  releaseCount?: number;
  pReleaseSyncs?: AnyPointer;
  pReleaseKeys?: AnyPointer;
}

export class Win32KeyedMutexAcquireReleaseInfoKHR implements BaseStruct {
  static size = 72;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitWin32KeyedMutexAcquireReleaseInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitWin32KeyedMutexAcquireReleaseInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(Win32KeyedMutexAcquireReleaseInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < Win32KeyedMutexAcquireReleaseInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(Win32KeyedMutexAcquireReleaseInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.acquireCount !== undefined) this.acquireCount = data.acquireCount;
      if (data.pAcquireSyncs !== undefined) this.pAcquireSyncs = data.pAcquireSyncs;
      if (data.pAcquireKeys !== undefined) this.pAcquireKeys = data.pAcquireKeys;
      if (data.pAcquireTimeouts !== undefined) this.pAcquireTimeouts = data.pAcquireTimeouts;
      if (data.releaseCount !== undefined) this.releaseCount = data.releaseCount;
      if (data.pReleaseSyncs !== undefined) this.pReleaseSyncs = data.pReleaseSyncs;
      if (data.pReleaseKeys !== undefined) this.pReleaseKeys = data.pReleaseKeys;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, Win32KeyedMutexAcquireReleaseInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.WIN32_KEYED_MUTEX_ACQUIRE_RELEASE_INFO_KHR;
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

  get acquireCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set acquireCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pAcquireSyncs(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pAcquireSyncs(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get pAcquireKeys(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pAcquireKeys(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get pAcquireTimeouts(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set pAcquireTimeouts(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get releaseCount(): number {
    return this.#view.getUint32(48, LE);
  }

  set releaseCount(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get pReleaseSyncs(): Deno.PointerValue {
    return pointerFromView(this.#view, 56, LE);
  }

  set pReleaseSyncs(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }

  get pReleaseKeys(): Deno.PointerValue {
    return pointerFromView(this.#view, 64, LE);
  }

  set pReleaseKeys(value: AnyPointer) {
    this.#view.setBigUint64(64, BigInt(anyPointer(value)), LE);
  }
}