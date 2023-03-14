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
import {Rect2D} from "./Rect2D.ts";
import { StructureType, SurfaceTransformFlagBitsKHR } from "../enum.ts";

export interface InitCommandBufferInheritanceRenderPassTransformInfoQCOM {
  pNext?: AnyPointer;
  transform?: SurfaceTransformFlagBitsKHR;
  renderArea?: Rect2D;
}

export class CommandBufferInheritanceRenderPassTransformInfoQCOM implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitCommandBufferInheritanceRenderPassTransformInfoQCOM);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitCommandBufferInheritanceRenderPassTransformInfoQCOM) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(CommandBufferInheritanceRenderPassTransformInfoQCOM.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < CommandBufferInheritanceRenderPassTransformInfoQCOM.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(CommandBufferInheritanceRenderPassTransformInfoQCOM.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.transform !== undefined) this.transform = data.transform;
      if (data.renderArea !== undefined) this.renderArea = data.renderArea;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, CommandBufferInheritanceRenderPassTransformInfoQCOM.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.COMMAND_BUFFER_INHERITANCE_RENDER_PASS_TRANSFORM_INFO_QCOM;
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

  get transform() {
    return this.#view.getUint32(16, LE);
  }

  set transform(value: SurfaceTransformFlagBitsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get renderArea() {
    return new Rect2D(this.#data.subarray(20, 20 + Rect2D.size));
  }

  set renderArea(value: Rect2D) {
    if (value[BUFFER].byteLength < Rect2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 20);
  }
}