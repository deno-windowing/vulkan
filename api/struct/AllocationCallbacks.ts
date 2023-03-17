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

export interface InitAllocationCallbacks {
  pUserData?: AnyPointer;
  pfnAllocation?: Deno.PointerValue;
  pfnReallocation?: Deno.PointerValue;
  pfnFree?: Deno.PointerValue;
  pfnInternalAllocation?: Deno.PointerValue;
  pfnInternalFree?: Deno.PointerValue;
}

export class AllocationCallbacks implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAllocationCallbacks);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAllocationCallbacks) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AllocationCallbacks.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AllocationCallbacks.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AllocationCallbacks.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pUserData !== undefined) this.pUserData = data.pUserData;
      if (data.pfnAllocation !== undefined) this.pfnAllocation = data.pfnAllocation;
      if (data.pfnReallocation !== undefined) this.pfnReallocation = data.pfnReallocation;
      if (data.pfnFree !== undefined) this.pfnFree = data.pfnFree;
      if (data.pfnInternalAllocation !== undefined) this.pfnInternalAllocation = data.pfnInternalAllocation;
      if (data.pfnInternalFree !== undefined) this.pfnInternalFree = data.pfnInternalFree;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AllocationCallbacks.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get pUserData(): Deno.PointerValue {
    return pointerFromView(this.#view, 0, LE);
  }

  set pUserData(value: AnyPointer) {
    this.#view.setBigUint64(0, BigInt(anyPointer(value)), LE);
  }

  get pfnAllocation(): Deno.PointerValue {
    return pointerFromView(this.#view, 8, LE);
  }

  set pfnAllocation(value: Deno.PointerValue) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }

  get pfnReallocation(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set pfnReallocation(value: Deno.PointerValue) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get pfnFree(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pfnFree(value: Deno.PointerValue) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get pfnInternalAllocation(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pfnInternalAllocation(value: Deno.PointerValue) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get pfnInternalFree(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set pfnInternalFree(value: Deno.PointerValue) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}