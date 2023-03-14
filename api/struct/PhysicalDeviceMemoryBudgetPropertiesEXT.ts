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
import { DeviceSize } from "../def.ts";

export interface InitPhysicalDeviceMemoryBudgetPropertiesEXT {
  pNext?: AnyPointer;
  heapBudget?: BigUint64Array;
  heapUsage?: BigUint64Array;
}

export class PhysicalDeviceMemoryBudgetPropertiesEXT implements BaseStruct {
  static size = 272;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitPhysicalDeviceMemoryBudgetPropertiesEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitPhysicalDeviceMemoryBudgetPropertiesEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(PhysicalDeviceMemoryBudgetPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < PhysicalDeviceMemoryBudgetPropertiesEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(PhysicalDeviceMemoryBudgetPropertiesEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.heapBudget !== undefined) this.heapBudget = data.heapBudget;
      if (data.heapUsage !== undefined) this.heapUsage = data.heapUsage;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, PhysicalDeviceMemoryBudgetPropertiesEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.PHYSICAL_DEVICE_MEMORY_BUDGET_PROPERTIES_EXT;
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

  get heapBudget() {
    return new BigUint64Array(this.#data.buffer, this.#data.byteOffset + 16, 16);
  }

  set heapBudget(value: BigUint64Array) {
    this.#data.set(new Uint8Array(value.buffer), 16);
  }

  get heapUsage() {
    return new BigUint64Array(this.#data.buffer, this.#data.byteOffset + 144, 16);
  }

  set heapUsage(value: BigUint64Array) {
    this.#data.set(new Uint8Array(value.buffer), 144);
  }
}