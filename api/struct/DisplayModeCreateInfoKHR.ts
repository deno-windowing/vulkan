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
import {DisplayModeParametersKHR} from "./DisplayModeParametersKHR.ts";
import { StructureType } from "../enum.ts";
import { DisplayModeCreateFlagsKHR } from "../def.ts";

export interface InitDisplayModeCreateInfoKHR {
  pNext?: AnyPointer;
  flags?: DisplayModeCreateFlagsKHR;
  parameters?: DisplayModeParametersKHR;
}

export class DisplayModeCreateInfoKHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDisplayModeCreateInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDisplayModeCreateInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DisplayModeCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DisplayModeCreateInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DisplayModeCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.parameters !== undefined) this.parameters = data.parameters;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DisplayModeCreateInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DISPLAY_MODE_CREATE_INFO_KHR;
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

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: DisplayModeCreateFlagsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get parameters(): DisplayModeParametersKHR {
    return new DisplayModeParametersKHR(this.#data.subarray(20, 20 + DisplayModeParametersKHR.size));
  }

  set parameters(value: DisplayModeParametersKHR) {
    if (value[BUFFER].byteLength < DisplayModeParametersKHR.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 20);
  }
}