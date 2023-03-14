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
import { Bool32 } from "../def.ts";

export interface InitVideoEncodeH265EmitPictureParametersInfoEXT {
  pNext?: AnyPointer;
  vpsId?: number;
  spsId?: number;
  emitVpsEnable?: Bool32;
  emitSpsEnable?: Bool32;
  ppsIdEntryCount?: number;
  ppsIdEntries?: AnyPointer;
}

export class VideoEncodeH265EmitPictureParametersInfoEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoEncodeH265EmitPictureParametersInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoEncodeH265EmitPictureParametersInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoEncodeH265EmitPictureParametersInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoEncodeH265EmitPictureParametersInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoEncodeH265EmitPictureParametersInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.vpsId !== undefined) this.vpsId = data.vpsId;
      if (data.spsId !== undefined) this.spsId = data.spsId;
      if (data.emitVpsEnable !== undefined) this.emitVpsEnable = data.emitVpsEnable;
      if (data.emitSpsEnable !== undefined) this.emitSpsEnable = data.emitSpsEnable;
      if (data.ppsIdEntryCount !== undefined) this.ppsIdEntryCount = data.ppsIdEntryCount;
      if (data.ppsIdEntries !== undefined) this.ppsIdEntries = data.ppsIdEntries;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoEncodeH265EmitPictureParametersInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_ENCODE_H265_EMIT_PICTURE_PARAMETERS_INFO_EXT;
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

  get vpsId() {
    return this.#view.getUint8(16);
  }

  set vpsId(value: number) {
    this.#view.setUint8(16, Number(value));
  }

  get spsId() {
    return this.#view.getUint8(17);
  }

  set spsId(value: number) {
    this.#view.setUint8(17, Number(value));
  }

  get emitVpsEnable() {
    return this.#view.getUint32(20, LE);
  }

  set emitVpsEnable(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get emitSpsEnable() {
    return this.#view.getUint32(24, LE);
  }

  set emitSpsEnable(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get ppsIdEntryCount() {
    return this.#view.getUint32(28, LE);
  }

  set ppsIdEntryCount(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get ppsIdEntries() {
    return pointerFromView(this.#view, 32, LE);
  }

  set ppsIdEntries(value: AnyPointer) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}