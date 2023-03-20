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

export interface InitTransformMatrixKHR {
  matrix?: Float32Array;
}

export class TransformMatrixKHR implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitTransformMatrixKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitTransformMatrixKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(TransformMatrixKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < TransformMatrixKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(TransformMatrixKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.matrix !== undefined) this.matrix = data.matrix;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, TransformMatrixKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get matrix(): Float32Array {
    return new Float32Array(this.#data.buffer, this.#data.byteOffset + 0, 3);
  }

  set matrix(value: Float32Array) {
    this.#data.set(new Uint8Array(value.buffer), 0);
  }
}