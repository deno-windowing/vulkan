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

export interface InitShaderResourceUsageAMD {
  numUsedVgprs?: number;
  numUsedSgprs?: number;
  ldsSizePerLocalWorkGroup?: number;
  ldsUsageSizeInBytes?: number | bigint;
  scratchMemUsageInBytes?: number | bigint;
}

export class ShaderResourceUsageAMD implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitShaderResourceUsageAMD);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitShaderResourceUsageAMD) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ShaderResourceUsageAMD.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ShaderResourceUsageAMD.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ShaderResourceUsageAMD.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.numUsedVgprs !== undefined) this.numUsedVgprs = data.numUsedVgprs;
      if (data.numUsedSgprs !== undefined) this.numUsedSgprs = data.numUsedSgprs;
      if (data.ldsSizePerLocalWorkGroup !== undefined) this.ldsSizePerLocalWorkGroup = data.ldsSizePerLocalWorkGroup;
      if (data.ldsUsageSizeInBytes !== undefined) this.ldsUsageSizeInBytes = data.ldsUsageSizeInBytes;
      if (data.scratchMemUsageInBytes !== undefined) this.scratchMemUsageInBytes = data.scratchMemUsageInBytes;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ShaderResourceUsageAMD.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get numUsedVgprs() {
    return this.#view.getUint32(0, LE);
  }

  set numUsedVgprs(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get numUsedSgprs() {
    return this.#view.getUint32(4, LE);
  }

  set numUsedSgprs(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get ldsSizePerLocalWorkGroup() {
    return this.#view.getUint32(8, LE);
  }

  set ldsSizePerLocalWorkGroup(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get ldsUsageSizeInBytes() {
    return this.#view.getBigUint64(16, LE);
  }

  set ldsUsageSizeInBytes(value: number | bigint) {
    this.#view.setBigUint64(16, BigInt(value), LE);
  }

  get scratchMemUsageInBytes() {
    return this.#view.getBigUint64(24, LE);
  }

  set scratchMemUsageInBytes(value: number | bigint) {
    this.#view.setBigUint64(24, BigInt(value), LE);
  }
}