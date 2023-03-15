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
import { StructureType, CopyMicromapModeEXT } from "../enum.ts";
import { MicromapEXT } from "../def.ts";
import { DeviceOrHostAddressConstKHR } from "../union.ts";

export interface InitCopyMemoryToMicromapInfoEXT {
  pNext?: AnyPointer;
  src?: DeviceOrHostAddressConstKHR;
  dst?: MicromapEXT;
  mode?: CopyMicromapModeEXT;
}

export class CopyMemoryToMicromapInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCopyMemoryToMicromapInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCopyMemoryToMicromapInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CopyMemoryToMicromapInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CopyMemoryToMicromapInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CopyMemoryToMicromapInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.src !== undefined) this.src = data.src;
      if (data.dst !== undefined) this.dst = data.dst;
      if (data.mode !== undefined) this.mode = data.mode;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CopyMemoryToMicromapInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.COPY_MEMORY_TO_MICROMAP_INFO_EXT;
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

  get src() {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  set src(value: DeviceOrHostAddressConstKHR) {
    throw new Error(`Unknown type: {"union":["u64","buffer"]}`);
  }

  get dst() {
    return pointerFromView(this.#view, 24, LE);
  }

  set dst(value: MicromapEXT) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get mode() {
    return this.#view.getUint32(32, LE);
  }

  set mode(value: CopyMicromapModeEXT) {
    this.#view.setUint32(32, Number(value), LE);
  }
}