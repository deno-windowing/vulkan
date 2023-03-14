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

export interface InitD3D12FenceSubmitInfoKHR {
  pNext?: AnyPointer;
  waitSemaphoreValuesCount?: number;
  pWaitSemaphoreValues?: AnyPointer;
  signalSemaphoreValuesCount?: number;
  pSignalSemaphoreValues?: AnyPointer;
}

export class D3D12FenceSubmitInfoKHR implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitD3D12FenceSubmitInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitD3D12FenceSubmitInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(D3D12FenceSubmitInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < D3D12FenceSubmitInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(D3D12FenceSubmitInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.waitSemaphoreValuesCount !== undefined) this.waitSemaphoreValuesCount = data.waitSemaphoreValuesCount;
      if (data.pWaitSemaphoreValues !== undefined) this.pWaitSemaphoreValues = data.pWaitSemaphoreValues;
      if (data.signalSemaphoreValuesCount !== undefined) this.signalSemaphoreValuesCount = data.signalSemaphoreValuesCount;
      if (data.pSignalSemaphoreValues !== undefined) this.pSignalSemaphoreValues = data.pSignalSemaphoreValues;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, D3D12FenceSubmitInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.D3D12_FENCE_SUBMIT_INFO_KHR;
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

  get waitSemaphoreValuesCount() {
    return this.#view.getUint32(16, LE);
  }

  set waitSemaphoreValuesCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pWaitSemaphoreValues() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pWaitSemaphoreValues(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get signalSemaphoreValuesCount() {
    return this.#view.getUint32(32, LE);
  }

  set signalSemaphoreValuesCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pSignalSemaphoreValues() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pSignalSemaphoreValues(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}