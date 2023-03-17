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

export interface InitOpticalFlowSessionCreatePrivateDataInfoNV {
  pNext?: AnyPointer;
  id?: number;
  size?: number;
  pPrivateData?: AnyPointer;
}

export class OpticalFlowSessionCreatePrivateDataInfoNV implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitOpticalFlowSessionCreatePrivateDataInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitOpticalFlowSessionCreatePrivateDataInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(OpticalFlowSessionCreatePrivateDataInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < OpticalFlowSessionCreatePrivateDataInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(OpticalFlowSessionCreatePrivateDataInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.id !== undefined) this.id = data.id;
      if (data.size !== undefined) this.size = data.size;
      if (data.pPrivateData !== undefined) this.pPrivateData = data.pPrivateData;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, OpticalFlowSessionCreatePrivateDataInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.OPTICAL_FLOW_SESSION_CREATE_PRIVATE_DATA_INFO_NV;
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

  get id(): number {
    return this.#view.getUint32(16, LE);
  }

  set id(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get size(): number {
    return this.#view.getUint32(20, LE);
  }

  set size(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get pPrivateData(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pPrivateData(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}