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
import {ImageFormatConstraintsInfoFUCHSIA} from "./ImageFormatConstraintsInfoFUCHSIA.ts";
import {BufferCollectionConstraintsInfoFUCHSIA} from "./BufferCollectionConstraintsInfoFUCHSIA.ts";
import { StructureType } from "../enum.ts";
import { ImageConstraintsInfoFlagsFUCHSIA } from "../def.ts";

export interface InitImageConstraintsInfoFUCHSIA {
  pNext?: AnyPointer;
  formatConstraintsCount?: number;
  pFormatConstraints?: AnyPointer;
  bufferCollectionConstraints?: BufferCollectionConstraintsInfoFUCHSIA;
  flags?: ImageConstraintsInfoFlagsFUCHSIA;
}

export class ImageConstraintsInfoFUCHSIA implements BaseStruct {
  static size = 80;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitImageConstraintsInfoFUCHSIA);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitImageConstraintsInfoFUCHSIA) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ImageConstraintsInfoFUCHSIA.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ImageConstraintsInfoFUCHSIA.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ImageConstraintsInfoFUCHSIA.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.formatConstraintsCount !== undefined) this.formatConstraintsCount = data.formatConstraintsCount;
      if (data.pFormatConstraints !== undefined) this.pFormatConstraints = data.pFormatConstraints;
      if (data.bufferCollectionConstraints !== undefined) this.bufferCollectionConstraints = data.bufferCollectionConstraints;
      if (data.flags !== undefined) this.flags = data.flags;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ImageConstraintsInfoFUCHSIA.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.IMAGE_CONSTRAINTS_INFO_FUCHSIA;
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

  get formatConstraintsCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set formatConstraintsCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pFormatConstraints(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pFormatConstraints(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get bufferCollectionConstraints(): BufferCollectionConstraintsInfoFUCHSIA {
    return new BufferCollectionConstraintsInfoFUCHSIA(this.#data.subarray(32, 32 + BufferCollectionConstraintsInfoFUCHSIA.size));
  }

  set bufferCollectionConstraints(value: BufferCollectionConstraintsInfoFUCHSIA) {
    if (value[BUFFER].byteLength < BufferCollectionConstraintsInfoFUCHSIA.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 32);
  }

  get flags(): number {
    return this.#view.getUint32(72, LE);
  }

  set flags(value: ImageConstraintsInfoFlagsFUCHSIA) {
    this.#view.setUint32(72, Number(value), LE);
  }
}