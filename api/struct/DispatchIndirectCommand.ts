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

export interface InitDispatchIndirectCommand {
  x?: number;
  y?: number;
  z?: number;
}

export class DispatchIndirectCommand implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDispatchIndirectCommand);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDispatchIndirectCommand) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DispatchIndirectCommand.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DispatchIndirectCommand.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DispatchIndirectCommand.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.x !== undefined) this.x = data.x;
      if (data.y !== undefined) this.y = data.y;
      if (data.z !== undefined) this.z = data.z;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DispatchIndirectCommand.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get x() {
    return this.#view.getUint32(0, LE);
  }

  set x(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get y() {
    return this.#view.getUint32(4, LE);
  }

  set y(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get z() {
    return this.#view.getUint32(8, LE);
  }

  set z(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }
}