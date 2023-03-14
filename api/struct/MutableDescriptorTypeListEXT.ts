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
import { DescriptorType } from "../enum.ts";

export interface InitMutableDescriptorTypeListEXT {
  descriptorTypeCount?: number;
  pDescriptorTypes?: AnyPointer;
}

export class MutableDescriptorTypeListEXT implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMutableDescriptorTypeListEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMutableDescriptorTypeListEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MutableDescriptorTypeListEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MutableDescriptorTypeListEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MutableDescriptorTypeListEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.descriptorTypeCount !== undefined) this.descriptorTypeCount = data.descriptorTypeCount;
      if (data.pDescriptorTypes !== undefined) this.pDescriptorTypes = data.pDescriptorTypes;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MutableDescriptorTypeListEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get descriptorTypeCount() {
    return this.#view.getUint32(0, LE);
  }

  set descriptorTypeCount(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pDescriptorTypes() {
    return pointerFromView(this.#view, 8, LE);
  }

  set pDescriptorTypes(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }
}