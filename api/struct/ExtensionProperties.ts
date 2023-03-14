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

export interface InitExtensionProperties {
  extensionName?: Uint8Array;
  specVersion?: number;
}

export class ExtensionProperties implements BaseStruct {
  static size = 260;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitExtensionProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitExtensionProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ExtensionProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ExtensionProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ExtensionProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.extensionName !== undefined) this.extensionName = data.extensionName;
      if (data.specVersion !== undefined) this.specVersion = data.specVersion;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ExtensionProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get extensionName() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 0, 256);
  }

  set extensionName(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 0);
  }

  get specVersion() {
    return this.#view.getUint32(256, LE);
  }

  set specVersion(value: number) {
    this.#view.setUint32(256, Number(value), LE);
  }
}