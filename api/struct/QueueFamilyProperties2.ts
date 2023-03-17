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
import {QueueFamilyProperties} from "./QueueFamilyProperties.ts";
import { StructureType } from "../enum.ts";

export interface InitQueueFamilyProperties2 {
  pNext?: AnyPointer;
  queueFamilyProperties?: QueueFamilyProperties;
}

export class QueueFamilyProperties2 implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitQueueFamilyProperties2);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitQueueFamilyProperties2) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(QueueFamilyProperties2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < QueueFamilyProperties2.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(QueueFamilyProperties2.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.queueFamilyProperties !== undefined) this.queueFamilyProperties = data.queueFamilyProperties;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, QueueFamilyProperties2.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.QUEUE_FAMILY_PROPERTIES_2;
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

  get queueFamilyProperties(): QueueFamilyProperties {
    return new QueueFamilyProperties(this.#data.subarray(16, 16 + QueueFamilyProperties.size));
  }

  set queueFamilyProperties(value: QueueFamilyProperties) {
    if (value[BUFFER].byteLength < QueueFamilyProperties.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }
}