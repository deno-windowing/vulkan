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
import {StdVideoEncodeH264RefMgmtFlags} from "./StdVideoEncodeH264RefMgmtFlags.ts";
import {StdVideoEncodeH264RefListModEntry} from "./StdVideoEncodeH264RefListModEntry.ts";
import {StdVideoEncodeH264RefPicMarkingEntry} from "./StdVideoEncodeH264RefPicMarkingEntry.ts";

export interface InitStdVideoEncodeH264RefMemMgmtCtrlOperations {
  flags?: StdVideoEncodeH264RefMgmtFlags;
  refList0ModOpCount?: number;
  pRefList0ModOperations?: AnyPointer;
  refList1ModOpCount?: number;
  pRefList1ModOperations?: AnyPointer;
  refPicMarkingOpCount?: number;
  pRefPicMarkingOperations?: AnyPointer;
}

export class StdVideoEncodeH264RefMemMgmtCtrlOperations implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoEncodeH264RefMemMgmtCtrlOperations);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoEncodeH264RefMemMgmtCtrlOperations) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoEncodeH264RefMemMgmtCtrlOperations.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoEncodeH264RefMemMgmtCtrlOperations.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoEncodeH264RefMemMgmtCtrlOperations.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.refList0ModOpCount !== undefined) this.refList0ModOpCount = data.refList0ModOpCount;
      if (data.pRefList0ModOperations !== undefined) this.pRefList0ModOperations = data.pRefList0ModOperations;
      if (data.refList1ModOpCount !== undefined) this.refList1ModOpCount = data.refList1ModOpCount;
      if (data.pRefList1ModOperations !== undefined) this.pRefList1ModOperations = data.pRefList1ModOperations;
      if (data.refPicMarkingOpCount !== undefined) this.refPicMarkingOpCount = data.refPicMarkingOpCount;
      if (data.pRefPicMarkingOperations !== undefined) this.pRefPicMarkingOperations = data.pRefPicMarkingOperations;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoEncodeH264RefMemMgmtCtrlOperations.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get flags(): StdVideoEncodeH264RefMgmtFlags {
    return new StdVideoEncodeH264RefMgmtFlags(this.#data.subarray(0, 0 + StdVideoEncodeH264RefMgmtFlags.size));
  }

  set flags(value: StdVideoEncodeH264RefMgmtFlags) {
    if (value[BUFFER].byteLength < StdVideoEncodeH264RefMgmtFlags.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 0);
  }

  get refList0ModOpCount(): number {
    return this.#view.getUint8(8);
  }

  set refList0ModOpCount(value: number) {
    this.#view.setUint8(8, Number(value));
  }

  get pRefList0ModOperations(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set pRefList0ModOperations(value: AnyPointer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get refList1ModOpCount(): number {
    return this.#view.getUint8(24);
  }

  set refList1ModOpCount(value: number) {
    this.#view.setUint8(24, Number(value));
  }

  get pRefList1ModOperations(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pRefList1ModOperations(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get refPicMarkingOpCount(): number {
    return this.#view.getUint8(40);
  }

  set refPicMarkingOpCount(value: number) {
    this.#view.setUint8(40, Number(value));
  }

  get pRefPicMarkingOperations(): Deno.PointerValue {
    return pointerFromView(this.#view, 48, LE);
  }

  set pRefPicMarkingOperations(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }
}