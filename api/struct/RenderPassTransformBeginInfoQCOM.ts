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
import { StructureType, SurfaceTransformFlagBitsKHR } from "../enum.ts";

export interface InitRenderPassTransformBeginInfoQCOM {
  pNext?: AnyPointer;
  transform?: SurfaceTransformFlagBitsKHR;
}

export class RenderPassTransformBeginInfoQCOM implements BaseStruct {
  static size = 24;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitRenderPassTransformBeginInfoQCOM);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitRenderPassTransformBeginInfoQCOM) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(RenderPassTransformBeginInfoQCOM.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < RenderPassTransformBeginInfoQCOM.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(RenderPassTransformBeginInfoQCOM.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.transform !== undefined) this.transform = data.transform;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, RenderPassTransformBeginInfoQCOM.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.RENDER_PASS_TRANSFORM_BEGIN_INFO_QCOM;
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

  get transform(): number {
    return this.#view.getUint32(16, LE);
  }

  set transform(value: SurfaceTransformFlagBitsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }
}