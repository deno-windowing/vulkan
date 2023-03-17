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
import {IndirectCommandsStreamNV} from "./IndirectCommandsStreamNV.ts";
import { StructureType, PipelineBindPoint } from "../enum.ts";
import { Pipeline, IndirectCommandsLayoutNV, Buffer, DeviceSize } from "../def.ts";

export interface InitGeneratedCommandsInfoNV {
  pNext?: AnyPointer;
  pipelineBindPoint?: PipelineBindPoint;
  pipeline?: Pipeline;
  indirectCommandsLayout?: IndirectCommandsLayoutNV;
  streamCount?: number;
  pStreams?: AnyPointer;
  sequencesCount?: number;
  preprocessBuffer?: Buffer;
  preprocessOffset?: DeviceSize;
  preprocessSize?: DeviceSize;
  sequencesCountBuffer?: Buffer;
  sequencesCountOffset?: DeviceSize;
  sequencesIndexBuffer?: Buffer;
  sequencesIndexOffset?: DeviceSize;
}

export class GeneratedCommandsInfoNV implements BaseStruct {
  static size = 120;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitGeneratedCommandsInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitGeneratedCommandsInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(GeneratedCommandsInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < GeneratedCommandsInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(GeneratedCommandsInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.pipelineBindPoint !== undefined) this.pipelineBindPoint = data.pipelineBindPoint;
      if (data.pipeline !== undefined) this.pipeline = data.pipeline;
      if (data.indirectCommandsLayout !== undefined) this.indirectCommandsLayout = data.indirectCommandsLayout;
      if (data.streamCount !== undefined) this.streamCount = data.streamCount;
      if (data.pStreams !== undefined) this.pStreams = data.pStreams;
      if (data.sequencesCount !== undefined) this.sequencesCount = data.sequencesCount;
      if (data.preprocessBuffer !== undefined) this.preprocessBuffer = data.preprocessBuffer;
      if (data.preprocessOffset !== undefined) this.preprocessOffset = data.preprocessOffset;
      if (data.preprocessSize !== undefined) this.preprocessSize = data.preprocessSize;
      if (data.sequencesCountBuffer !== undefined) this.sequencesCountBuffer = data.sequencesCountBuffer;
      if (data.sequencesCountOffset !== undefined) this.sequencesCountOffset = data.sequencesCountOffset;
      if (data.sequencesIndexBuffer !== undefined) this.sequencesIndexBuffer = data.sequencesIndexBuffer;
      if (data.sequencesIndexOffset !== undefined) this.sequencesIndexOffset = data.sequencesIndexOffset;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, GeneratedCommandsInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.GENERATED_COMMANDS_INFO_NV;
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

  get pipelineBindPoint(): number {
    return this.#view.getUint32(16, LE);
  }

  set pipelineBindPoint(value: PipelineBindPoint) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pipeline(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pipeline(value: Pipeline) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get indirectCommandsLayout(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set indirectCommandsLayout(value: IndirectCommandsLayoutNV) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }

  get streamCount(): number {
    return this.#view.getUint32(40, LE);
  }

  set streamCount(value: number) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get pStreams(): Deno.PointerValue {
    return pointerFromView(this.#view, 48, LE);
  }

  set pStreams(value: AnyPointer) {
    this.#view.setBigUint64(48, BigInt(anyPointer(value)), LE);
  }

  get sequencesCount(): number {
    return this.#view.getUint32(56, LE);
  }

  set sequencesCount(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get preprocessBuffer(): Deno.PointerValue {
    return pointerFromView(this.#view, 64, LE);
  }

  set preprocessBuffer(value: Buffer) {
    this.#view.setBigUint64(64, BigInt(anyPointer(value)), LE);
  }

  get preprocessOffset(): bigint {
    return this.#view.getBigUint64(72, LE);
  }

  set preprocessOffset(value: DeviceSize) {
    this.#view.setBigUint64(72, BigInt(value), LE);
  }

  get preprocessSize(): bigint {
    return this.#view.getBigUint64(80, LE);
  }

  set preprocessSize(value: DeviceSize) {
    this.#view.setBigUint64(80, BigInt(value), LE);
  }

  get sequencesCountBuffer(): Deno.PointerValue {
    return pointerFromView(this.#view, 88, LE);
  }

  set sequencesCountBuffer(value: Buffer) {
    this.#view.setBigUint64(88, BigInt(anyPointer(value)), LE);
  }

  get sequencesCountOffset(): bigint {
    return this.#view.getBigUint64(96, LE);
  }

  set sequencesCountOffset(value: DeviceSize) {
    this.#view.setBigUint64(96, BigInt(value), LE);
  }

  get sequencesIndexBuffer(): Deno.PointerValue {
    return pointerFromView(this.#view, 104, LE);
  }

  set sequencesIndexBuffer(value: Buffer) {
    this.#view.setBigUint64(104, BigInt(anyPointer(value)), LE);
  }

  get sequencesIndexOffset(): bigint {
    return this.#view.getBigUint64(112, LE);
  }

  set sequencesIndexOffset(value: DeviceSize) {
    this.#view.setBigUint64(112, BigInt(value), LE);
  }
}