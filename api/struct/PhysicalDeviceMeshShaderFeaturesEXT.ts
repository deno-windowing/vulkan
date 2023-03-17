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
import { Bool32 } from "../def.ts";

export interface InitPhysicalDeviceMeshShaderFeaturesEXT {
  pNext?: AnyPointer;
  taskShader?: Bool32;
  meshShader?: Bool32;
  multiviewMeshShader?: Bool32;
  primitiveFragmentShadingRateMeshShader?: Bool32;
  meshShaderQueries?: Bool32;
}

export class PhysicalDeviceMeshShaderFeaturesEXT implements BaseStruct {
  static size = 40;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceMeshShaderFeaturesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceMeshShaderFeaturesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceMeshShaderFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceMeshShaderFeaturesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceMeshShaderFeaturesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.taskShader !== undefined) this.taskShader = data.taskShader;
      if (data.meshShader !== undefined) this.meshShader = data.meshShader;
      if (data.multiviewMeshShader !== undefined) this.multiviewMeshShader = data.multiviewMeshShader;
      if (data.primitiveFragmentShadingRateMeshShader !== undefined) this.primitiveFragmentShadingRateMeshShader = data.primitiveFragmentShadingRateMeshShader;
      if (data.meshShaderQueries !== undefined) this.meshShaderQueries = data.meshShaderQueries;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceMeshShaderFeaturesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_MESH_SHADER_FEATURES_EXT;
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

  get taskShader(): number {
    return this.#view.getUint32(16, LE);
  }

  set taskShader(value: Bool32) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get meshShader(): number {
    return this.#view.getUint32(20, LE);
  }

  set meshShader(value: Bool32) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get multiviewMeshShader(): number {
    return this.#view.getUint32(24, LE);
  }

  set multiviewMeshShader(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get primitiveFragmentShadingRateMeshShader(): number {
    return this.#view.getUint32(28, LE);
  }

  set primitiveFragmentShadingRateMeshShader(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }

  get meshShaderQueries(): number {
    return this.#view.getUint32(32, LE);
  }

  set meshShaderQueries(value: Bool32) {
    this.#view.setUint32(32, Number(value), LE);
  }
}