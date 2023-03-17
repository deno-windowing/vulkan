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
import { VideoEncodeH265CapabilityFlagsEXT, VideoEncodeH265InputModeFlagsEXT, VideoEncodeH265OutputModeFlagsEXT, VideoEncodeH265CtbSizeFlagsEXT, VideoEncodeH265TransformBlockSizeFlagsEXT } from "../def.ts";

export interface InitVideoEncodeH265CapabilitiesEXT {
  pNext?: AnyPointer;
  flags?: VideoEncodeH265CapabilityFlagsEXT;
  inputModeFlags?: VideoEncodeH265InputModeFlagsEXT;
  outputModeFlags?: VideoEncodeH265OutputModeFlagsEXT;
  ctbSizes?: VideoEncodeH265CtbSizeFlagsEXT;
  transformBlockSizes?: VideoEncodeH265TransformBlockSizeFlagsEXT;
  maxPPictureL0ReferenceCount?: number;
  maxBPictureL0ReferenceCount?: number;
  maxL1ReferenceCount?: number;
  maxSubLayersCount?: number;
  minLog2MinLumaCodingBlockSizeMinus3?: number;
  maxLog2MinLumaCodingBlockSizeMinus3?: number;
  minLog2MinLumaTransformBlockSizeMinus2?: number;
  maxLog2MinLumaTransformBlockSizeMinus2?: number;
  minMaxTransformHierarchyDepthInter?: number;
  maxMaxTransformHierarchyDepthInter?: number;
  minMaxTransformHierarchyDepthIntra?: number;
  maxMaxTransformHierarchyDepthIntra?: number;
  maxDiffCuQpDeltaDepth?: number;
  minMaxNumMergeCand?: number;
  maxMaxNumMergeCand?: number;
}

