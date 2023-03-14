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
import { DeviceSize, Bool32 } from "../def.ts";

export interface InitMicromapBuildSizesInfoEXT {
  pNext?: AnyPointer;
  micromapSize?: DeviceSize;
  buildScratchSize?: DeviceSize;
  discardable?: Bool32;
}

export class MicromapBuildSizesInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMicromapBuildSizesInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMicromapBuildSizesInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MicromapBuildSizesInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MicromapBuildSizesInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MicromapBuildSizesInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.micromapSize !== undefined) this.micromapSize = data.micromapSize;
      if (data.buildScratchSize !== undefined) this.buildScratchSize = data.buildScratchSize;
      if (data.discardable !== undefined) this.discardable = data.discardable;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MicromapBuildSizesInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.MICROMAP_BUILD_SIZES_INFO_EXT;
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

  get micromapSize() {
    return this.#view.getBigUint64(16, LE);
  }

  set micromapSize(value: DeviceSize) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get buildScratchSize() {
    return this.#view.getBigUint64(24, LE);
  }

  set buildScratchSize(value: DeviceSize) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }

  get discardable() {
    return this.#view.getUint32(32, LE);
  }

  set discardable(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }
}