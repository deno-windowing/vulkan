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
import { StructureType, RayTracingShaderGroupTypeKHR } from "../enum.ts";

export interface InitRayTracingShaderGroupCreateInfoNV {
  pNext?: AnyPointer;
  type?: RayTracingShaderGroupTypeKHR;
  generalShader?: number;
  closestHitShader?: number;
  anyHitShader?: number;
  intersectionShader?: number;
}

export class RayTracingShaderGroupCreateInfoNV implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitRayTracingShaderGroupCreateInfoNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitRayTracingShaderGroupCreateInfoNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(RayTracingShaderGroupCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < RayTracingShaderGroupCreateInfoNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(RayTracingShaderGroupCreateInfoNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.type !== undefined) this.type = data.type;
      if (data.generalShader !== undefined) this.generalShader = data.generalShader;
      if (data.closestHitShader !== undefined) this.closestHitShader = data.closestHitShader;
      if (data.anyHitShader !== undefined) this.anyHitShader = data.anyHitShader;
      if (data.intersectionShader !== undefined) this.intersectionShader = data.intersectionShader;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, RayTracingShaderGroupCreateInfoNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.RAY_TRACING_SHADER_GROUP_CREATE_INFO_NV;
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

  get type(): number {
    return this.#view.getUint32(16, LE);
  }

  set type(value: RayTracingShaderGroupTypeKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get generalShader(): number {
    return this.#view.getUint32(20, LE);
  }

  set generalShader(value: number) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get closestHitShader(): number {
    return this.#view.getUint32(24, LE);
  }

  set closestHitShader(value: number) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get anyHitShader(): number {
    return this.#view.getUint32(28, LE);
  }

  set anyHitShader(value: number) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get intersectionShader(): number {
    return this.#view.getUint32(32, LE);
  }

  set intersectionShader(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }
}