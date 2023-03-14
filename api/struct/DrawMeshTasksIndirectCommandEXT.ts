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

export interface InitDrawMeshTasksIndirectCommandEXT {
  groupCountX?: number;
  groupCountY?: number;
  groupCountZ?: number;
}

export class DrawMeshTasksIndirectCommandEXT implements BaseStruct {
  static size = 12;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDrawMeshTasksIndirectCommandEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDrawMeshTasksIndirectCommandEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DrawMeshTasksIndirectCommandEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DrawMeshTasksIndirectCommandEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DrawMeshTasksIndirectCommandEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.groupCountX !== undefined) this.groupCountX = data.groupCountX;
      if (data.groupCountY !== undefined) this.groupCountY = data.groupCountY;
      if (data.groupCountZ !== undefined) this.groupCountZ = data.groupCountZ;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DrawMeshTasksIndirectCommandEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get groupCountX() {
    return this.#view.getUint32(0, LE);
  }

  set groupCountX(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get groupCountY() {
    return this.#view.getUint32(4, LE);
  }

  set groupCountY(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get groupCountZ() {
    return this.#view.getUint32(8, LE);
  }

  set groupCountZ(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }
}