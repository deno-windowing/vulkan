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
import { SwapchainKHR, Semaphore, Fence } from "../def.ts";

export interface InitAcquireNextImageInfoKHR {
  pNext?: AnyPointer;
  swapchain?: SwapchainKHR;
  timeout?: number | bigint;
  semaphore?: Semaphore;
  fence?: Fence;
  deviceMask?: number;
}

export class AcquireNextImageInfoKHR implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAcquireNextImageInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAcquireNextImageInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AcquireNextImageInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AcquireNextImageInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AcquireNextImageInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.swapchain !== undefined) this.swapchain = data.swapchain;
      if (data.timeout !== undefined) this.timeout = data.timeout;
      if (data.semaphore !== undefined) this.semaphore = data.semaphore;
      if (data.fence !== undefined) this.fence = data.fence;
      if (data.deviceMask !== undefined) this.deviceMask = data.deviceMask;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AcquireNextImageInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.ACQUIRE_NEXT_IMAGE_INFO_KHR;
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

  get swapchain(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set swapchain(value: SwapchainKHR) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get timeout(): bigint {
    return this.#view.getBigUint64(24, LE);
  }

  set timeout(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get semaphore(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set semaphore(value: Semaphore) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get fence(): Deno.PointerValue {
    return pointerFromView(this.#view, 40, LE);
  }

  set fence(value: Fence) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get deviceMask(): number {
    return this.#view.getUint32(48, LE);
  }

  set deviceMask(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }
}