export class VideoEncodeH265CapabilitiesEXT implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeH265CapabilitiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeH265CapabilitiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeH265CapabilitiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeH265CapabilitiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeH265CapabilitiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.inputModeFlags !== undefined) this.inputModeFlags = data.inputModeFlags;
      if (data.outputModeFlags !== undefined) this.outputModeFlags = data.outputModeFlags;
      if (data.ctbSizes !== undefined) this.ctbSizes = data.ctbSizes;
      if (data.transformBlockSizes !== undefined) this.transformBlockSizes = data.transformBlockSizes;
      if (data.maxPPictureL0ReferenceCount !== undefined) this.maxPPictureL0ReferenceCount = data.maxPPictureL0ReferenceCount;
      if (data.maxBPictureL0ReferenceCount !== undefined) this.maxBPictureL0ReferenceCount = data.maxBPictureL0ReferenceCount;
      if (data.maxL1ReferenceCount !== undefined) this.maxL1ReferenceCount = data.maxL1ReferenceCount;
      if (data.maxSubLayersCount !== undefined) this.maxSubLayersCount = data.maxSubLayersCount;
      if (data.minLog2MinLumaCodingBlockSizeMinus3 !== undefined) this.minLog2MinLumaCodingBlockSizeMinus3 = data.minLog2MinLumaCodingBlockSizeMinus3;
      if (data.maxLog2MinLumaCodingBlockSizeMinus3 !== undefined) this.maxLog2MinLumaCodingBlockSizeMinus3 = data.maxLog2MinLumaCodingBlockSizeMinus3;
      if (data.minLog2MinLumaTransformBlockSizeMinus2 !== undefined) this.minLog2MinLumaTransformBlockSizeMinus2 = data.minLog2MinLumaTransformBlockSizeMinus2;
      if (data.maxLog2MinLumaTransformBlockSizeMinus2 !== undefined) this.maxLog2MinLumaTransformBlockSizeMinus2 = data.maxLog2MinLumaTransformBlockSizeMinus2;
      if (data.minMaxTransformHierarchyDepthInter !== undefined) this.minMaxTransformHierarchyDepthInter = data.minMaxTransformHierarchyDepthInter;
      if (data.maxMaxTransformHierarchyDepthInter !== undefined) this.maxMaxTransformHierarchyDepthInter = data.maxMaxTransformHierarchyDepthInter;
      if (data.minMaxTransformHierarchyDepthIntra !== undefined) this.minMaxTransformHierarchyDepthIntra = data.minMaxTransformHierarchyDepthIntra;
      if (data.maxMaxTransformHierarchyDepthIntra !== undefined) this.maxMaxTransformHierarchyDepthIntra = data.maxMaxTransformHierarchyDepthIntra;
      if (data.maxDiffCuQpDeltaDepth !== undefined) this.maxDiffCuQpDeltaDepth = data.maxDiffCuQpDeltaDepth;
      if (data.minMaxNumMergeCand !== undefined) this.minMaxNumMergeCand = data.minMaxNumMergeCand;
      if (data.maxMaxNumMergeCand !== undefined) this.maxMaxNumMergeCand = data.maxMaxNumMergeCand;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeH265CapabilitiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_H265_CAPABILITIES_EXT;
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

  set flags(value: VideoEncodeH265CapabilityFlagsEXT) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get inputModeFlags(): number {
    return this.#view.getUint32(20, LE);
  }

  set inputModeFlags(value: VideoEncodeH265InputModeFlagsEXT) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get outputModeFlags(): number {
    return this.#view.getUint32(24, LE);
  }

  set outputModeFlags(value: VideoEncodeH265OutputModeFlagsEXT) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get ctbSizes(): number {
    return this.#view.getUint32(28, LE);
  }

  set ctbSizes(value: VideoEncodeH265CtbSizeFlagsEXT) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get transformBlockSizes(): number {
    return this.#view.getUint32(32, LE);
  }

  set transformBlockSizes(value: VideoEncodeH265TransformBlockSizeFlagsEXT) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get maxPPictureL0ReferenceCount(): number {
    return this.#view.getUint8(36);
  }

  set maxPPictureL0ReferenceCount(value: number) {
    this.#view.setUint8(36, Number(value));
  }

  get maxBPictureL0ReferenceCount(): number {
    return this.#view.getUint8(37);
  }

  set maxBPictureL0ReferenceCount(value: number) {
    this.#view.setUint8(37, Number(value));
  }

  get maxL1ReferenceCount(): number {
    return this.#view.getUint8(38);
  }

  set maxL1ReferenceCount(value: number) {
    this.#view.setUint8(38, Number(value));
  }

  get maxSubLayersCount(): number {
    return this.#view.getUint8(39);
  }

  set maxSubLayersCount(value: number) {
    this.#view.setUint8(39, Number(value));
  }

  get minLog2MinLumaCodingBlockSizeMinus3(): number {
    return this.#view.getUint8(40);
  }

  set minLog2MinLumaCodingBlockSizeMinus3(value: number) {
    this.#view.setUint8(40, Number(value));
  }

  get maxLog2MinLumaCodingBlockSizeMinus3(): number {
    return this.#view.getUint8(41);
  }

  set maxLog2MinLumaCodingBlockSizeMinus3(value: number) {
    this.#view.setUint8(41, Number(value));
  }

  get minLog2MinLumaTransformBlockSizeMinus2(): number {
    return this.#view.getUint8(42);
  }

  set minLog2MinLumaTransformBlockSizeMinus2(value: number) {
    this.#view.setUint8(42, Number(value));
  }

  get maxLog2MinLumaTransformBlockSizeMinus2(): number {
    return this.#view.getUint8(43);
  }

  set maxLog2MinLumaTransformBlockSizeMinus2(value: number) {
    this.#view.setUint8(43, Number(value));
  }

  get minMaxTransformHierarchyDepthInter(): number {
    return this.#view.getUint8(44);
  }

  set minMaxTransformHierarchyDepthInter(value: number) {
    this.#view.setUint8(44, Number(value));
  }

  get maxMaxTransformHierarchyDepthInter(): number {
    return this.#view.getUint8(45);
  }

  set maxMaxTransformHierarchyDepthInter(value: number) {
    this.#view.setUint8(45, Number(value));
  }

  get minMaxTransformHierarchyDepthIntra(): number {
    return this.#view.getUint8(46);
  }

  set minMaxTransformHierarchyDepthIntra(value: number) {
    this.#view.setUint8(46, Number(value));
  }

  get maxMaxTransformHierarchyDepthIntra(): number {
    return this.#view.getUint8(47);
  }

  set maxMaxTransformHierarchyDepthIntra(value: number) {
    this.#view.setUint8(47, Number(value));
  }

  get maxDiffCuQpDeltaDepth(): number {
    return this.#view.getUint8(48);
  }

  set maxDiffCuQpDeltaDepth(value: number) {
    this.#view.setUint8(48, Number(value));
  }

  get minMaxNumMergeCand(): number {
    return this.#view.getUint8(49);
  }

  set minMaxNumMergeCand(value: number) {
    this.#view.setUint8(49, Number(value));
  }

  get maxMaxNumMergeCand(): number {
    return this.#view.getUint8(50);
  }

  set maxMaxNumMergeCand(value: number) {
    this.#view.setUint8(50, Number(value));
  }
}