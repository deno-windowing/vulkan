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

export interface InitDrawIndirectCommand {
  vertexCount?: number;
  instanceCount?: number;
  firstVertex?: number;
  firstInstance?: number;
}

export class DrawIndirectCommand implements BaseStruct {
  static size = 16;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDrawIndirectCommand);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDrawIndirectCommand) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DrawIndirectCommand.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DrawIndirectCommand.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DrawIndirectCommand.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.vertexCount !== undefined) this.vertexCount = data.vertexCount;
      if (data.instanceCount !== undefined) this.instanceCount = data.instanceCount;
      if (data.firstVertex !== undefined) this.firstVertex = data.firstVertex;
      if (data.firstInstance !== undefined) this.firstInstance = data.firstInstance;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DrawIndirectCommand.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get vertexCount(): number {
    return this.#view.getUint32(0, LE);
  }

  set vertexCount(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get instanceCount(): number {
    return this.#view.getUint32(4, LE);
  }

  set instanceCount(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get firstVertex(): number {
    return this.#view.getUint32(8, LE);
  }

  set firstVertex(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get firstInstance(): number {
    return this.#view.getUint32(12, LE);
  }

  set firstInstance(value: number) {
    this.#view.setUint32(12, Number(value), LE);
  }
}