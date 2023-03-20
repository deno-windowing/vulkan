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
import {DisplayPlanePropertiesKHR} from "./DisplayPlanePropertiesKHR.ts";
import { StructureType } from "../enum.ts";

export interface InitDisplayPlaneProperties2KHR {
  pNext?: AnyPointer;
  displayPlaneProperties?: DisplayPlanePropertiesKHR;
}

export class DisplayPlaneProperties2KHR implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDisplayPlaneProperties2KHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDisplayPlaneProperties2KHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DisplayPlaneProperties2KHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DisplayPlaneProperties2KHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DisplayPlaneProperties2KHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.displayPlaneProperties !== undefined) this.displayPlaneProperties = data.displayPlaneProperties;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DisplayPlaneProperties2KHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DISPLAY_PLANE_PROPERTIES_2_KHR;
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

  get displayPlaneProperties(): DisplayPlanePropertiesKHR {
    return new DisplayPlanePropertiesKHR(this.#data.subarray(16, 16 + DisplayPlanePropertiesKHR.size));
  }

  set displayPlaneProperties(value: DisplayPlanePropertiesKHR) {
    if (value[BUFFER].byteLength < DisplayPlanePropertiesKHR.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }
}