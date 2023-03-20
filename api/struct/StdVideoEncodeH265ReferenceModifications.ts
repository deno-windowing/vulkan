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
import {StdVideoEncodeH265ReferenceModificationFlags} from "./StdVideoEncodeH265ReferenceModificationFlags.ts";

export interface InitStdVideoEncodeH265ReferenceModifications {
  flags?: StdVideoEncodeH265ReferenceModificationFlags;
  referenceList0ModificationsCount?: number;
  pReferenceList0Modifications?: AnyPointer;
  referenceList1ModificationsCount?: number;
  pReferenceList1Modifications?: AnyPointer;
}

export class StdVideoEncodeH265ReferenceModifications implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH265ReferenceModifications);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH265ReferenceModifications) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH265ReferenceModifications.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH265ReferenceModifications.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH265ReferenceModifications.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.referenceList0ModificationsCount !== undefined) this.referenceList0ModificationsCount = data.referenceList0ModificationsCount;
      if (data.pReferenceList0Modifications !== undefined) this.pReferenceList0Modifications = data.pReferenceList0Modifications;
      if (data.referenceList1ModificationsCount !== undefined) this.referenceList1ModificationsCount = data.referenceList1ModificationsCount;
      if (data.pReferenceList1Modifications !== undefined) this.pReferenceList1Modifications = data.pReferenceList1Modifications;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH265ReferenceModifications.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags(): StdVideoEncodeH265ReferenceModificationFlags {
    return new StdVideoEncodeH265ReferenceModificationFlags(this.#data.subarray(0, 0 + StdVideoEncodeH265ReferenceModificationFlags.size));
  }

  set flags(value: StdVideoEncodeH265ReferenceModificationFlags) {
    if (value[BUFFER].byteLength < StdVideoEncodeH265ReferenceModificationFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get referenceList0ModificationsCount(): number {
    return this.#view.getUint8(8);
  }

  set referenceList0ModificationsCount(value: number) {
    this.#view.setUint8(8, Number(value));
  }

  get pReferenceList0Modifications(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set pReferenceList0Modifications(value: AnyPointer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get referenceList1ModificationsCount(): number {
    return this.#view.getUint8(24);
  }

  set referenceList1ModificationsCount(value: number) {
    this.#view.setUint8(24, Number(value));
  }

  get pReferenceList1Modifications(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pReferenceList1Modifications(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}