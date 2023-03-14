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
import {AttachmentSampleLocationsEXT} from "./AttachmentSampleLocationsEXT.ts";
import {SubpassSampleLocationsEXT} from "./SubpassSampleLocationsEXT.ts";
import { StructureType } from "../enum.ts";

export interface InitRenderPassSampleLocationsBeginInfoEXT {
  pNext?: AnyPointer;
  attachmentInitialSampleLocationsCount?: number;
  pAttachmentInitialSampleLocations?: AnyPointer;
  postSubpassSampleLocationsCount?: number;
  pPostSubpassSampleLocations?: AnyPointer;
}

export class RenderPassSampleLocationsBeginInfoEXT implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitRenderPassSampleLocationsBeginInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitRenderPassSampleLocationsBeginInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(RenderPassSampleLocationsBeginInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < RenderPassSampleLocationsBeginInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(RenderPassSampleLocationsBeginInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.attachmentInitialSampleLocationsCount !== undefined) this.attachmentInitialSampleLocationsCount = data.attachmentInitialSampleLocationsCount;
      if (data.pAttachmentInitialSampleLocations !== undefined) this.pAttachmentInitialSampleLocations = data.pAttachmentInitialSampleLocations;
      if (data.postSubpassSampleLocationsCount !== undefined) this.postSubpassSampleLocationsCount = data.postSubpassSampleLocationsCount;
      if (data.pPostSubpassSampleLocations !== undefined) this.pPostSubpassSampleLocations = data.pPostSubpassSampleLocations;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, RenderPassSampleLocationsBeginInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.RENDER_PASS_SAMPLE_LOCATIONS_BEGIN_INFO_EXT;
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

  get attachmentInitialSampleLocationsCount() {
    return this.#view.getUint32(16, LE);
  }

  set attachmentInitialSampleLocationsCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pAttachmentInitialSampleLocations() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pAttachmentInitialSampleLocations(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get postSubpassSampleLocationsCount() {
    return this.#view.getUint32(32, LE);
  }

  set postSubpassSampleLocationsCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pPostSubpassSampleLocations() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pPostSubpassSampleLocations(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}