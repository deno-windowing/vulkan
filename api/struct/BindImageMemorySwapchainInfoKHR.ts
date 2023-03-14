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
import { SwapchainKHR } from "../def.ts";

export interface InitBindImageMemorySwapchainInfoKHR {
  pNext?: AnyPointer;
  swapchain?: SwapchainKHR;
  imageIndex?: number;
}

export class BindImageMemorySwapchainInfoKHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBindImageMemorySwapchainInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBindImageMemorySwapchainInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BindImageMemorySwapchainInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BindImageMemorySwapchainInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BindImageMemorySwapchainInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.swapchain !== undefined) this.swapchain = data.swapchain;
      if (data.imageIndex !== undefined) this.imageIndex = data.imageIndex;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BindImageMemorySwapchainInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.BIND_IMAGE_MEMORY_SWAPCHAIN_INFO_KHR;
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

  get swapchain() {
    return pointerFromView(this.#view, 16, LE);
  }

  set swapchain(value: SwapchainKHR) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get imageIndex() {
    return this.#view.getUint32(24, LE);
  }

  set imageIndex(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }
}