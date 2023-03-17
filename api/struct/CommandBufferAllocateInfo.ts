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
import { StructureType, CommandBufferLevel } from "../enum.ts";
import { CommandPool } from "../def.ts";

export interface InitCommandBufferAllocateInfo {
  pNext?: AnyPointer;
  commandPool?: CommandPool;
  level?: CommandBufferLevel;
  commandBufferCount?: number;
}

export class CommandBufferAllocateInfo implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCommandBufferAllocateInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCommandBufferAllocateInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CommandBufferAllocateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CommandBufferAllocateInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CommandBufferAllocateInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.commandPool !== undefined) this.commandPool = data.commandPool;
      if (data.level !== undefined) this.level = data.level;
      if (data.commandBufferCount !== undefined) this.commandBufferCount = data.commandBufferCount;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CommandBufferAllocateInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.COMMAND_BUFFER_ALLOCATE_INFO;
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

  get commandPool(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set commandPool(value: CommandPool) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get level(): number {
    return this.#view.getUint32(24, LE);
  }

  set level(value: CommandBufferLevel) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get commandBufferCount(): number {
    return this.#view.getUint32(28, LE);
  }

  set commandBufferCount(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }
}