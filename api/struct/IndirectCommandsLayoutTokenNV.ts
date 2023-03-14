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
import { StructureType, IndirectCommandsTokenTypeNV, IndexType } from "../enum.ts";
import { Bool32, PipelineLayout, ShaderStageFlags, IndirectStateFlagsNV } from "../def.ts";

export interface InitIndirectCommandsLayoutTokenNV {
  pNext?: AnyPointer;
  tokenType?: IndirectCommandsTokenTypeNV;
  stream?: number;
  offset?: number;
  vertexBindingUnit?: number;
  vertexDynamicStride?: Bool32;
  pushconstantPipelineLayout?: PipelineLayout;
  pushconstantShaderStageFlags?: ShaderStageFlags;
  pushconstantOffset?: number;
  pushconstantSize?: number;
  indirectStateFlags?: IndirectStateFlagsNV;
  indexTypeCount?: number;
  pIndexTypes?: AnyPointer;
  pIndexTypeValues?: AnyPointer;
}

export class IndirectCommandsLayoutTokenNV implements BaseStruct {
  static size = 88;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitIndirectCommandsLayoutTokenNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitIndirectCommandsLayoutTokenNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(IndirectCommandsLayoutTokenNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < IndirectCommandsLayoutTokenNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(IndirectCommandsLayoutTokenNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.tokenType !== undefined) this.tokenType = data.tokenType;
      if (data.stream !== undefined) this.stream = data.stream;
      if (data.offset !== undefined) this.offset = data.offset;
      if (data.vertexBindingUnit !== undefined) this.vertexBindingUnit = data.vertexBindingUnit;
      if (data.vertexDynamicStride !== undefined) this.vertexDynamicStride = data.vertexDynamicStride;
      if (data.pushconstantPipelineLayout !== undefined) this.pushconstantPipelineLayout = data.pushconstantPipelineLayout;
      if (data.pushconstantShaderStageFlags !== undefined) this.pushconstantShaderStageFlags = data.pushconstantShaderStageFlags;
      if (data.pushconstantOffset !== undefined) this.pushconstantOffset = data.pushconstantOffset;
      if (data.pushconstantSize !== undefined) this.pushconstantSize = data.pushconstantSize;
      if (data.indirectStateFlags !== undefined) this.indirectStateFlags = data.indirectStateFlags;
      if (data.indexTypeCount !== undefined) this.indexTypeCount = data.indexTypeCount;
      if (data.pIndexTypes !== undefined) this.pIndexTypes = data.pIndexTypes;
      if (data.pIndexTypeValues !== undefined) this.pIndexTypeValues = data.pIndexTypeValues;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, IndirectCommandsLayoutTokenNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.INDIRECT_COMMANDS_LAYOUT_TOKEN_NV;
  }

  get sType() {
    return this.#view.getUint32(0, LE);
  }

  set sType(value: StructureType) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pNext() {
    return pointerFromView(this.#view, 8, LE);
  }

  set pNext(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }

  get tokenType() {
    return this.#view.getUint32(16, LE);
  }

  set tokenType(value: IndirectCommandsTokenTypeNV) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get stream() {
    return this.#view.getUint32(20, LE);
  }

  set stream(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get offset() {
    return this.#view.getUint32(24, LE);
  }

  set offset(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get vertexBindingUnit() {
    return this.#view.getUint32(28, LE);
  }

  set vertexBindingUnit(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get vertexDynamicStride() {
    return this.#view.getUint32(32, LE);
  }

  set vertexDynamicStride(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get pushconstantPipelineLayout() {
    return pointerFromView(this.#view, 40, LE);
  }

  set pushconstantPipelineLayout(value: PipelineLayout) {
    this.#view.setBigUint64(40, BigInt(anyPointer(value)), LE);
  }

  get pushconstantShaderStageFlags() {
    return this.#view.getUint32(48, LE);
  }

  set pushconstantShaderStageFlags(value: ShaderStageFlags) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get pushconstantOffset() {
    return this.#view.getUint32(52, LE);
  }

  set pushconstantOffset(value: number) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get pushconstantSize() {
    return this.#view.getUint32(56, LE);
  }

  set pushconstantSize(value: number) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get indirectStateFlags() {
    return this.#view.getUint32(60, LE);
  }

  set indirectStateFlags(value: IndirectStateFlagsNV) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get indexTypeCount() {
    return this.#view.getUint32(64, LE);
  }

  set indexTypeCount(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get pIndexTypes() {
    return pointerFromView(this.#view, 72, LE);
  }

  set pIndexTypes(value: AnyPointer) {
    this.#view.setBigUint64(72, BigInt(anyPointer(value)), LE);
  }

  get pIndexTypeValues() {
    return pointerFromView(this.#view, 80, LE);
  }

  set pIndexTypeValues(value: AnyPointer) {
    this.#view.setBigUint64(80, BigInt(anyPointer(value)), LE);
  }
}