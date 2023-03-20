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
import {IndirectCommandsLayoutTokenNV} from "./IndirectCommandsLayoutTokenNV.ts";
import { StructureType, PipelineBindPoint } from "../enum.ts";
import { IndirectCommandsLayoutUsageFlagsNV } from "../def.ts";

export interface InitIndirectCommandsLayoutCreateInfoNV {
  pNext?: AnyPointer;
  flags?: IndirectCommandsLayoutUsageFlagsNV;
  pipelineBindPoint?: PipelineBindPoint;
  tokenCount?: number;
  pTokens?: AnyPointer;
  streamCount?: number;
  pStreamStrides?: AnyPointer;
}

export class IndirectCommandsLayoutCreateInfoNV implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitIndirectCommandsLayoutCreateInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitIndirectCommandsLayoutCreateInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(IndirectCommandsLayoutCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < IndirectCommandsLayoutCreateInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(IndirectCommandsLayoutCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.pipelineBindPoint !== undefined) this.pipelineBindPoint = data.pipelineBindPoint;
      if (data.tokenCount !== undefined) this.tokenCount = data.tokenCount;
      if (data.pTokens !== undefined) this.pTokens = data.pTokens;
      if (data.streamCount !== undefined) this.streamCount = data.streamCount;
      if (data.pStreamStrides !== undefined) this.pStreamStrides = data.pStreamStrides;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, IndirectCommandsLayoutCreateInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.INDIRECT_COMMANDS_LAYOUT_CREATE_INFO_NV;
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

  set flags(value: IndirectCommandsLayoutUsageFlagsNV) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pipelineBindPoint(): number {
    return this.#view.getUint32(20, LE);
  }

  set pipelineBindPoint(value: PipelineBindPoint) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get tokenCount(): number {
    return this.#view.getUint32(24, LE);
  }

  set tokenCount(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get pTokens(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set pTokens(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get streamCount(): number {
    return this.#view.getUint32(40, LE);
  }

  set streamCount(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get pStreamStrides(): Deno.PointerValue {
    return pointerFromView(this.#view, 48, LE);
  }

  set pStreamStrides(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }
}