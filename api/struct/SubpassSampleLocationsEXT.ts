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
import {SampleLocationsInfoEXT} from "./SampleLocationsInfoEXT.ts";

export interface InitSubpassSampleLocationsEXT {
  subpassIndex?: number;
  sampleLocationsInfo?: SampleLocationsInfoEXT;
}

export class SubpassSampleLocationsEXT implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSubpassSampleLocationsEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSubpassSampleLocationsEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SubpassSampleLocationsEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SubpassSampleLocationsEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SubpassSampleLocationsEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.subpassIndex !== undefined) this.subpassIndex = data.subpassIndex;
      if (data.sampleLocationsInfo !== undefined) this.sampleLocationsInfo = data.sampleLocationsInfo;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SubpassSampleLocationsEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get subpassIndex(): number {
    return this.#view.getUint32(0, LE);
  }

  set subpassIndex(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get sampleLocationsInfo(): SampleLocationsInfoEXT {
    return new SampleLocationsInfoEXT(this.#data.subarray(8, 8 + SampleLocationsInfoEXT.size));
  }

  set sampleLocationsInfo(value: SampleLocationsInfoEXT) {
    if (value[BUFFER].byteLength < SampleLocationsInfoEXT.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 8);
  }
}