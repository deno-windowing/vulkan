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

export interface InitDrawMeshTasksIndirectCommandNV {
  taskCount?: number;
  firstTask?: number;
}

export class DrawMeshTasksIndirectCommandNV implements BaseStruct {
  static size = 8;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDrawMeshTasksIndirectCommandNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDrawMeshTasksIndirectCommandNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DrawMeshTasksIndirectCommandNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DrawMeshTasksIndirectCommandNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DrawMeshTasksIndirectCommandNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.taskCount !== undefined) this.taskCount = data.taskCount;
      if (data.firstTask !== undefined) this.firstTask = data.firstTask;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DrawMeshTasksIndirectCommandNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get taskCount() {
    return this.#view.getUint32(0, LE);
  }

  set taskCount(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get firstTask() {
    return this.#view.getUint32(4, LE);
  }

  set firstTask(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }
}