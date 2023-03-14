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

export interface InitConformanceVersion {
  major?: number;
  minor?: number;
  subminor?: number;
  patch?: number;
}

export class ConformanceVersion implements BaseStruct {
  static size = 4;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitConformanceVersion);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitConformanceVersion) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ConformanceVersion.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ConformanceVersion.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ConformanceVersion.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.major !== undefined) this.major = data.major;
      if (data.minor !== undefined) this.minor = data.minor;
      if (data.subminor !== undefined) this.subminor = data.subminor;
      if (data.patch !== undefined) this.patch = data.patch;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ConformanceVersion.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get major() {
    return this.#view.getUint8(0);
  }

  set major(value: number) {
    this.#view.setUint8(0, Number(value));
  }

  get minor() {
    return this.#view.getUint8(1);
  }

  set minor(value: number) {
    this.#view.setUint8(1, Number(value));
  }

  get subminor() {
    return this.#view.getUint8(2);
  }

  set subminor(value: number) {
    this.#view.setUint8(2, Number(value));
  }

  get patch() {
    return this.#view.getUint8(3);
  }

  set patch(value: number) {
    this.#view.setUint8(3, Number(value));
  }
}