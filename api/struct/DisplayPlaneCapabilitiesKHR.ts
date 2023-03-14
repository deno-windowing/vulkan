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
import {Offset2D} from "./Offset2D.ts";
import {Extent2D} from "./Extent2D.ts";
import { DisplayPlaneAlphaFlagsKHR } from "../def.ts";

export interface InitDisplayPlaneCapabilitiesKHR {
  supportedAlpha?: DisplayPlaneAlphaFlagsKHR;
  minSrcPosition?: Offset2D;
  maxSrcPosition?: Offset2D;
  minSrcExtent?: Extent2D;
  maxSrcExtent?: Extent2D;
  minDstPosition?: Offset2D;
  maxDstPosition?: Offset2D;
  minDstExtent?: Extent2D;
  maxDstExtent?: Extent2D;
}

export class DisplayPlaneCapabilitiesKHR implements BaseStruct {
  static size = 68;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDisplayPlaneCapabilitiesKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDisplayPlaneCapabilitiesKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DisplayPlaneCapabilitiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DisplayPlaneCapabilitiesKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DisplayPlaneCapabilitiesKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.supportedAlpha !== undefined) this.supportedAlpha = data.supportedAlpha;
      if (data.minSrcPosition !== undefined) this.minSrcPosition = data.minSrcPosition;
      if (data.maxSrcPosition !== undefined) this.maxSrcPosition = data.maxSrcPosition;
      if (data.minSrcExtent !== undefined) this.minSrcExtent = data.minSrcExtent;
      if (data.maxSrcExtent !== undefined) this.maxSrcExtent = data.maxSrcExtent;
      if (data.minDstPosition !== undefined) this.minDstPosition = data.minDstPosition;
      if (data.maxDstPosition !== undefined) this.maxDstPosition = data.maxDstPosition;
      if (data.minDstExtent !== undefined) this.minDstExtent = data.minDstExtent;
      if (data.maxDstExtent !== undefined) this.maxDstExtent = data.maxDstExtent;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DisplayPlaneCapabilitiesKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get supportedAlpha() {
    return this.#view.getUint32(0, LE);
  }

  set supportedAlpha(value: DisplayPlaneAlphaFlagsKHR) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get minSrcPosition() {
    return new Offset2D(this.#data.subarray(4, 4 + Offset2D.size));
  }

  set minSrcPosition(value: Offset2D) {
    if (value[BUFFER].byteLength < Offset2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 4);
  }

  get maxSrcPosition() {
    return new Offset2D(this.#data.subarray(12, 12 + Offset2D.size));
  }

  set maxSrcPosition(value: Offset2D) {
    if (value[BUFFER].byteLength < Offset2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 12);
  }

  get minSrcExtent() {
    return new Extent2D(this.#data.subarray(20, 20 + Extent2D.size));
  }

  set minSrcExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 20);
  }

  get maxSrcExtent() {
    return new Extent2D(this.#data.subarray(28, 28 + Extent2D.size));
  }

  set maxSrcExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 28);
  }

  get minDstPosition() {
    return new Offset2D(this.#data.subarray(36, 36 + Offset2D.size));
  }

  set minDstPosition(value: Offset2D) {
    if (value[BUFFER].byteLength < Offset2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 36);
  }

  get maxDstPosition() {
    return new Offset2D(this.#data.subarray(44, 44 + Offset2D.size));
  }

  set maxDstPosition(value: Offset2D) {
    if (value[BUFFER].byteLength < Offset2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 44);
  }

  get minDstExtent() {
    return new Extent2D(this.#data.subarray(52, 52 + Extent2D.size));
  }

  set minDstExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 52);
  }

  get maxDstExtent() {
    return new Extent2D(this.#data.subarray(60, 60 + Extent2D.size));
  }

  set maxDstExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 60);
  }
}