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

export interface InitShaderModuleIdentifierEXT {
  pNext?: AnyPointer;
  identifierSize?: number;
  identifier?: Uint8Array;
}

export class ShaderModuleIdentifierEXT implements BaseStruct {
  static size = 56;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitShaderModuleIdentifierEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitShaderModuleIdentifierEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ShaderModuleIdentifierEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ShaderModuleIdentifierEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ShaderModuleIdentifierEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.identifierSize !== undefined) this.identifierSize = data.identifierSize;
      if (data.identifier !== undefined) this.identifier = data.identifier;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ShaderModuleIdentifierEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SHADER_MODULE_IDENTIFIER_EXT;
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

  get identifierSize() {
    return this.#view.getUint32(16, LE);
  }

  set identifierSize(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get identifier() {
    return new Uint8Array(this.#data.buffer, this.#data.byteOffset + 20, 32);
  }

  set identifier(value: Uint8Array) {
    this.#data.set(new Uint8Array(value.buffer), 20);
  }
}