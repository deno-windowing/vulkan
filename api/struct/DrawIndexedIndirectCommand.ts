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

export interface InitDrawIndexedIndirectCommand {
  indexCount?: number;
  instanceCount?: number;
  firstIndex?: number;
  vertexOffset?: number;
  firstInstance?: number;
}

export class DrawIndexedIndirectCommand implements BaseStruct {
  static size = 20;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitDrawIndexedIndirectCommand);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitDrawIndexedIndirectCommand) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(DrawIndexedIndirectCommand.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < DrawIndexedIndirectCommand.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(DrawIndexedIndirectCommand.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.indexCount !== undefined) this.indexCount = data.indexCount;
      if (data.instanceCount !== undefined) this.instanceCount = data.instanceCount;
      if (data.firstIndex !== undefined) this.firstIndex = data.firstIndex;
      if (data.vertexOffset !== undefined) this.vertexOffset = data.vertexOffset;
      if (data.firstInstance !== undefined) this.firstInstance = data.firstInstance;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, DrawIndexedIndirectCommand.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get indexCount(): number {
    return this.#view.getUint32(0, LE);
  }

  set indexCount(value: number) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get instanceCount(): number {
    return this.#view.getUint32(4, LE);
  }

  set instanceCount(value: number) {
    this.#view.setUint32(4, Number(value), LE);
  }

  get firstIndex(): number {
    return this.#view.getUint32(8, LE);
  }

  set firstIndex(value: number) {
    this.#view.setUint32(8, Number(value), LE);
  }

  get vertexOffset(): number {
    return this.#view.getInt32(12, LE);
  }

  set vertexOffset(value: number) {
    this.#view.setInt32(12, Number(value), LE);
  }

  get firstInstance(): number {
    return this.#view.getUint32(16, LE);
  }

  set firstInstance(value: number) {
    this.#view.setUint32(16, Number(value), LE);
  }
}