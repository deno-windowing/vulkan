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
import { Bool32 } from "../def.ts";

export interface InitPhysicalDeviceProvokingVertexPropertiesEXT {
  pNext?: AnyPointer;
  provokingVertexModePerPipeline?: Bool32;
  transformFeedbackPreservesTriangleFanProvokingVertex?: Bool32;
}

export class PhysicalDeviceProvokingVertexPropertiesEXT implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceProvokingVertexPropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceProvokingVertexPropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceProvokingVertexPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceProvokingVertexPropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceProvokingVertexPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.provokingVertexModePerPipeline !== undefined) this.provokingVertexModePerPipeline = data.provokingVertexModePerPipeline;
      if (data.transformFeedbackPreservesTriangleFanProvokingVertex !== undefined) this.transformFeedbackPreservesTriangleFanProvokingVertex = data.transformFeedbackPreservesTriangleFanProvokingVertex;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceProvokingVertexPropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_PROVOKING_VERTEX_PROPERTIES_EXT;
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

  get provokingVertexModePerPipeline() {
    return this.#view.getUint32(16, LE);
  }

  set provokingVertexModePerPipeline(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get transformFeedbackPreservesTriangleFanProvokingVertex() {
    return this.#view.getUint32(20, LE);
  }

  set transformFeedbackPreservesTriangleFanProvokingVertex(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }
}