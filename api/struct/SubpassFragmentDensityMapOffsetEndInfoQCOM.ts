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
import {Offset2D} from "./Offset2D.ts";
import { StructureType } from "../enum.ts";

export interface InitSubpassFragmentDensityMapOffsetEndInfoQCOM {
  pNext?: AnyPointer;
  fragmentDensityOffsetCount?: number;
  pFragmentDensityOffsets?: AnyPointer;
}

export class SubpassFragmentDensityMapOffsetEndInfoQCOM implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSubpassFragmentDensityMapOffsetEndInfoQCOM);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSubpassFragmentDensityMapOffsetEndInfoQCOM) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SubpassFragmentDensityMapOffsetEndInfoQCOM.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SubpassFragmentDensityMapOffsetEndInfoQCOM.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SubpassFragmentDensityMapOffsetEndInfoQCOM.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.fragmentDensityOffsetCount !== undefined) this.fragmentDensityOffsetCount = data.fragmentDensityOffsetCount;
      if (data.pFragmentDensityOffsets !== undefined) this.pFragmentDensityOffsets = data.pFragmentDensityOffsets;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SubpassFragmentDensityMapOffsetEndInfoQCOM.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SUBPASS_FRAGMENT_DENSITY_MAP_OFFSET_END_INFO_QCOM;
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

  get fragmentDensityOffsetCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set fragmentDensityOffsetCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pFragmentDensityOffsets(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pFragmentDensityOffsets(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}