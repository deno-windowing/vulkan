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
import { CommandBuffer } from "../def.ts";

export interface InitCommandBufferSubmitInfo {
  pNext?: AnyPointer;
  commandBuffer?: CommandBuffer;
  deviceMask?: number;
}

export class CommandBufferSubmitInfo implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCommandBufferSubmitInfo);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCommandBufferSubmitInfo) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CommandBufferSubmitInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CommandBufferSubmitInfo.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CommandBufferSubmitInfo.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.commandBuffer !== undefined) this.commandBuffer = data.commandBuffer;
      if (data.deviceMask !== undefined) this.deviceMask = data.deviceMask;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CommandBufferSubmitInfo.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.COMMAND_BUFFER_SUBMIT_INFO;
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

  get commandBuffer(): Deno.PointerValue {
    return pointerFromView(this.#view, 16, LE);
  }

  set commandBuffer(value: CommandBuffer) {
    this.#view.setBigUint64(16, BigInt(anyPointer(value)), LE);
  }

  get deviceMask(): number {
    return this.#view.getUint32(24, LE);
  }

  set deviceMask(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }
}