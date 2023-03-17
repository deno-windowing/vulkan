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
import { ResolveModeFlags, Bool32 } from "../def.ts";

export interface InitPhysicalDeviceDepthStencilResolveProperties {
  pNext?: AnyPointer;
  supportedDepthResolveModes?: ResolveModeFlags;
  supportedStencilResolveModes?: ResolveModeFlags;
  independentResolveNone?: Bool32;
  independentResolve?: Bool32;
}

export class PhysicalDeviceDepthStencilResolveProperties implements BaseStruct {
  static size = 32;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceDepthStencilResolveProperties);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceDepthStencilResolveProperties) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceDepthStencilResolveProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceDepthStencilResolveProperties.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceDepthStencilResolveProperties.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.supportedDepthResolveModes !== undefined) this.supportedDepthResolveModes = data.supportedDepthResolveModes;
      if (data.supportedStencilResolveModes !== undefined) this.supportedStencilResolveModes = data.supportedStencilResolveModes;
      if (data.independentResolveNone !== undefined) this.independentResolveNone = data.independentResolveNone;
      if (data.independentResolve !== undefined) this.independentResolve = data.independentResolve;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceDepthStencilResolveProperties.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_DEPTH_STENCIL_RESOLVE_PROPERTIES;
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

  get supportedDepthResolveModes(): number {
    return this.#view.getUint32(16, LE);
  }

  set supportedDepthResolveModes(value: ResolveModeFlags) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get supportedStencilResolveModes(): number {
    return this.#view.getUint32(20, LE);
  }

  set supportedStencilResolveModes(value: ResolveModeFlags) {
    this.#view.setUint32(20, Number(value), LE);
  }

  get independentResolveNone(): number {
    return this.#view.getUint32(24, LE);
  }

  set independentResolveNone(value: Bool32) {
    this.#view.setUint32(24, Number(value), LE);
  }

  get independentResolve(): number {
    return this.#view.getUint32(28, LE);
  }

  set independentResolve(value: Bool32) {
    this.#view.setUint32(28, Number(value), LE);
  }
}