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

export interface InitPhysicalDeviceOpacityMicromapFeaturesEXT {
  pNext?: AnyPointer;
  micromap?: Bool32;
  micromapCaptureReplay?: Bool32;
  micromapHostCommands?: Bool32;
}

export class PhysicalDeviceOpacityMicromapFeaturesEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceOpacityMicromapFeaturesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceOpacityMicromapFeaturesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceOpacityMicromapFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceOpacityMicromapFeaturesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceOpacityMicromapFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.micromap !== undefined) this.micromap = data.micromap;
      if (data.micromapCaptureReplay !== undefined) this.micromapCaptureReplay = data.micromapCaptureReplay;
      if (data.micromapHostCommands !== undefined) this.micromapHostCommands = data.micromapHostCommands;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceOpacityMicromapFeaturesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_OPACITY_MICROMAP_FEATURES_EXT;
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

  get micromap(): number {
    return this.#view.getUint32(16, LE);
  }

  set micromap(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get micromapCaptureReplay(): number {
    return this.#view.getUint32(20, LE);
  }

  set micromapCaptureReplay(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get micromapHostCommands(): number {
    return this.#view.getUint32(24, LE);
  }

  set micromapHostCommands(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }
}