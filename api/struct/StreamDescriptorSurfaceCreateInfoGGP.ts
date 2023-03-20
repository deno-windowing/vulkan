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
import { StreamDescriptorSurfaceCreateFlagsGGP } from "../def.ts";

export interface InitStreamDescriptorSurfaceCreateInfoGGP {
  pNext?: AnyPointer;
  flags?: StreamDescriptorSurfaceCreateFlagsGGP;
  streamDescriptor?: Deno.PointerValue;
}

export class StreamDescriptorSurfaceCreateInfoGGP implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStreamDescriptorSurfaceCreateInfoGGP);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStreamDescriptorSurfaceCreateInfoGGP) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StreamDescriptorSurfaceCreateInfoGGP.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StreamDescriptorSurfaceCreateInfoGGP.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StreamDescriptorSurfaceCreateInfoGGP.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.streamDescriptor !== undefined) this.streamDescriptor = data.streamDescriptor;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StreamDescriptorSurfaceCreateInfoGGP.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.STREAM_DESCRIPTOR_SURFACE_CREATE_INFO_GGP;
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

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: StreamDescriptorSurfaceCreateFlagsGGP) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get streamDescriptor(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set streamDescriptor(value: Deno.PointerValue) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}