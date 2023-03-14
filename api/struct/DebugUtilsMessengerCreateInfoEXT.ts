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
import { DebugUtilsMessengerCreateFlagsEXT, DebugUtilsMessageSeverityFlagsEXT, DebugUtilsMessageTypeFlagsEXT } from "../def.ts";

export interface InitDebugUtilsMessengerCreateInfoEXT {
  pNext?: AnyPointer;
  flags?: DebugUtilsMessengerCreateFlagsEXT;
  messageSeverity?: DebugUtilsMessageSeverityFlagsEXT;
  messageType?: DebugUtilsMessageTypeFlagsEXT;
  pfnUserCallback?: Deno.PointerValue;
  pUserData?: AnyPointer;
}

export class DebugUtilsMessengerCreateInfoEXT implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDebugUtilsMessengerCreateInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDebugUtilsMessengerCreateInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DebugUtilsMessengerCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DebugUtilsMessengerCreateInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DebugUtilsMessengerCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.messageSeverity !== undefined) this.messageSeverity = data.messageSeverity;
      if (data.messageType !== undefined) this.messageType = data.messageType;
      if (data.pfnUserCallback !== undefined) this.pfnUserCallback = data.pfnUserCallback;
      if (data.pUserData !== undefined) this.pUserData = data.pUserData;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DebugUtilsMessengerCreateInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.DEBUG_UTILS_MESSENGER_CREATE_INFO_EXT;
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

  set flags(value: DebugUtilsMessengerCreateFlagsEXT) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get messageSeverity() {
    return this.#view.getUint32(20, LE);
  }

  set messageSeverity(value: DebugUtilsMessageSeverityFlagsEXT) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get messageType() {
    return this.#view.getUint32(24, LE);
  }

  set messageType(value: DebugUtilsMessageTypeFlagsEXT) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pfnUserCallback() {
    throw new Error(`Unknown type: "function"`);
  }

  set pfnUserCallback(value: Deno.PointerValue) {
    throw new Error(`Unknown type: "function"`);
  }

  get pUserData() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pUserData(value: AnyPointer) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }
}