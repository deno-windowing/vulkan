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

export interface InitBufferCollectionCreateInfoFUCHSIA {
  pNext?: AnyPointer;
  collectionToken?: Deno.PointerValue;
}

export class BufferCollectionCreateInfoFUCHSIA implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitBufferCollectionCreateInfoFUCHSIA);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitBufferCollectionCreateInfoFUCHSIA) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(BufferCollectionCreateInfoFUCHSIA.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < BufferCollectionCreateInfoFUCHSIA.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(BufferCollectionCreateInfoFUCHSIA.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.collectionToken !== undefined) this.collectionToken = data.collectionToken;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, BufferCollectionCreateInfoFUCHSIA.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.BUFFER_COLLECTION_CREATE_INFO_FUCHSIA;
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

  get collectionToken(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set collectionToken(value: Deno.PointerValue) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }
}