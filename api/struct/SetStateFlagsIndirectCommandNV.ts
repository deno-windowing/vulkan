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

export interface InitSetStateFlagsIndirectCommandNV {
  data?: number;
}

export class SetStateFlagsIndirectCommandNV implements BaseStruct {
  static size = 4;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSetStateFlagsIndirectCommandNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSetStateFlagsIndirectCommandNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SetStateFlagsIndirectCommandNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SetStateFlagsIndirectCommandNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SetStateFlagsIndirectCommandNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.data !== undefined) this.data = data.data;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SetStateFlagsIndirectCommandNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get data() {
    return this.#view.getUint32(0, LE);
  }

  set data(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }
}