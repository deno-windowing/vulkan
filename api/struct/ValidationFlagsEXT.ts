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
import { StructureType, ValidationCheckEXT } from "../enum.ts";

export interface InitValidationFlagsEXT {
  pNext?: AnyPointer;
  disabledValidationCheckCount?: number;
  pDisabledValidationChecks?: AnyPointer;
}

export class ValidationFlagsEXT implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitValidationFlagsEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitValidationFlagsEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(ValidationFlagsEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < ValidationFlagsEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(ValidationFlagsEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.disabledValidationCheckCount !== undefined) this.disabledValidationCheckCount = data.disabledValidationCheckCount;
      if (data.pDisabledValidationChecks !== undefined) this.pDisabledValidationChecks = data.pDisabledValidationChecks;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, ValidationFlagsEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.VALIDATION_FLAGS_EXT;
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

  get disabledValidationCheckCount(): number {
    return this.#view.getUint32(16, LE);
  }

  set disabledValidationCheckCount(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get pDisabledValidationChecks(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set pDisabledValidationChecks(value: AnyPointer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }
}