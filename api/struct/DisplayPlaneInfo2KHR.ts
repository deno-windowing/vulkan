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
import { DisplayModeKHR } from "../def.ts";

export interface InitDisplayPlaneInfo2KHR {
  pNext?: AnyPointer;
  mode?: DisplayModeKHR;
  planeIndex?: number;
}

export class DisplayPlaneInfo2KHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDisplayPlaneInfo2KHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDisplayPlaneInfo2KHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DisplayPlaneInfo2KHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DisplayPlaneInfo2KHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DisplayPlaneInfo2KHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.mode !== undefined) this.mode = data.mode;
      if (data.planeIndex !== undefined) this.planeIndex = data.planeIndex;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DisplayPlaneInfo2KHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DISPLAY_PLANE_INFO_2_KHR;
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

  get mode() {
    return pointerFromView(this.#view, 16, LE);
  }

  set mode(value: DisplayModeKHR) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get planeIndex() {
    return this.#view.getUint32(24, LE);
  }

  set planeIndex(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }
}