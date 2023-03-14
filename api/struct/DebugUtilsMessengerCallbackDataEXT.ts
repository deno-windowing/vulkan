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
import {DebugUtilsLabelEXT} from "./DebugUtilsLabelEXT.ts";
import {DebugUtilsObjectNameInfoEXT} from "./DebugUtilsObjectNameInfoEXT.ts";
import { StructureType } from "../enum.ts";
import { DebugUtilsMessengerCallbackDataFlagsEXT } from "../def.ts";

export interface InitDebugUtilsMessengerCallbackDataEXT {
  pNext?: AnyPointer;
  flags?: DebugUtilsMessengerCallbackDataFlagsEXT;
  pMessageIdName?: AnyPointer;
  messageIdNumber?: number;
  pMessage?: AnyPointer;
  queueLabelCount?: number;
  pQueueLabels?: AnyPointer;
  cmdBufLabelCount?: number;
  pCmdBufLabels?: AnyPointer;
  objectCount?: number;
  pObjects?: AnyPointer;
}

export class DebugUtilsMessengerCallbackDataEXT implements BaseStruct {
  static size = 96;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDebugUtilsMessengerCallbackDataEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDebugUtilsMessengerCallbackDataEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DebugUtilsMessengerCallbackDataEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DebugUtilsMessengerCallbackDataEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DebugUtilsMessengerCallbackDataEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.pMessageIdName !== undefined) this.pMessageIdName = data.pMessageIdName;
      if (data.messageIdNumber !== undefined) this.messageIdNumber = data.messageIdNumber;
      if (data.pMessage !== undefined) this.pMessage = data.pMessage;
      if (data.queueLabelCount !== undefined) this.queueLabelCount = data.queueLabelCount;
      if (data.pQueueLabels !== undefined) this.pQueueLabels = data.pQueueLabels;
      if (data.cmdBufLabelCount !== undefined) this.cmdBufLabelCount = data.cmdBufLabelCount;
      if (data.pCmdBufLabels !== undefined) this.pCmdBufLabels = data.pCmdBufLabels;
      if (data.objectCount !== undefined) this.objectCount = data.objectCount;
      if (data.pObjects !== undefined) this.pObjects = data.pObjects;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DebugUtilsMessengerCallbackDataEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEBUG_UTILS_MESSENGER_CALLBACK_DATA_EXT;
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

  get flags() {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: DebugUtilsMessengerCallbackDataFlagsEXT) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pMessageIdName() {
    return pointerFromView(this.#view, 24, LE);
  }

  set pMessageIdName(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get messageIdNumber() {
    return this.#view.getInt32(32, LE);
  }

  set messageIdNumber(value: number) {
    this.#view.setInt32(32, Number(value), LE);
  }

  get pMessage() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pMessage(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get queueLabelCount() {
    return this.#view.getUint32(48, LE);
  }

  set queueLabelCount(value: number) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get pQueueLabels() {
    return pointerFromView(this.#view, 56, LE);
  }

  set pQueueLabels(value: AnyPointer) {
    this.#view.setBigUint64(56, BigInt(anyPointer(value)), LE);
  }

  get cmdBufLabelCount() {
    return this.#view.getUint32(64, LE);
  }

  set cmdBufLabelCount(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get pCmdBufLabels() {
    return pointerFromView(this.#view, 72, LE);
  }

  set pCmdBufLabels(value: AnyPointer) {
    this.#view.setBigUint64(72, BigInt(anyPointer(value)), LE);
  }

  get objectCount() {
    return this.#view.getUint32(80, LE);
  }

  set objectCount(value: number) {
    this.#view.setUint32(80, Number(value), LE);
  }

  get pObjects() {
    return pointerFromView(this.#view, 88, LE);
  }

  set pObjects(value: AnyPointer) {
    this.#view.setBigUint64(88, BigInt(anyPointer(value)), LE);
  }
}