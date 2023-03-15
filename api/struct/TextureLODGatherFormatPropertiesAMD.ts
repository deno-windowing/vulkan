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

export interface InitTextureLODGatherFormatPropertiesAMD {
  pNext?: AnyPointer;
  supportsTextureGatherLODBiasAMD?: Bool32;
}

export class TextureLODGatherFormatPropertiesAMD implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitTextureLODGatherFormatPropertiesAMD);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitTextureLODGatherFormatPropertiesAMD) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(TextureLODGatherFormatPropertiesAMD.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < TextureLODGatherFormatPropertiesAMD.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(TextureLODGatherFormatPropertiesAMD.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.supportsTextureGatherLODBiasAMD !== undefined) this.supportsTextureGatherLODBiasAMD = data.supportsTextureGatherLODBiasAMD;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, TextureLODGatherFormatPropertiesAMD.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.TEXTURE_LOD_GATHER_FORMAT_PROPERTIES_AMD;
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

  get supportsTextureGatherLODBiasAMD() {
    return this.#view.getUint32(16, LE);
  }

  set supportsTextureGatherLODBiasAMD(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }
}