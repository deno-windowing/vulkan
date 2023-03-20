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
import { VideoSessionParametersCreateFlagsKHR, VideoSessionParametersKHR, VideoSessionKHR } from "../def.ts";

export interface InitVideoSessionParametersCreateInfoKHR {
  pNext?: AnyPointer;
  flags?: VideoSessionParametersCreateFlagsKHR;
  videoSessionParametersTemplate?: VideoSessionParametersKHR;
  videoSession?: VideoSessionKHR;
}

export class VideoSessionParametersCreateInfoKHR implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitVideoSessionParametersCreateInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitVideoSessionParametersCreateInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(VideoSessionParametersCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < VideoSessionParametersCreateInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(VideoSessionParametersCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.videoSessionParametersTemplate !== undefined) this.videoSessionParametersTemplate = data.videoSessionParametersTemplate;
      if (data.videoSession !== undefined) this.videoSession = data.videoSession;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, VideoSessionParametersCreateInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VIDEO_SESSION_PARAMETERS_CREATE_INFO_KHR;
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

  set flags(value: VideoSessionParametersCreateFlagsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get videoSessionParametersTemplate(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set videoSessionParametersTemplate(value: VideoSessionParametersKHR) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get videoSession(): Deno.PointerValue {
    return pointerFromView(this.#view, 32, LE);
  }

  set videoSession(value: VideoSessionKHR) {
    this.#view.setBigUint64(32, BigInt(anyPointer(value)), LE);
  }
}