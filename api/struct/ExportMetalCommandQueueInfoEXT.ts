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
import { Queue, MTLCommandQueue_id } from "../def.ts";

export interface InitExportMetalCommandQueueInfoEXT {
  pNext?: AnyPointer;
  queue?: Queue;
  mtlCommandQueue?: MTLCommandQueue_id;
}

export class ExportMetalCommandQueueInfoEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitExportMetalCommandQueueInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitExportMetalCommandQueueInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ExportMetalCommandQueueInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ExportMetalCommandQueueInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ExportMetalCommandQueueInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.queue !== undefined) this.queue = data.queue;
      if (data.mtlCommandQueue !== undefined) this.mtlCommandQueue = data.mtlCommandQueue;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ExportMetalCommandQueueInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.EXPORT_METAL_COMMAND_QUEUE_INFO_EXT;
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

  get queue() {
    return pointerFromView(this.#view, 16, LE);
  }

  set queue(value: Queue) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get mtlCommandQueue() {
    return pointerFromView(this.#view, 24, LE);
  }

  set mtlCommandQueue(value: MTLCommandQueue_id) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}