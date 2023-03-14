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

export interface InitAttachmentSampleLocationsEXT {
  attachmentIndex?: number;
  sampleLocationsInfo?: SampleLocationsInfoEXT;
}

export class AttachmentSampleLocationsEXT implements BaseStruct {
  static size = 44;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitAttachmentSampleLocationsEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitAttachmentSampleLocationsEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(AttachmentSampleLocationsEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < AttachmentSampleLocationsEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(AttachmentSampleLocationsEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.attachmentIndex !== undefined) this.attachmentIndex = data.attachmentIndex;
      if (data.sampleLocationsInfo !== undefined) this.sampleLocationsInfo = data.sampleLocationsInfo;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, AttachmentSampleLocationsEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get attachmentIndex() {
    return this.#view.getUint32(0, LE);
  }

  set attachmentIndex(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get sampleLocationsInfo() {
    return new SampleLocationsInfoEXT(this.#data.subarray(4, 4 + SampleLocationsInfoEXT.size));
  }

  set sampleLocationsInfo(value: SampleLocationsInfoEXT) {
    if (value[BUFFER].byteLength < SampleLocationsInfoEXT.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 4);
  }
}